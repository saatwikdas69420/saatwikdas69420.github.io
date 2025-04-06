function trollLevel() {
  let website = "https://cloud.onlinegames.io/games/2024/unity2/troll-level/index-og.html";
  let iframe = document.getElementById("Iframe");

  if (iframe) {
    iframe.src = website;
  } else {
    console.error("Iframe not found!");
  }
}

document.addEventListener('DOMContentLoaded', trollLevel);
