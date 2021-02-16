// This inserts the function into the "onclick" event for the button.
function myFunction() {
    document.getElementById("normal-lorum-ipsum").innerHTML = "Paragraph changed because you clicked the button.";
  }


// This creates a "back to top" button, scrolling up to (0,0) coordinates.
document.getElementById('btnScrollTop')
  .addEventListener('click', function(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  });
