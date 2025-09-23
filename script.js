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

});
