const progress = document.getElementById("progress");
const file = document.getElementById("file");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("file", file.files[0]);

  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    const percent = event.loaded / event.total;
    progress.value = percent;
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.send(formData);
});
