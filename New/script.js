const envelope = document.getElementById("envelope");
const button = document.getElementById("openBtn");
const message = document.getElementById("message");
const cake = document.getElementById("cake");
const candleCountDisplay = document.getElementById("candleCount");
const blowBtn = document.getElementById("blowBtn");
const resetBtn = document.getElementById("resetBtn");

const letter = `
Happy 24th Birthday to the woman I hope one day I'll have the privilege of calling mine. ❤️

It's a little strange writing a birthday message to someone who may not even know I exist yet. Maybe we've already crossed paths without realizing it, or maybe our first meeting is still waiting somewhere in the future. But wherever you are today, I hope this message somehow carries a little warmth to your heart.

Today, you turn 24.
I don't know how your day is going. I don't know if you're surrounded by people who make you feel loved, or if you're quietly celebrating while pretending you're okay. I don't know if you're smiling from genuine happiness or hiding tears behind that smile. But if there's one thing I wish I could do today, it's remind you that your life matters more than you could ever imagine.
I hope you know that you're worthy of love not because of how you look, how successful you are, or how much you can do for others, but simply because you're you.
If life has ever made you feel forgotten, I hope this birthday reminds you that you are never beyond hope. If people have broken your trust, I hope you find the courage to believe in love again. If you've ever cried yourself to sleep, wondering if anyone truly understands you, I hope one day you'll discover someone who listens not only to your words but also to the silence between them.
Maybe that person won't be me.
Or maybe, if life is kind enough, it will be.
Sometimes I wonder what you're doing right now. Are you laughing with your friends? Are you spending time with your family? Did someone surprise you today? Did anyone tell you how proud they are of you? I sincerely hope they did, because you've made it through another year of battles that most people will never see.
I'm proud of you, even without knowing every chapter of your story.
I'm proud of the younger version of you who refused to give up.
I'm proud of the version of you who kept moving forward after disappointment, heartbreak, failure, loneliness, or fear.
You made it here.
Twenty-four years of learning, growing, falling, standing back up, and becoming the incredible woman you're still becoming.
And that's something worth celebrating.
If one day I become part of your life, I promise I won't only love the happy version of you.
I'll love the version that overthinks at 2 am.
The version that gets scared, insecure, tired, and overwhelmed.
The version that sometimes needs silence instead of solutions.
Because love shouldn't only exist on the easy days.
Real love stays when life isn't easy.
I hope that when we finally meet, I can become the person who reminds you that you're beautiful even when you don't believe it yourself.
The person who tells you that you're enough when the world makes you feel otherwise.
The person who celebrates your smallest victories because I know how hard you worked for them.
The person who never lets you question whether you're loved.
I don't want to promise you a perfect life.
I can't promise there will never be arguments, misunderstandings, or difficult days.
But I can promise that if we're ever lucky enough to find each other, I'll choose us even on the days when choosing is difficult.
Because love isn't measured by how perfect the moments are.
It's measured by who stays when life becomes imperfect.
Until that day comes, I'll continue working on becoming someone worthy of your trust, your respect, and your heart.
I hope you're doing the same not because you need to become "better" for someone else, but because you deserve a life that makes you genuinely happy.
As you blow out your candles today, I hope every silent wish hidden inside your heart slowly comes true.

I hope your healing comes.
I hope your dreams come.
I hope your peace comes.

And above all, I hope the kind of love you've always prayed for finds you at exactly the right time.
If fate decides that love is me, I'll spend every birthday reminding you how grateful I am that you were born.
And if our paths never cross, I'll still be thankful that someone as wonderful as you exists in this world.
Because your existence has already made this world a little more beautiful, even if I haven't had the chance to tell you that face to face.
So today, don't ever think you're getting "older."
You're becoming someone wiser.
Someone stronger.
Someone kinder.
Someone whose story is still being written.

Happy 24th Birthday, Aleinaa <3
May this year heal the parts of your heart you've hidden from everyone else.
May your tears become fewer, your laughter become louder, and your dreams become reality.
And wherever life takes you,
I hope it always leads you to a love that feels like home.
Maybe, just maybe
One day,
Home will be with me.
Until then, happy birthday, my future GF.
May God protect you, guide every step you take, and bless every dream your heart quietly carries.
You don't know me yet.
But today, someone is praying for your happiness as if you've always been part of my life.
Happy 24th Birthday, Aleinaa. ❤️
`;

let index = 0;
let candles = [];
let typingInProgress = false;

button.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    if (!typingInProgress) {
      typeWriter();
    }
    button.innerHTML = "Close ❤️";
  } else {
    message.innerHTML = "";
    index = 0;
    typingInProgress = false;
    button.innerHTML = "Open Letter 💌";
  }
});

function typeWriter() {
  typingInProgress = true;
  if (index < letter.length) {
    message.innerHTML += letter.charAt(index);
    index += 1;
    setTimeout(typeWriter, 18);
  } else {
    typingInProgress = false;
  }
}

function updateCandleCount() {
  const activeCandles = candles.filter((candle) => !candle.classList.contains("out")).length;
  candleCountDisplay.textContent = `${activeCandles} candle${activeCandles === 1 ? "" : "s"} glowing`;
}

function addCandle(x, y) {
  const candle = document.createElement("div");
  candle.className = "candle";
  candle.style.left = `${x}px`;
  candle.style.top = `${y}px`;

  const flame = document.createElement("div");
  flame.className = "flame";
  candle.appendChild(flame);

  cake.appendChild(candle);
  candles.push(candle);
  updateCandleCount();
}

cake.addEventListener("click", (event) => {
  const rect = cake.getBoundingClientRect();
  const left = event.clientX - rect.left;
  const top = event.clientY - rect.top;
  addCandle(left, top);
});

function blowOutCandles() {
  let blownOut = 0;
  candles.forEach((candle) => {
    if (!candle.classList.contains("out") && Math.random() > 0.55) {
      candle.classList.add("out");
      blownOut += 1;
    }
  });

  if (blownOut > 0) {
    updateCandleCount();
  }

  if (candles.length > 0 && candles.every((candle) => candle.classList.contains("out"))) {
    triggerConfetti();
    setTimeout(() => triggerConfetti(), 400);
  }
}

blowBtn.addEventListener("click", blowOutCandles);

resetBtn.addEventListener("click", () => {
  candles.forEach((candle) => candle.remove());
  candles = [];
  updateCandleCount();
});

function triggerConfetti() {
  confetti({
    particleCount: 140,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff7aa2", "#ffd166", "#ff6f91", "#ffffff"]
  });
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${15 + Math.random() * 30}px`;
  heart.style.animationDuration = `${4 + Math.random() * 4}s`;
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);

updateCandleCount();