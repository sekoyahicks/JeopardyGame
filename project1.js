
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
   $(uniqueId)()
    $(".modal-background").show();
    $(".modal-background").css("display", "flex")
  });
});

[
  uniqueId =
  {
  id:0100,
  question: "What liquid is the most hydrating?",
  answer1: "soda",
  answer2: "water",
  answer3: "milk"
}
];



