
  var playerScore = 0
  var answeredQuestions = 0

let uniqueId;

$(function() {
  $(".square").on("click", function() {
    console.log('hello')
    uniqueId = $(this).attr("id")
   console.log(uniqueId);
    $(".modal-background").show();
    $(".modal-background").css("display", "flex");
    for(let i=0; i<qArray.length; i++){
      console.log("hi")
      if(qArray[i].id === uniqueId){
        console.log("hi")
        /*push qArray[i] to modal*/
        $(".question").html(qArray[i].question);
        $(".answer1").html(qArray[i].answer1);
        $(".answer2").html(qArray[i].answer2);
        $(".answer3").html(qArray[i].answer3);
        $(".correctAnswer").html(qArray[i].correctAnswer).hide();
        let score = $(this).html();
        $(".questionScore").html(score)
$(this).html("-----")
$(this).removeClass("square")
$(this).addClass("emptySquare")
$(this).off()
      };
    };  
  });
});
$("#submit").on("click", function(event) {
  event.preventDefault();
  let answer = $(".answer:checked").val()
  let correctAnswer = $(".correctAnswer").html()
  console.log("picked answer"+answer)
  console.log("correct answer "+correctAnswer)

  let score = Number($(".questionScore").html())
  console.log("score "+score)
  if($(".answer:checked").val() === $(".correctAnswer").html()){
    console.log("correct")
    playerScore = playerScore + score;

  } else {
    playerScore = playerScore - score;
      console.log("incorrect")
    } 

    answeredQuestions = answeredQuestions + 1;
    if(answeredQuestions == 25){
        console.log("youWon")
    }
    $(".score").html(playerScore)
    console.log("playerScore "+ playerScore)
  $(".modal-background").hide()

});


qArray = [
  {
  id:"0100",
  question: "What is the name of the tallest tree in the world?",
  answer1: "hyperion",
  answer2: "sequoia",
  answer3: "scarlet",
  correctAnswer: "answer2"
},
{
  id:"1100",
  question: "What is one of the fastest growing occupations related to technology?",
  answer1: "switchboard operators",
  answer2: "computer programming",
  answer3: "data entry keyers",
  correctAnswer: "answer2"
},
{
  id:"2100",
  question: "What is the most hydrating liquid in the world?",
  answer1:"juice",
  answer2:"milk",
  answer3:"water",
  correctAnswer: "answer3"
},
{
  id:"3100",
  question: "How long can a snail sleep?",
  answer1: "5 hours",
  answer2: "3 years",
  answer3: "2 days",
  correctAnswer: "answer2"
},
{
  id:"4100",
  question: "What is the name of a transpartent coating of ice that makes pavement slippery?",
  answer1: "black ice",
  answer2: "clear ice",
  answer3: "thin ice",
  correctAnswer: "answer1"
},
{
  id:"0200",
  question: "2,700 ______ are cut so that we can have toilet paper.",
  answer1: "bushes",
  answer2: "houses",
  answer3: "trees",
  correctAnswer: "answer3"
},
{
  id: "1200",
  question: "HP, Google, Microsoft, and Apple were all started where?",
  answer1: "in Europe",
  answer2: "in a basement",
  answer3: "in a garage",
  correctAnswer: "answer3"
},
{
  id: "2200",
  question: "Which fruit has the highest protein content?",
  answer1: "banana",
  answer2: "avocado",
  answer3: "orange",
  correctAnswer: "answer2"
},
{
  id: "3200",
  question: "Where is the heart of a shrimp located?",
  answer1: "in its tail",
  answer2: "in its abdomen",
  answer3: "in its head",
  correctAnswer: "answer3"
},
{
  id: "4200",
  question: "Water on earth evaporates into the sky and condenses to form what?",
  answer1: "clouds",
  answer2: "rain",
  answer3: "snow",
  correctAnswer: "answer1"
},
{
  id: "0300",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "1300",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "2300",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "3300",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "4400",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "0400",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "1400",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "2400",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "3400",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "4400",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "0500",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "1500",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "2500",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "3500",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id: "4500",
  question:
  answer1:
  answer2:
  answer3:
},*/
]


