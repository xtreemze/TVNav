// Keyboard commands
document.addEventListener("keydown", event => {
  const keyName = event.key;
  console.log(keyName);
  console.log(event);
  if (currentElement === null) {
    selectedElement = nextElement;
  }
  switch (keyName) {
    case "Up":
      if (previousElement.parentElement.id === "channelSection") {
        selectedElement.classList.remove("selectedElement");
        selectedElement = previousElement;
        selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
        selectedElement.classList.add("selectedElement");
        nextElement = selectedElement.nextSibling;
        previousElement = selectedElement.previousSibling;
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case "ArrowUp":
      if (previousElement.parentElement.id === "channelSection") {
        selectedElement.classList.remove("selectedElement");
        selectedElement = previousElement;
        selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
        selectedElement.classList.add("selectedElement");
        nextElement = selectedElement.nextSibling;
        previousElement = selectedElement.previousSibling;
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case "Down":
      if (nextElement.parentElement.id === "channelSection") {
        selectedElement.classList.remove("selectedElement");
        selectedElement = nextElement;
        selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
        selectedElement.classList.add("selectedElement");

        nextElement = selectedElement.nextSibling;
        previousElement = selectedElement.previousSibling;
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case "ArrowDown":
      if (nextElement.parentElement.id === "channelSection") {
        selectedElement.classList.remove("selectedElement");
        selectedElement = nextElement;
        selectedElement.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth"
        });
        selectedElement.classList.add("selectedElement");

        nextElement = selectedElement.nextSibling;
        previousElement = selectedElement.previousSibling;
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case "Right":
      toggleChannels();
      break;
    case "ArrowRight":
      toggleChannels();
      break;
    case "Enter":
      selectedElement.click();
      selectedElement.classList.remove("selectedElement");
      event.preventDefault();
      event.stopPropagation();
      break;
    case "f":
      if (fscreen.fullscreenElement !== null) {
        fscreen.exitFullscreen();
      } else {
        channelSection.classList.add("inactiveChannels");
        fscreen.requestFullscreen(main);
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case "Left":
      if (fscreen.fullscreenElement !== null) {
        fscreen.exitFullscreen();
      } else {
        channelSection.classList.add("inactiveChannels");
        fscreen.requestFullscreen(main);
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case "ArrowLeft":
      if (fscreen.fullscreenElement !== null) {
        fscreen.exitFullscreen();
      } else {
        channelSection.classList.add("inactiveChannels");
        fscreen.requestFullscreen(main);
      }
      event.preventDefault();
      event.stopPropagation();
      break;
    case " ":
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
      event.preventDefault();
      event.stopPropagation();
      selectedElement.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
      });
      break;
    default:
      break;
  }
});
