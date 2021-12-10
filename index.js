
let totalDrums = document.querySelectorAll(".drum").length;
for (var i=0; i<totalDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

function handleClick ()
{
  var buttonInnerText = this.innerText;
  recognizeSound(buttonInnerText);
  buttonAnimation(buttonInnerText);
}
document.addEventListener("keypress", handleKeyPress);

function handleKeyPress (event)
{
  recognizeSound(event.key);
  buttonAnimation(event.key)
}

function recognizeSound(sound)
{
  if (sound === "w") {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  }
  else if (sound === "a") {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  }
  else if (sound === "s") {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  }
  else if (sound === "d") {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  }
  else if (sound === "j") {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  }
  else if (sound === "k") {
  var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 500);
}
