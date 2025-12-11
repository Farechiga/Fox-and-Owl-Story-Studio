// questions.js

// ------------------ Seven Gates metadata ------------------

// Official Seven Gates dictionary (icons + descriptions)
const GATE_INFO = {
  IdentityTension: {
    icon: "🎭",
    label: "Identity Tension",
    meaning: "Character questions who they are or who they are becoming"
  },
  RelationshipShift: {
    icon: "🫂",
    label: "Relationship Shift",
    meaning: "Something changes (even slightly) between characters"
  },
  EmotionalContradiction: {
    icon: "🎨",
    label: "Emotional Contradiction",
    meaning: "Two emotions are present at once"
  },
  ThresholdMoment: {
    icon: "🚪",
    label: "Threshold Moment",
    meaning: "Character must choose whether to step into something new"
  },
  SecretExchange: {
    icon: "✉️",
    label: "Secret Exchange",
    meaning:
      "Something is hidden, half-revealed, shared quietly, or concealed"
  },
  WorldLogicShift: {
    icon: "🔮",
    label: "World-Logic Shift",
    meaning: "Reality bends; magic or strangeness appears"
  },
  EmotionalEcho: {
    icon: "📆",
    label: "Emotional Echo",
    meaning: "A repeated moment takes on new emotional meaning"
  }
};

// ------------------ Question banks ------------------

// Film questions (Inside Out)
const filmQuestions = [
  {
    id: "film-insideout-1",
    source: "Inside Out",
    sceneTitle: "Dinner table check-in",
    tier: "Firefly",
    gates: ["EmotionalContradiction", "RelationshipShift"],
    gateIcons: ["🎨", "🫂"],
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
    ]
  },
  {
    id: "film-insideout-2",
    source: "Inside Out",
    sceneTitle: "Packing the hockey jersey",
    tier: "Fox",
    gates: ["EmotionalContradiction", "EmotionalEcho"],
    gateIcons: ["🎨", "📆"],
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
    ]
  },
  {
    id: "film-insideout-3",
    source: "Inside Out",
    sceneTitle: "Joy and Sadness share a memory",
    tier: "Owl",
    gates: ["EmotionalContradiction", "IdentityTension", "WorldLogicShift"],
    gateIcons: ["🎨", "🎭", "🔮"],
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
    ]
  }
];

