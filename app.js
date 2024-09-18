document.addEventListener("DOMContentLoaded", () => {
  let toastbox = document.getElementById("toastbox");
  let successMessage = "Successfully Submitted";
  let errorMessage = "Please fix the error!";
  let invalidMessage = "Invalid input, try again!";

  function showToast(message, type) {
    let toast = document.createElement("div");
    toast.classList.add("toast", type);

    let messageElem = document.createElement("div");
    messageElem.classList.add("message");
    messageElem.innerHTML = message;

    let closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.addEventListener("click", () => toast.remove());

    toast.appendChild(messageElem);
    toast.appendChild(closeButton);

    toastbox.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  window.showToast = (message, type) => showToast(message, type);

  document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", () => {
      let type = button.innerText.toLowerCase();
      let message;
      switch (type) {
        case "success":
          message = successMessage;
          type = "success";
          break;
        case "error":
          message = errorMessage;
          type = "error";
          break;
        case "invalid":
          message = invalidMessage;
          type = "invalid";
          break;
      }
      showToast(message, type);
    });
  });
});
