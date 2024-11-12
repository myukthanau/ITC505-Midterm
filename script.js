// Story structure with stages and choices
const storyStages = {
  start: {
    text: "You are a new recruit of S.H.I.E.L.D., sent on a mission to retrieve the Tesseract before it falls into enemy hands. Do you accept?",
    choices: [
      { text: "Yes, I'm ready", nextStage: "shieldBase" },
      { text: "No, it's too dangerous", nextStage: "endDecline" }
    ],
    image: "https://img.goodfon.com/wallpaper/big/c/97/agents-of-shield-logo-marvel.webp"
  },
  shieldBase: {
    text: "At the S.H.I.E.L.D. base, you meet Nick Fury. He tells you that Loki is on his way to capture the Tesseract. You must stop him. Do you go alone or call for help?",
    choices: [
      { text: "Go alone", nextStage: "alonePath" },
      { text: "Call for help", nextStage: "callHeroes" }
    ],
    image: "https://images3.alphacoders.com/618/618421.jpg"
  },
  alonePath: {
    text: "You decide to go alone and enter the city where Loki has been seen. Suddenly, you encounter him! Do you try to fight him or sneak around?",
    choices: [
      { text: "Fight Loki", nextStage: "fightLoki" },
      { text: "Sneak around", nextStage: "sneakAround" }
    ],
    image: "https://images6.alphacoders.com/115/thumb-1920-1159898.jpg"
  },
  callHeroes: {
    text: "You call for backup, and Iron Man and Black Widow arrive. Together, you track down Loki. Do you want Iron Man to confront Loki, or will you approach him yourself?",
    choices: [
      { text: "Let Iron Man confront Loki", nextStage: "ironManConfront" },
      { text: "Approach Loki yourself", nextStage: "approachLoki" },
      { text: "Work together", nextStage: "teamFight" }
    ],
    image: "https://images5.alphacoders.com/373/thumb-1920-373526.jpg"
  },
  fightLoki: {
    text: "You engage in a fierce battle with Loki. He is powerful, but with skill and courage, you manage to weaken him. Just when victory seems near, he uses the Tesseract to escape. Mission incomplete.",
    choices: [],
    image: "https://images7.alphacoders.com/885/885941.jpg"
  },
  sneakAround: {
    text: "You manage to sneak past Loki and locate the Tesseract. You secure it and return it safely to S.H.I.E.L.D. Mission Accomplished!",
    choices: [],
    image: "https://i.redd.it/4bsntvjxbpd81.jpg"
  },
  ironManConfront: {
    text: "Iron Man confronts Loki, distracting him while you retrieve the Tesseract. Together, you and Iron Man return the artifact to S.H.I.E.L.D. Mission Accomplished!",
    choices: [],
    image: "ihttps://www.shutterstock.com/shutterstock/videos/3625110235/thumb/7.jpg?ip=x480"
  },
  approachLoki: {
    text: "You try to confront Loki, but he uses his powers to trap you. Despite your efforts, he escapes with the Tesseract. Mission failed.",
    choices: [],
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/04/Loki-after-getting-beaten-up-by-the-Hulk.jpg"
  },
  teamFight: {
    text: "You and the heroes attack together, overpowering Loki. Just as you are about to secure the Tesseract, Loki calls for reinforcements from his allies. Do you fight or escape with the Tesseract?",
    choices: [
      { text: "Fight the reinforcements", nextStage: "heroicVictory" },
      { text: "Escape with Tesseract", nextStage: "escapeVictory" }
    ],
    image: "https://s.yimg.com/ny/api/res/1.2/LDznkmPzdvWWkiLWhhTTYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/gamesradar_237/f23494a472e30142e5d9af5743a662c3"
  },
  heroicVictory: {
    text: "The heroes stand their ground and fend off Loki's allies, capturing him in the end. The Tesseract is safe, and the world is secure thanks to your bravery. Mission Accomplished!",
    choices: [],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTLx9afXn3s6nqfXgfa2wp_WQBEwyRFFqxQ&s"
  },
  escapeVictory: {
    text: "You manage to escape with the Tesseract, but Loki’s forces are still out there. S.H.I.E.L.D. is safe, but the threat remains. Partial Mission Accomplished.",
    choices: [],
    image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16209806/avengers_covers_1_3.jpg?quality=90&strip=all&crop=11.513157894737,0,76.973684210526,100"
  },
  endDecline: {
    text: "You chose not to accept the mission. The Tesseract falls into enemy hands, and chaos ensues. Mission failed.",
    choices: [],
    image: "https://png.pngtree.com/png-clipart/20230804/original/pngtree-mission-failed-message-mission-red-vector-picture-image_9585549.png"
  },
  // Additional Endings
  confrontLokiAgain: {
    text: "You pursue Loki to a hidden base and confront him again. Do you go in stealthily or attack head-on?",
    choices: [
      { text: "Go in stealthily", nextStage: "stealthSuccess" },
      { text: "Attack head-on", nextStage: "headOnFailure" }
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L-X7qe8sq_93UPik9UrzRqR3XPjq108h4g&s"
  },
  stealthSuccess: {
    text: "You sneak into Loki's base and retrieve the Tesseract without detection. Mission Accomplished!",
    choices: [],
    image: "https://www.shutterstock.com/image-vector/mission-accomplished-watermark-stamp-text-260nw-543892417.jpg"
  },
  headOnFailure: {
    text: "Loki anticipated your move and traps you. With the Tesseract in his control, he leaves to enact his plans. Mission failed.",
    choices: [],
    image: "https://www.shutterstock.com/shutterstock/videos/1063188118/thumb/4.jpg?ip=x480"
  }
};

// Function to start the game
function startGame() {
  currentStage = storyStages.start;
  updatePage();
}

// Function to update the page based on the current stage
function updatePage() {
  document.getElementById("story-text").innerText = currentStage.text;
  document.getElementById("story-image").src = currentStage.image;

  const choicesSection = document.getElementById("choices-section");
  choicesSection.innerHTML = '';

  currentStage.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => makeChoice(choice.nextStage);
    choicesSection.appendChild(button);
  });
}

// Function to handle choices and navigate to the next stage
function makeChoice(nextStageKey) {
  currentStage = storyStages[nextStageKey];
  updatePage();
}

// Set up the restart button
document.getElementById("reset-button").onclick = startGame;

// Start the game when the page loads
let currentStage;
window.onload = startGame;
