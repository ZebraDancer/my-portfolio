function displayMessage(event) {
  event.preventDefault();
  alert(
    `Oooops! It looks like what you're looking for is still under construction. Come back later!`
  );
}

let iconMessage = document.querySelector(`#linkedin-icon`);
iconMessage.addEventListener(`click`, displayMessage);
