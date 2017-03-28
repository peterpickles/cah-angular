angular.module('ChatCtrls', ['Services'])
.controller('JoinCtrl', ['$location', '$scope', '$localStorage', 'socket',  function($location, $scope, $localStorage, socket){
  $scope.name = '';
  var nickname;

  $scope.join = function(){
    nickname = $scope.name;
    $localStorage.nickname = nickname;

    socket.emit('join', {
      nickname: nickname
    });

    $location.path('/main2')
  } 
}])
.controller('MainCtrl', ['$scope', '$localStorage', 'socket', 'lodash', 'WhiteCardAPI', function($scope, $localStorage, socket, lodash, WhiteCardAPI){
        $scope.message = '';
        $scope.messages = [];
        $scope.users = [];
        $scope.likes = [];
        $scope.whiteCards = [];
        $scope.selectedAnswer;
        $scope.submittedAnswers = [];
        $scope.blackCard = [];
        $scope.myCards = [];
        $scope.mynickname = $localStorage.nickname;
        var nickname = $scope.mynickname;
        
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


        $scope.chooseCard = function(index) {
            $scope.selectedAnswer = index;
            console.log($scope.selectedAnswer)
        }

        socket.emit('get-users');

        socket.on('all-users', function(data) {
            console.log(data);
            $scope.users = data.filter(function(item){
                return item.nickname !== nickname;
            });
        });

        socket.on('message-received', function(data) {
          $scope.messages.push(data);
        });

        socket.on('user-liked', function(data) {
            console.log(data);
            $scope.likes.push(data.from);
        });

        $scope.sendMessage = function(data) {
            var newMessage = {
                message: $scope.message,
                from: $scope.mynickname
            };
            socket.emit('send-message', newMessage);
            $scope.message = '';
            //$scope.messages.push(newMessage);
        };

        $scope.submitAnswer = function() {
            if(!$scope.selectedAnswer.isNaN) {
                socket.emit('send-card', $scope.myCards[$scope.selectedAnswer]);
                $scope.myCards.splice($scope.selectedAnswer, 1)
                $scope.selectedAnswer = null;
                var newCard = shuffleArray($scope.whiteCards, 1)[0];
                $scope.myCards.push(newCard);
                $localStorage.cards = $scope.myCards;
            }
        }
       

         socket.on('card-received', function(data) {
          $scope.submittedAnswers.push(data);
          console.log($scope.submittedAnswers)
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
}])

