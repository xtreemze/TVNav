import fscreen from "fscreen";
require("smoothscroll-polyfill").polyfill();

const fullscreenButton = document.getElementById("fullscreenButton");
fullscreenButton.addEventListener("click", function() {
  if (fscreen.fullscreenElement !== null) {
    fscreen.exitFullscreen();
    if (window.player) {
      window.player.width(window.innerWidth);
      window.player.height(window.innerHeight);
    }
    if (window.player2) {
      window.player2.width(window.innerWidth);
      window.player2.height(window.innerHeight);
    }
  } else {
    channelSection.classList.add("inactiveChannels");
    fscreen.requestFullscreen(main);
    if (window.player) {
      window.player.width(window.innerWidth);
      window.player.height(window.innerHeight);
    }
    if (window.player2) {
      window.player2.width(window.innerWidth);
      window.player2.height(window.innerHeight);
    }
  }
});
// Keyboard commands
document.addEventListener("keydown", event => {
  const keyName = event.key;
  console.log(keyName);
  console.log(event);
  if (!window.selectedElement) {
    window.selectedElement = window.currentElement;
    window.nextElement = selectedElement.nextElementSibling;
    window.previousElement = selectedElement.previousElementSibling;
  }
  if (window.currentElement === null) {
    window.selectedElement = window.nextElement;
  }
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
        window.selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
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
        window.selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
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
        window.selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
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
        window.selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
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
      if (fscreen.fullscreenElement !== null) {
        fscreen.exitFullscreen();
      } else {
        fscreen.requestFullscreen(main);
        channelSection.classList.add("inactiveChannels");
      }
      break;
    case "Left":
      event.preventDefault();
      event.stopPropagation();
      if (fscreen.fullscreenElement !== null) {
        fscreen.exitFullscreen();
      } else {
        fscreen.requestFullscreen(main);
        channelSection.classList.add("inactiveChannels");
      }
      break;
    case "ArrowLeft":
      event.preventDefault();
      event.stopPropagation();
      if (fscreen.fullscreenElement !== null) {
        fscreen.exitFullscreen();
      } else {
        fscreen.requestFullscreen(main);
        channelSection.classList.add("inactiveChannels");
      }
      break;
    case " ":
      event.preventDefault();
      event.stopPropagation();
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
      window.selectedElement.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
      });
      break;
    default:
      break;
  }
});
