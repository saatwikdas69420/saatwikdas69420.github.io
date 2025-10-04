document.addEventListener('DOMContentLoaded', function() {

  // Object containing all games
  const games = {
    trollLevel: {
      url: "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html",
      name: "Troll Level",
      description: "Troll Level: Navigate tricky obstacles and challenges!"
    },
    capybaraClickerPro: {
      url: "https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html",
      name: "Capybara Clicker Pro",
      description: "Capybara Clicker Pro: Click capybaras and level up!"
    },
    gtaSimulator: {
      url: "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
      name: "GTA Simulator",
      description: "GTA Simulator: Experience the life of a virtual city driver."
    },
    realFlightSimulator: {
      url: "https://cloud.onlinegames.io/games/2023/unity2/real-flight-simulator/index.html",
      name: "Real Flight Simulator",
      description: "Real Flight Simulator: Take to the skies in realistic aircraft."
    },
    urbanSniper: {
      url: "https://www.onlinegames.io/games/2022/unity2/urban-sniper/index.html",
      name: "Urban Sniper",
      description: "Urban Sniper: Sharpshoot your way through the city challenges."
    },
    archerHero: {
      url: "https://www.onlinegames.io/games/2023/unity/archer-hero/index.html",
      name: "Archer Hero",
      description: "Archer Hero: Test your archery skills in a world of magic and mysticism. Choose bows, arrows, and targets as you progress through levels."
    },
    stateWars: {
      url: "https://www.onlinegames.io/games/2024/construct/233/state-io-wars/index.html",
      name: "State.io Wars",
      description: "State.io Wars: Command your mini soldiers and conquer new lands in this 2D strategy game."
    },
    geometryEscape: {
      url: "https://cloud.onlinegames.io/games/2024/construct/299/geometry-escape/index-og.html",
      name: "Geometry Escape",
      description: "Geometry Escape: Navigate obstacle courses with precision and skill in this fast-paced platformer."
    },
    darknessSurvivors: {
      url: "https://www.onlinegames.io/games/2024/q2/darkness-survivors/index.html",
      name: "Darkness Survivors",
      description: "Darkness Survivors: Battle dark creatures using various hero characters and weapons."
    },
    findIt: {
      url: "https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html",
      name: "Find It!",
      description: "Find It!: Cozy puzzle game for your brain. Explore rooms and find hidden items!"
    },
    kickThePirate: {
      url: "https://cloud.onlinegames.io/games/2022/construct/92/kick-the-pirate/index-og.html",
      name: "Kick The Pirate",
      description: "Kick The Pirate: Turn this grumpy pirate into your personal punching bag."
    },
    snakeWars: {
      url: "https://www.onlinegames.io/games/2024/unity/snake-wars/index.html",
      name: "Snake Wars",
      description: "Snake Wars: Control a snake and grow by eating food while avoiding other snakes."
    }
  };

  // Function to load a game into iframe and update text
  function loadGame(key) {
    const game = games[key];
    if (!game) return console.error("Game not found:", key);

    const iframe = document.getElementById("iframe");
    const nameElem = document.getElementById("name");
    const descElem = document.getElementById("description");

    if (iframe) iframe.src = game.url;
    if (nameElem) nameElem.innerText = game.name;
    if (descElem) descElem.innerText = game.description;
  }

  // Attach click events to homepage game cards
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.game;
      loadGame(key);

      // Highlight selected card
      document.querySelectorAll('.game-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Serverside optimization for html
  const params = new URLSearchParams(window.location.search);
  if (params.has("game")) {
    loadGame(params.get("game"));
  }

});
