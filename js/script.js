/* Author: Chris Barna

*/
$(document).ready(function () {
  $(".icon").iconReplacer(50);

  // Live update stuff.
  var liveUpdateSize = 20;
  $('#try-me-update').html($('#try-me').val());
  $("#try-me").keyup(function () {
    console.log($(this).val());
    $('#try-me-update').html($(this).val());
    $('#try-me-update').iconReplacer(liveUpdateSize);
  });

  $("#try-me-selector").change(function () {
    liveUpdateSize = $(this).val();
    $("#try-me-update").html($("#try-me").val());
    $("#try-me-update").iconReplacer(liveUpdateSize);
  });
});
