
/*
  let score = 0

  score = score + 1;

  addEventListener().onclick
  */

//   


let uniqueId;

$(function() {
  $(".square").on("click", function() {
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
      }
    };
    
  });
});

qArray= [
  {
  id:"0100",
  question: "What liquid is the most hydrating?",
  answer1: "soda",
  answer2: "water",
  answer3: "milk"
}
];


 


