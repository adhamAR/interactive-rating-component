const submit = document.querySelector(".submit");
const rates = document.querySelectorAll(".rating");
const beforeRate = document.querySelector(".card__before");
const afterRate = document.querySelector(".card__after");
const msg = document.querySelector(".rating-msg");

function showRate() {
  rates.forEach((rate, index) => {
    rate.onclick = () => {
      let selectedRate = index + 1;
      submit.onclick = () => {
        msg.innerHTML = `You selected ${selectedRate} out of 5`;
        beforeRate.style.display = "none";
        afterRate.style.display = "grid";
      }
      return selectedRate;
    };
  });
}

showRate();

