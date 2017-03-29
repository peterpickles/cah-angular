angular.module('ChatCtrls', ['Services'])
.controller('JoinCtrl', ['$location', '$scope', '$localStorage', 'socket', '$state',  function($location, $scope, $localStorage, socket, $state){
  $scope.playerInput = '';
  $scope.playerList = [];
  var nickname;

  socket.emit('get-users');

  socket.on('all-users', function(data){
    $scope.playerList = data;
  });

  $scope.$watchCollection("playerList", function(newVal, oldVal){
    $scope.errorMessage = "";
    if(newVal.length < 3){
      $scope.errorMessage = "Need at least 3 players";
    } else if (newVal.length > 10){
      $scope.errorMessage = "Too many players";
    }
  });

  $scope.join = function(){
    if($scope.playerInput !==""){
      nickname = $scope.playerInput;
      $localStorage.nickname = nickname;
      $localStorage.score = 0;

      socket.emit('join', {
        nickname: nickname
      });
      $scope.playerInput = "";
    } else {
      $scope.errorMessage = "Username can't be blank";
    }
  }


  $scope.startGame = function(){
    // $location.path("/main2");
    $state.go("main2");
  }

  $scope.assignAnswers = function() {
    // sharedProperties.setNumPlayers($scope.playerList.length);
    // sharedProperties.setPlayerList($scope.playerList);
  };

}])
.controller('MainCtrl', ['$scope', '$localStorage', 'socket', 'lodash', 'WhiteCardAPI', 'BlackCardAPI', function($scope, $localStorage, socket, lodash, WhiteCardAPI, BlackCardAPI){
        $scope.message = '';
        $scope.messages = [];
        $scope.users = [];
        $scope.likes = [];
        $scope.roundWinner = '';
        $scope.roundWinnerIndex = null;
        $scope.czarPicking = false;
        $scope.whiteCards = [];
        $scope.blackCards = [];
        $scope.selectedAnswer;
        $scope.submittedAnswers = [];
        $scope.blackCard = {};
        $scope.myCards = [];
        $scope.cardCzar = 0;
        $scope.cardCzarIndex = null;
        $scope.round = -1;
        $scope.myscore = $localStorage.score;
        $scope.mynickname = $localStorage.nickname;
        var nickname = $scope.mynickname;

        socket.emit('get-users');

        socket.on('all-users', function(data) {
            $scope.users = data;
        });

        BlackCardAPI.getCards().then(function success(response){
          $scope.blackCards = response;
        }, function error(err){
          console.log(err);
        });

        WhiteCardAPI.getCards().then(function success(response){
            $scope.whiteCards = response;
            if (!$localStorage.cards) {
                $localStorage.cards = shuffleArray($scope.whiteCards, 2);
                $scope.myCards = $localStorage.cards;
            } else {
                $scope.myCards = $localStorage.cards;
            }
        }, function error(err){
            console.log(err);
        });

        $scope.drawBlackCard = function(){
          var ind = pickCardIndex($scope.blackCards.length)
          var card = $scope.blackCards.splice(ind, 1)[0];
          czarIndex = $scope.cardCzarIndex;
          if($scope.cardCzar === 0 || $scope.cardCzar === $scope.users[$scope.users.length-1].nickname){
            czarIndex = 0;
          } else {
            czarIndex++;
          }
          card.cardCzar = $scope.users[czarIndex].nickname;
          card.cardCzarIndex = czarIndex;
          socket.emit('send-black-card', card);
          socket.emit('new-round');
        }
        

        socket.on('black-card-received', function(data){
          $scope.blackCard = data;
          $scope.czarPicking = false;
          $scope.cardCzar = data.cardCzar;
          $scope.cardCzarIndex = data.cardCzarIndex;
        });

        socket.on('new-round-received', function(){
          //reset data
          $scope.round++;
          $scope.roundWinner = '';
          $scope.roundWinnerIndex = null;
          $scope.submittedAnswers = [];
        });

        $scope.chooseCard = function(index) {
          if($scope.mynickname !== $scope.cardCzar){
            $scope.selectedAnswer = index;
          }
        }

        socket.on('message-received', function(data) {
          $scope.messages.push(data);
        });

        socket.on('user-liked', function(data) {
            console.log(data);
            $scope.likes.push(data.from);
        });

        $scope.sendMessage = function(data) {
          if($scope.message != "" && $scope.message){
            var newMessage = {
                message: $scope.message,
                from: $scope.mynickname
            };
            socket.emit('send-message', newMessage);
            $scope.message = '';
            //$scope.messages.push(newMessage);
          }
        };

        $scope.submitAnswer = function() {
            if(!$scope.selectedAnswer.isNaN) {
              var card = $scope.myCards[$scope.selectedAnswer];
              card.nickname = $scope.mynickname;
              socket.emit('send-card', card);
              $scope.myCards.splice($scope.selectedAnswer, 1)
              $scope.selectedAnswer = null;
              var newCard = shuffleArray($scope.whiteCards, 1)[0];
              $scope.myCards.push(newCard);
              $localStorage.cards = $scope.myCards;
          }
        }

         socket.on('card-received', function(data) {
          $scope.submittedAnswers.push(data);
        });

        $scope.$watchCollection('submittedAnswers', function(newAnswers, oldAnswers){
          if(newAnswers.length === $scope.users.length-1){
            $scope.czarPicking = true;
          //   var obj = {
          //     submittedAnswers: shuffleArray($scope.submittedAnswers, $scope.submittedAnswers.length)
          //   }
          //   console.log(obj);
          //  socket.emit('send-answers', obj);
          }
        });

        socket.on('answers-received', function(data){
          $scope.submittedAnswers = data.submittedAnswers;
        })

        $scope.chooseWinningcard = function(index){
          if($scope.mynickname === $scope.cardCzar){
            $scope.roundWinnerIndex = index;
          }
        }

        $scope.selectWinningAnswer = function(){
          if($scope.mynickname === $scope.cardCzar){
            if($scope.roundWinnerIndex !== null){
              var winner = {
                roundWinnerIndex: $scope.roundWinnerIndex,
                roundWinner: $scope.submittedAnswers[$scope.roundWinnerIndex].nickname
              }
              socket.emit('send-winner', winner);
            }
          }
        }

        socket.on('winner-received', function(data){
          $scope.roundWinnerIndex = data.roundWinnerIndex;
          $scope.roundWinner = data.roundWinner;
          if($scope.roundWinner === $scope.mynickname){
            $scope.myscore++;
          }
        });


        $scope.sendLike = function(user) {
            console.log(user);
            var id = lodash.get(user,'socketid');
            var likeObj = {
                from: nickname,
                like: id
            };
            socket.emit('send-like', likeObj);
        };

        function shuffleArray(arr, limit) {
            if(limit > arr.length) {
            limit = arr.length;
            }
            var shuffled = arr.sort(function() {
            return 0.5 - Math.random();
            });

            arr = shuffled;
            return arr.splice(0, limit);
        }

        function pickCardIndex(size){
          return Math.floor(Math.random() * size);
        }
}])
