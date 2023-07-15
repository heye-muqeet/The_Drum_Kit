// FOR CLICK EVENT
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

// FOR KEYPRESS EVENT
document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

// EVENT HANDLER FUNCTION
function makeSound(key) {
  switch (key) {
    case "a":
      new Audio("sounds/crash.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "d":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "f":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "j":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "k":
      new Audio("sounds/snare.mp3").play();
      break;

    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
