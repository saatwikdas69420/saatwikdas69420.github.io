// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Helper function to load a game into the iframe
    function loadGame(url, description = "") {
        const iframe = document.getElementById("iframe");
        if (iframe) {
            iframe.src = url;
        } else {
            console.error("Iframe not found!");
        }

        // Optional: update game description
        const descElem = document.getElementById("description");
        if (descElem) descElem.innerText = description;
    }

    // Make functions global so HTML onclick can access them
    window.trollLevel = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html",
            "Troll Level: Navigate tricky obstacles and challenges!"
        );
    };

    window.capybaraClickerPro = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html",
            "Capybara Clicker Pro: Click capybaras and level up!"
        );
    };

    window.gtaSimulator = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
            "GTA Simulator: Experience the life of a virtual city driver."
        );
    };

    window.realFlightSimulator = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://cloud.onlinegames.io/games/2023/unity2/real-flight-simulator/index.html",
            "Real Flight Simulator: Take to the skies in realistic aircraft."
        );
    };

    window.urbanSniper = function(event) {
        if (event) event.preventDefault();
        loadGame(
            "https://www.onlinegames.io/games/2022/unity2/urban-sniper/index.html",
            "Urban Sniper: Sharpshoot your way through the city challenges."
        );
    };

});
