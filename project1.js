
/*
  let score = 0

  score = score + 1;

  addEventListener().onclick
  */

//   


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
      };
    };  
  });
});

qArray = [
  {
  id:"0100",
  question: "What liquid is the most hydrating?",
  answer1: "soda",
  answer2: "water",
  answer3: "milk"
},
{
  id:"1100",
  question: "sidjofw",
  answer1: "sdjfoew",
  answer2: "dsafw",
  answer3: "sdfaw"
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


