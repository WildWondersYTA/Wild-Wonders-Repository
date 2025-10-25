const particleLayer = document.getElementById('particle-layer');
const promptForm = document.getElementById('prompt-form');
const promptInput = document.getElementById('prompt-input');
const promptHistory = document.getElementById('prompt-history');
const chatContent = document.getElementById('chat-content');
const ambientToggle = document.getElementById('ambient-toggle');
const remixButton = document.getElementById('remix-button');

const demoPrompts = [
  'Sapphire coral castle with dancing jellyfish',
  'Bioluminescent kelp forest with manta rays',
  'Sunken observatory glowing with neon algae',
  'Sea turtle gliding through cyan bloom',
];

let reducedMotion = false;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBubble() {
  const bubble = document.createElement('span');
  bubble.className = 'particle';
  bubble.style.left = `${random(0, 100)}%`;
  bubble.style.setProperty('--bubble-duration', `${random(14, 28)}s`);
  bubble.style.setProperty('--bubble-scale', random(0.5, 1.8).toFixed(2));
  bubble.style.setProperty('--bubble-drift', `${random(-10, 10)}vw`);
  particleLayer.appendChild(bubble);

  bubble.addEventListener('animationiteration', () => {
    if (reducedMotion) return;
    bubble.style.left = `${random(0, 100)}%`;
    bubble.style.setProperty('--bubble-duration', `${random(16, 32)}s`);
    bubble.style.setProperty('--bubble-scale', random(0.5, 1.6).toFixed(2));
    bubble.style.setProperty('--bubble-drift', `${random(-6, 6)}vw`);
  });
}

function seedBubbles(count = 28) {
  for (let i = 0; i < count; i += 1) {
    createBubble();
  }
}

function addPromptChip(text) {
  const item = document.createElement('li');
  item.className = 'prompt-history__item';
  item.textContent = text;
  const dismiss = document.createElement('button');
  dismiss.type = 'button';
  dismiss.setAttribute('aria-label', `Remove prompt ${text}`);
  dismiss.innerHTML = '&times;';
  dismiss.addEventListener('click', () => item.remove());
  item.appendChild(dismiss);
  promptHistory.prepend(item);
}

function addChatMessage({ author, role, message }) {
  const article = document.createElement('article');
  article.className = `chat-message chat-message--${role}`;
  const header = document.createElement('header');
  header.textContent = author;
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  article.append(header, paragraph);
  chatContent.appendChild(article);
  chatContent.scrollTo({ top: chatContent.scrollHeight, behavior: reducedMotion ? 'auto' : 'smooth' });
}

promptForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = promptInput.value.trim();
  if (!value) return;

  addPromptChip(value);
  addChatMessage({ author: 'You', role: 'user', message: value });
  addChatMessage({
    author: 'Reef Guide',
    role: 'system',
    message: 'Bioluminescent flora shimmer and the reef begins rendering your vision...'
  });

  promptInput.value = '';
  promptInput.focus();
});

ambientToggle.addEventListener('click', () => {
  reducedMotion = !reducedMotion;
  ambientToggle.setAttribute('aria-pressed', String(reducedMotion));
  document.body.classList.toggle('is-reduced-motion', reducedMotion);

  particleLayer.querySelectorAll('.particle').forEach((bubble) => {
    bubble.style.animationPlayState = reducedMotion ? 'paused' : 'running';
  });
});

remixButton.addEventListener('click', () => {
  const suggestion = demoPrompts[Math.floor(Math.random() * demoPrompts.length)];
  promptInput.value = suggestion;
  promptInput.focus();
});

seedBubbles();

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  ambientToggle.click();
}
