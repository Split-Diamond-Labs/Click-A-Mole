

let gameDifficulty = difficulty;

let mole = {
  x: 50,
  y: 50,
  element: document.getElementById("mole")
}

let timer = 0;

let timer2 = 0;

let score = 0;

let timerInterval;

function moleMove(x, y) {
  mole.x = x;
  mole.y = y;
  mole.element.style.top = `calc(${mole.y}vh - 50px)`;
  mole.element.style.left = `calc(${mole.x}vw - 50px)`;
}

function update() {
  document.getElementById("score").innerText = score;
  document.getElementById("timer").innerText = timer;
}

function end() {
  clearInterval(timerInterval);
  mole.element.removeEventListener("click", moleWhack);
  document.getElementById("text").innerHTML = `T<span style="font-size: 40px;">IME'S UP</span>! C<span style="font-size: 40px;">LICK</span> <span onclick="begin()", style="color: blue;">HERE</span> <span style="font-size: 40px;">TO RESTART</SPAN>.`;
}

let moleWhack = () => {
  moleMove((Math.random() * 100), (Math.random() * 100));
  score += (Math.floor((20 - (timer2 - timer)) / 2) < 0 ? 0 : Math.floor((20 - (timer2 - timer)) / 2)) + 1;
  timer2 = timer;
};

function normal() {
  timer = 450;
  timer2 = timer;
  timerInterval = setInterval(() => {
    timer--;
    if (timer == 0) end();
  }, 100);
  mole.element.addEventListener("click", moleWhack);
}

function easy() {
  timer = 900;
  timer2 = timer;
  timerInterval = setInterval(() => {
    timer--;
    if (timer == 0) end();
  }, 100);
  mole.element.addEventListener("click", moleWhack);
}

function hard() {
  timer = 200;
  timer2 = timer;
  timerInterval = setInterval(() => {
    timer--;
    if (timer == 0) end();
  }, 100);
  mole.element.addEventListener("click", moleWhack);
}

function begin() {
  switch (gameDifficulty) {
    case 2:
      hard();
      break;
    case 1:
      easy();
      break;
    default:
      normal();
  }
  mole.element.removeEventListener("click", begin);
  document.getElementById("text").innerHTML = `T<span style="font-size: 40px;">O GAIN POINTS, CLICK </span>(<span style="font-size: 40px;">WHACK</span>) <span style="font-size: 40px;">THE MOLE</span>!`;
  moleMove((Math.random() * 100), (Math.random() * 100));
}

setInterval(update, 1);

mole.element.addEventListener("click", begin);
