
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
  question: "What liquid is the most hydrating?",
  answer1: "soda",
  answer2: "water",
  answer3: "milk",
  correctAnswer: "answer2"
},
{
  id:"1100",
  question: "Which fruit has the highest protein content?",
  answer1: "avocado",
  answer2: "banana",
  answer3: "orange",
  correctAnswer: "answer1"
},
/*{
  id:"2100",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:"3100",
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:"4100"
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:""
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},
{
  id:
  question:
  answer1:
  answer2:
  answer3:
},*/
]


