// on-scroll navbar animaion
window.onscroll = function () {
  $("nav").toggleClass("scrolled", $(window).scrollTop() > 640);
};

$(".nav .nav-link").on("click", function () {
  console.log("clicked " + $this)
  // $(".nav-item").find(".active").removeClass("active");
  // $(this).addClass("active");
});

// map api

function initMap() {
  // The location of Calicut
  var calicut = {
    lat: 11.258,
    lng: 75.780
  };
  // The map, centered at Caicut
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 18,
      center: calicut
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: calicut,
    map: map
  });
}