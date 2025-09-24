// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Helper function to load a game into the iframe
    function loadGame(url, name, description = "") {
        // Embed for iframe
        const iframe = document.getElementById("iframe");
        if (iframe) {
            iframe.src = url;
        } else {
            console.error("iframe not found!");
        }

        // Name
        const nameElem = document.getElementById("name");
        if (nameElem) nameElem.innerText = name;
        
        // Description
        const descElem = document.getElementById("description");
        if (descElem) descElem.innerText = description;
    }

    window.trollLevel = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html",
            "Troll Level",
            "Troll Level: Navigate tricky obstacles and challenges!"
        );
    };

    window.capybaraClickerPro = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html",
            "Capybara Clicker Pro",
            "Capybara Clicker Pro: Click capybaras and level up!"
        );
    };

    window.gtaSimulator = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
            "GTA Simulator",
            "GTA Simulator: Experience the life of a virtual city driver."
        );
    };

    window.realFlightSimulator = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2023/unity2/real-flight-simulator/index.html",
            "Real Flight Simulator",
            "Real Flight Simulator: Take to the skies in realistic aircraft."
        );
    };

    window.urbanSniper = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2022/unity2/urban-sniper/index.html",
            "Urban Sniper",
            "Urban Sniper: Sharpshoot your way through the city challenges."
        );
    };
    
    window.archerHero = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2023/unity/archer-hero/index.html",
            "Archer Hero",
            "In Archer Hero, we give you the possibility to enter the world of mysticism and magic.  Begin the journey by testing your archery abilities and eliminating potential enemies.  You can select from a variety of bows, arrows, and targets in order to improve your shooting skills.  Every level brings new challenges and rewards."
        );
    };
    
    window.stateWars = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2024/construct/233/state-io-wars/index.html",
            "State.io Wars",
            "Give commands to your mini soldiers and try to get new lands!  State io Wars is a 2D war game where your objective is to conquer lands as much as possible.  To do that, send your troops to a neutral or your opponent's area and take it.  By directing your army wisely, you can achieve victory in this strategy game!"
        );
    };

    window.geometryEscape = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2024/construct/299/geometry-escape/index-og.html",
            "Geometry Escape",
            "Geometry Escape is an excellent choice for gamers looking for a skill game challenge, especially if you enjoy fast-paced platformers similar to Geometry Dash.  It's an online platformer game where you guide a cube on an obstacle course.  The cube moves automatically at a certain speed, and you'll control the jumps and flights to avoid obstacles on your path."
        );
    };

    window.darknessSurvivors = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2024/q2/darkness-survivors/index.html",
            "Darkness Survivors",
            "Are you ready to battle with the darkness minions?  Darkness Survivors is a 2D action game where you try to remove dark creatures from the battlefield.  You have various hero characters to choose from. Just decide whether you want to slay them using a sword, boomerangs or other weapons."
        );
    };
    window.findIt = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html",
            "Find It!",
            "Looking for a cozy, sweet and oh-so adorable feel-good game?   Then Find It is the perfect game to play.  It's like wrapping yourself in a warm, fuzzy blanket but for your brain!  You start off in a kid's room, but it's not just any room."
        );
    };
    window.kickThePirate = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2022/construct/92/kick-the-pirate/index-og.html",
            "Kick the Pirate",
            "Ahoy matey!  Pirates may be brave on the high seas, but they’ve never met you.  In Kick the Pirate, your job is simple: turn this grumpy pirate into your personal punching bag.   He’s muttering curses or just standing there looking smug."
        );
    };
    window.snakeWars = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2024/unity/snake-wars/index.html",
            "Snake Wars",
            "Snake Wars is a fun io game where you embody a cute snake trying to get bigger by eating food.  You must be the biggest one among the others in the pit.  Otherwise, you will become prey for them.  Avoid crashing with any other ones to achieve success in this thrilling snake game!"
        );
    };
    
    // Attach listeners to all game links
    document.querySelectorAll("a[data-game]").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const gameName = this.getAttribute("data-game");
        if (typeof window[gameName] === "function") {
            window[gameName](event);
        } else {
            console.error("No function found for", gameName);
        }
    });
});

});
