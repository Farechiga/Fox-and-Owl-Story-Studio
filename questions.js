// questions.js
// Starter question set for Fox & Owl Story Studio prototype

const questions = [
  {
    id: 1,
    movie: "Inside Out",
    tier: "🔥 Firefly",
    skill: "Emotional Beat Shift",
    scene:
      "Joy watches Riley at dinner. Riley forces a big smile and says her day was 'fine,' " +
      "but her eyes look tired and she keeps poking her food instead of eating.",
    prompt: "What emotional shift happens for Joy in this moment?",
    options: [
      {
        text: "She starts to see that Riley is struggling inside even though she pretends to be okay.",
        isCorrect: true
      },
      {
        text: "She decides Riley must just be bored with the food and wants something different.",
        isCorrect: false
      },
      {
        text: "She thinks Riley is mad at the parents for not listening to her favorite song.",
        isCorrect: false
      },
      {
        text: "She believes Riley is perfectly happy and only acting quiet to be polite.",
        isCorrect: false
      }
    ],
    explanation:
      "Joy notices that Riley’s fake smile doesn’t match her tired eyes and slow movements. " +
      "That tiny mismatch shows Joy that Riley is hurting inside, even while she says she’s fine."
  },
  {
    id: 2,
    movie: "Inside Out",
    tier: "🦊 Fox",
    skill: "Scene Purpose",
    scene:
      "Riley sits alone on her bed in the new house, holding her old hockey jersey. " +
      "She runs her fingers over the team logo, then quietly folds it and places it in a box.",
    prompt: "What is the main purpose of this scene in Riley’s story?",
    options: [
      {
        text: "To show that Riley is gently starting to let go of her old life, even though it still matters to her.",
        isCorrect: true
      },
      {
        text: "To show that Riley is excited to join a brand-new hockey team in the new city.",
        isCorrect: false
      },
      {
        text: "To show that Riley has completely forgotten about hockey and never wants to play again.",
        isCorrect: false
      },
      {
        text: "To show that Riley only cares about packing fast so she can go watch TV.",
        isCorrect: false
      }
    ],
    explanation:
      "The careful way she touches and folds the jersey shows love and sadness at the same time. " +
      "The scene’s job is to show her slowly releasing the old life she misses, not rushing toward a new one."
  },
  {
    id: 3,
    movie: "Inside Out",
    tier: "🦉 Owl",
    skill: "Theme Connection",
    scene:
      "Inside Riley’s mind, Joy and Sadness finally sit together with a glowing core memory. " +
      "The memory shifts between bright yellow and soft blue as Riley remembers being comforted by her parents " +
      "after a tough game.",
    prompt: "What deeper idea about emotions does this moment highlight?",
    options: [
      {
        text: "It shows that joy and sadness can mix in the same memory and that both are needed to feel truly connected.",
        isCorrect: true
      },
      {
        text: "It shows that only happy memories are important and sad ones should be erased.",
        isCorrect: false
      },
      {
        text: "It shows that Riley should avoid playing games because they always end in disappointment.",
        isCorrect: false
      },
      {
        text: "It shows that emotions must stay separate so Riley can understand her life clearly.",
        isCorrect: false
      }
    ],
    explanation:
      "The memory glowing both yellow and blue at once shows that comfort, loss, and love are tangled together. " +
      "The scene connects to the theme that mixed feelings can actually bring people closer."
  }
];

// --- Simple rendering logic ---

let currentIndex = 0;
let hasAnswered = false;

const sceneTextEl = document.getElementById("scene-text");
const skillPillEl = document.getElementById("skill-pill");
const tierPillEl = document.getElementById("tier-pill");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const progressTextEl = document.getElementById("progress-text");
const nextBtn = document.getElementById("next-btn");
const movieLabelEl = document.getElementById("movie-label");

function renderQuestion() {
  const q = questions[currentIndex];
  hasAnswered = false;

  // Scene + meta
  movieLabelEl.textContent = q.movie.toUpperCase();
  sceneTextEl.textContent = q.scene;
  skillPillEl.textContent = `Skill · ${q.skill}`;
  tierPillEl.textContent = `Tier · ${q.tier}`;
  questionTextEl.textContent = q.prompt;

  // Progress
  progressTextEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  // Clear old answers
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.disabled = true;

  // Shuffle answers so the correct one isn’t always in the same place
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);

  shuffled.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => handleAnswerClick(btn, opt.isCorrect, q.explanation));
    answersEl.appendChild(btn);
  });
}

function handleAnswerClick(clickedButton, isCorrect, explanation) {
  if (hasAnswered) return; // only first click counts
  hasAnswered = true;

  // Mark buttons
  const allButtons = document.querySelectorAll(".answer-btn");
  allButtons.forEach((btn) => {
    btn.disabled = true;
    // highlight which one is correct
    const isThisCorrect = questions[currentIndex].options.some(
      (opt) => opt.text === btn.textContent && opt.isCorrect
    );
    if (isThisCorrect) {
      btn.classList.add("correct");
    }
  });

  if (isCorrect) {
    clickedButton.classList.add("correct");
    feedbackEl.textContent = "Exactly. " + explanation;
  } else {
    clickedButton.classList.add("incorrect");
    feedbackEl.textContent = "Nice try. " + explanation;
  }

  // Enable next unless we’re at the last question
  nextBtn.disabled = currentIndex >= questions.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

// Initial render
renderQuestion();
