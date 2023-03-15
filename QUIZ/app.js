const questions = [
  {
    Q: "which one is a markup laguage ? ",
    a: "HTML",
    b: "CPP",
    c: "JS",
    d: "CSS",
    R: "a",
  },
  {
    Q: "When JS launched ? ",
    a: "1996",
    b: "1994",
    c: "1993",
    d: "none of these",
    R: "b",
  },
  {
    Q: "CSS full form ? ",
    a: "Cascading Sheets",
    b: "Cpp Sheets",
    c: "Cow's Style Sheet",
    d: "Cascading Style Sheet",
    R: "d",
  },
];

var preState = 0;
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const box = document.getElementById("QBox");
const option = document.querySelectorAll(".option");

const loadQuestion = () => {
  if (index === total) return endquiz();
  reset();

  const data = questions[index];
  box.innerText = `${index + 1}) ${data.Q}`;
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
  if (!index) preState = document.getElementById("box").innerHTML;
};

const submitQuiz = () => {
  data = questions[index];
  const ans = getAnswer();
  if (ans === -1) {
    alert("choose one!!");
    return;
  }

  ans.value === data.R ? right++ : wrong++;
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let ans = -1;

  option.forEach((input) => {
    console.log(input)
    if (input.checked) ans = input;
  });

  return ans;
};

const reset = () => {
  option.forEach((input) => {
    input.checked = false;
  });
};

const endquiz = () => {
  document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3>Assignment Submited!!</h3>
    <h2>${right}/${total} are correct</h2>
    <button class="btn" onclick="allAgain()">
                Again..?
            </button>
    </div>
    `;
};

const allAgain = () => {
  index = right = wrong = 0;
  document.getElementById("box").innerHTML = preState;
  loadQuestion();
};

loadQuestion();
