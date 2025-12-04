// questions.js

// ------------------ Question banks ------------------

// Film questions (Inside Out)
const filmQuestions = [
  {
    id: "film-1",
    sceneTitle: "Scene – Inside Out",
    tier: "Firefly",
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
    ]
  },
  {
    id: "film-2",
    sceneTitle: "Scene – Inside Out",
    tier: "Fox",
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
    ]
  },
  {
    id: "film-3",
    sceneTitle: "Scene – Inside Out",
    tier: "Owl",
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
    ]
  }
];

// Literature questions
const literatureQuestions = [
  {
    id: "lit-1",
    sceneTitle: "Scene – Quiet Reading Nook",
    tier: "Firefly",
    scene:
      "A girl curls up in the corner of the library with a mystery novel. " +
      "She reads the same paragraph twice, then suddenly sits up straighter and flips back two pages.",
    prompt: "What most likely made her sit up and flip back?",
    options: [
      {
        text: "She noticed a small clue she had missed before and wants to re-check what the author hinted at.",
        isCorrect: true
      },
      {
        text: "She realized the book is too long and wants to skip ahead to the ending.",
        isCorrect: false
      },
      {
        text: "She remembered she left another book at home and wants to think about that one instead.",
        isCorrect: false
      },
      {
        text: "She decided she should stop reading mysteries and switch to cookbooks.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-2",
    sceneTitle: "Scene – School Story Circle",
    tier: "Fox",
    scene:
      "During story time, the teacher pauses after a chapter where the hero fails badly. " +
      "Half the class looks disappointed; the other half looks curious and leans in.",
    prompt: "What is the author most likely doing with this moment in the story?",
    options: [
      {
        text: "Using the failure to build tension so that a later success will feel more satisfying.",
        isCorrect: true
      },
      {
        text: "Trying to convince readers that the hero is lazy and not worth caring about.",
        isCorrect: false
      },
      {
        text: "Stopping the plot so the teacher has something to talk about in class.",
        isCorrect: false
      },
      {
        text: "Showing that only perfect characters belong in books.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-3",
    sceneTitle: "Scene – Favorite Book Re-Read",
    tier: "Owl",
    scene:
      "A boy rereads the final chapter of his favorite fantasy novel. " +
      "He smiles when the kingdom is saved, but his eyes fill with tears as he closes the book and hugs it to his chest.",
    prompt: "What deeper idea about reading does this scene show?",
    options: [
      {
        text: "Stories can give both comfort and sadness at the same time because readers care about the world they are leaving.",
        isCorrect: true
      },
      {
        text: "Books should always end with jokes so that readers never feel mixed emotions.",
        isCorrect: false
      },
      {
        text: "Reading is only useful for learning facts, not for feeling anything strongly.",
        isCorrect: false
      },
      {
        text: "Readers should avoid rereading books because the ending will feel weaker each time.",
        isCorrect: false
      }
    ]
  }
];

// ------------------ Game state ------------------

let currentMode = "literature"; // default mode
let questions = literatureQuestions;
let currentIndex = 0;
let score = 0;
let hasScoredCurrentQuestion = false;

// DOM references
const landingScreen = document.getElementById("landing-screen");
const gameScreen = document.getElementById("game-screen");
const playBtn = document.getElementById("play-btn");

const modeFilmBtn = document.getElementById("mode-film");
const modeLitBtn = document.getElementById("mode-literature");

const sceneTitleEl = document.getElementById("scene-title");
const tierLabelEl = document.getElementById("tier-label");
const sceneTextEl = document.getElementById("scene-text");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const gameAreaEl = document.getElementById("game-area");

// ------------------ Rendering ------------------

function setMode(mode) {
  currentMode = mode;
  questions = mode === "film" ? filmQuestions : literatureQuestions;
  currentIndex = 0;
  hasScoredCurrentQuestion = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("error");

  document.body.classList.remove("mode-film", "mode-literature");
  document.body.classList.add(mode === "film" ? "mode-film" : "mode-literature");

  modeFilmBtn.classList.toggle("active", mode === "film");
  modeLitBtn.classList.toggle("active", mode === "literature");

  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  if (!q) {
    sceneTitleEl.textContent = "No more questions in this mode.";
    tierLabelEl.textContent = "";
    sceneTextEl.textContent = "Switch to the other tab or refresh to play again.";
    questionTextEl.textContent = "";
    answersEl.innerHTML = "";
    return;
  }

  hasScoredCurrentQuestion = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("error");

  sceneTitleEl.textContent = q.sceneTitle;
  tierLabelEl.textContent = q.tier;
  sceneTextEl.textContent = q.scene;
  questionTextEl.textContent = q.prompt;

  answersEl.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => handleAnswerClick(btn, opt.isCorrect));
    answersEl.appendChild(btn);
  });
}

function updateScoreDisplay() {
  scoreEl.textContent = `Score: ${score}`;
}

// ------------------ Interaction ------------------

function handleAnswerClick(button, isCorrect) {
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));
  if (buttons.some((b) => b.disabled && b.classList.contains("correct"))) {
    return;
  }

  if (isCorrect) {
    buttons.forEach((b) => {
      const match = questions[currentIndex].options.find(
        (opt) => opt.text === b.textContent
      );
      if (match && match.isCorrect) {
        b.classList.add("correct");
      }
      b.disabled = true;
    });

    if (!hasScoredCurrentQuestion) {
      score += 1;
      hasScoredCurrentQuestion = true;
      updateScoreDisplay();
    }

    feedbackEl.textContent = "Correct!";
    feedbackEl.classList.remove("error");

    setTimeout(() => {
      currentIndex += 1;
      if (currentIndex >= questions.length) currentIndex = 0;
      renderQuestion();
    }, 650);
  } else {
    button.classList.add("incorrect");
    feedbackEl.textContent = "Incorrect answer. Try again.";
    feedbackEl.classList.add("error");

    gameAreaEl.classList.remove("shake");
    void gameAreaEl.offsetWidth;
    gameAreaEl.classList.add("shake");

    setTimeout(() => {
      gameAreaEl.classList.remove("shake");
      button.classList.remove("incorrect");
    }, 300);
  }
}

// ------------------ Screen wiring ------------------

// Start game in Literature mode when Play is clicked
playBtn.addEventListener("click", () => {
  landingScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  document.body.classList.remove("landing");
  setMode("literature");      // <-- Always start in literature
  updateScoreDisplay();
});

modeFilmBtn.addEventListener("click", () => {
  if (currentMode !== "film") setMode("film");
});

modeLitBtn.addEventListener("click", () => {
  if (currentMode !== "literature") setMode("literature");
});

// No initial render: we only render after Play is pressed.
