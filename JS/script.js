// Make my aside menu appears in mobile view

function toggleNavbar() {

  if (document.getElementById("menu_burger_section").style.display == "none") {
    document.getElementById("menu_burger_section").style.display = "block";
  } else {
    document.getElementById("menu_burger_section").style.display = "none";
  }

}


// Make movement on my offers view to the right

function offerMovemenRight() {

  const elements = document.querySelectorAll("#offer_option_box .offer_option"); // We select all the box that need to move
  const maxMoveRight = -(window.innerWidth + 100); // Maximal limitation movement to the left depending on the screen size

  // Calculate move value based on screen width
  const moveValue = window.innerWidth < 600 ? 250 : 550;

  elements.forEach(function (element) {
    const currentTransform = getComputedStyle(element).transform;
    const actualMove =
      currentTransform === "none"
        ? 0
        : new WebKitCSSMatrix(currentTransform).m41;

    // Potential move calculation
    const newMove = actualMove - moveValue; // We subtract to go left

    // Apply movement without exceeding the maximum to the left
    if (newMove >= maxMoveRight) {
      element.style.transform = `translateX(${newMove}px)`;
    } else {
      // If potential displacement exceeds limit, displacement is set to the maximum limit
      element.style.transform = `translateX(${maxMoveRight}px)`;
    }
  });
}


// Make movement on my offers view to the left

function offerMovemenLeft() {
  const elements = document.querySelectorAll(".offer_option");
  const maxMoveLeft = 0; // Maximal limitation movement to the right

  // Calculate move value based on screen width
  const moveValue = window.innerWidth < 600 ? 250 : 500;

  elements.forEach(function (element) {
    const currentTransform = getComputedStyle(element).transform;
    const actualMove =
      currentTransform === "none"
        ? 0
        : new WebKitCSSMatrix(currentTransform).m41;

    // Potential move calculation
    const newMove = actualMove + moveValue; // We add to go right

    // Apply movement without exceeding the maximum to the right
    if (newMove <= maxMoveLeft) {
      element.style.transform = `translateX(${newMove}px)`;
    } else {
      // If potential displacement exceeds limit, displacement is set to the maximum limit
      element.style.transform = `translateX(${maxMoveLeft}px)`;
    }
  });
}


// Listener if the window is resize while movement has been made in the offer section

window.addEventListener("resize", function () {
  const elements = document.querySelectorAll(".offer_option");
  elements.forEach(function (element) {
    element.style.transform = 'translateX(0px)';
  });
});



// Show/Hide my commom question answer and make the arrow rotate

function hideShowCommonQuestion(num_answer)	{

  if (document.getElementById("arrow_box"+num_answer).style.display == "block")	{
    document.getElementById("arrow_box"+num_answer).style.display = "none";
    document.getElementById("arrow"+num_answer).style.transform = "rotate(0deg)";

  }  else  {
    document.getElementById("arrow_box"+num_answer).style.display = "block";
    document.getElementById("arrow"+num_answer).style.transform = "rotate(180deg)";
  }
}
