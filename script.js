// Move "No" Button
function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 100;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Redirect to Yes Page
function handleYesClick() {
    alert("Yay! You said YES! ❤️");
}

// Floating Hearts Animation
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);

// "I Love You" Loading Bar
let percent = 1;
let progress = document.getElementById("progress");
let loveText = document.getElementById("love-percent");

function updateProgress() {
    if (percent <= 1000) {
        progress.style.width = percent / 10 + "%";
        loveText.textContent = percent;
        percent += 10;
        setTimeout(updateProgress, 10);
    }
}

setTimeout(updateProgress, 1000);
