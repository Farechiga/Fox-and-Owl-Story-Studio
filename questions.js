// questions.js

// ------------------ Question banks ------------------

// Film questions (Inside Out and other films)
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

  // --- Add more film questions here (Inside Out or other movies) ---
];

// Literature questions (Pages & Co – The Bookwanderers and other books)
const literatureQuestions = [
  // Pages & Co – The Bookwanderers

  {
    id: "lit-1",
    sceneTitle: "Scene – Quiet morning in the bookshop",
    tier: "Firefly",
    scene:
      "Tilly curls up with a book in a quiet corner while her grandparents work behind the counter. " +
      "The shop feels safe, and the real world seems to fade as she reads.",
    prompt: "What is the main purpose of this quiet bookshop moment for Tilly?",
    options: [
      {
        text: "It shows that the bookshop feels like a safe home where she can disappear into stories.",
        isCorrect: true
      },
      {
        text: "It proves that she does not like talking to her grandparents very much.",
        isCorrect: false
      },
      {
        text: "It shows she is bored and wishes she could be anywhere else but the shop.",
        isCorrect: false
      },
      {
        text: "It mainly explains how the cash register and shelves are organized in the store.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-2",
    sceneTitle: "Scene – A customer asks for a recommendation",
    tier: "Firefly",
    scene:
      "A customer comes in and asks Tilly’s grandparent to help them find a book. " +
      "Tilly listens closely as they ask questions and suggest stories.",
    prompt: "What theme does this scene hint at when Tilly watches the book recommendation?",
    options: [
      {
        text: "Stories can connect people and help them feel understood.",
        isCorrect: true
      },
      {
        text: "Only adults can truly understand books and choose them correctly.",
        isCorrect: false
      },
      {
        text: "Reading is mostly about showing off how smart you are.",
        isCorrect: false
      },
      {
        text: "Bookshops are mainly useful for keeping kids busy after school.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-3",
    sceneTitle: "Scene – Tilly notices a character who does not belong",
    tier: "Fox",
    scene:
      "While shelving books, Tilly spots someone in the aisle who looks strangely familiar, " +
      "as if they stepped out of one of her favorite stories.",
    prompt: "What might this strange, familiar figure symbolize for Tilly?",
    options: [
      {
        text: "The line between stories and real life beginning to blur for her.",
        isCorrect: true
      },
      {
        text: "Her need to stop reading and focus only on real-world chores.",
        isCorrect: false
      },
      {
        text: "A warning that the bookshop is about to close forever.",
        isCorrect: false
      },
      {
        text: "A sign that she should never trust the characters in her books again.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-4",
    sceneTitle: "Scene – A quiet, worried whisper",
    tier: "Firefly",
    scene:
      "Tilly hears one grandparent whisper something worried about her mother when they think she is not listening.",
    prompt: "What does this whisper most likely show about the grandparents’ motivation?",
    options: [
      {
        text: "They are trying to protect Tilly by keeping hard questions about her mother away from her.",
        isCorrect: true
      },
      {
        text: "They do not care about Tilly’s feelings and just want to talk in secret.",
        isCorrect: false
      },
      {
        text: "They want Tilly to stop reading and focus only on housework.",
        isCorrect: false
      },
      {
        text: "They are planning to send Tilly away to live in another country.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-5",
    sceneTitle: "Scene – Tilly steps a little too far into a story",
    tier: "Fox",
    scene:
      "As Tilly reads, the world of the book seems to open around her. " +
      "She leans in, feeling the pull of the story as if it is inviting her to step inside.",
    prompt: "How does this scene gently push the story forward?",
    options: [
      {
        text: "It shows the first clear moment when stories start to become real for Tilly.",
        isCorrect: true
      },
      {
        text: "It explains exactly how every magic rule in the story world works.",
        isCorrect: false
      },
      {
        text: "It ends her connection to books so she can focus on real life only.",
        isCorrect: false
      },
      {
        text: "It mainly fills time so there can be more description of furniture.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-6",
    sceneTitle: "Scene – An argument about rules",
    tier: "Firefly",
    scene:
      "After a strange bookish incident, a grandparent gently scolds Tilly and warns her to follow certain rules in the shop. " +
      "Tilly feels frustrated but also curious.",
    prompt: "What small change in the relationship happens in this moment?",
    options: [
      {
        text: "Tilly begins to see that her grandparents’ strictness might come from worry and love, not just control.",
        isCorrect: true
      },
      {
        text: "Her grandparents stop caring about her completely and ignore her from then on.",
        isCorrect: false
      },
      {
        text: "Tilly decides she never wants to talk to her grandparents again.",
        isCorrect: false
      },
      {
        text: "The grandparents decide that Tilly should run the whole shop alone.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-7",
    sceneTitle: "Scene – Tilly faces a choice between staying or stepping in",
    tier: "Fox",
    scene:
      "Standing at the edge of a book world, Tilly hesitates. She can stay in the safe bookshop, " +
      "or take a step that might change everything.",
    prompt: "What most clearly drives Tilly’s hesitation in this moment?",
    options: [
      {
        text: "She wants adventure but is also afraid of what might happen if she leaves the safety of the shop.",
        isCorrect: true
      },
      {
        text: "She is only worried about being late for dinner and getting hungry.",
        isCorrect: false
      },
      {
        text: "She dislikes reading and is trying to avoid opening the book at all.",
        isCorrect: false
      },
      {
        text: "She wants to sell the book for money instead of reading it.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-8",
    sceneTitle: "Scene – A clue about her mother’s past",
    tier: "Owl",
    scene:
      "Tilly finds an old note tucked inside a book that seems to be linked to her mother. " +
      "The handwriting and words feel strangely personal.",
    prompt: "What deeper idea does this hidden note suggest about Tilly’s story?",
    options: [
      {
        text: "Her search for family and identity is tied closely to the world of books.",
        isCorrect: true
      },
      {
        text: "Her mother never cared about reading and avoided the bookshop.",
        isCorrect: false
      },
      {
        text: "The note proves that books are dangerous and should be locked away.",
        isCorrect: false
      },
      {
        text: "The main point of the story is only about protecting old paper and ink.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-9",
    sceneTitle: "Scene – A small disaster in the shop",
    tier: "Firefly",
    scene:
      "A stack of books collapses after something strange happens near the shelves. " +
      "Tilly and her grandparents rush to pick everything up.",
    prompt: "What emotional shift happens in this messy moment?",
    options: [
      {
        text: "The mood jumps from calm and ordinary to tense and alarmed as everyone realizes something unusual is going on.",
        isCorrect: true
      },
      {
        text: "Everyone in the shop becomes sleepy and relaxed as the books fall.",
        isCorrect: false
      },
      {
        text: "The characters stop caring about the books completely and walk away.",
        isCorrect: false
      },
      {
        text: "The scene stays exactly the same, with no real change in feeling.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-10",
    sceneTitle: "Scene – Late-night reflection",
    tier: "Owl",
    scene:
      "That night, Tilly lies awake thinking about everything that has happened—the strange figure, the note, " +
      "and how real her reading felt.",
    prompt: "How does this late-night scene deepen the story?",
    options: [
      {
        text: "It shows Tilly starting to connect all the strange clues and sense that her life and books are tangled together.",
        isCorrect: true
      },
      {
        text: "It mostly repeats details from earlier without adding any new feelings or thoughts.",
        isCorrect: false
      },
      {
        text: "It exists only to describe the furniture in her room and nothing more.",
        isCorrect: false
      },
      {
        text: "It proves that Tilly has decided to stop wondering and never ask questions again.",
        isCorrect: false
      }
    ]
  }

  // --- Add more literature questions here (for this or other books/series) ---
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
  setMode("literature"); // Always start in literature
  updateScoreDisplay();
});

modeFilmBtn.addEventListener("click", () => {
  if (currentMode !== "film") setMode("film");
});

modeLitBtn.addEventListener("click", () => {
  if (currentMode !== "literature") setMode("literature");
});

// No initial render: we only render after Play is pressed.
