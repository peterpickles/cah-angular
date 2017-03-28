// mongo  127.0.0.1/cardsagainsthumanity pop-db.js
db.decks.insert({
  "name": "First Expansion",
  "whiteCards": [],
  "blackCards" : []
})

var blackCardsFirstExpansion = [
  { "question": "And I would have gotten away with it, too, if it hadn’t been for ______!",     "blanks": 1,     "pack": db.decks.findOne()._id},
  { "question": "An international tribunal has found ______ guilty of ______.",     "blanks": 2,     "pack": db.decks.findOne()._id},
  { "question": "He who controls ______ controls the world.",     "blanks": 1,     "pack": db.decks.findOne()._id},
  { "question": "In a pinch, ______ can be a suitable substitute for ______.",     "blanks": 2,     "pack": db.decks.findOne()._id},
  { "question": "In his new self-produced album, Kanye West raps over the sounds of ______.",     "blanks": 1,     "pack": db.decks.findOne()._id},
  { "question": "In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "In Rome, there are whisperings that the Vatican has a secret room devoted to ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "In the distant future, historians will agree that ______ marked the beginning of America’s decline.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Michael Bay’s new three-hour action epic pits ______ against ______.", "blanks": 2, "pack": db.decks.findOne()._id },
  { "question": "My plan for world domination begins with ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Next season on Man vs, Wild, Bear Grylls must survive the depths of the Amazon with only ______ and his wits.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Science will never explain ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Science will never explain the origin of ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "The CIA now interrogates enemy agents by repeatedly subjecting them to ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "The secret to a lasting marriage is communication, communication, and ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "The socialist governments of Scandinavia have declared that access to ______ is a basic human right.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "This season on Man vs. Wild, Bear Grylls must survive in the depths of the", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "Amazon with only ______ and his wits.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "What brought the orgy to a grinding halt?", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "What has been making life difficult at the nudist colony?", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "What’s the gift that keeps on giving?", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "When all else fails, I can always masturbate to ______.", "blanks": 1, "pack": db.decks.findOne()._id },
  { "question": "When I pooped, what came out of my butt?", "blanks": 1, "pack": db.decks.findOne()._id }
]

db.blackcards.insert(blackCardsFirstExpansion)

var whiteCardsFirstExpansion = [
  { "answer": "Savagely beating a mascot", "pack" : db.decks.findOne()._id},
  { "answer": "Scrotum tickling.", "pack" : db.decks.findOne()._id},
  { "answer": "Sexual humiliation.", "pack" : db.decks.findOne()._id},
  { "answer": "Sexy Siamese twins.", "pack" : db.decks.findOne()._id},
  { "answer": "Shaft.", "pack" : db.decks.findOne()._id},
  { "answer": "Slow motion.", "pack" : db.decks.findOne()._id},
  { "answer": "Space muffins.", "pack" : db.decks.findOne()._id},
  { "answer": "Statistically validated stereotypes.", "pack" : db.decks.findOne()._id},
  { "answer": "Stockholm syndrome", "pack" : db.decks.findOne()._id},
  { "answer": "Sudden Poop Explosion Disease.", "pack" : db.decks.findOne()._id},
  { "answer": "Suicidal thoughts.", "pack" : db.decks.findOne()._id},
  { "answer": "Syphilitic insanity", "pack" : db.decks.findOne()._id},
  { "answer": "The boners of the elderly.", "pack" : db.decks.findOne()._id},
  { "answer": "The economy.", "pack" : db.decks.findOne()._id},
  { "answer": "The Fanta® girls.", "pack" : db.decks.findOne()._id},
  { "answer": "The four arms of Vishnu.", "pack" : db.decks.findOne()._id},
  { "answer": "The gulags.", "pack" : db.decks.findOne()._id},
  { "answer": "The harsh light of day.", "pack" : db.decks.findOne()._id},
  { "answer": "The hiccups.", "pack" : db.decks.findOne()._id},
  { "answer": "The ooze", "pack" : db.decks.findOne()._id},
  { "answer": "The shambling corpse of Larry King.", "pack" : db.decks.findOne()._id},
  { "answer": "This guy!", "pack" : db.decks.findOne()._id},
  { "answer": "Tripping balls.", "pack" : db.decks.findOne()._id},
  { "answer": "Walking in on Dad peeing into Mom’s mouth.", "pack" : db.decks.findOne()._id},
  { "answer": "Words, words, words.", "pack" : db.decks.findOne()._id},
  { "answer": "Zeus’s sexual appetites.", "pack" : db.decks.findOne()._id},
  { "answer": "Neil Patrick Harris.", "pack" : db.decks.findOne()._id},
  { "answer": "NOOOOOOOOO!!!", "pack" : db.decks.findOne()._id},
  { "answer": "Nubile slave boys.", "pack" : db.decks.findOne()._id},
  { "answer": "Ominous background music.", "pack" : db.decks.findOne()._id},
  { "answer": "One thousand Slim Jims.", "pack" : db.decks.findOne()._id},
  { "answer": "Overpowering your father.", "pack" : db.decks.findOne()._id},
  { "answer": "Panty raids.", "pack" : db.decks.findOne()._id},
  { "answer": "Pistol-whipping a hostage.", "pack" : db.decks.findOne()._id},
  { "answer": "Quiche.", "pack" : db.decks.findOne()._id},
  { "answer": "Quivering jowls.", "pack" : db.decks.findOne()._id},
  { "answer": "Revenge fucking.", "pack" : db.decks.findOne()._id},
  { "answer": "Ripping into a man’s chest and pulling out his still-beating heart.", "pack" : db.decks.findOne()._id},
  { "answer": "Ryan Gosling riding in on a white horse.", "pack" : db.decks.findOne()._id},
  { "answer": "Salvia.", "pack" : db.decks.findOne()._id},
  { "answer": "Sanding off a man’s nose.", "pack" : db.decks.findOne()._id},
  { "answer": "Santa Claus.", "pack" : db.decks.findOne()._id},
  { "answer": "Good grammar.", "pack" : db.decks.findOne()._id},
  { "answer": "having a penis", "pack" : db.decks.findOne()._id},
  { "answer": "Hipsters.", "pack" : db.decks.findOne()._id},
  { "answer": "Historical revisionism.", "pack" : db.decks.findOne()._id},
  { "answer": "Insatiable bloodlust.", "pack" : db.decks.findOne()._id},
  { "answer": "Jafar.", "pack" : db.decks.findOne()._id},
  { "answer": "Jean-Claude Van Damme in slow motion.", "pack" : db.decks.findOne()._id},
  { "answer": "Jean-Claude Van Damme.", "pack" : db.decks.findOne()._id},
  { "answer": "Just the tip.", "pack" : db.decks.findOne()._id},
  { "answer": "Leveling up.", "pack" : db.decks.findOne()._id},
  { "answer": "Literally eating shit.", "pack" : db.decks.findOne()._id},
  { "answer": "Mad hacky-sack skills.", "pack" : db.decks.findOne()._id},
  { "answer": "Making the penises kiss.", "pack" : db.decks.findOne()._id},
  { "answer": "Media coverage.", "pack" : db.decks.findOne()._id},
  { "answer": "Medieval Times® Dinner & Tournament.", "pack" : db.decks.findOne()._id},
  { "answer": "Mom.", "pack" : db.decks.findOne()._id},
  { "answer": "Moral ambiguity.", "pack" : db.decks.findOne()._id},
  { "answer": "My machete.", "pack" : db.decks.findOne()._id}
]

db.whitecards.insert(whiteCardsFirstExpansion)

db.whitecards.insert( [ { "answer": "Good grammar.", "pack" : db.decks.findOne()._id},
{ "answer": "having a penis", "pack" : db.decks.findOne()._id},
{ "answer": "Hipsters.", "pack" : db.decks.findOne()._id},
{ "answer": "Historical revisionism.", "pack" : db.decks.findOne()._id},
{ "answer": "Insatiable bloodlust.", "pack" : db.decks.findOne()._id},
{ "answer": "Jafar.", "pack" : db.decks.findOne()._id},
{ "answer": "Jean-Claude Van Damme in slow motion.", "pack" : db.decks.findOne()._id},
{ "answer": "Jean-Claude Van Damme.", "pack" : db.decks.findOne()._id},
{ "answer": "Just the tip.", "pack" : db.decks.findOne()._id},
{ "answer": "Leveling up.", "pack" : db.decks.findOne()._id},
{ "answer": "Literally eating shit.", "pack" : db.decks.findOne()._id},
{ "answer": "Mad hacky-sack skills.", "pack" : db.decks.findOne()._id},
{ "answer": "Making the penises kiss.", "pack" : db.decks.findOne()._id},
{ "answer": "Media coverage.", "pack" : db.decks.findOne()._id},
{ "answer": "Medieval Times® Dinner & Tournament.", "pack" : db.decks.findOne()._id},
{ "answer": "Mom.", "pack" : db.decks.findOne()._id},
{ "answer": "Moral ambiguity.", "pack" : db.decks.findOne()._id},
{ "answer": "My machete.", "pack" : db.decks.findOne()._id} ])

db.whitecards.insert( [ { "answer": "Carnies.", "pack" : db.decks.findOne()._id},
{ "answer": "Clams.", "pack" : db.decks.findOne()._id},
{ "answer": "Clenched butt cheeks.", "pack" : db.decks.findOne()._id},
{ "answer": "Coughing into a vagina.", "pack" : db.decks.findOne()._id},
{ "answer": "Cutting.", "pack" : db.decks.findOne()._id},
{ "answer": "Dancing with a broom.", "pack" : db.decks.findOne()._id},
{ "answer": "Deflowering a princess.", "pack" : db.decks.findOne()._id},
{ "answer": "Deflowering the princess.", "pack" : db.decks.findOne()._id},
{ "answer": "Dorito breath.", "pack" : db.decks.findOne()._id},
{ "answer": "Eating an albino.", "pack" : db.decks.findOne()._id},
{ "answer": "Enormous Scandinavian women.", "pack" : db.decks.findOne()._id},
{ "answer": "Fabricating statistics.", "pack" : db.decks.findOne()._id},
{ "answer": "Finding a skeleton.", "pack" : db.decks.findOne()._id},
{ "answer": "Gandalf.", "pack" : db.decks.findOne()._id},
{ "answer": "Genetically engineered super-soldiers.", "pack" : db.decks.findOne()._id},
{ "answer": "George Clooney’s musk.", "pack" : db.decks.findOne()._id},
{ "answer": "Getting abducted by Peter Pan.", "pack" : db.decks.findOne()._id},
{ "answer": "Getting in her pants, politely.", "pack" : db.decks.findOne()._id},
{ "answer": "Gladiatorial combat.", "pack" : db.decks.findOne()._id} ])

db.whitecards.insert( [ { "answer": "A smiling black man, a latina businesswoman, a cool asian, and some whites.", "pack" : db.decks.findOne()._id},
{ "answer": "A web of lies.", "pack" : db.decks.findOne()._id},
{ "answer": "A woman scorned.", "pack" : db.decks.findOne()._id},
{ "answer": "An atomic wedgie.", "pack" : db.decks.findOne()._id},
{ "answer": "An Etsy steampunk strap-on.", "pack" : db.decks.findOne()._id},
{ "answer": "An evil man in evil clothes.", "pack" : db.decks.findOne()._id},
{ "answer": "André the Giant’s enormous, leathery scrotum.", "pack" : db.decks.findOne()._id},
{ "answer": "Apologizing.", "pack" : db.decks.findOne()._id},
{ "answer": "Appreciative snapping.", "pack" : db.decks.findOne()._id},
{ "answer": "Ashton Kutcher.", "pack" : db.decks.findOne()._id},
{ "answer": "Beating your wives.", "pack" : db.decks.findOne()._id},
{ "answer": "Being a busy adult with many important things to do.", "pack" : db.decks.findOne()._id},
{ "answer": "Being a dinosaur.", "pack" : db.decks.findOne()._id},
{ "answer": "Blaxploitation.", "pack" : db.decks.findOne()._id},
{ "answer": "Bosnian chicken farmers.", "pack" : db.decks.findOne()._id},
{ "answer": "Breaking nip slip news.", "pack" : db.decks.findOne()._id} ])

db.whitecards.insert( [ { "answer": "24-hour media coverage", "pack" : db.decks.findOne()._id},
{ "answer": "A beached whale.", "pack" : db.decks.findOne()._id},
{ "answer": "A big black dick.", "pack" : db.decks.findOne()._id},
{ "answer": "A bloody pacifier.", "pack" : db.decks.findOne()._id},
{ "answer": "A crappy little hand.", "pack" : db.decks.findOne()._id},
{ "answer": "A fat bald man from the internet.", "pack" : db.decks.findOne()._id},
{ "answer": "A low standard of living.", "pack" : db.decks.findOne()._id},
{ "answer": "A nuanced critique.", "pack" : db.decks.findOne()._id},
{ "answer": "A panty raid.", "pack" : db.decks.findOne()._id},
{ "answer": "A passionate Latino lover.", "pack" : db.decks.findOne()._id},
{ "answer": "A plunger to the face.", "pack" : db.decks.findOne()._id},
{ "answer": "A rival dojo.", "pack" : db.decks.findOne()._id} ])