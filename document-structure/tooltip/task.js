const hasTooltips = document.querySelectorAll(".has-tooltip");

hasTooltips.forEach((hasTooltip) => {
  let newDiv = document.createElement("div");
  newDiv.textContent = hasTooltip.getAttribute("title");
  newDiv.classList.add("tooltip");
  // newDiv.setAttribute("data-position", "bottom");
  hasTooltip.insertAdjacentElement("afterend", newDiv);
});

const tooltipsActive = document.querySelectorAll(".tooltip");

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener("click", function (e) {
    e.preventDefault();

    const { top, left } = this.getBoundingClientRect();
    this.nextSibling.classList.toggle("tooltip_active");

    this.nextSibling.setAttribute(
      "style",
      `left: ${left}px; top: ${top + 20}px`
    );
  });
});
