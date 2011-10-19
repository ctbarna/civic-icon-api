/* Author: Chris Barna

*/
$(document).ready(function () {
  $(".icon").iconReplacer(50);

  // Live update stuff.
  $('#try-me-update').html($('#try-me').val());
  $("#try-me").keyup(function () {
    console.log($(this).val());
    $('#try-me-update').html($(this).val());
    $('#try-me-update').iconReplacer(20);
  });
});
