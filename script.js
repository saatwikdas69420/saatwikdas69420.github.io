let website = "https://www.youtube.com"

function trollLevel() {
  let website = "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html"
  let iframe = document.getElementById("Iframe");
  iframe.src = website;
}
document.addEventListener('DOMContentLoaded', setIframeSrc);
