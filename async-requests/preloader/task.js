const items = document.getElementById("items");
const loader = document.querySelector(".loader");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');

    const responseValutes = JSON.parse(xhr.responseText).response.Valute;

    items.textContent = "";
    
    for (let key in responseValutes) {
      items.innerHTML += `
      <div class="item">
        <div class="item__code">\
            ${responseValutes[key].CharCode}\
        </div>\
        <div class="item__value">\
            ${responseValutes[key].Value}\
        </div>\
        <div class="item__currency">\
            руб.\
        </div>
      </div>
        `;
    }
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();
