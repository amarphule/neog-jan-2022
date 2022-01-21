function tooglebadge() {
    let badge = document.querySelector("#toggle");
    let toggleClass = badge.firstElementChild.className;
    if (toggleClass === "toggle")
      badge.firstElementChild.className = "hide";
    if (toggleClass === "hide")
      badge.firstElementChild.className = "toggle";
  }