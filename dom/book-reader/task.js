const bookContent = document.querySelector(".book__content");
const fontSizes = document.querySelectorAll(".font-size");

function changeFontSize(e) {
  e.preventDefault();
  fontSizes.forEach((fontSize) => {
    fontSize.classList.remove("font-size_active");
  });

  this.classList.add("font-size_active");

  bookContent.classList.remove("book_fs-big", "book_fs-small");

  const size = this.getAttribute("data-size");

  if (size === 'big') {
    bookContent.classList.add('book_fs-big');
    } else if (size === 'small') {
    bookContent.classList.add('book_fs-small');
    }
}

fontSizes.forEach((book) => {
  book.addEventListener("click", changeFontSize);
});