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
    // --- Add more film questions here (other Inside Out scenes or other movies) ---
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
  },
  {
  id: "lit-pagesco-bookwanderers-31",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The character who knows her name",
  tier: "Owl",
  gates: ["WorldLogicShift", "IdentityTension", "RelationshipShift"],
  gateIcons: ["🔮", "🎭", "🫂"],
  skill: "Theme Connection",
  scene:
    "Inside a story, Tilly meets a character who says her name before she introduces herself. " +
    "The character smiles kindly, as if they have known her for a long time.",
  prompt: "What deeper idea does this moment suggest?",
  options: [
    {
      text: "Stories know Tilly in a personal way, hinting that she belongs to them more deeply than she realized.",
      isCorrect: true
    },
    {
      text: "The character has met every reader who has ever opened the book.",
      isCorrect: false
    },
    {
      text: "Tilly should not read books because characters might learn too much about her.",
      isCorrect: false
    },
    {
      text: "This character is pretending to recognize everyone they meet.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-32",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The shelf that creaks at the right moment",
  tier: "Firefly",
  gates: ["WorldLogicShift", "EmotionalContradiction"],
  gateIcons: ["🔮", "🎨"],
  skill: "Scene Purpose",
  scene:
    "As Tilly hesitates over whether to follow a clue, a tall bookshelf creaks sharply. " +
    "It's just a normal sound—but it feels like a nudge.",
  prompt: "What role does this creaking shelf play?",
  options: [
    {
      text: "It gives Tilly a small push to act, blending ordinary life with something slightly magical.",
      isCorrect: true
    },
    {
      text: "It warns Tilly that the shop is falling apart and unsafe.",
      isCorrect: false
    },
    {
      text: "It shows that she should stop thinking about clues altogether.",
      isCorrect: false
    },
    {
      text: "It proves that someone is hiding inside the bookshelf.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-33",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The memory she cannot place",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Insight",
  scene:
    "When Tilly touches the spine of a certain book, she feels a warm flicker of a memory—" +
    "a moment she can't quite recall. It makes her both comforted and unsettled.",
  prompt: "What does this moment reveal about Tilly?",
  options: [
    {
      text: "She feels drawn to stories in a way connected to her past, even if she does not fully understand why.",
      isCorrect: true
    },
    {
      text: "She remembers every story she has ever read with perfect clarity.",
      isCorrect: false
    },
    {
      text: "She dislikes this book and wants to avoid it.",
      isCorrect: false
    },
    {
      text: "She is confused because she has never read a book before.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-34",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A story whisper in the corner",
  tier: "Owl",
  gates: ["WorldLogicShift", "SecretExchange", "ThresholdMoment"],
  gateIcons: ["🔮", "✉️", "🚪"],
  skill: "Symbolism",
  scene:
    "As Tilly shelves books, she hears a faint whisper near the classics section—" +
    "a whisper that seems to come from no one. A book on the top shelf shivers slightly.",
  prompt: "What might the whisper symbolize in this moment?",
  options: [
    {
      text: "The stories are inviting Tilly deeper, hinting that a new world is opening if she is brave enough to step forward.",
      isCorrect: true
    },
    {
      text: "Someone is hiding behind the shelves and making fun of her.",
      isCorrect: false
    },
    {
      text: "The whisper shows that the shop is poorly built and drafty.",
      isCorrect: false
    },
    {
      text: "The books are warning Tilly never to touch them again.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-35",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A friend who doesn't quite believe her",
  tier: "Firefly",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "Tilly excitedly tries to tell her friend about a strange moment in the bookshop, " +
    "but her friend laughs it off—kindly, but dismissively.",
  prompt: "What shift happens in this moment?",
  options: [
    {
      text: "Tilly realizes her friend cares about her but cannot fully share or understand the magic she is experiencing.",
      isCorrect: true
    },
    {
      text: "Tilly understands that her friend dislikes reading altogether.",
      isCorrect: false
    },
    {
      text: "Her friend believes every word and wants to join the adventure immediately.",
      isCorrect: false
    },
    {
      text: "Her friend is angry and refuses to speak with her again.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-36",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Ink on her fingertips",
  tier: "Fox",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Symbolism",
  scene:
    "After reading a passage aloud, Tilly notices black ink smudged on her fingertips—" +
    "even though she never touched the printed page.",
  prompt: "What does the ink most likely symbolize?",
  options: [
    {
      text: "The boundary between Tilly and the stories is thinning, marking her as someone who belongs inside them.",
      isCorrect: true
    },
    {
      text: "The printer made a mistake while publishing the book.",
      isCorrect: false
    },
    {
      text: "Tilly is getting messy and needs to wash her hands immediately.",
      isCorrect: false
    },
    {
      text: "The book is warning her to stop reading it.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-37",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The chapter that rearranges itself",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalContradiction", "ThresholdMoment"],
  gateIcons: ["🔮", "🎨", "🚪"],
  skill: "Scene Purpose",
  scene:
    "As Tilly flips back to reread a chapter, she notices the paragraphs aren't where she left them. " +
    "The story seems to be gently urging her toward a different page.",
  prompt: "What is the purpose of this strange moment?",
  options: [
    {
      text: "To show that the book is guiding Tilly toward something important she needs to discover next.",
      isCorrect: true
    },
    {
      text: "To prove that Tilly does not know how to read correctly.",
      isCorrect: false
    },
    {
      text: "To show that the author made a printing error.",
      isCorrect: false
    },
    {
      text: "To warn Tilly that she should stop rereading chapters altogether.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-38",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Her grandparents’ shared glance",
  tier: "Firefly",
  gates: ["RelationshipShift", "SecretExchange"],
  gateIcons: ["🫂", "✉️"],
  skill: "Character Insight",
  scene:
    "When Tilly mentions the odd feeling she had near a row of books, her grandparents exchange a quick look—" +
    "a look they try to hide.",
  prompt: "What does this shared glance reveal?",
  options: [
    {
      text: "They know more about what Tilly experienced than they are ready to explain.",
      isCorrect: true
    },
    {
      text: "They think Tilly is joking and want her to stop.",
      isCorrect: false
    },
    {
      text: "They believe Tilly imagined everything and are laughing at her.",
      isCorrect: false
    },
    {
      text: "They no longer want Tilly to help in the shop.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-39",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A doorway outlined in dust",
  tier: "Fox",
  gates: ["ThresholdMoment", "WorldLogicShift"],
  gateIcons: ["🚪", "🔮"],
  skill: "Symbolism",
  scene:
    "When Tilly stacks a pile of books aside, a faint rectangular outline in the dust appears on the floor—" +
    "as if a door once existed there long ago.",
  prompt: "What might this dusty outline symbolize?",
  options: [
    {
      text: "A hidden path or story Tilly has not yet discovered, waiting for her to choose to explore it.",
      isCorrect: true
    },
    {
      text: "Someone forgot to clean the floor for several years.",
      isCorrect: false
    },
    {
      text: "Tilly is imagining doors because she is bored.",
      isCorrect: false
    },
    {
      text: "The bookshop is running out of space and needs repairs.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-40",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A laugh that fades too quickly",
  tier: "Firefly",
  gates: ["EmotionalContradiction", "RelationshipShift"],
  gateIcons: ["🎨", "🫂"],
  skill: "Emotional Beat Shift",
  scene:
    "Tilly’s classmate laughs loudly at something funny Tilly says—" +
    "but the laugh ends too fast, like she suddenly remembered something troubling.",
  prompt: "What emotional change is happening here?",
  options: [
    {
      text: "The classmate is masking a worry or discomfort underneath her cheerful reaction.",
      isCorrect: true
    },
    {
      text: "She is laughing because she finds everything hilarious all the time.",
      isCorrect: false
    },
    {
      text: "She is annoyed and laughing only to be polite.",
      isCorrect: false
    },
    {
      text: "She did not really hear what Tilly said.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-41",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A book that feels warmer each time she touches it",
  tier: "Fox",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Symbolism",
  scene:
    "Tilly notices that a particular book seems warmer each time she lays her hand on it—" +
    "as if it recognizes her.",
  prompt: "What might the warming book suggest?",
  options: [
    {
      text: "The story may be connected to Tilly personally, responding to her growing awareness.",
      isCorrect: true
    },
    {
      text: "The book is overheating and needs to be repaired.",
      isCorrect: false
    },
    {
      text: "Someone placed a heater under the shelf.",
      isCorrect: false
    },
    {
      text: "The book wants her to stop touching it.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-42",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The bookmark that flips itself",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment", "EmotionalContradiction"],
  gateIcons: ["🔮", "🚪", "🎨"],
  skill: "Scene Purpose",
  scene:
    "When Tilly opens a novel, the bookmark slides forward on its own to a later chapter. " +
    "Tilly hesitates, unsure whether to follow where it leads.",
  prompt: "How does this moment deepen the story?",
  options: [
    {
      text: "It shows the book guiding Tilly toward a discovery she might fear but needs to face.",
      isCorrect: true
    },
    {
      text: "It proves the bookmark is broken and needs replacing.",
      isCorrect: false
    },
    {
      text: "It means Tilly should skip reading entirely.",
      isCorrect: false
    },
    {
      text: "It shows that Tilly dislikes this book and wants to stop reading.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-43",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Her mother’s name written in fading ink",
  tier: "Owl",
  gates: ["SecretExchange", "IdentityTension", "EmotionalContradiction"],
  gateIcons: ["✉️", "🎭", "🎨"],
  skill: "Theme Connection",
  scene:
    "Tilly opens a book and sees her mother’s name softly written on the inside cover—" +
    "so faint it looks ready to disappear.",
  prompt: "What deeper meaning does this fading signature convey?",
  options: [
    {
      text: "Tilly’s connection to her mother is fragile but still alive, waiting for her to uncover the truth.",
      isCorrect: true
    },
    {
      text: "Her mother wanted to hide all evidence of ever reading books.",
      isCorrect: false
    },
    {
      text: "The bookshop keeps damaging old books by accident.",
      isCorrect: false
    },
    {
      text: "Someone else forged the signature for fun.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-44",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A repeated dream of stacked books",
  tier: "Fox",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Character Insight",
  scene:
    "Tilly dreams again of towering stacks of books leaning toward her—" +
    "but this time, instead of falling, they form a path.",
  prompt: "What change does this repeated dream show?",
  options: [
    {
      text: "Tilly is starting to see her journey as something she can walk into, not something crashing down on her.",
      isCorrect: true
    },
    {
      text: "Her dreams are becoming less interesting to her.",
      isCorrect: false
    },
    {
      text: "She wants to stop reading before bed.",
      isCorrect: false
    },
    {
      text: "The books are warning her not to trust any stories.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-45",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A page that ripples like water",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment"],
  gateIcons: ["🔮", "🚪"],
  skill: "Symbolism",
  scene:
    "As Tilly leans closer to a page, the printed words gently ripple outward—" +
    "like the surface of a pond after a pebble drops.",
  prompt: "What does this ripple most likely symbolize?",
  options: [
    {
      text: "Crossing into a story may deepen and widen her understanding, like stepping into unknown waters.",
      isCorrect: true
    },
    {
      text: "The book is damaged from water and needs repair.",
      isCorrect: false
    },
    {
      text: "Tilly is dizzy and imagining the ripple.",
      isCorrect: false
    },
    {
      text: "The story wants her to close it immediately.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-46",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A question she almost asks",
  tier: "Firefly",
  gates: ["IdentityTension", "SecretExchange"],
  gateIcons: ["🎭", "✉️"],
  skill: "Character Motivation",
  scene:
    "Tilly opens her mouth to ask her grandparents about her mother—" +
    "then closes it again, unsure whether she is ready for the answer.",
  prompt: "What does this hesitation show about Tilly?",
  options: [
    {
      text: "She wants to know the truth but fears what learning it might change.",
      isCorrect: true
    },
    {
      text: "She has no interest in learning about her mother.",
      isCorrect: false
    },
    {
      text: "She forgets what question she wanted to ask.",
      isCorrect: false
    },
    {
      text: "She thinks her grandparents never knew her mother at all.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-47",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A curious shift in the air",
  tier: "Firefly",
  gates: ["WorldLogicShift", "RelationshipShift"],
  gateIcons: ["🔮", "🫂"],
  skill: "Scene Purpose",
  scene:
    "As Tilly and a story character walk side by side, the air between them feels charged—" +
    "like the beginning of a new understanding.",
  prompt: "What does this charged feeling show?",
  options: [
    {
      text: "A new connection is forming between Tilly and the character as their worlds draw closer.",
      isCorrect: true
    },
    {
      text: "The air pressure in the story world changes randomly for no reason.",
      isCorrect: false
    },
    {
      text: "The character is planning to trick Tilly soon.",
      isCorrect: false
    },
    {
      text: "Tilly wants to end the adventure quickly.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-48",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The book that opens itself at midnight",
    tier: "Fox",
    gates: ["WorldLogicShift", "SecretExchange", "ThresholdMoment"],
    gateIcons: ["🔮", "✉️", "🚪"],
    skill: "Scene Purpose",
    scene:
      "Tilly wakes in the night to the soft sound of a book opening on her desk—" +
      "slowly, as if by invitation.",
    prompt: "What does this midnight moment suggest?",
    options: [
      {
        text: "A new part of the story is calling to Tilly, urging her toward a deeper step into the book world.",
        isCorrect: true
      },
      {
        text: "The window breeze is blowing her books open randomly.",
        isCorrect: false
      },
      {
        text: "Someone sneaked into her room to prank her.",
        isCorrect: false
      },
      {
        text: "Tilly should never read books late at night.",
        isCorrect: false
      }
    ]
},
{
  id: "lit-pagesco-bookwanderers-49",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A reflection that looks braver than she feels",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Insight",
  scene:
    "Tilly sees her reflection in the polished counter—standing taller than she feels inside. " +
    "She wonders if she can grow into the version of herself she sees.",
  prompt: "What does this reflection moment show?",
  options: [
    {
      text: "Tilly is beginning to imagine a braver version of herself and wonders if she can become it.",
      isCorrect: true
    },
    {
      text: "Tilly thinks she looks too tall and wants to avoid mirrors.",
      isCorrect: false
    },
    {
      text: "She dislikes reflections and avoids all polished surfaces.",
      isCorrect: false
    },
    {
      text: "The counter is warped and making everyone look taller.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-50",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A memory echoing through a story scene",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "Inside a story, Tilly watches a scene that feels uncannily similar to a moment from her own childhood—" +
    "yet changed, as if the story remembers her differently.",
  prompt: "What deeper idea does this echoing moment reveal?",
  options: [
    {
      text: "Stories reflect pieces of Tilly’s life back to her, helping her understand herself through their world.",
      isCorrect: true
    },
    {
      text: "The story is copying her life because it has run out of original ideas.",
      isCorrect: false
    },
    {
      text: "Tilly’s childhood memories were incorrect all along.",
      isCorrect: false
    },
    {
      text: "The scene proves that stories should never relate to real life.",
      isCorrect: false
    }
  ]
}

    // --- Add more literature questions here (for other books/series) ---
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
