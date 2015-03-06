$(document).ready(function() {
  // event handler
  // prevent default
  // go to this ajax function
  $("body").on("submit", ".create_question", function(event){
    event.preventDefault();
    createQuestion();
  });







  createQuestion = function () {
    var route = $('.add-question').attr('action')
    var formData = $('.add-question').serialize()
    $.ajax({
      url: route,
      type: 'POST',
      data: formData,
    })
    .done(function(response) {
      $('.questionsList').append(response)
      $('#questions').replaceWith(formData.description)
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  };


});
