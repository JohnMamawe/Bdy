// Birthday surprise page script
// Change the name in one place to personalize the whole website.
const birthdayName = "Rose Lynie";

let audioContext = null;
let musicEnabled = false;

const landingSection = document.getElementById("landingSection");
const pageContent = document.getElementById("pageContent");
const openSurpriseBtn = document.getElementById("openSurpriseBtn");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const envelope = document.getElementById("envelope");
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");
const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
const finalReveal = document.getElementById("finalReveal");
const mainHeading = document.getElementById("mainHeading");
const finalFooter = document.querySelector(".final-footer");

// Update all the text that uses her name.
function updateNames() {
  mainHeading.textContent = `Happy 18th Birthday, ${birthdayName}! 🎂💙`;

  const footerText = `
    <p>Happy 18th Birthday, ${birthdayName}! 🎂💙</p>
    <p>Keep smiling. Keep being you.</p>
    <p>And always remember...</p>
    <p>Someone out here is secretly very happy that you exist. 💙</p>
  `;

  finalFooter.innerHTML = footerText;
}

// Create animated stars in the background.
function createStars() {
  const starsContainer = document.getElementById("stars");

  for (let i = 0; i < 80; i += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${(Math.random() * 2.5).toFixed(2)}s`;
    starsContainer.appendChild(star);
  }
}

// Create floating hearts.
function createHearts() {
  const heartLayer = document.getElementById("heartLayer");
  const heartOptions = ["💙", "💙", "💙", "💙"];

  for (let i = 0; i < 18; i += 1) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = heartOptions[i % heartOptions.length];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${(Math.random() * 6).toFixed(2)}s`;
    heart.style.animationDuration = `${(8 + Math.random() * 7).toFixed(2)}s`;
    heartLayer.appendChild(heart);
  }
}

function renderReasons() {
  const reasons = [
    "Kay buotan ka bisan bag-o pa ta nagkaila, makita gyud nako nga buotan ka ug maayo ka maki estorya sa uban.",
    "Sayon ra kaayo ka kaistorya Dili awkward kung magstorya ta. Bisan unsa ra atong topic, makachika ra gyud ta.",
    "Makapakatawa ka nako usahay wala gani kay tuyo nga magpatawa, pero makatawa gihapon ko sa imong mga gi buhat or istorya. ",
    "Komportable ko nimo like na feel nako sa safe ba kung kaistorya tika. Dili kinahanglan magpaka-seryoso pirmi.",
    "Kabalo ka maminaw importante kaayo na para nako kay dili tanan tawo kabalo maminaw sa uban.",
    "Masaligan ka mn gd ka tas nindot kaayo ka naa kay pagka-tawo nga makahatag ug confidence sa usa ka friend nga pwede ka kasaligan.",
    "Makapahappy ka sa simple nga paagi Usahay gamay ra nga chika o message, pero somehow makapa-good mood na.",
    "Dili ka boring kauban. Bisan walay plano basta random ra sa utok ba, makapangita gihapon ta ug topic nga maistoryahan. ",
    "Ganahan ko sa imong pagka-natural Dili ka kinahanglan magpaka-someone else para lang ma-impress ang uban kung ung unsa ka, mao ra gyud ka.",
    "Maayo ka nga friend. Bisan bag-o pa ta, na-appreciate gyud nako ang friendship nga naa nato karon.",
    "Kabalo ka mo-value sa friendship Mao na ang usa sa akong na-appreciate nimo kay dili nimo basta-basta balewalaon ang mga tawo nga importante sa imoha.",
    "Makahatag ka ug good vibes Basta naa ka, murag mas malingaw ang conversation Usahay gani, ikaw ra'y kulang para kompleto ang kalagot HAHAHA",
    "Nindot ka ug heart chrizz para nako, mas importante ang batasan ug kasingkasing sa usa ka tawo kaysa sa sge ug pangaway.",
    "Daghan pa ko'g gustong mahibaw-an bahin nimo. Daghan pa ta'g panahon para magka-ilhanay ug mas daghan pa ta'g stories nga ma-share sa usag usa.",
    "Ganahan ko nga daghan pa ta'g memories. Gusto ko nga puhon daghan pa ta'g mga moments nga atong mahinumdoman ug kataw-an.",
    "Nalingaw ko nga naa ka sa ako ng life Wala ko nag-expect nga mahimong part ka sa akong adlaw-adlaw nga life, pero thankful ko nga nahitabo.",
    "Ma-appreciate gyud nako imong friendship sa akoah Bisan simple ra atong friendship, para nako importante gihapon siya. Dili man kinahanglan bongga ang friendship para mahimong meaningful.",
    "Kay ikaw ra gyud na. Mao ni ang pinaka-simple nga rason. Special ka para nako dili tungod kay perfect ka, pero tungod kay ikaw ka. Naay imong kaugalingong personality, humor, pagka-buang-buang usahay HAHAHA, ug mga butang nga naghimo nimo nga ikaw."
  ];

  const reasonsGrid = document.getElementById("reasonsGrid");

  reasons.forEach((reason, index) => {
    const card = document.createElement("article");
    card.className = "reason-card";
    card.innerHTML = `<span class="reason-number">${index + 1}</span><p>${reason}</p>`;
    reasonsGrid.appendChild(card);
  });
}

