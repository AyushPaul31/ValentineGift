document.addEventListener("DOMContentLoaded", function () {

  const gif = document.getElementById("gif");
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const btnContainer = document.getElementById("valentineBtns");
  const card = document.querySelector(".card");

  // Show Yes/No buttons after 3 seconds
  setTimeout(() => {
    btnContainer.style.display = "block";
  }, 3000);

  // YES hover → happy gif
  yesBtn.addEventListener("mouseover", function () {
    gif.src = "../Assets/happ.gif";
  });

  // YES mouse out → romantic gif
  yesBtn.addEventListener("mouseout", function () {
    gif.src = "../Assets/romantic.gif";
  });

  // YES click → happy gif → go to next page
  yesBtn.addEventListener("click", function () {
    gif.src = "../Assets/happ.gif";

    setTimeout(function () {
      window.location.href = "../Page 3/forthPage.html";
    }, 800);
  });

  // NO hover → move randomly but stay inside card
  noBtn.addEventListener("mouseover", function () {
    const maxX = card.clientWidth - noBtn.clientWidth;
    const maxY = card.clientHeight - noBtn.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

});
