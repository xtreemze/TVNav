import fscreen from "fscreen";
// import zenscroll from "zenscroll";
// require("smoothscroll-polyfill").polyfill();

const fullscreenButton = document.getElementById("fullscreenButton");
const full = document.getElementById("full");
window.goFull = function() {
  if (fscreen.fullscreenElement !== null) {
    fscreen.exitFullscreen();
    channelSection.classList.remove("inactiveChannels");
  } else {
    channelSection.classList.add("inactiveChannels");
    fscreen.requestFullscreen(full);
    channelSection.classList.add("inactiveChannels");
  }
  // if (window.player) {
  //   window.player.width(window.innerWidth);
  //   window.player.height(window.innerHeight);
  // }
  // if (window.player2) {
  //   window.player2.width(window.innerWidth);
  //   window.player2.height(window.innerHeight);
  // }
};
fullscreenButton.addEventListener("click", goFull());
// Keyboard commands
document.addEventListener("keydown", event => {
  const keyName = event.key;
  // console.log(keyName);
  // console.log(event);
  if (!window.selectedElement) {
    window.selectedElement = window.currentElement;
  }
  if (window.currentElement === null) {
    window.selectedElement = window.nextElement;
  }
  window.nextElement = selectedElement.nextElementSibling;
  window.previousElement = selectedElement.previousElementSibling;
  switch (keyName) {
    case "Up":
      event.preventDefault();
      event.stopPropagation();
      if (window.previousElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.previousElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = selectedElement.nextElementSibling;
        window.previousElement = selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }

      break;
    case "ArrowUp":
      event.preventDefault();
      event.stopPropagation();
      if (window.previousElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.previousElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = window.selectedElement.nextElementSibling;
        window.previousElement = window.selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }

      break;
    case "Down":
      event.preventDefault();
      event.stopPropagation();
      if (window.nextElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.nextElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = window.selectedElement.nextElementSibling;
        window.previousElement = window.selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }
      break;
    case "ArrowDown":
      event.preventDefault();
      event.stopPropagation();
      if (window.nextElement.parentElement.id === "channelSection") {
        window.selectedElement.classList.remove("selectedElement");
        window.selectedElement = window.nextElement;
        window.selectedElement.classList.add("selectedElement");
        window.nextElement = window.selectedElement.nextElementSibling;
        window.previousElement = window.selectedElement.previousElementSibling;
        window.scroller.center(window.selectedElement, 480, 0);
        // window.selectedElement.scrollIntoView({
        //   block: "center",
        //   inline: "nearest",
        //   behavior: "smooth"
        // });
      }
      break;
    case "Right":
      toggleChannels();
      break;
    case "ArrowRight":
      toggleChannels();
      break;
    case "Enter":
      event.preventDefault();
      event.stopPropagation();
      window.selectedElement.click();
      window.selectedElement.classList.remove("selectedElement");
      break;
    case "f":
      event.preventDefault();
      event.stopPropagation();
      goFull();
      break;
    case "Left":
      event.preventDefault();
      event.stopPropagation();
      goFull();
      break;
    case "ArrowLeft":
      event.preventDefault();
      event.stopPropagation();
      goFull();
      break;
    case " ":
      event.preventDefault();
      event.stopPropagation();
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
      window.scroller.center(window.selectedElement, 480, 0);
      // window.selectedElement.scrollIntoView({
      //   block: "center",
      //   inline: "nearest",
      //   behavior: "smooth"
      // });
      break;
    default:
      break;
  }
});
