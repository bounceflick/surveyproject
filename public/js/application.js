;
$(document).ready(function() {
  'use strict';

  $('#search').on('keyup', function() {
    var searchtext = $(this).val();
    // console.log($(this).val());
    $(".survey_list a").parents().show();
    $(".survey_list a").filter(function(item) {return !~$(this).text().indexOf(searchtext)}).parent().hide();
    // $(".survey_list a").filter(function(item) {console.log($(this).text().indexOf(searchtext))}).parent().hide();
  });
});