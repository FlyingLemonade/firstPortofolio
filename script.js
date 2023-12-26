//To Top Button
function scrollToTop() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
    document.body.scrollTop = 0; // For Safari
  }
}

// Show or hide the button based on scroll position
window.onscroll = function () {
  scrollFunction();
  console.log(document.documentElement.scrollTop);
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("to-top").style.opacity = "1";
  } else {
    document.getElementById("to-top").style.opacity = "0";
  }
}

//
