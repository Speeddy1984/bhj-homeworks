const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const questions = JSON.parse(xhr.response).data;

    pollTitle.innerHTML = questions.title;
    pollAnswers.textContent = "";
    
    questions.answers.forEach((answer) => {
      pollAnswers.innerHTML += `
      <button class="poll__answer">
        ${answer}
      </button>
      `;
    });

    const btns = document.querySelectorAll('.poll__answer');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
        alert('Спасибо! Ваш голос учтен.');
      })
    })
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();