// Literature questions (Pages & Co – The Bookwanderers)
const literatureQuestions = [
  {
    id: "lit-pagesco-bookwanderers-21",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The strange girl in the aisle",
    tier: "Fox",
    gates: ["WorldLogicShift", "IdentityTension"],
    gateIcons: ["🔮", "🎭"],
    skill: "Symbolism",
    scene:
      "Tilly freezes when she sees a girl in an old-fashioned dress step around the corner of a shelf—" +
      "then vanish without a sound. The air feels different, and Tilly wonders if the girl was real " +
      "or somehow from a story she knows.",
    prompt: "What does this strange moment most likely show about Tilly’s world?",
    options: [
      {
        text: "Her world is starting to blend with the world of stories in a way she can feel but not explain.",
        isCorrect: true
      },
      {
        text: "Her grandparents are testing her to see how fast she can organize the shelves.",
        isCorrect: false
      },
      {
        text: "Tilly is imagining things because she is tired from cleaning the shop.",
        isCorrect: false
      },
      {
        text: "Another customer is playing a prank on her just for fun.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-22",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A quiet promise to herself",
    tier: "Firefly",
    gates: ["IdentityTension", "ThresholdMoment"],
    gateIcons: ["🎭", "🚪"],
    skill: "Character Motivation",
    scene:
      "After a confusing encounter, Tilly sits alone on the shop stairs and whispers that she wants " +
      "to understand what is happening—even if it scares her a little.",
    prompt: "What does this moment show about Tilly?",
    options: [
      {
        text: "She is starting to choose curiosity even when she feels afraid.",
        isCorrect: true
      },
      {
        text: "She wants to stop thinking about books and focus only on chores.",
        isCorrect: false
      },
      {
        text: "She plans to tell her classmates everything as soon as possible.",
        isCorrect: false
      },
      {
        text: "She thinks the strange events are just accidents that do not matter.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-23",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A clipped, careful conversation",
    tier: "Fox",
    gates: ["RelationshipShift", "SecretExchange"],
    gateIcons: ["🫂", "✉️"],
    skill: "Relationship Change",
    scene:
      "When Tilly asks her grandparent if they have ever seen anything odd happen in the shop, " +
      "they pause, choose their words too slowly, and say, 'Nothing you need to worry about.'",
    prompt: "What small shift happens in their relationship here?",
    options: [
      {
        text: "Tilly senses that her grandparent is hiding something to protect her, creating a quiet distance between them.",
        isCorrect: true
      },
      {
        text: "Tilly realizes her grandparent does not like books anymore.",
        isCorrect: false
      },
      {
        text: "Her grandparent becomes angry and refuses to speak to her for the rest of the day.",
        isCorrect: false
      },
      {
        text: "Tilly thinks her grandparent has forgotten how to answer simple questions.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-24",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Reaching for the glowing book",
    tier: "Owl",
    gates: ["ThresholdMoment", "WorldLogicShift"],
    gateIcons: ["🚪", "🔮"],
    skill: "Scene Purpose",
    scene:
      "A book on the returns trolley gives off a faint shimmer, almost like it is breathing. " +
      "Tilly hesitates, then slowly reaches for it, unsure what will happen.",
    prompt: "How does this moment move the story forward?",
    options: [
      {
        text: "It shows Tilly taking her first deliberate step toward the mysterious world opening behind the books.",
        isCorrect: true
      },
      {
        text: "It explains exactly how every magical rule in the bookshop works.",
        isCorrect: false
      },
      {
        text: "It shows she wants to stop reading and spend less time with stories.",
        isCorrect: false
      },
      {
        text: "It mainly gives the reader a break from the plot so they can rest.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-25",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A smile that doesn't match her eyes",
    tier: "Firefly",
    gates: ["EmotionalContradiction", "RelationshipShift"],
    gateIcons: ["🎨", "🫂"],
    skill: "Emotional Beat Shift",
    scene:
      "Tilly’s friend at school smiles when she hears about the bookshop, but her eyes flick away, " +
      "and her voice turns oddly flat.",
    prompt: "What emotional shift is happening in this moment?",
    options: [
      {
        text: "She is trying to look happy for Tilly while quietly feeling unsure or left out.",
        isCorrect: true
      },
      {
        text: "She is thrilled and wants to visit the shop right away.",
        isCorrect: false
      },
      {
        text: "She is annoyed that Tilly talked to her at all.",
        isCorrect: false
      },
      {
        text: "She does not remember what a bookshop is.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-26",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The note in her mother's handwriting",
    tier: "Owl",
    gates: ["SecretExchange", "IdentityTension", "EmotionalContradiction"],
    gateIcons: ["✉️", "🎭", "🎨"],
    skill: "Theme Connection",
    scene:
      "Tilly finds a tiny folded note inside an old book. The handwriting looks like her mother’s. " +
      "Her breath catches—hope and fear pulling at her at the same time.",
    prompt: "What deeper idea does this moment highlight?",
    options: [
      {
        text: "Tilly’s search for who she is is tightly connected to the hidden stories her mother left behind.",
        isCorrect: true
      },
      {
        text: "The note proves that Tilly’s mother never cared about books.",
        isCorrect: false
      },
      {
        text: "The moment shows that secret notes are always dangerous.",
        isCorrect: false
      },
      {
        text: "It hints that Tilly should forget her past and stop asking questions.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-27",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A repeated walk through the fiction aisle",
    tier: "Fox",
    gates: ["EmotionalEcho", "IdentityTension"],
    gateIcons: ["📆", "🎭"],
    skill: "Scene Purpose",
    scene:
      "Tilly walks through the same aisle where she once saw the mysterious girl. " +
      "This time, nothing happens—but she notices her heartbeat is steadier.",
    prompt: "What does this repeated moment show?",
    options: [
      {
        text: "Tilly is growing braver, even when the magic does not appear.",
        isCorrect: true
      },
      {
        text: "The aisle has become completely unimportant to the story.",
        isCorrect: false
      },
      {
        text: "Tilly has stopped believing anything unusual ever happened.",
        isCorrect: false
      },
      {
        text: "The shop wants her to stay out of that aisle forever.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-28",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Listening at the stairwell",
    tier: "Firefly",
    gates: ["SecretExchange", "RelationshipShift"],
    gateIcons: ["✉️", "🫂"],
    skill: "Character Motivation",
    scene:
      "Tilly pauses at the stairwell when she hears her grandparents whispering about 'not telling her yet.' " +
      "She holds her breath so she won’t interrupt.",
    prompt: "What does this moment most likely show about Tilly’s motivation?",
    options: [
      {
        text: "She wants to understand what they are hiding, but she is afraid of breaking their trust.",
        isCorrect: true
      },
      {
        text: "She is trying to gather evidence to prove they do not like her.",
        isCorrect: false
      },
      {
        text: "She hopes they are planning a surprise party for her.",
        isCorrect: false
      },
      {
        text: "She is bored and listening only to avoid going back to her room.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-29",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Her reflection in the library window",
    tier: "Owl",
    gates: ["IdentityTension", "EmotionalContradiction"],
    gateIcons: ["🎭", "🎨"],
    skill: "Symbolism",
    scene:
      "While shelving books at dusk, Tilly sees her reflection layered over rows of stories behind the glass. " +
      "She feels both small and connected to something larger.",
    prompt: "What might this layered reflection symbolize?",
    options: [
      {
        text: "Tilly is beginning to see herself as part of the world of stories, not just a visitor.",
        isCorrect: true
      },
      {
        text: "Tilly only wants to look at her reflection instead of finishing her work.",
        isCorrect: false
      },
      {
        text: "The shop is too dark and needs better lighting.",
        isCorrect: false
      },
      {
        text: "She is disappointed that the glass makes her look taller.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-30",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Choosing which truth to tell",
    tier: "Fox",
    gates: ["IdentityTension", "SecretExchange", "ThresholdMoment"],
    gateIcons: ["🎭", "✉️", "🚪"],
    skill: "Character Motivation",
    scene:
      "Back home, her grandparent gently asks, 'Did anything unusual happen today?' " +
      "Tilly hesitates. She thinks about the shimmering book, then quietly says, 'Not really.'",
    prompt: "Why does Tilly most likely give this answer?",
    options: [
      {
        text: "She is not ready to share the strange truth until she understands it herself.",
        isCorrect: true
      },
      {
        text: "She wants to convince her grandparents that she dislikes reading.",
        isCorrect: false
      },
      {
        text: "She believes the magical moment was only a dream with no meaning.",
        isCorrect: false
      },
      {
        text: "She thinks her grandparents already know everything that happened.",
        isCorrect: false
      }
    ]
  }
];

// ------------------ Game state ------------------

let currentMode = "literature"; // default mode
let questions = literatureQuestions;
let questionOrder = []; // indices in randomized order
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
const gateIconsEl = document.getElementById("gate-icons");
const gateTooltipEl = document.getElementById("gate-tooltip");

// ------------------ Helpers ------------------

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Scenario must satisfy at least two Gates to qualify (design rule)
function isQuestionEligible(q) {
  return Array.isArray(q.gates) && q.gates.length >= 2;
}

function buildQuestionOrder() {
  const eligible = questions
    .map((q, index) => ({ q, index }))
    .filter(({ q }) => isQuestionEligible(q))
    .map(({ index }) => index);

  const indicesToUse = eligible.length
    ? eligible
    : questions.map((_, i) => i); // fallback if author forgot gates

  questionOrder = shuffleArray(indicesToUse);
  currentIndex = 0;
}

function getCurrentQuestion() {
  if (!questionOrder.length) return null;
  const idx = questionOrder[currentIndex];
  return questions[idx];
}

// Tooltip: full Seven Gates key
function renderGateKeyTooltip() {
  const rowsHtml = Object.values(GATE_INFO)
    .map(
      (info) =>
        `<div class="gate-key-row">
          <span class="gate-key-icon">${info.icon}</span>
          <span><strong>${info.label}</strong><br>${info.meaning}</span>
        </div>`
    )
    .join("");

  gateTooltipEl.innerHTML = `
    <div class="gate-key-title">The Seven Gates</div>
    ${rowsHtml}
  `;
}

// Hover wiring for gate key
gateIconsEl.addEventListener("mouseenter", () => {
  renderGateKeyTooltip();
  gateTooltipEl.classList.remove("hidden");
});

gateIconsEl.addEventListener("mouseleave", (event) => {
  if (!gateTooltipEl.contains(event.relatedTarget)) {
    gateTooltipEl.classList.add("hidden");
  }
});

gateTooltipEl.addEventListener("mouseleave", (event) => {
  if (!gateIconsEl.contains(event.relatedTarget)) {
    gateTooltipEl.classList.add("hidden");
  }
});

// ------------------ Rendering ------------------

function setMode(mode) {
  currentMode = mode;
  questions = mode === "film" ? filmQuestions : literatureQuestions;
  hasScoredCurrentQuestion = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("error");

  document.body.classList.remove("mode-film", "mode-literature");
  document.body.classList.add(mode === "film" ? "mode-film" : "mode-literature");

  modeFilmBtn.classList.toggle("active", mode === "film");
  modeLitBtn.classList.toggle("active", mode === "literature");

  buildQuestionOrder();
  renderQuestion();
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) {
    sceneTitleEl.textContent = "No more questions in this mode.";
    tierLabelEl.textContent = "";
    sceneTextEl.textContent = "Switch to the other tab or refresh to play again.";
    questionTextEl.textContent = "";
    answersEl.innerHTML = "";
    gateIconsEl.textContent = "";
    return;
  }

  hasScoredCurrentQuestion = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("error");

  const prefix = q.source ? `${q.source} – ` : "";
  sceneTitleEl.textContent = prefix + q.sceneTitle;
  tierLabelEl.textContent = q.tier;
  sceneTextEl.textContent = q.scene;
  questionTextEl.textContent = q.prompt;

  // Render gate icons for this question
  gateIconsEl.innerHTML = "";
  if (Array.isArray(q.gates)) {
    q.gates.forEach((gateName) => {
      const info = GATE_INFO[gateName];
      if (!info) return;
      const span = document.createElement("span");
      span.className = "gate-icon";
      span.textContent = info.icon;
      span.title = info.label;
      gateIconsEl.appendChild(span);
    });
  }

  // Shuffle answer options
  const shuffledOptions = shuffleArray(q.options);
  answersEl.innerHTML = "";

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;
    if (opt.isCorrect) btn.dataset.correct = "true";
    btn.addEventListener("click", () => handleAnswerClick(btn, !!opt.isCorrect));
    answersEl.appendChild(btn);
  });
}

function updateScoreDisplay() {
  scoreEl.textContent = `Score: ${score}`;
}

// ------------------ Interaction ------------------

function handleAnswerClick(button, isCorrect) {
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));

  // If we already revealed the correct answer for this question, ignore further clicks
  if (buttons.some((b) => b.disabled && b.classList.contains("correct"))) {
    return;
  }

  if (isCorrect) {
    buttons.forEach((b) => {
      if (b.dataset.correct === "true") {
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
      if (currentIndex >= questionOrder.length) {
        buildQuestionOrder(); // reshuffle for another round
      }
      renderQuestion();
    }, 650);
  } else {
    button.classList.add("incorrect");
    feedbackEl.textContent = "Incorrect answer. Try again.";
    feedbackEl.classList.add("error");

    gameAreaEl.classList.remove("shake");
    void gameAreaEl.offsetWidth; // restart animation
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
  setMode("literature");
  updateScoreDisplay();
});

modeFilmBtn.addEventListener("click", () => {
  if (currentMode !== "film") setMode("film");
});

modeLitBtn.addEventListener("click", () => {
  if (currentMode !== "literature") setMode("literature");
});

// No initial render: we render after Play is pressed.
