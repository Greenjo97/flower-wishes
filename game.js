
const flower = document.getElementById("flower");
const pickButton = document.getElementById("pickButton");
const wish = document.getElementById("wish");
const counter = document.getElementById("counter");
const timer = document.getElementById("timer");

const bouquets = {
    rose: "Букет роз 🌹"
};
function getFlowerOfDay() {
    const startDate = new Date(2026, 10, 25);
    const todayDate = new Date();

    const today = new Date(
        todayDate.getFullYear(),
        todayDate.getMonth(),
        todayDate.getDate()
    );

    const daysPassed = Math.floor(
        (today - startDate) / 86400000
    );

const flowers = ["rose"];

    return flowers[((daysPassed % 3) + 3) % 3];
}

const wishes = [
    "Сегодня тебя ждёт что-то прекрасное 🌸",
    "Улыбнись — ты делаешь этот мир лучше 💗",
    "Не бойся мечтать о большем ✨",
    "Впереди тебя ждут хорошие новости 🌷",
    "Ты справишься со всем, что задумал 💪",
    "Пусть сегодняшний день будет особенным ☀️",
    "Не забывай радовать себя 💕",
    "Верь в себя 🌟",
    "Совсем скоро произойдёт что-то приятное 🌺",
    "Ты заслуживаешь счастливых моментов 💖",
    "Пусть удача будет на твоей стороне 🍀",
    "Каждый день — новая возможность 🌼"
];

let petals = [];
const today = new Date().toISOString().slice(0, 10);

let savedDay = localStorage.getItem("savedDay");

if (savedDay !== today) {
    localStorage.setItem("savedDay", today);
    localStorage.setItem("picked", "0");
    localStorage.setItem("nextPick", "0");
}

let picked = Number(localStorage.getItem("picked")) || 0;
let nextPick = Number(localStorage.getItem("nextPick")) || 0;

