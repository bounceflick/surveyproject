 var createQuestion = function () {
    var route = $('.add-question').attr('action')
    var formData = $('.add-question').serialize()
    $(".add-question").find("input[type='text']").val("")
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
  };

  var deleteQuestion = function(thisQuestion) {
    var route = thisQuestion.attr('href');
    var queId =
    console.log(route)
    $.ajax({
      url: route,
      type: 'DELETE',
    })
    .done(function(response) {
      // console.log(response.id)
      selector = "#" + response.id;
      $(selector).remove();
    })
    .fail(function() {
      console.log("error");
    })
  };


$(document).ready(function() {
  'use strict';

  $('#search').on('keyup', function() {
    var fuzzySearchText = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$';
    console.log(fuzzySearchText);
    var reg = RegExp(fuzzySearchText, 'i');
    var survey_title;
    $(".survey_list a").parents().show();
    $(".survey_list a").filter(function() {
      survey_title = $(this).text().replace(/\s+/g, ' ');
      return !reg.test(survey_title);}).parent().hide();

  });
  // event handler
  // prevent default
  // go to this ajax function

  $("body").on("submit", ".create_question", function(event){
    event.preventDefault();
    createQuestion();
  });

  $(".questionsList").on("click", ".deleteBtn", function(event){
    event.preventDefault();
    deleteQuestion($(this));
  });

});

  //Simple search:
    // $(".survey_list a").filter(function(item) {return !~$(this).text().indexOf(searchtext)}).parent().hide();
    // var searchtext = $(this).val();
    // console.log($(this).val());
    // $(".survey_list a").filter(function(item) {console.log($(this).text().indexOf(searchtext))}).parent().hide();
