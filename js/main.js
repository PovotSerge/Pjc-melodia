$(document).ready(function () {
  var currentFloor = 2;
  $(".home-image path").on('click', function() {
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });
});