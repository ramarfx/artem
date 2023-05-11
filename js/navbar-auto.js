// Get all elements with "a" id in navbar
var navlinks = document.querySelectorAll(".navlink");

// Get the section 1 element
var section1 = document.getElementById("section1");

// Set the initial text color to white
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].style.color = "white";
}

// Add event listener to window object to track scrolling
window.addEventListener("scroll", function() {
  // Get the current scroll position
  var scrollPos = window.pageYOffset;

  // Check if the user is in section 1
  if (scrollPos < section1.offsetTop + section1.offsetHeight) {
    // Set the text color to white
    for (var i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "white";
    }
  } else {
    // Set the text color to black
    for (var i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "black";
    }
  }
});