const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

if (getCookie("modalClose") !== 'ok') {
    modal.classList.add("modal_active");
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
    document.cookie = "modalClose=ok";
});
