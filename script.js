document.addEventListener('DOMContentLoaded', function() {

  const games = {
    trollLevel: {
      url: "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html",
      name: "Troll Level",
      description: "Navigate tricky obstacles and challenges!"
    },
    capybaraClickerPro: {
      url: "https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html",
      name: "Capybara Clicker Pro",
      description: "Click capybaras and level up!"
    },
    gtaSimulator: {
      url: "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
      name: "GTA Simulator",
      description: "Experience the life of a virtual city driver."
    },
    realFlightSimulator: {
      url: "https://cloud.onlinegames.io/games/2023/unity2/real-flight-simulator/index.html",
      name: "Real Flight Simulator",
      description: "Take to the skies in realistic aircraft."
    },
    urbanSniper: {
      url: "https://www.onlinegames.io/games/2022/unity2/urban-sniper/index.html",
      name: "Urban Sniper",
      description: "Sharpshoot your way through city challenges."
    },
    archerHero: {
      url: "https://www.onlinegames.io/games/2023/unity/archer-hero/index.html",
      name: "Archer Hero",
      description: "Test your archery skills in a world of magic and mysticism."
    },
    stateWars: {
      url: "https://www.onlinegames.io/games/2024/construct/233/state-io-wars/index.html",
      name: "State.io Wars",
      description: "Command your soldiers and conquer lands!"
    },
    geometryEscape: {
      url: "https://cloud.onlinegames.io/games/2024/construct/299/geometry-escape/index-og.html",
      name: "Geometry Escape",
      description: "Guide your cube through fast-paced obstacle courses."
    },
    darknessSurvivors: {
      url: "https://www.onlinegames.io/games/2024/q2/darkness-survivors/index.html",
      name: "Darkness Survivors",
      description: "Battle dark creatures using powerful heroes!"
    },
    findIt: {
      url: "https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html",
      name: "Find It!",
      description: "A cozy puzzle game where you find hidden items."
    },
    kickThePirate: {
      url: "https://cloud.onlinegames.io/games/2022/construct/92/kick-the-pirate/index-og.html",
      name: "Kick The Pirate",
      description: "Give this grumpy pirate what he deserves!"
    },
    snakeWars: {
      url: "https://www.onlinegames.io/games/2024/unity/snake-wars/index.html",
      name: "Snake Wars",
      description: "Eat, grow, and dominate in this fun io snake battle!"
    }
  };

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

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.game;
      window.location.href = `indexTEST.html?game=${key}`;
    });
  });

  const params = new URLSearchParams(window.location.search);
  if (params.has("game")) loadGame(params.get("game"));
});
