
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
  question: "How much percent of the planet's water is drinkable?",
  answer1: "97%",
  answer2: "80%",
  answer3: "3%",
  correctAnswer: "answer3"
},
{
  id: "1300",
  question: "What day in November is Computer Security Day?",
  answer1: "1st",
  answer2: "17th",
  answer3: "30th",
  correctAnswer: "answer3"
},
{
  id: "2300",
  question: "Which bunch of fruit is called a hand?",
  answer1: "grapes",
  answer2: "bananas",
  answer3: "elder berries",
  correctAnswer: "answer2"
},
{
  id: "3300",
  question: "All insects have __ legs.",
  answer1: "4",
  answer2: "6",
  answer3: "8",
  correctAnswer: "6"
},
{
  id: "4400",
  question: "What is the lowest temp ever recorded?",
  answer1: "-89.2 degrees Celsius",
  answer2: "-20 degrees Farenheit",
  answer3: "-50 degrees Farenheit",
  correctAnswer: "answer1"
},
{
  id: "0400",
  question: "Earth's oceans have an average depth of ____.",
  answer1: "20,982 ft",
  answer2: "10,240 ft",
  answer3: "12,400 ft",
  correctAnswer: "answer3"
},
{
  id: "1400",
  question: "What is the original name of Windows?",
  answer1: "Windows",
  answer2: "Microsoft",
  answer3: "Interface Manager",
  correctAnswer: "answer3"
},
{
  id: "2400",
  question: "What food is made of 25% air?",
  answer1: "apples",
  answer2: "avocados",
  answer3: "bananas",
  correctAnswer: "answer1"
},
{
  id: "3400",
  question: "How many teeth does a bear have?",
  answer1: "42",
  answer2: "27",
  answer3: "38",
  correctAnswer: "answer1"
},
{
  id: "4400",
  question: "How long do tornadoes generally last?",
  answer1: "5 minutes",
  answer2: "15 minutes",
  answer3: "30 minutes",
  correctAnswer: "answer2"
},
{
  id: "0500",
  question: "Where is the largest reef system located?",
  answer1: "Australia",
  answer2: "Africa",
  answer3: "Asia",
  correctAnswer: "answer1"
},
{
  id: "1500",
  question: "Who invented the first computer mouse?",
  answer1: "Steve Jobs",
  answer2: "Bill Gates",
  answer3: "Doug Engelbart",
  correctAnswer: "answer3"
},
{
  id: "2500",
  question: "What was the original color of carrots?",
  answer1: "orange",
  answer2: "green",
  answer3: "purple",
  correctAnswer: "answer3"
},
{
  id: "3500",
  question: "How long can a tarantula survive without food?",
  answer1: "2 years",
  answer2: "2 months",
  answer3: "2 weeks",
  correctAnswer: "answer1"
},
{
  id: "4500",
  question: "'Cyclone' and 'typhoon' are other names for '_______'.",
  answer1: "tornadoes",
  answer2: "tsunamis",
  answer3: "hurricanes",
  correctAnswer: "answer3"
},
]


