;
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

});
  
  //Simple search: 
    // $(".survey_list a").filter(function(item) {return !~$(this).text().indexOf(searchtext)}).parent().hide();
    // var searchtext = $(this).val();
    // console.log($(this).val());
    // $(".survey_list a").filter(function(item) {console.log($(this).text().indexOf(searchtext))}).parent().hide();