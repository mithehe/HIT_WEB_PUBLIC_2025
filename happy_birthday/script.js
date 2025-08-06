let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-iframe');
}

function showMessage() {
  const wish = document.getElementById('wish');
  wish.classList.add('show');
  wish.scrollIntoView({ behavior: 'smooth' });
  animateAge();
  playYouTubeMusic();
  startFireworks();
}

// function showMessage() {
//   const message = document.getElementById("message");
//   message.classList.remove("hidden");  // ✅ hiện lời chúc

//   // Phát nhạc nếu có
//   const audio = document.getElementById("birthday-audio");
//   if (audio) {
//     audio.play();
//   }

//   // Nếu muốn pháo hoa cũng hiện
//   const fireworks = document.getElementById("fireworks");
//   if (fireworks) {
//     fireworks.classList.remove("hidden");
//   }
// }


function animateAge() {
  const ageSpan = document.getElementById("current-age");
  let current = parseInt(ageSpan.textContent);
  const interval = setInterval(() => {
    if (current >= 19) {
      clearInterval(interval);
    } else {
      current++;
      ageSpan.textContent = current;
    }
  }, 600);
}

function playYouTubeMusic() {
  if (player && typeof player.playVideo === "function") {
    player.playVideo();
  }
}

function startFireworks() {
  const container = document.getElementById('fireworks');
  const fireworks = new Fireworks.default(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 100,
    trace: 3,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    rocketsPoint: { min: 50, max: 50 },
    lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
    brightness: { min: 50, max: 80 },
    decay: { min: 0.015, max: 0.03 },
    mouse: { click: false, move: false, max: 1 },
    sound: { enable: false }
  });
  fireworks.start();
}
