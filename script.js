// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navBar");
var wrapper = document.getElementById("wrapper")
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    wrapper.classList.add("stickyMode");
  } else {
    navbar.classList.remove("sticky");
    wrapper.classList.remove("stickyMode");
  }
}

//GoogleMap
window.onload = function myMap() {
var mapProp= {
  center:new google.maps.LatLng(-25.909469,28.000803),
  zoom:15,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
