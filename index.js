/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
let freelancers = [];

//Question 1

function createRandom() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}
console.log(createRandom());

//Question 2

for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(createRandom());
}

console.log(freelancers);

//Question 3

function getAverageRate(freelancers) {
  let Total = 0;
  for (let i = 0; i < freelancers.length; i++) {
    Total = Total + freelancers[i].rate;
  }
  return Total / freelancers.length;
}

console.log("the average rate =" + getAverageRate(freelancers));

//Question 4

const averageRate = getAverageRate(freelancers);

//Question 5

function singleFreelancer(freelancer) {
  const { name, occupation, rate } = freelancer;

  const $freelancer = document.createElement("figure");
  $freelancer.classList.add("freelancer");
  $freelancer.innerHTML = `
    <blockquote>${name} ${occupation} ${rate}</blockquote>
  `;
  return $freelancer;
}

//Question 6

function arrayFreelancer() {
  const $arrayFreelancer = document.createElement("article");
  $arrayFreelancer.classList.add("freelancers");

  const $createRandom = freelancers.map(singleFreelancer);
  $arrayFreelancer.replaceChildren(...$createRandom);

  return $arrayFreelancer;
}

//Question 7

function averageFreelancer() {
  const $averageFreelancer = document.createElement("section");
  $averageFreelancer.classList.add("average-rate");
  $averageFreelancer.innerHTML = `
    <h2>Average Rate</h2>
    <p>${averageRate} per hour</p>
    `;
  return $averageFreelancer;
}

//Question 8

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancers For Hire</h1>
    <arrayFreelancer></arrayFreelancer>
  `;
  $app
    .querySelector("arrayFreelancer")
    .replaceWith(arrayFreelancer(freelancers));
}
render();