// Create floating balloons.
function createBalloons() {
  const balloonLayer = document.getElementById("balloonLayer");

  for (let i = 0; i < 12; i += 1) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = `${Math.random() * 95}%`;
    balloon.style.animationDelay = `${(Math.random() * 7).toFixed(2)}s`;
    balloon.style.animationDuration = `${(10 + Math.random() * 8).toFixed(2)}s`;
    balloonLayer.appendChild(balloon);
  }
}

// Launch colorful confetti using the required palette.
function launchConfetti() {
  const confettiLayer = document.getElementById("confettiLayer");
  const colors = ["#F9A8D4", "#60A5FA", "#FFFFFF", "#FBBF24", "#1E3A8A"];

  confettiLayer.innerHTML = "";

  for (let i = 0; i < 120; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 700}px`);
    piece.style.animationDelay = `${(Math.random() * 0.24).toFixed(2)}s`;
    confettiLayer.appendChild(piece);
  }

  setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 3000);
}

// Typewriter effect for the special note.
function typeText(element, text, speed = 38) {
  let index = 0;
  element.textContent = "";

  function tick() {
    if (index < text.length) {
      element.textContent += text[index];
      index += 1;
      setTimeout(tick, speed);
    }
  }

  tick();
}

// Generate a soft romantic tune only after the user interacts.
function playMusic() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const melody = [392, 440, 523.25, 440, 392, 440, 392, 349.23, 329.63, 392, 440, 392];

  melody.forEach((note, index) => {
    setTimeout(() => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = note;
      gain.gain.value = 0.025;

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.4);
    }, index * 260);
  });
}

// Toggle music on and off.
function toggleMusic() {
  musicEnabled = !musicEnabled;

  if (musicEnabled) {
    playMusic();
    musicToggleBtn.textContent = "🎵 Music On";
  } else {
    musicToggleBtn.textContent = "🎵 Music Off";
  }
}

// Open the birthday surprise page.
function revealSurprise() {
  landingSection.classList.add("hidden");
  pageContent.classList.remove("hidden");
  pageContent.classList.add("visible");
  launchConfetti();

  if (musicEnabled) {
    playMusic();
  }

  if (envelope) {
    envelope.classList.add("opened");
  }
}

// Make a wish effect for the cake section.
function makeWish() {
  const flames = document.querySelectorAll(".flame");
  flames.forEach((flame) => {
    flame.parentElement.classList.add("dimmed");
  });

  wishMessage.classList.remove("hidden");
  wishMessage.classList.add("visible");
  wishMessage.textContent = "I hope your wish comes true. You deserve it.";
  launchConfetti();
}

// Reveal the final secret text elegantly.
function revealFinalMessage() {
  finalReveal.classList.remove("hidden");
  finalReveal.classList.add("visible");
  launchConfetti();
  finalSurpriseBtn.disabled = true;
  finalSurpriseBtn.textContent = "A Secret Was Revealed ✨";
}

// Add the click listeners after page setup.
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initialize() {
  updateNames();
  createStars();
  createHearts();
  createBalloons();
  renderReasons();
  revealOnScroll();

  openSurpriseBtn.addEventListener("click", revealSurprise);
  musicToggleBtn.addEventListener("click", toggleMusic);
  if (envelope) {
    envelope.addEventListener("click", () => envelope.classList.toggle("opened"));
  }
  wishBtn.addEventListener("click", makeWish);
  finalSurpriseBtn.addEventListener("click", revealFinalMessage);

  pageContent.classList.add("hidden");
  if (finalReveal) {
    finalReveal.classList.add("hidden");
  }
  wishMessage.classList.add("hidden");
}

initialize();
