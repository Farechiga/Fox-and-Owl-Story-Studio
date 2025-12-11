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
    },
    {
        id: "film-mulan-1",
        source: "Mulan",
        sceneTitle: "The matchmaker’s test",
        tier: "Firefly",
        gates: ["IdentityTension", "RelationshipShift"],
        gateIcons: ["🎭", "🫂"],
        skill: "Character Insight",
        scene:
          "During the matchmaker ceremony, Mulan tries to follow every rule perfectly, " +
          "but her nervousness causes one mistake after another. Her family watches anxiously.",
        prompt: "What does this moment show about Mulan?",
        options: [
          {
            text: "She feels pressure to fit a role that doesn’t match who she truly is inside.",
            isCorrect: true
          },
          {
            text: "She enjoys making mistakes because they make the day more exciting.",
            isCorrect: false
          },
          {
            text: "She hopes the matchmaker will ask her to become a warrior immediately.",
            isCorrect: false
          },
          {
            text: "She wants the matchmaker to judge her harshly so she can go home faster.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-2",
        source: "Mulan",
        sceneTitle: "Her father struggling to stand",
        tier: "Fox",
        gates: ["EmotionalContradiction", "IdentityTension"],
        gateIcons: ["🎨", "🎭"],
        skill: "Emotional Beat Shift",
        scene:
          "When the imperial messenger demands one man from each family, Mulan watches her father lift his sword—" +
          "hands trembling, legs unsteady, pride undimmed.",
        prompt: "What emotional contrast does Mulan see here?",
        options: [
          {
            text: "She feels both pride in her father’s bravery and fear for his safety.",
            isCorrect: true
          },
          {
            text: "She thinks her father is pretending to struggle for attention.",
            isCorrect: false
          },
          {
            text: "She believes her father wants her to take his place immediately.",
            isCorrect: false
          },
          {
            text: "She sees that her father is eager to fight because he enjoys battle.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-3",
        source: "Mulan",
        sceneTitle: "Cutting her hair",
        tier: "Owl",
        gates: ["IdentityTension", "ThresholdMoment", "EmotionalContradiction"],
        gateIcons: ["🎭", "🚪", "🎨"],
        skill: "Theme Connection",
        scene:
          "Alone in the family shrine, Mulan cuts her hair, takes her father’s armor, and ties up her long robe. " +
          "Her face shows both determination and fear.",
        prompt: "What deeper idea does this transformation highlight?",
        options: [
          {
            text: "She is choosing to step into a new identity, even though the cost and danger scare her.",
            isCorrect: true
          },
          {
            text: "She wants to abandon her family forever and live in the mountains.",
            isCorrect: false
          },
          {
            text: "She believes becoming a warrior will instantly solve all her problems.",
            isCorrect: false
          },
          {
            text: "She is trying to trick her family into thinking she ran away for fun.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-4",
        source: "Mulan",
        sceneTitle: "Arrival at camp",
        tier: "Firefly",
        gates: ["RelationshipShift", "IdentityTension"],
        gateIcons: ["🫂", "🎭"],
        skill: "Scene Purpose",
        scene:
          "Mulan awkwardly imitates the soldiers, trying to walk, talk, and behave like them to avoid suspicion.",
        prompt: "What purpose does this scene serve?",
        options: [
          {
            text: "It shows how difficult it is for Mulan to pretend to be someone she isn’t.",
            isCorrect: true
          },
          {
            text: "It proves Mulan immediately blends in perfectly with no difficulty.",
            isCorrect: false
          },
          {
            text: "It suggests she dislikes every person in the camp.",
            isCorrect: false
          },
          {
            text: "It shows that soldiers do not have rules or routines.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-5",
        source: "Mulan",
        sceneTitle: "Mushu’s pep talk",
        tier: "Firefly",
        gates: ["RelationshipShift", "EmotionalContradiction"],
        gateIcons: ["🫂", "🎨"],
        skill: "Character Motivation",
        scene:
          "Mushu tries to encourage Mulan, joking loudly even as she quietly doubts whether she can stay in disguise.",
        prompt: "How does Mushu affect Mulan in this moment?",
        options: [
          {
            text: "He boosts her confidence, even if she still feels unsure inside.",
            isCorrect: true
          },
          {
            text: "He convinces her to quit and return home immediately.",
            isCorrect: false
          },
          {
            text: "He wants her to fail so he can leave the mission early.",
            isCorrect: false
          },
          {
            text: "He believes she should ignore all challenges instead of facing them.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-6",
        source: "Mulan",
        sceneTitle: "Training scene – getting the arrow",
        tier: "Fox",
        gates: ["IdentityTension", "ThresholdMoment", "EmotionalEcho"],
        gateIcons: ["🎭", "🚪", "📆"],
        skill: "Scene Purpose",
        scene:
          "After struggling for days, Mulan climbs the pole and retrieves the arrow, surpassing every soldier who doubted her.",
        prompt: "Why is this moment important?",
        options: [
          {
            text: "It shows Mulan crossing from self-doubt into earned confidence through hard work.",
            isCorrect: true
          },
          {
            text: "It means she no longer needs to train at all.",
            isCorrect: false
          },
          {
            text: "It shows she is suddenly stronger than every warrior in China.",
            isCorrect: false
          },
          {
            text: "It proves she only succeeds when someone helps her directly.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-7",
        source: "Mulan",
        sceneTitle: "The mountain ambush",
        tier: "Owl",
        gates: ["WorldLogicShift", "ThresholdMoment", "EmotionalContradiction"],
        gateIcons: ["🔮", "🚪", "🎨"],
        skill: "Theme Connection",
        scene:
          "Surrounded by Huns in the snowy mountains, Mulan fires a cannon into the peak, causing an avalanche that turns the battle.",
        prompt: "What does this moment reveal about Mulan?",
        options: [
          {
            text: "She uses creativity and courage to solve problems in ways the rules never expected.",
            isCorrect: true
          },
          {
            text: "She prefers to avoid thinking and use chaos whenever possible.",
            isCorrect: false
          },
          {
            text: "She wants to defeat both sides so she can go home early.",
            isCorrect: false
          },
          {
            text: "She panicked and accidentally caused the avalanche.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-8",
        source: "Mulan",
        sceneTitle: "Revealed identity in the snow",
        tier: "Fox",
        gates: ["IdentityTension", "RelationshipShift", "EmotionalContradiction"],
        gateIcons: ["🎭", "🫂", "🎨"],
        skill: "Character Insight",
        scene:
          "When Mulan’s disguise is discovered, the soldiers’ faces shift from shock to betrayal to sadness.",
        prompt: "What does this scene reveal about their relationship?",
        options: [
          {
            text: "Their trust is shaken, even though many of them cared about her.",
            isCorrect: true
          },
          {
            text: "They never liked her and were waiting for a reason to punish her.",
            isCorrect: false
          },
          {
            text: "They are excited that she tricked them successfully.",
            isCorrect: false
          },
          {
            text: "They immediately understand and support her without hesitation.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-9",
        source: "Mulan",
        sceneTitle: "Left in the snow",
        tier: "Owl",
        gates: ["IdentityTension", "EmotionalContradiction"],
        gateIcons: ["🎭", "🎨"],
        skill: "Theme Connection",
        scene:
          "After being expelled, Mulan sits alone in the snow, torn between shame and the realization that the Huns still pose a threat.",
        prompt: "What deeper struggle does this highlight?",
        options: [
          {
            text: "She questions whether her mistakes define her—or whether she can still make choices that matter.",
            isCorrect: true
          },
          {
            text: "She believes she must now give up on helping anyone.",
            isCorrect: false
          },
          {
            text: "She realizes she prefers being alone and wants to stay in the mountains.",
            isCorrect: false
          },
          {
            text: "She thinks the army never needed her in the first place.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-10",
        source: "Mulan",
        sceneTitle: "Warning the city",
        tier: "Fox",
        gates: ["ThresholdMoment", "RelationshipShift"],
        gateIcons: ["🚪", "🫂"],
        skill: "Scene Purpose",
        scene:
          "Mulan races ahead to warn the imperial city about the Hun survivors, even though the soldiers still doubt her.",
        prompt: "What shift happens in this scene?",
        options: [
          {
            text: "Mulan chooses duty over pride, taking action even when others refuse to listen.",
            isCorrect: true
          },
          {
            text: "She wants to frighten the city for her own amusement.",
            isCorrect: false
          },
          {
            text: "She hopes the city guards will praise her disguise.",
            isCorrect: false
          },
          {
            text: "She believes the Huns will turn back peacefully if ignored.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-11",
        source: "Mulan",
        sceneTitle: "The emperor’s lesson",
        tier: "Owl",
        gates: ["IdentityTension", "EmotionalEcho"],
        gateIcons: ["🎭", "📆"],
        skill: "Theme Connection",
        scene:
          "After Mulan defeats Shan Yu, the Emperor tells her, 'A single grain of rice can tip the scale.'",
        prompt: "What does this message highlight?",
        options: [
          {
            text: "Small acts of bravery can change the fate of many— even when others overlook you.",
            isCorrect: true
          },
          {
            text: "Only emperors make important decisions, never ordinary people.",
            isCorrect: false
          },
          {
            text: "The Emperor regrets letting anyone fight the Huns.",
            isCorrect: false
          },
          {
            text: "Shan Yu was defeated only because of luck.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-12",
        source: "Mulan",
        sceneTitle: "The crowd bowing",
        tier: "Fox",
        gates: ["RelationshipShift", "EmotionalContradiction"],
        gateIcons: ["🫂", "🎨"],
        skill: "Emotional Shift",
        scene:
          "The entire imperial crowd bows to Mulan, including those who once doubted her.",
        prompt: "What emotional shift occurs here?",
        options: [
          {
            text: "Those who dismissed Mulan now honor her for her courage and leadership.",
            isCorrect: true
          },
          {
            text: "They feel forced to bow and do not respect her at all.",
            isCorrect: false
          },
          {
            text: "They bow only because they are confused about who she is.",
            isCorrect: false
          },
          {
            text: "They bow because they think Mulan is secretly the Emperor.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-13",
        source: "Mulan",
        sceneTitle: "Returning home",
        tier: "Firefly",
        gates: ["IdentityTension", "EmotionalContradiction"],
        gateIcons: ["🎭", "🎨"],
        skill: "Character Insight",
        scene:
          "When Mulan sees her family’s home again, joy mixes with fear about how they will receive her.",
        prompt: "What does this moment reveal?",
        options: [
          {
            text: "She is proud of who she has become but unsure whether her family will understand her choices.",
            isCorrect: true
          },
          {
            text: "She wishes she had never gone on the journey at all.",
            isCorrect: false
          },
          {
            text: "She expects her family to punish her immediately.",
            isCorrect: false
          },
          {
            text: "She wants to hide her accomplishments and keep them secret forever.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-14",
        source: "Mulan",
        sceneTitle: "Her father dropping the sword",
        tier: "Owl",
        gates: ["EmotionalContradiction", "RelationshipShift"],
        gateIcons: ["🎨", "🫂"],
        skill: "Theme Connection",
        scene:
          "Mulan offers her father the Emperor’s crest and Shan Yu’s sword. Instead of praising her achievements, he drops the sword and hugs her tightly.",
        prompt: "What deeper idea does this moment show?",
        options: [
          {
            text: "Her father values her life and character far above medals or victory.",
            isCorrect: true
          },
          {
            text: "He dislikes swords and wishes she brought home something else.",
            isCorrect: false
          },
          {
            text: "He wants her to go back to the army immediately.",
            isCorrect: false
          },
          {
            text: "He thinks the Emperor made a mistake by rewarding her.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-15",
        source: "Mulan",
        sceneTitle: "Mushu’s restored honor",
        tier: "Firefly",
        gates: ["EmotionalContradiction", "RelationshipShift"],
        gateIcons: ["🎨", "🫂"],
        skill: "Scene Purpose",
        scene:
          "Mushu celebrates wildly after being reinstated as a family guardian, while pretending he never doubted things would work out.",
        prompt: "What does this scene show about Mushu?",
        options: [
          {
            text: "His pride masks how much he truly cares about Mulan’s journey and success.",
            isCorrect: true
          },
          {
            text: "He only helped Mulan for personal gain and still feels disappointed.",
            isCorrect: false
          },
          {
            text: "He plans to retire and avoid helping anyone ever again.",
            isCorrect: false
          },
          {
            text: "He believes guardians never make mistakes.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-16",
        source: "Mulan",
        sceneTitle: "Mulan volunteering quietly",
        tier: "Firefly",
        gates: ["IdentityTension", "RelationshipShift"],
        gateIcons: ["🎭", "🫂"],
        skill: "Character Motivation",
        scene:
          "When the army needs volunteers, Mulan steps forward without fanfare, while others brag about their strength.",
        prompt: "What does her quiet volunteering show?",
        options: [
          {
            text: "She wants to help for the right reasons, not for attention or glory.",
            isCorrect: true
          },
          {
            text: "She hopes no one notices that she volunteered.",
            isCorrect: false
          },
          {
            text: "She does not want to fight but feels forced to join.",
            isCorrect: false
          },
          {
            text: "She volunteers only because she misunderstood the question.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-17",
        source: "Mulan",
        sceneTitle: "Shan Yu’s reaction to being outsmarted",
        tier: "Fox",
        gates: ["RelationshipShift", "EmotionalContradiction"],
        gateIcons: ["🫂", "🎨"],
        skill: "Character Insight",
        scene:
          "When Mulan uses clever tactics against him, Shan Yu’s expression shifts from mockery to rage to a flicker of respect.",
        prompt: "What does this reveal about Shan Yu?",
        options: [
          {
            text: "He recognizes Mulan as a true opponent, not someone beneath his notice.",
            isCorrect: true
          },
          {
            text: "He believes she is too weak to threaten him at all.",
            isCorrect: false
          },
          {
            text: "He planned to lose so he could embarrass the army.",
            isCorrect: false
          },
          {
            text: "He thinks Mulan’s strategy proves she is secretly a spy.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-18",
        source: "Mulan",
        sceneTitle: "Mulan choosing honesty",
        tier: "Owl",
        gates: ["IdentityTension", "ThresholdMoment"],
        gateIcons: ["🎭", "🚪"],
        skill: "Theme Connection",
        scene:
          "Mulan tells Shang, 'You don’t have to like me, but you will listen,' refusing to hide her identity anymore.",
        prompt: "What shift does this show in Mulan?",
        options: [
          {
            text: "She now values truth and courage over staying hidden or accepted.",
            isCorrect: true
          },
          {
            text: "She wants to argue with Shang for no reason.",
            isCorrect: false
          },
          {
            text: "She believes honesty will make everyone support her instantly.",
            isCorrect: false
          },
          {
            text: "She regrets every choice she has made so far.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-19",
        source: "Mulan",
        sceneTitle: "The reunion with her horse",
        tier: "Firefly",
        gates: ["EmotionalEcho", "RelationshipShift"],
        gateIcons: ["📆", "🫂"],
        skill: "Emotional Shift",
        scene:
          "When Mulan returns home, her horse whinnies happily and nudges her, repeating the same greeting from when she first left.",
        prompt: "What does this repeated moment show?",
        options: [
          {
            text: "She has changed, but her bond with those who love her remains steady.",
            isCorrect: true
          },
          {
            text: "Her horse is confused and doesn’t remember her journey.",
            isCorrect: false
          },
          {
            text: "The horse wants her to leave again immediately.",
            isCorrect: false
          },
          {
            text: "It proves the horse dislikes the family home.",
            isCorrect: false
          }
        ]
      },
      {
        id: "film-mulan-20",
        source: "Mulan",
        sceneTitle: "Shang’s quiet visit",
        tier: "Fox",
        gates: ["RelationshipShift", "EmotionalContradiction", "IdentityTension"],
        gateIcons: ["🫂", "🎨", "🎭"],
        skill: "Character Insight",
        scene:
          "Shang arrives at Mulan’s home with an awkward smile, unsure what to say, while Mulan looks both hopeful and nervous.",
        prompt: "What does this moment show about both of them?",
        options: [
          {
            text: "They respect each other deeply but are uncertain how to express their feelings after everything that happened.",
            isCorrect: true
          },
          {
            text: "They no longer trust each other at all.",
            isCorrect: false
          },
          {
            text: "Shang wants to recruit Mulan back into the army immediately.",
            isCorrect: false
          },
          {
            text: "Mulan regrets ever speaking to Shang during the journey.",
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
  },
  {
    id: "lit-pagesco-bookwanderers-51",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Choosing a book for someone else",
    tier: "Firefly",
    gates: ["RelationshipShift", "IdentityTension"],
    gateIcons: ["🫂", "🎭"],
    skill: "Character Insight",
    scene:
      "A customer asks Tilly to recommend a book for a child who 'doesn’t like reading.' " +
      "Tilly frowns thoughtfully, wanting to pick something that might change that.",
    prompt: "What does this scene show about Tilly?",
    options: [
      {
        text: "She takes other readers seriously and wants to help them find stories that fit who they are.",
        isCorrect: true
      },
      {
        text: "She only cares about recommending her own favorite book every time.",
        isCorrect: false
      },
      {
        text: "She dislikes helping customers and wants the job to be over quickly.",
        isCorrect: false
      },
      {
        text: "She believes some people will never enjoy stories, so it doesn’t matter what she chooses.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-52",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Laughing inside a scary chapter",
    tier: "Fox",
    gates: ["EmotionalContradiction", "WorldLogicShift"],
    gateIcons: ["🎨", "🔮"],
    skill: "Emotional Beat Shift",
    scene:
      "While wandering in a tense story, Tilly finds herself giggling at a small, silly detail " +
      "even though the scene around her is dark and frightening.",
    prompt: "What does this mixed reaction show?",
    options: [
      {
        text: "Even in frightening moments, stories can hold tiny pieces of comfort or humor that help readers cope.",
        isCorrect: true
      },
      {
        text: "Tilly is not really scared by any part of the story.",
        isCorrect: false
      },
      {
        text: "The story is poorly written because it includes different moods.",
        isCorrect: false
      },
      {
        text: "Tilly is trying to ruin the serious mood on purpose.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-53",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A character who disobeys the plot",
    tier: "Owl",
    gates: ["WorldLogicShift", "ThresholdMoment", "IdentityTension"],
    gateIcons: ["🔮", "🚪", "🎭"],
    skill: "Theme Connection",
    scene:
      "Inside a novel, Tilly watches a character pause and say, 'I don't think I want to do what the story expects of me.' " +
      "The scene seems to hang, waiting.",
    prompt: "What deeper idea does this moment explore?",
    options: [
      {
        text: "Characters—and readers—can question the roles they are given and choose a different path.",
        isCorrect: true
      },
      {
        text: "Stories only work if characters obey every rule exactly.",
        isCorrect: false
      },
      {
        text: "This character is broken and does not belong in books.",
        isCorrect: false
      },
      {
        text: "Readers should never notice when characters struggle with choices.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-54",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The bookmark she lends to a friend",
    tier: "Firefly",
    gates: ["RelationshipShift", "EmotionalEcho"],
    gateIcons: ["🫂", "📆"],
    skill: "Relationship Change",
    scene:
      "Tilly quietly hands her own favorite bookmark to a friend who is starting a book she loves. " +
      "She remembers her mother once doing the same thing for her.",
    prompt: "What change does this moment show?",
    options: [
      {
        text: "Tilly is beginning to pass on the same kind of care and book-love she once received.",
        isCorrect: true
      },
      {
        text: "She no longer cares about the bookmark and wants to get rid of it.",
        isCorrect: false
      },
      {
        text: "She wants her friend to finish the book quickly so she can have the bookmark back.",
        isCorrect: false
      },
      {
        text: "She is trying to show that bookmarks are more important than stories.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-55",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Shelving a book she now sees differently",
    tier: "Fox",
    gates: ["EmotionalEcho", "IdentityTension"],
    gateIcons: ["📆", "🎭"],
    skill: "Scene Purpose",
    scene:
      "Tilly slides a book back onto the shelf that she once thought was boring, " +
      "but now she lingers over the cover with new respect.",
    prompt: "What does this repeated action reveal?",
    options: [
      {
        text: "Her understanding of stories is growing, and she can see more value in books than she did before.",
        isCorrect: true
      },
      {
        text: "She is equally bored by all books and just pretending to like them.",
        isCorrect: false
      },
      {
        text: "She is annoyed that she ever read that book.",
        isCorrect: false
      },
      {
        text: "She is planning to hide the book so no one checks it out.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-56",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The rule she chooses to bend",
    tier: "Owl",
    gates: ["ThresholdMoment", "SecretExchange", "IdentityTension"],
    gateIcons: ["🚪", "✉️", "🎭"],
    skill: "Character Motivation",
    scene:
      "Tilly remembers the rule about not bookwandering alone. " +
      "She glances toward the door of a story she believes might hold answers about her mother and steps through anyway.",
    prompt: "What does this decision show about Tilly at this point in the story?",
    options: [
      {
        text: "Her need to learn the truth about herself is strong enough that she is willing to risk breaking a rule.",
        isCorrect: true
      },
      {
        text: "She no longer cares what happens to her in stories.",
        isCorrect: false
      },
      {
        text: "She has forgotten the rule and is wandering by mistake.",
        isCorrect: false
      },
      {
        text: "She believes rules never matter in magical places.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-57",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A story character who disappoints her",
    tier: "Fox",
    gates: ["RelationshipShift", "EmotionalContradiction"],
    gateIcons: ["🫂", "🎨"],
    skill: "Character Insight",
    scene:
      "Tilly finally meets a favorite character in person, only to find them grumpy and less noble than she imagined.",
    prompt: "What does this disappointing meeting teach Tilly?",
    options: [
      {
        text: "Even beloved characters can be more complicated up close, just like real people.",
        isCorrect: true
      },
      {
        text: "She should stop liking any characters that ever make mistakes.",
        isCorrect: false
      },
      {
        text: "The author must have written the character incorrectly.",
        isCorrect: false
      },
      {
        text: "She should avoid meeting characters from books she enjoys.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-58",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Whispers that sound like turning pages",
    tier: "Owl",
    gates: ["WorldLogicShift", "SecretExchange"],
    gateIcons: ["🔮", "✉️"],
    skill: "Symbolism",
    scene:
      "At night, Tilly hears a soft hiss that sounds like pages turning in the dark, " +
      "even though all the books in her room are closed.",
    prompt: "What might this sound symbolize?",
    options: [
      {
        text: "Stories are still moving and alive around Tilly, even when she is not reading them.",
        isCorrect: true
      },
      {
        text: "The books are angry because she did not finish them fast enough.",
        isCorrect: false
      },
      {
        text: "Someone is secretly reading in another room and disturbing her sleep.",
        isCorrect: false
      },
      {
        text: "The noise proves that books should be locked away at night.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-59",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Borrowing courage from a heroine",
    tier: "Firefly",
    gates: ["IdentityTension", "EmotionalEcho"],
    gateIcons: ["🎭", "📆"],
    skill: "Character Motivation",
    scene:
      "Before doing something scary, Tilly silently repeats a brave line from a heroine she admires.",
    prompt: "What does this show about how stories affect Tilly?",
    options: [
      {
        text: "She uses moments from books as models for how she might act in her own life.",
        isCorrect: true
      },
      {
        text: "She believes she must copy every detail of a character’s life exactly.",
        isCorrect: false
      },
      {
        text: "She thinks real courage only exists in stories, not in real people.",
        isCorrect: false
      },
      {
        text: "She is trying to forget the heroine and focus on herself instead.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-60",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A secret shelf behind other books",
    tier: "Fox",
    gates: ["WorldLogicShift", "SecretExchange", "ThresholdMoment"],
    gateIcons: ["🔮", "✉️", "🚪"],
    skill: "Scene Purpose",
    scene:
      "While straightening a row, Tilly accidentally pushes the books too far back " +
      "and discovers a hidden lower shelf holding a few unfamiliar titles.",
    prompt: "How does this discovery function in the story?",
    options: [
      {
        text: "It opens a new path in the mystery, suggesting that some stories were hidden on purpose.",
        isCorrect: true
      },
      {
        text: "It shows that the shop’s shelves are poorly built.",
        isCorrect: false
      },
      {
        text: "It proves that Tilly is careless with book organization.",
        isCorrect: false
      },
      {
        text: "It is only included to show that the shop has many books and nothing more.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-61",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Returning from a story with grass on her shoes",
    tier: "Owl",
    gates: ["WorldLogicShift", "EmotionalEcho"],
    gateIcons: ["🔮", "📆"],
    skill: "Symbolism",
    scene:
      "After leaving a countryside story, Tilly looks down to find tiny bits of grass and mud still clinging to her shoes.",
    prompt: "What does this detail suggest?",
    options: [
      {
        text: "The story world and the real world are beginning to overlap in physical, not just imaginary, ways.",
        isCorrect: true
      },
      {
        text: "Tilly was secretly outside in the real countryside all along.",
        isCorrect: false
      },
      {
        text: "The shop’s floor is always dirty and messy.",
        isCorrect: false
      },
      {
        text: "She has started collecting pieces of scenery as souvenirs.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-62",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A friend finally asking a serious question",
    tier: "Firefly",
    gates: ["RelationshipShift", "IdentityTension"],
    gateIcons: ["🫂", "🎭"],
    skill: "Relationship Change",
    scene:
      "After joking about bookwandering for days, Tilly’s friend suddenly grows quiet and asks, " +
      "'What does it really feel like?'",
    prompt: "What does this question show about the friend?",
    options: [
      {
        text: "She is moving from teasing to genuine curiosity and wants to understand Tilly’s experience.",
        isCorrect: true
      },
      {
        text: "She has decided that bookwandering is silly and wants Tilly to stop.",
        isCorrect: false
      },
      {
        text: "She is bored and looking for a new topic to talk about.",
        isCorrect: false
      },
      {
        text: "She already knows everything and is testing Tilly’s memory.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-63",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A story that ends differently the second time",
    tier: "Owl",
    gates: ["WorldLogicShift", "EmotionalEcho"],
    gateIcons: ["🔮", "📆"],
    skill: "Theme Connection",
    scene:
      "When Tilly rereads the ending of a book by stepping back into it, " +
      "small details change, and the final lines feel more hopeful than before.",
    prompt: "What does this shifting ending suggest?",
    options: [
      {
        text: "Stories can reflect the reader’s own growth, so the same scene may feel different as Tilly changes.",
        isCorrect: true
      },
      {
        text: "The author keeps secretly rewriting the book every night.",
        isCorrect: false
      },
      {
        text: "Tilly misremembered the original ending and is now correcting it.",
        isCorrect: false
      },
      {
        text: "Endings are never important in stories.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-64",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Balancing two promises",
    tier: "Fox",
    gates: ["IdentityTension", "RelationshipShift", "SecretExchange"],
    gateIcons: ["🎭", "🫂", "✉️"],
    skill: "Character Motivation",
    scene:
      "Tilly promises a friend she will meet her after school, " +
      "but she has also quietly promised herself to investigate a clue in the shop at that time.",
    prompt: "What tension is created in this scene?",
    options: [
      {
        text: "Tilly is torn between loyalty to her friend and her secret mission, forcing her to choose what matters most.",
        isCorrect: true
      },
      {
        text: "Tilly has forgotten both promises and will likely ignore them.",
        isCorrect: false
      },
      {
        text: "She wants to cancel both plans so she can stay home.",
        isCorrect: false
      },
      {
        text: "There is no real conflict because everyone will understand whatever she does.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-65",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A chapter title that feels aimed at her",
    tier: "Fox",
    gates: ["IdentityTension", "WorldLogicShift"],
    gateIcons: ["🎭", "🔮"],
    skill: "Symbolism",
    scene:
      "Tilly opens to a chapter called 'The Girl Who Stepped Between Worlds' " +
      "and shivers, feeling as though the title is pointing directly at her.",
    prompt: "What does this reaction show?",
    options: [
      {
        text: "Tilly recognizes herself in the story and feels the line between reader and character growing thin.",
        isCorrect: true
      },
      {
        text: "She thinks the author somehow predicted her exact name and life.",
        isCorrect: false
      },
      {
        text: "She dislikes stories about other girls and prefers different titles.",
        isCorrect: false
      },
      {
        text: "She is confused because every chapter in every book has the same title.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-66",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A character who remembers their last meeting",
    tier: "Owl",
    gates: ["WorldLogicShift", "EmotionalEcho", "RelationshipShift"],
    gateIcons: ["🔮", "📆", "🫂"],
    skill: "Scene Purpose",
    scene:
      "When Tilly returns to a story, the character she met last time greets her with, " +
      "'You came back,' as if no time has passed for them.",
    prompt: "How does this moment deepen the story’s rules?",
    options: [
      {
        text: "It shows that story characters carry memories of Tilly between visits, making their world feel continuous and real.",
        isCorrect: true
      },
      {
        text: "It proves that time is frozen everywhere Tilly goes.",
        isCorrect: false
      },
      {
        text: "It means Tilly has stayed too long in the story and cannot leave.",
        isCorrect: false
      },
      {
        text: "It suggests that characters welcome every reader in exactly the same way.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-67",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The moment she nearly closes the book",
    tier: "Firefly",
    gates: ["ThresholdMoment", "EmotionalContradiction"],
    gateIcons: ["🚪", "🎨"],
    skill: "Character Motivation",
    scene:
      "Scared by what might happen next, Tilly almost snaps a book shut—" +
      "then leaves it open on her lap, heart racing.",
    prompt: "What does her choice to keep the book open show?",
    options: [
      {
        text: "Even though she is afraid, she wants to face the story and see what comes next.",
        isCorrect: true
      },
      {
        text: "She does not care what happens and is only pretending to read.",
        isCorrect: false
      },
      {
        text: "She has forgotten where the close button is.",
        isCorrect: false
      },
      {
        text: "She thinks leaving books open will stop the plot from moving.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-68",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The shop feeling different after she changes",
    tier: "Fox",
    gates: ["EmotionalEcho", "IdentityTension"],
    gateIcons: ["📆", "🎭"],
    skill: "Scene Purpose",
    scene:
      "After a big decision, Tilly walks through the shop and notices the light looks warmer " +
      "and the shelves feel more welcoming, even though nothing has moved.",
    prompt: "What does this changed feeling suggest?",
    options: [
      {
        text: "Her inner change is affecting how she experiences the same place.",
        isCorrect: true
      },
      {
        text: "Someone secretly repainted the entire shop overnight.",
        isCorrect: false
      },
      {
        text: "She no longer cares about the shop at all.",
        isCorrect: false
      },
      {
        text: "The shop is trying to hide its magic from her now.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-69",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A letter she chooses not to read yet",
    tier: "Owl",
    gates: ["SecretExchange", "IdentityTension", "ThresholdMoment"],
    gateIcons: ["✉️", "🎭", "🚪"],
    skill: "Theme Connection",
    scene:
      "Tilly discovers a sealed letter with her name on it in a book from her mother. " +
      "She holds it to her chest instead of opening it right away.",
    prompt: "What does her delay in opening the letter reveal?",
    options: [
      {
        text: "She senses the letter could change how she sees herself and needs a moment before stepping into that new truth.",
        isCorrect: true
      },
      {
        text: "She has no interest in whatever the letter might say.",
        isCorrect: false
      },
      {
        text: "She plans to throw the letter away unread.",
        isCorrect: false
      },
      {
        text: "She thinks the letter is meant for someone else with the same name.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-70",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Sharing a story secret at last",
    tier: "Fox",
    gates: ["RelationshipShift", "SecretExchange", "EmotionalContradiction"],
    gateIcons: ["🫂", "✉️", "🎨"],
    skill: "Relationship Change",
    scene:
      "After keeping her adventures quiet for a long time, Tilly finally tells a friend the full truth about bookwandering. " +
      "She feels both terrified and relieved as she watches her friend’s face.",
    prompt: "What change does this confession bring to their relationship?",
    options: [
      {
        text: "Tilly is inviting her friend into a deeper, more honest bond, even though she risks not being believed.",
        isCorrect: true
      },
      {
        text: "She is trying to end the friendship by telling an unbelievable story.",
        isCorrect: false
      },
      {
        text: "She hopes her friend will promise never to talk about books again.",
        isCorrect: false
      },
      {
        text: "She wants to prove that she can keep secrets completely to herself.",
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