function createFlower() {
    const flowerOfDay = getFlowerOfDay();

    const bouquetTitle = document.getElementById("bouquetTitle");

    if (bouquetTitle) {
        bouquetTitle.textContent = bouquets[flowerOfDay];
    }
flower.classList.remove("bouquet-animation");

void flower.offsetWidth;

flower.classList.add("bouquet-animation");

if (flowerOfDay === "tulip") {
    flower.innerHTML = `
        <svg viewBox="0 0 300 350"
             xmlns="http://www.w3.org/2000/svg">

            <defs>
                <linearGradient id="tulipPetal" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ffd1df"/>
                    <stop offset="35%" stop-color="#fa8eae"/>
                    <stop offset="75%" stop-color="#e94c7b"/>
                    <stop offset="100%" stop-color="#b92558"/>
                </linearGradient>

                <linearGradient id="tulipLight" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#ffe0e9"/>
                    <stop offset="50%" stop-color="#ff9dbb"/>
                    <stop offset="100%" stop-color="#d83d70"/>
                </linearGradient>

                <linearGradient id="tulipLeaf" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#8acb72"/>
                    <stop offset="50%" stop-color="#3c9650"/>
                    <stop offset="100%" stop-color="#21683e"/>
                </linearGradient>

                <linearGradient id="potGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f0b18e"/>
                    <stop offset="50%" stop-color="#ce805e"/>
                    <stop offset="100%" stop-color="#a95642"/>
                </linearGradient>
            </defs>

            <!-- Стебли, соединённые с бутонами -->
<g transform="translate(0, -20)"
   fill="none"
   stroke="#39834b"
   stroke-width="7"
   stroke-linecap="round">

    <!-- Левый стебель -->
    <path d="M88 166 Q88 230 105 310"/>

    <!-- Центральный стебель -->
    <path d="M150 170 Q150 240 145 310"/>

    <!-- Правый стебель -->
    <path d="M210 166 Q205 235 185 310"/>

</g>

            <<!-- Листья тюльпанов -->
<g fill="url(#tulipLeaf)">

    <!-- Лист центрального стебля -->
    <path d="M145 285
             Q105 245 112 205
             Q135 220 145 250
             Q153 270 145 285Z"/>

    <!-- Лист левого стебля -->
    <path d="M105 285
             Q65 250 75 215
             Q100 225 105 255
             Q112 270 105 285Z"/>

    <!-- Лист правого стебля -->
    <path d="M185 285
             Q220 245 215 205
             Q193 220 185 250
             Q178 270 185 285Z"/>

</g>

<!-- Прожилки -->
<g fill="none" stroke="#a2d58b" stroke-width="1.5">
    <path d="M145 285 Q130 245 112 205"/>
    <path d="M105 285 Q90 250 75 215"/>
    <path d="M185 285 Q200 245 215 205"/>
</g>

            <!-- Левый тюльпан -->
            <g transform="translate(88 151)">
                <path d="M0 15
                         Q-24 -5 -18 -35
                         Q-12 -23 -5 -46
                         Q2 -28 9 -48
                         Q22 -22 22 -35
                         Q32 -5 13 15Z"
                      fill="url(#tulipPetal)"/>

                <path d="M-10 -8 Q-8 -30 -5 -42"
                      fill="none" stroke="#ffe5ed"
                      stroke-width="3" opacity="0.65"/>

                <path d="M5 -5 Q15 -24 17 -31"
                      fill="none" stroke="#c92e63"
                      stroke-width="2" opacity="0.5"/>
            </g>

            <!-- Центральный тюльпан -->
            <g transform="translate(150 115)">
                <path d="M-25 55
                         Q-45 25 -30 -15
                         Q-23 5 -12 -30
                         Q-3 -5 7 -35
                         Q18 0 28 -18
                         Q43 22 25 55Z"
                      fill="url(#tulipPetal)"/>

                <path d="M-20 40 Q-28 8 -12 -20"
                      fill="none" stroke="#ffe2eb"
                      stroke-width="4" opacity="0.7"/>

                <path d="M0 42 Q-3 5 7 -28"
                      fill="none" stroke="#ffcad9"
                      stroke-width="3" opacity="0.7"/>

                <path d="M15 40 Q30 10 27 -12"
                      fill="none" stroke="#c52c61"
                      stroke-width="3" opacity="0.5"/>
            </g>

            <!-- Правый тюльпан -->
            <g transform="translate(210 151)">
                <path d="M-10 15
                         Q-30 -5 -23 -35
                         Q-14 -23 -8 -46
                         Q0 -28 8 -48
                         Q17 -22 25 -35
                         Q32 -5 12 15Z"
                      fill="url(#tulipLight)"/>

                <path d="M-12 -8 Q-8 -28 -8 -42"
                      fill="none" stroke="#fff0f4"
                      stroke-width="3" opacity="0.7"/>

                <path d="M7 -5 Q17 -24 21 -31"
                      fill="none" stroke="#c92e63"
                      stroke-width="2" opacity="0.5"/>
            </g>

            
            <!-- Тень под горшком -->
<ellipse cx="160"
         cy="345"
         rx="75"
         ry="7"
         fill="#000000"
         opacity="0.2"
         filter="blur(4px)"/>

<!-- Горшок -->
<path d="M95 255 L225 255 L208 335 Q160 350 112 335Z"
      fill="url(#potGradient)"
      stroke="#6d2947"
      stroke-width="3"/>

<!-- Ободок -->
<ellipse cx="160" cy="255" rx="67" ry="13"
         fill="#f0a4bd"
         stroke="#71304f"
         stroke-width="3.5"/>

<ellipse cx="160" cy="255" rx="67" ry="13"
         fill="none"
         stroke="#f7d58a"
         stroke-width="2.5"/>

<!-- Сердечко -->
<path d="M160 305
         C145 290 130 305 160 325
         C190 305 175 290 160 305Z"
      fill="#ff6b9d"
      stroke="#a83262"
      stroke-width="2"/>

<!-- Блик на сердечке -->
<ellipse cx="151" cy="305"
         rx="4" ry="6"
         fill="#ffffff"
         opacity="0.55"
         transform="rotate(-35 151 305)"/>

<!-- Декоративные точки -->
<circle cx="125" cy="295" r="3" fill="#f7d58a"/>
<circle cx="195" cy="295" r="3" fill="#f7d58a"/>
<circle cx="135" cy="320" r="2" fill="#fff0b5"/>
<circle cx="185" cy="320" r="2" fill="#fff0b5"/>

<!-- Земля -->
<ellipse cx="160" cy="255" rx="57" ry="8"
         fill="#38251f"/>

<circle cx="135" cy="254" r="2" fill="#8b6747"/>
<circle cx="160" cy="252" r="2" fill="#8b6747"/>
<circle cx="185" cy="254" r="2" fill="#8b6747"/>

<!-- Блик на горшке -->
<path d="M120 275 Q160 285 200 275"
      stroke="#ffd0df"
      stroke-width="3"
      opacity="0.5"
      fill="none"/>

<!-- Маленькие звёздочки -->
<path d="M35 125 L39 135 L49 139 L39 143 L35 153 L31 143 L21 139 L31 135Z"
      fill="#f7d58a"/>

<path d="M265 125 L269 135 L279 139 L269 143 L265 153 L261 143 L251 139 L261 135Z"
      fill="#f7d58a"/>

        </svg>
    `;

    return;
}
if (flowerOfDay === "daisy") {
    flower.innerHTML = `
        <svg viewBox="0 0 300 350" xmlns="http://www.w3.org/2000/svg">

            <!-- Стебли -->
            <path d="M150 170 Q130 240 145 310" stroke="#32864b" stroke-width="7" fill="none"/>
            <path d="M110 190 Q100 250 105 310" stroke="#32864b" stroke-width="7" fill="none"/>
            <path d="M190 190 Q200 250 185 310" stroke="#32864b" stroke-width="7" fill="none"/>

            <!-- Листья -->
            <path d="M130 260 Q70 220 85 280 Q110 295 130 260" fill="#48a85c"/>
            <path d="M170 270 Q230 220 215 280 Q190 295 170 270" fill="#32864b"/>

            <!-- Лепестки ромашек -->
            <g fill="#fffdf5" stroke="#e8e3d8" stroke-width="1">
                <g transform="translate(150 100)">
                    <ellipse cy="-25" rx="10" ry="24"/>
                    <ellipse cy="25" rx="10" ry="24"/>
                    <ellipse cx="-25" rx="24" ry="10"/>
                    <ellipse cx="25" rx="24" ry="10"/>
                    <ellipse cx="-18" cy="-18" rx="10" ry="23" transform="rotate(-45 -18 -18)"/>
                    <ellipse cx="18" cy="-18" rx="10" ry="23" transform="rotate(45 18 -18)"/>
                    <ellipse cx="-18" cy="18" rx="10" ry="23" transform="rotate(45 -18 18)"/>
                    <ellipse cx="18" cy="18" rx="10" ry="23" transform="rotate(-45 18 18)"/>
                    <circle r="15" fill="#ffd43b"/>
                </g>

                <g transform="translate(85 145) scale(0.8)">
                    <circle r="12" fill="#ffd43b"/>
                    <ellipse cy="-23" rx="9" ry="20"/>
                    <ellipse cy="23" rx="9" ry="20"/>
                    <ellipse cx="-23" rx="20" ry="9"/>
                    <ellipse cx="23" rx="20" ry="9"/>
                    <ellipse cx="-16" cy="-16" rx="9" ry="20" transform="rotate(-45 -16 -16)"/>
                    <ellipse cx="16" cy="-16" rx="9" ry="20" transform="rotate(45 16 -16)"/>
                    <ellipse cx="-16" cy="16" rx="9" ry="20" transform="rotate(45 -16 16)"/>
                    <ellipse cx="16" cy="16" rx="9" ry="20" transform="rotate(-45 16 16)"/>
                </g>

                <g transform="translate(215 145) scale(0.8)">
                    <circle r="12" fill="#ffd43b"/>
                    <ellipse cy="-23" rx="9" ry="20"/>
                    <ellipse cy="23" rx="9" ry="20"/>
                    <ellipse cx="-23" rx="20" ry="9"/>
                    <ellipse cx="23" rx="20" ry="9"/>
                    <ellipse cx="-16" cy="-16" rx="9" ry="20" transform="rotate(-45 -16 -16)"/>
                    <ellipse cx="16" cy="-16" rx="9" ry="20" transform="rotate(45 16 -16)"/>
                    <ellipse cx="-16" cy="16" rx="9" ry="20" transform="rotate(45 -16 16)"/>
                    <ellipse cx="16" cy="16" rx="9" ry="20" transform="rotate(-45 16 16)"/>
                </g>
            </g>

            <!-- Горшок -->
            <path d="M65 305 L235 305 L215 345 L85 345 Z" fill="#d78b62"/>
            <ellipse cx="150" cy="305" rx="85" ry="12" fill="#efb18a"/>

        </svg>
    `;

    return;
}
    // Пока используем розу.
    
flower.innerHTML = `
<svg viewBox="0 0 300 350"
     xmlns="http://www.w3.org/2000/svg"
     class="realistic-rose">

    <defs>
        <radialGradient id="rose" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#ffb9d0"/>
            <stop offset="25%" stop-color="#f46b9b"/>
            <stop offset="55%" stop-color="#d52d6b"/>
            <stop offset="80%" stop-color="#a8174c"/>
            <stop offset="100%" stop-color="#5c0b2d"/>
        </radialGradient>

        <radialGradient id="petalShine">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.65"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>

        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#c1e69a"/>
            <stop offset="35%" stop-color="#6da64e"/>
            <stop offset="70%" stop-color="#34713d"/>
            <stop offset="100%" stop-color="#173f2b"/>
        </linearGradient>

        <linearGradient id="potGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#71304f"/>
            <stop offset="25%" stop-color="#c76b91"/>
            <stop offset="55%" stop-color="#f0a4bd"/>
            <stop offset="100%" stop-color="#71304f"/>
        </linearGradient>
    </defs>


    <!-- Три отдельных стебля -->
    <path d="M90 100 Q85 180 115 260"
          stroke="#347b45" stroke-width="7" fill="none"/>

    <path d="M150 75 Q150 170 150 260"
          stroke="#347b45" stroke-width="7" fill="none"/>

    <path d="M210 100 Q215 180 185 260"
          stroke="#347b45" stroke-width="7" fill="none"/>
<!-- Светлые линии на стеблях -->
<path d="M90 105 Q85 180 115 255"
      stroke="#78a85d"
      stroke-width="2"
      opacity="0.7"
      fill="none"/>

<path d="M150 80 Q150 170 150 255"
      stroke="#78a85d"
      stroke-width="2"
      opacity="0.7"
      fill="none"/>

<path d="M210 105 Q215 180 185 255"
      stroke="#78a85d"
      stroke-width="2"
      opacity="0.7"
      fill="none"/>
    <!-- Листья первого цветка -->
<path d="M100 190 Q55 155 55 190 Q75 220 100 190"
      fill="url(#leaf)"/>

<!-- Прожилка первого листа -->
<path d="M98 190 Q78 185 60 190"
      stroke="#6f9850"
      stroke-width="1.5"
      fill="none"
      opacity="0.8"/>

    <!-- Листья второго цветка -->
<path d="M150 210 Q105 175 105 205 Q130 235 150 210"
      fill="url(#leaf)"/>

<!-- Прожилка левого листа -->
<path d="M148 210 Q125 200 108 205"
      stroke="#6f9850"
      stroke-width="1.5"
      fill="none"
      opacity="0.8"/>

<path d="M150 225 Q195 180 210 210 Q185 240 150 225"
      fill="url(#leaf)"/>

<!-- Прожилка правого листа -->
<path d="M153 224 Q180 205 207 210"
      stroke="#6f9850"
      stroke-width="1.5"
      fill="none"
      opacity="0.8"/>

    <!-- Листья третьего цветка -->
    <path d="M200 190 Q245 155 245 190 Q225 220 200 190"
          fill="url(#leaf)"/>
<!-- Прожилка третьего листа -->
<path d="M202 190 Q222 185 242 190"
      stroke="#6f9850"
      stroke-width="1.5"
      fill="none"
      opacity="0.8"/>

    <!-- Первая роза -->

    <g transform="translate(90 100) scale(.8)">
        <circle class="rose-petal" r="38" fill="url(#rose)"/>

        <ellipse cx="-10" cy="-15"
                 rx="13" ry="18"
                 fill="url(#petalShine)"
                 pointer-events="none"/>

        <path class="rose-petal"
              d="M-25 0 Q-35 -50 5 -43 Q40 -30 0 0Z"
              fill="#b92359"/>

        <path class="rose-petal"
              d="M0 0 Q40 -40 45 0 Q30 35 0 0Z"
              fill="#b92359"/>

        <path class="rose-petal"
              d="M-15 0 Q-5 -30 18 -15 Q30 5 5 18Z"
              fill="#ff8db5"/>
    </g>

    <!-- Вторая роза -->
    <g transform="translate(150 75)">
        <circle class="rose-petal" r="43" fill="url(#rose)"/>

        <ellipse cx="-10" cy="-18"
                 rx="15" ry="20"
                 fill="url(#petalShine)"
                 pointer-events="none"/>

        <path class="rose-petal"
              d="M-30 0 Q-40 -55 5 -48 Q45 -35 0 0Z"
              fill="#b92359"/>

        <path class="rose-petal"
              d="M0 0 Q40 -45 48 -5 Q35 35 0 0Z"
              fill="#b92359"/>

        <path class="rose-petal"
              d="M-15 0 Q-5 -30 18 -15 Q30 5 5 18Z"
              fill="#ff8db5"/>
    </g>

    <!-- Третья роза -->
    <g transform="translate(210 100) scale(.8)">
        <circle class="rose-petal" r="38" fill="url(#rose)"/>

        <ellipse cx="-10" cy="-15"
                 rx="13" ry="18"
                 fill="url(#petalShine)"
                 pointer-events="none"/>

        <path class="rose-petal"
              d="M-25 0 Q-35 -50 5 -43 Q40 -30 0 0Z"
              fill="#b92359"/>

        <path class="rose-petal"
              d="M0 0 Q40 -40 45 0 Q30 35 0 0Z"
              fill="#b92359"/>
    </g>
<!-- Тень под горшком -->
<ellipse cx="160"
         cy="345"
         rx="75"
         ry="7"
         fill="#000000"
         opacity="0.2"
         filter="blur(4px)"/>

<!-- Горшок -->
<path d="M95 255 L225 255 L208 335 Q160 350 112 335Z"
      fill="url(#potGradient)"
      stroke="#6d2947"
      stroke-width="3"/>
    <!-- Ободок -->
    <ellipse cx="160" cy="255" rx="67" ry="13"
             fill="#f0a4bd"
             stroke="#71304f"
             stroke-width="3.5"/>

    <ellipse cx="160" cy="255" rx="67" ry="13"
             fill="none"
             stroke="#f7d58a"
             stroke-width="2.5"/>
<!-- Сердечко на горшке -->
<path d="M160 305
         C145 290 130 305 160 325
         C190 305 175 290 160 305Z"
      fill="#ff6b9d"
      stroke="#a83262"
      stroke-width="2"/>
<!-- Блик на сердечке -->
<ellipse cx="151"
         cy="305"
         rx="4"
         ry="6"
         fill="#ffffff"
         opacity="0.55"
         transform="rotate(-35 151 305)"/>
<!-- Декоративные точки -->
<circle cx="125" cy="295" r="3" fill="#f7d58a"/>
<circle cx="195" cy="295" r="3" fill="#f7d58a"/>
<circle cx="135" cy="320" r="2" fill="#fff0b5"/>
<circle cx="185" cy="320" r="2" fill="#fff0b5"/>

    <!-- Земля -->
    <ellipse cx="160" cy="255" rx="57" ry="8"
             fill="#38251f"/>

    <circle cx="135" cy="254" r="2" fill="#8b6747"/>
    <circle cx="160" cy="252" r="2" fill="#8b6747"/>
    <circle cx="185" cy="254" r="2" fill="#8b6747"/>

    <!-- Блик на горшке -->
    <path d="M120 275 Q160 285 200 275"
          stroke="#ffd0df"
          stroke-width="3"
          opacity="0.5"
          fill="none"/>
<!-- Маленькие звёздочки вокруг букета -->
<path d="M35 125 L39 135 L49 139 L39 143 L35 153 L31 143 L21 139 L31 135Z"
      fill="#f7d58a"/>

<path d="M265 125 L269 135 L279 139 L269 143 L265 153 L261 143 L251 139 L261 135Z"
      fill="#f7d58a"/>

<circle cx="45" cy="185" r="3" fill="#ffd6e5"/>
<circle cx="255" cy="185" r="3" fill="#ffd6e5"/>

    

</svg>
`;  



    petals = Array.from(
        flower.querySelectorAll(".rose-petal")
    );

    for (let i = 0; i < picked; i++) {
        if (petals.length > 0) {
            petals[0].remove();
            petals.shift();
        }
    }
}

