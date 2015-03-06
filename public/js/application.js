;
$(document).ready(function() {
  'use strict';

  $('#search').on('keyup', function() {
    // var searchtext = $(this).val();
    var fuzzySearchText = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$';
    var reg = RegExp(fuzzySearchText, 'i');
    var happy;
    // console.log(fuzzySearchText);
    // console.log($(this).val());
    $(".survey_list a").parents().show();
    // $(".survey_list a").filter(function(item) {return !~$(this).text().indexOf(searchtext)}).parent().hide();
    $(".survey_list a").filter(function() {
      happy = $(this).text().replace(/\s+/g, ' ');
      return !reg.test(happy);}).parent().hide();
    // $(".survey_list a").filter(function(item) {console.log($(this).text().indexOf(searchtext))}).parent().hide();
  });
});