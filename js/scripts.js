$(document).ready(function() {
  $("#votingAge").submit(function(event) {
    var userAgeVar = parseInt($("input#userAge").val());

    if (userAgeVar >= 18) {
      $("#canVote").show();
      $("#cannotVote").hide();
    } else {
      $("#cannotVote").show();
      $("#canVote").hide();
    }

    
    event.preventDefault();
  });
});