flower.addEventListener("click", (event) => {
    const petal = event.target.closest(".rose-petal");

    if (petal) {
        pickPetal(petal);
    }
});

function updateTimer() {
    const remaining = nextPick - Date.now();

    if (remaining <= 0) {
        timer.textContent = "Лепесток уже ждёт тебя 🌸";
        pickButton.disabled = false;
        return;
    }

    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    timer.textContent =
        `Следующий лепесток через ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    pickButton.disabled = true;
}

let audioContext = null;

function playPetalSound() {
    try {
        if (!audioContext) {
            audioContext = new (
                window.AudioContext ||
                window.webkitAudioContext
            )();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            880,
            audioContext.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            1320,
            audioContext.currentTime + 0.15
        );

        gain.gain.setValueAtTime(
            0.12,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.5
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);

    } catch (error) {
        console.error("Ошибка звука:", error);
    }
}function pickPetal(selectedPetal = null) {
    if (Date.now() < nextPick) return;

    if (petals.length === 0) {
        wish.textContent =
            "Все лепестки этого букета собраны! Возвращайся завтра 🌷";
        return;
    }

    const index = selectedPetal
        ? petals.indexOf(selectedPetal)
        : Math.floor(Math.random() * petals.length);

    if (index === -1) return;

    const petal = petals[index];
playPetalSound();

// Эффект частиц
const rect = petal.getBoundingClientRect();

for (let i = 0; i < 8; i++) {
    const particle = document.createElement("span");

    particle.className = "flower-particle";

    particle.style.left = `${rect.left + rect.width / 2}px`;
    particle.style.top = `${rect.top + rect.height / 2}px`;

    particle.style.setProperty(
        "--angle",
        `${i * 45}deg`
    );

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 700);
}

petal.classList.add("falling");

    setTimeout(() => petal.remove(), 800);

    petals.splice(index, 1);

    wish.textContent = wishes[picked % wishes.length];
// Сохраняем пожелание в коллекцию
const history = JSON.parse(
    localStorage.getItem("flowerCollection") || "[]"
);

history.unshift({
    date: today,
    wish: wish.textContent
});

localStorage.setItem(
    "flowerCollection",
    JSON.stringify(history)
);
    wish.classList.remove("show");

    void wish.offsetWidth;

    wish.classList.add("show");

    picked++;
    nextPick = Date.now() + 60 * 60 * 1000;

    localStorage.setItem("picked", picked);
    localStorage.setItem("nextPick", nextPick);

    counter.textContent = `Сорвано лепестков: ${picked}`;

    updateTimer();
}

pickButton.addEventListener("click", () => {
    pickPetal();
});
counter.textContent = `Сорвано лепестков: ${picked}`;

createFlower();
updateTimer();

setInterval(updateTimer, 1000);
const collectionButton = document.getElementById("collectionButton");
const collection = document.getElementById("collection");
const closeCollection = document.getElementById("closeCollection");


collectionButton.addEventListener("click", () => {
    const collectionContent =
        document.getElementById("collectionContent");

    const history = JSON.parse(
        localStorage.getItem("flowerCollection") || "[]"
    );

    collectionContent.innerHTML = "";

    if (history.length === 0) {
        collectionContent.textContent =
            "Пока здесь пусто. Сорви первый лепесток! 🌷";
    } else {
        history.forEach(entry => {
            const item = document.createElement("div");
            item.className = "collection-item";

            const date = document.createElement("p");
            date.textContent = entry.date;

            const message = document.createElement("p");
            message.textContent = entry.wish;

            item.appendChild(date);
            item.appendChild(message);

            collectionContent.appendChild(item);
        });
    }

    collection.classList.remove("hidden");
});

closeCollection.addEventListener("click", () => {
    collection.classList.add("hidden");
});
