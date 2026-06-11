// BLOCK BLAST: ENGLISH QUEST
// Core Game Logic & Audio Synthesizer

// 1. Vocabulary Database
const VOCABULARY_DATA = {
  animals: {
    name: "Động vật",
    description: "Các con vật quen thuộc",
    words: [
      { word: "CAT", ipa: "/kæt/", meaning: "Con mèo", exampleEn: "The cat is sleeping on the warm couch.", exampleVn: "Con mèo đang ngủ trên ghế sofa ấm áp." },
      { word: "DOG", ipa: "/dɒɡ/", meaning: "Con chó", exampleEn: "A loyal dog is waiting for its owner at the door.", exampleVn: "Một chú chó trung thành đang đợi chủ ở cửa." },
      { word: "BIRD", ipa: "/bɜːd/", meaning: "Con chim", exampleEn: "A colorful bird is singing in the tree.", exampleVn: "Một chú chim sặc sỡ đang hót trên cây." },
      { word: "FISH", ipa: "/fɪʃ/", meaning: "Con cá", exampleEn: "The goldfish swims gracefully in the bowl.", exampleVn: "Chú cá vàng bơi lội duyên dáng trong bể." },
      { word: "LION", ipa: "/ˈlaɪ.ən/", meaning: "Sư tử", exampleEn: "The lion is known as the king of the jungle.", exampleVn: "Sư tử được mệnh danh là chúa tể rừng xanh." },
      { word: "BEAR", ipa: "/beər/", meaning: "Con gấu", exampleEn: "Bears love to eat honey and fresh fish.", exampleVn: "Gấu rất thích ăn mật ong và cá tươi." },
      { word: "DUCK", ipa: "/dʌk/", meaning: "Con vịt", exampleEn: "The mother duck leads her ducklings to the pond.", exampleVn: "Vịt mẹ dẫn đàn vịt con ra ao." },
      { word: "FROG", ipa: "/frɒɡ/", meaning: "Con ếch", exampleEn: "A green frog jumped into the water with a splash.", exampleVn: "Một chú ếch xanh nhảy xuống nước kêu đánh tõm." },
      { word: "TIGER", ipa: "/ˈtaɪ.ɡər/", meaning: "Con hổ", exampleEn: "Tigers have beautiful orange and black stripes.", exampleVn: "Hổ có bộ vằn màu cam và đen rất đẹp." },
      { word: "MONKEY", ipa: "/ˈmʌŋ.ki/", meaning: "Con khỉ", exampleEn: "The monkey is swinging from branch to branch.", exampleVn: "Chú khỉ đang đu từ cành này sang cành khác." }
    ]
  },
  fruits: {
    name: "Trái cây",
    description: "Các loại quả thơm ngon",
    words: [
      { word: "APPLE", ipa: "/ˈæp.əl/", meaning: "Quả táo", exampleEn: "Eating an apple every day is good for your health.", exampleVn: "Ăn một quả táo mỗi ngày rất tốt cho sức khỏe." },
      { word: "BANANA", ipa: "/bəˈnɑː.nə/", meaning: "Quả chuối", exampleEn: "Monkeys love bananas because they are sweet.", exampleVn: "Khỉ thích chuối vì chúng ngọt." },
      { word: "ORANGE", ipa: "/ˈɒr.ɪndʒ/", meaning: "Quả cam", exampleEn: "Fresh orange juice is rich in Vitamin C.", exampleVn: "Nước cam tươi rất giàu Vitamin C." },
      { word: "GRAPE", ipa: "/ɡreɪp/", meaning: "Quả nho", exampleEn: "Grapes can be purple, red, or green.", exampleVn: "Nho có thể có màu tím, đỏ hoặc xanh." },
      { word: "LEMON", ipa: "/ˈlem.ən/", meaning: "Quả chanh", exampleEn: "Lemons are yellow and taste very sour.", exampleVn: "Chanh màu vàng và có vị rất chua." },
      { word: "MANGO", ipa: "/ˈmæŋ.ɡəʊ/", meaning: "Quả xoài", exampleEn: "Mango is a very popular tropical fruit.", exampleVn: "Xoài là một loại trái cây nhiệt đới rất phổ biến." },
      { word: "PEACH", ipa: "/piːtʃ/", meaning: "Quả đào", exampleEn: "The peach has soft skin and sweet juicy flesh.", exampleVn: "Quả đào có vỏ mềm và thịt ngọt mọng nước." },
      { word: "MELON", ipa: "/ˈmel.ən/", meaning: "Quả dưa", exampleEn: "Watermelon is perfect for hot summer days.", exampleVn: "Dưa hấu rất hoàn hảo cho những ngày hè nóng nực." },
      { word: "CHERRY", ipa: "/ˈtʃer.i/", meaning: "Quả anh đào", exampleEn: "She decorated the cake with a red cherry on top.", exampleVn: "Cô ấy trang trí chiếc bánh với một quả anh đào đỏ ở trên cùng." }
    ]
  },
  school: {
    name: "Trường học",
    description: "Dụng cụ học tập & trường lớp",
    words: [
      { word: "BOOK", ipa: "/bʊk/", meaning: "Quyển sách", exampleEn: "Open your English book to page ten, please.", exampleVn: "Vui lòng mở sách tiếng Anh trang số mười." },
      { word: "PEN", ipa: "/pen/", meaning: "Cây bút", exampleEn: "He wrote his name on the paper with a blue pen.", exampleVn: "Anh ấy viết tên mình lên giấy bằng một cây bút xanh." },
      { word: "RULER", ipa: "/ˈruː.lər/", meaning: "Cây thước", exampleEn: "Use a ruler to draw a straight line.", exampleVn: "Sử dụng thước kẻ để vẽ một đường thẳng." },
      { word: "DESK", ipa: "/desk/", meaning: "Bàn học", exampleEn: "There is a computer and a notebook on my desk.", exampleVn: "Có một chiếc máy tính và một cuốn sổ trên bàn học của tôi." },
      { word: "CHAIR", ipa: "/tʃeər/", meaning: "Cái ghế", exampleEn: "Pull up a chair and sit down with us.", exampleVn: "Kéo một chiếc ghế lại và ngồi xuống cùng chúng tôi." },
      { word: "CLASS", ipa: "/klɑːs/", meaning: "Lớp học", exampleEn: "Our English class starts at eight o'clock.", exampleVn: "Lớp học tiếng Anh của chúng tôi bắt đầu lúc tám giờ." },
      { word: "SCHOOL", ipa: "/skuːl/", meaning: "Trường học", exampleEn: "Children go to school to learn new things.", exampleVn: "Trẻ em đến trường để học những điều mới." },
      { word: "PENCIL", ipa: "/ˈpen.səl/", meaning: "Bút chì", exampleEn: "You can erase pencil marks easily.", exampleVn: "Bạn có thể tẩy các vết bút chì một cách dễ dàng." },
      { word: "PAPER", ipa: "/ˈpeɪ.pər/", meaning: "Tờ giấy", exampleEn: "She folded the paper into a beautiful origami bird.", exampleVn: "Cô ấy gấp tờ giấy thành một chú chim origami xinh đẹp." }
    ]
  },
  colors: {
    name: "Màu sắc",
    description: "Thế giới màu sắc quanh ta",
    words: [
      { word: "RED", ipa: "/red/", meaning: "Màu đỏ", exampleEn: "Red roses are symbols of love.", exampleVn: "Hoa hồng đỏ là biểu tượng của tình yêu." },
      { word: "BLUE", ipa: "/bluː/", meaning: "Màu xanh dương", exampleEn: "The sky is clear and blue today.", exampleVn: "Hôm nay bầu trời trong xanh và không một gợn mây." },
      { word: "GREEN", ipa: "/ɡriːn/", meaning: "Màu xanh lá", exampleEn: "Leaves turn green in spring.", exampleVn: "Lá cây chuyển sang màu xanh lá vào mùa xuân." },
      { word: "PINK", ipa: "/pɪŋk/", meaning: "Màu hồng", exampleEn: "Flamingos are famous for their pink feathers.", exampleVn: "Chim hồng hạc nổi tiếng với bộ lông màu hồng." },
      { word: "BLACK", ipa: "/blæk/", meaning: "Màu đen", exampleEn: "He wore a smart black suit to the wedding.", exampleVn: "Anh ấy mặc một bộ vest đen lịch lãm đến đám cưới." },
      { word: "WHITE", ipa: "/waɪt/", meaning: "Màu trắng", exampleEn: "Snow is white and cold.", exampleVn: "Tuyết có màu trắng và rất lạnh." },
      { word: "YELLOW", ipa: "/ˈjel.əʊ/", meaning: "Màu vàng", exampleEn: "Sunflowers are bright and yellow.", exampleVn: "Hoa hướng dương có màu vàng rực rỡ." },
      { word: "ORANGE", ipa: "/ˈɒr.ɪndʒ/", meaning: "Màu cam", exampleEn: "The autumn leaves turn orange and brown.", exampleVn: "Lá cây mùa thu chuyển sang màu cam và nâu." },
      { word: "PURPLE", ipa: "/ˈpɜː.pəl/", meaning: "Màu tím", exampleEn: "Grapes are often deep purple and delicious.", exampleVn: "Nho thường có màu tím sẫm và rất ngon." },
      { word: "BROWN", ipa: "/braʊn/", meaning: "Màu nâu", exampleEn: "Chocolate and coffee are brown.", exampleVn: "Sô-cô-la và cà phê có màu nâu." }
    ]
  },
  family: {
    name: "Gia đình",
    description: "Các thành viên thân yêu",
    words: [
      { word: "BABY", ipa: "/ˈbeɪ.bi/", meaning: "Em bé", exampleEn: "The baby is sleeping peacefully in the crib.", exampleVn: "Em bé đang ngủ bình yên trong nôi." },
      { word: "DAD", ipa: "/dæd/", meaning: "Bố", exampleEn: "My dad helps me with my math homework.", exampleVn: "Bố giúp tôi làm bài tập về nhà môn toán." },
      { word: "MOM", ipa: "/mɒm/", meaning: "Mẹ", exampleEn: "Mom cooks delicious dinners for the whole family.", exampleVn: "Mẹ nấu những bữa tối ngon lành cho cả gia đình." },
      { word: "SISTER", ipa: "/ˈsɪs.tər/", meaning: "Chị/Em gái", exampleEn: "My older sister is teaching me how to ride a bike.", exampleVn: "Chị gái tôi đang dạy tôi cách đi xe đạp." },
      { word: "BROTHER", ipa: "/ˈbrʌð.ər/", meaning: "Anh/Em trai", exampleEn: "My younger brother loves playing video games.", exampleVn: "Em trai tôi rất thích chơi trò chơi điện tử." },
      { word: "FAMILY", ipa: "/ˈfæm.əl.i/", meaning: "Gia đình", exampleEn: "A warm family supports you no matter what.", exampleVn: "Một gia đình ấm áp luôn ủng hộ bạn dù có chuyện gì xảy ra." },
      { word: "HOME", ipa: "/həʊm/", meaning: "Nhà", exampleEn: "There is no place like home.", exampleVn: "Không có nơi nào bằng ngôi nhà của mình." }
    ]
  }
};

// 2. English word dictionary for custom word blasts
const COMMON_WORDS = new Set([
  // 3 letters
  "CAT", "DOG", "RED", "SUN", "RUN", "BOY", "MAN", "PEN", "PIN", "POT", "BOX", "BAT", "BED", "BIG", "HOT", "DRY", "WET", "FLY", "FOX", "BEE", "OWL", "HEN", "PIG", "COW", "TOY", "KEY", "CAR", "BUS", "MAP", "BAG", "HAT", "CUP", "TEA", "ICE", "WEB", "ACT", "TRY", "GET", "OUT", "INK", "SAD", "FUN", "NEW", "OLD", "FAT", "FIT", "SKY", "AIR", "ICE", "TEN", "ONE", "TWO",
  // 4 letters
  "BOOK", "DESK", "PINK", "BLUE", "BABY", "HOME", "LION", "BEAR", "DUCK", "FROG", "FISH", "BIRD", "DEER", "WOLF", "GOAT", "MILK", "FOOD", "TREE", "LEAF", "STAR", "MOON", "RAIN", "SNOW", "WIND", "FIRE", "COLD", "WARM", "FAST", "SLOW", "GOOD", "NICE", "LOVE", "PLAY", "READ", "TALK", "WALK", "JUMP", "SWIM", "CHIP", "SHIP", "BOAT", "DUST", "WIND", "GOLD", "SAND", "LAND", "KING", "RING", "SONG", "FROG", "TENT", "POND", "FARM", "CITY", "TALL", "EASY", "HARD", "SOFT",
  // 5 letters
  "MOUSE", "HORSE", "SHEEP", "SHARK", "APPLE", "GRAPE", "LEMON", "MANGO", "PEACH", "MELON", "GREEN", "BLACK", "WHITE", "BROWN", "PAPER", "CLASS", "CHAIR", "RULER", "HOUSE", "WATER", "BREAD", "FRUIT", "SWEET", "HAPPY", "SMILE", "LAUGH", "HELLO", "MUSIC", "DANCE", "WRITE", "SPEAK", "STUDY", "LEARN", "CLOCK", "TABLE", "SHIRT", "SHOES", "PLANT", "EARTH", "TRAIN", "PLANE", "LIGHT", "NIGHT", "SHINE", "CLEAN", "DIRTY", "SMART", "BRAVE", "YOUNG", "GRASS", "STONE", "RIVER",
  // 6 letters
  "BANANA", "CHERRY", "ORANGE", "YELLOW", "PURPLE", "FAMILY", "SCHOOL", "GIRAFFE", "MONKEY", "TIGER", "PENCIL", "ANIMAL", "DOCTOR", "SISTER", "FRIEND", "WINTER", "SUMMER", "SPRING", "FLOWER", "CLOUD", "ROCKET", "SOCCER", "TENNIS", "FATHER", "MOTHER", "COUSIN", "WINDOW", "KITTEN", "RABBIT", "TURTLE", "DONKEY", "CAMERA", "GUITAR", "VIOLIN", "SCHOOL", "STREET", "FOREST", "BRIDGE"
]);

// Include all words from VOCABULARY_DATA to COMMON_WORDS dynamically
for (const cat in VOCABULARY_DATA) {
  VOCABULARY_DATA[cat].words.forEach(w => {
    COMMON_WORDS.add(w.word.toUpperCase());
  });
}

// 3. Audio Synthesizer via Web Audio API
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  play(freq, duration, type = 'sine', slideTo = null, delay = 0) {
    if (this.muted) return;
    this.init();
    
    setTimeout(() => {
      try {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        if (slideTo) {
          osc.frequency.exponentialRampToValueAtTime(slideTo, this.ctx.currentTime + duration);
        }
        
        gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        
        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.error("Audio error", e);
      }
    }, delay * 1000);
  }

  playDrag() {
    this.play(200, 0.05, 'triangle');
  }

  playDrop() {
    this.play(600, 0.15, 'sine', 150);
  }

  playDenied() {
    this.play(150, 0.25, 'sawtooth', 80);
  }

  playBlast() {
    // Noise sweep style
    this.play(800, 0.3, 'sawtooth', 50);
    this.play(500, 0.2, 'triangle', 100, 0.05);
  }

  playWordSpelled() {
    // Play a shiny Major Arpeggio chime (C5 -> E5 -> G5 -> C6)
    this.play(523.25, 0.15, 'sine'); // C5
    this.play(659.25, 0.15, 'sine', null, 0.08); // E5
    this.play(783.99, 0.15, 'sine', null, 0.16); // G5
    this.play(1046.50, 0.3, 'sine', null, 0.24); // C6
  }

  playVictory() {
    // Fun triumphant melody
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 523.25]; // C4, E4, G4, C5, G4, C5
    const durations = [0.1, 0.1, 0.1, 0.15, 0.1, 0.4];
    const delays = [0, 0.1, 0.2, 0.3, 0.45, 0.55];
    notes.forEach((note, i) => {
      this.play(note, durations[i], 'sine', null, delays[i]);
    });
  }

  playGameOver() {
    // Melancholic descending notes
    this.play(300, 0.3, 'sawtooth', 150);
    this.play(220, 0.35, 'sawtooth', 100, 0.25);
    this.play(147, 0.5, 'sawtooth', 60, 0.55);
  }
}

const sound = new SoundSynth();

// 4. Block Shapes Config
const BLOCK_COLORS = [
  'neon-pink',
  'neon-cyan',
  'neon-lime',
  'neon-yellow',
  'neon-orange',
  'neon-purple',
  'neon-blue'
];

// Shape coordinates relative to anchor cell [rowOffset, colOffset]
const BLOCK_SHAPES = [
  { name: '1x1 Single', coords: [[0, 0]] },
  
  { name: '1x2 Horizontal', coords: [[0, 0], [0, 1]] },
  { name: '2x1 Vertical', coords: [[0, 0], [1, 0]] },
  
  { name: '1x3 Horizontal', coords: [[0, 0], [0, 1], [0, 2]] },
  { name: '3x1 Vertical', coords: [[0, 0], [1, 0], [2, 0]] },
  
  { name: '2x2 Square', coords: [[0, 0], [0, 1], [1, 0], [1, 1]] },
  
  { name: '3-cell L Corner', coords: [[0, 0], [1, 0], [1, 1]] },
  { name: '3-cell L Corner Inverted', coords: [[0, 0], [0, 1], [1, 0]] },
  
  { name: 'T shape', coords: [[0, 0], [0, 1], [0, 2], [1, 1]] },
  
  { name: 'L shape 4-cell', coords: [[0, 0], [1, 0], [2, 0], [2, 1]] },
  { name: 'L shape 4-cell Inverted', coords: [[0, 1], [1, 1], [2, 1], [2, 0]] }
];

// 5. Game State Object
const state = {
  score: 0,
  bestScore: 0,
  comboMultiplier: 1,
  consecutiveClears: 0,
  activeCategory: 'animals',
  activeWordIndex: 0,
  activeWordObj: null,
  collectedLetters: [], // boolean array corresponding to chars of activeWordObj.word
  
  grid: Array(8).fill(null).map(() => Array(8).fill(null).map(() => ({
    occupied: false,
    char: '',
    color: ''
  }))),
  
  rackBlocks: [null, null, null], // currently available draggable blocks
  wordsCompletedCount: 0
};

// 6. DOM Elements Cache
const elements = {
  grid: document.getElementById('grid'),
  rackSlot0: document.getElementById('rack-slot-0'),
  rackSlot1: document.getElementById('rack-slot-1'),
  rackSlot2: document.getElementById('rack-slot-2'),
  btnSound: document.getElementById('btn-sound'),
  btnCategorySelect: document.getElementById('btn-category-select'),
  btnRestart: document.getElementById('btn-restart'),
  currentCategory: document.getElementById('current-category'),
  scoreVal: document.getElementById('score-val'),
  bestScoreVal: document.getElementById('best-score-val'),
  questVnMeaning: document.getElementById('quest-vn-meaning'),
  questWordSlots: document.getElementById('quest-word-slots'),
  
  // Dialogs
  startDialog: document.getElementById('start-dialog'),
  startCategoryList: document.getElementById('start-category-list'),
  btnStartGame: document.getElementById('btn-start-game'),
  
  wordDetailDialog: document.getElementById('word-detail-dialog'),
  cardEnWord: document.getElementById('card-en-word'),
  cardIpa: document.getElementById('card-ipa'),
  cardSpeechBtn: document.getElementById('card-speech-btn'),
  cardVnMeaning: document.getElementById('card-vn-meaning'),
  cardExampleEn: document.getElementById('card-example-en'),
  cardExampleVn: document.getElementById('card-example-vn'),
  btnCloseWordDetail: document.getElementById('btn-close-word-detail'),
  
  gameOverDialog: document.getElementById('game-over-dialog'),
  gameOverScore: document.getElementById('game-over-score'),
  gameOverWords: document.getElementById('game-over-words'),
  btnRestartGame: document.getElementById('btn-restart-game'),
  
  boardContainer: document.getElementById('board-container')
};

// 7. Initialize Game Board Cells
function createGrid() {
  elements.grid.innerHTML = '';
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const cell = document.createElement('div');
      cell.classList.add('cell', 'empty');
      cell.dataset.row = r;
      cell.dataset.col = c;
      elements.grid.appendChild(cell);
    }
  }
}

// 8. Render Grid state to DOM
function renderGrid() {
  const cells = elements.grid.children;
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);
    const cellState = state.grid[r][c];
    
    // Reset classes
    cell.className = 'cell';
    cell.innerHTML = '';
    
    if (cellState.occupied) {
      cell.classList.add('occupied', cellState.color);
      cell.innerHTML = cellState.char;
    } else {
      cell.classList.add('empty');
    }
  }
}

// 9. Vocabulary Quest Management
function selectCategory(catKey) {
  state.activeCategory = catKey;
  state.activeWordIndex = 0;
  state.wordsCompletedCount = 0;
  
  elements.currentCategory.textContent = VOCABULARY_DATA[catKey].name;
  
  // Update state categories list active highlight
  document.querySelectorAll('.category-option').forEach(opt => {
    if (opt.dataset.category === catKey) opt.classList.add('active');
    else opt.classList.remove('active');
  });

  loadNextWordQuest();
}

// 9. Vocabulary Quest Management (continued)
function loadNextWordQuest() {
  const catWords = VOCABULARY_DATA[state.activeCategory].words;
  if (state.activeWordIndex >= catWords.length) {
    // Completed all words in category, loop back
    state.activeWordIndex = 0;
  }
  
  state.activeWordObj = catWords[state.activeWordIndex];
  state.collectedLetters = Array(state.activeWordObj.word.length).fill(false);
  
  elements.questVnMeaning.textContent = state.activeWordObj.meaning;
  
  // Render letter slots
  elements.questWordSlots.innerHTML = '';
  for (let i = 0; i < state.activeWordObj.word.length; i++) {
    const slot = document.createElement('div');
    slot.classList.add('quest-letter-slot');
    slot.dataset.index = i;
    elements.questWordSlots.appendChild(slot);
  }
  
  updateQuestUI();
}

function updateQuestUI() {
  const slots = elements.questWordSlots.children;
  const word = state.activeWordObj.word;
  for (let i = 0; i < word.length; i++) {
    const slot = slots[i];
    if (state.collectedLetters[i]) {
      slot.classList.add('filled');
      slot.textContent = word[i];
    } else {
      slot.classList.remove('filled');
      slot.textContent = '?';
    }
  }
}

// Try to collect letters of target word when they are blasted
function checkLetterCollection(charsBlasted) {
  let updated = false;
  const word = state.activeWordObj.word;
  
  charsBlasted.forEach(char => {
    // Find uncollected letter in active word that matches char
    for (let i = 0; i < word.length; i++) {
      if (word[i] === char && !state.collectedLetters[i]) {
        state.collectedLetters[i] = true;
        updated = true;
        break; // Collect one letter per instance
      }
    }
  });
  
  if (updated) {
    updateQuestUI();
    // Check if target word is fully spelled/collected
    const isCompleted = state.collectedLetters.every(l => l === true);
    if (isCompleted) {
      triggerQuestComplete();
    }
  }
}

function triggerQuestComplete() {
  sound.playVictory();
  
  // Speak English word
  speakWord(state.activeWordObj.word);
  
  // Show detailed card
  elements.cardEnWord.textContent = state.activeWordObj.word;
  elements.cardIpa.textContent = state.activeWordObj.ipa;
  elements.cardVnMeaning.textContent = state.activeWordObj.meaning;
  elements.cardExampleEn.textContent = `"${state.activeWordObj.exampleEn}"`;
  elements.cardExampleVn.textContent = state.activeWordObj.exampleVn;
  
  elements.wordDetailDialog.showModal();
  
  // Update state
  state.wordsCompletedCount++;
  state.activeWordIndex++;
  state.score += 500; // Bonus score for completing quest
  updateScores();
}

function speakWord(wordStr) {
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(wordStr.toLowerCase());
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  } catch (e) {
    console.error("Speech Synthesis Error", e);
  }
}

// 10. Letter Selection for Blocks
// Smart allocation of letters to make quests spelling viable
function getRandomLetter() {
  const targetWord = state.activeWordObj ? state.activeWordObj.word : 'CAT';
  const vowels = 'AEIOU';
  const roll = Math.random();
  
  if (roll < 0.45 && targetWord.length > 0) {
    // Select a letter from target word
    return targetWord[Math.floor(Math.random() * targetWord.length)];
  } else if (roll < 0.75) {
    // Select a common vowel
    return vowels[Math.floor(Math.random() * vowels.length)];
  } else {
    // Select any random uppercase English letter
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }
}

// 11. Generate Next Blocks in Rack
function generateBlock(slotIndex) {
  // Select random shape
  const shapeTemplate = BLOCK_SHAPES[Math.floor(Math.random() * BLOCK_SHAPES.length)];
  const color = BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)];
  
  // Assign random letter to each coordinate cell in shape
  const blockCells = shapeTemplate.coords.map(coord => ({
    rOffset: coord[0],
    cOffset: coord[1],
    char: getRandomLetter()
  }));
  
  const block = {
    name: shapeTemplate.name,
    color: color,
    cells: blockCells
  };
  
  state.rackBlocks[slotIndex] = block;
  renderBlockInRack(slotIndex, block);
}

function renderBlockInRack(slotIndex, block) {
  const slot = document.getElementById(`rack-slot-${slotIndex}`);
  slot.innerHTML = '';
  
  if (!block) return;
  
  // Find dimensions
  const maxRow = Math.max(...block.cells.map(c => c.rOffset));
  const maxCol = Math.max(...block.cells.map(c => c.cOffset));
  
  const blockContainer = document.createElement('div');
  blockContainer.classList.add('draggable-block-container');
  blockContainer.dataset.slotIndex = slotIndex;
  
  // CSS Grid dimensions matching bounding offsets
  blockContainer.style.gridTemplateRows = `repeat(${maxRow + 1}, 1fr)`;
  blockContainer.style.gridTemplateColumns = `repeat(${maxCol + 1}, 1fr)`;
  
  // Setup cell squares
  // Initialize matrix of cells so we place them correctly in CSS Grid
  const gridCellsArray = [];
  for (let r = 0; r <= maxRow; r++) {
    for (let c = 0; c <= maxCol; c++) {
      // Find if block has a cell at this offset
      const cellData = block.cells.find(cell => cell.rOffset === r && cell.cOffset === c);
      const cellDiv = document.createElement('div');
      
      if (cellData) {
        cellDiv.classList.add('block-square', block.color);
        cellDiv.textContent = cellData.char;
        cellDiv.style.gridRow = r + 1;
        cellDiv.style.gridColumn = c + 1;
      } else {
        cellDiv.style.visibility = 'hidden';
      }
      blockContainer.appendChild(cellDiv);
    }
  }
  
  slot.appendChild(blockContainer);
  setupBlockDragging(blockContainer, slotIndex);
}

// 12. Drag & Drop System (Pointer Events)
function setupBlockDragging(container, slotIndex) {
  container.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return; // Only drag with left mouse click or touch
    
    // Prevent default touch scrolls while dragging
    e.preventDefault();
    sound.init();
    sound.playDrag();
    
    const block = state.rackBlocks[slotIndex];
    if (!block) return;
    
    // Capture pointer
    container.setPointerCapture(e.pointerId);
    
    // Find the relative bounding box of slot
    const rect = container.getBoundingClientRect();
    
    // Create drag ghost to represent block scales on hover
    const ghost = container.cloneNode(true);
    ghost.classList.add('drag-ghost');
    document.body.appendChild(ghost);
    
    // Hide original element
    container.style.visibility = 'hidden';
    
    // Ghost position offset
    // Align block anchor to cursor
    // If multiple blocks, align top-left block offset
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    // Size ghost cells to grid size style dynamically on start drag
    const gridCells = document.querySelectorAll('.grid .cell');
    const firstCell = gridCells[0];
    const cellWidth = firstCell.clientWidth;
    const cellHeight = firstCell.clientHeight;
    
    // Set ghost style
    ghost.style.position = 'fixed';
    ghost.style.left = `${e.clientX - offsetX}px`;
    ghost.style.top = `${e.clientY - offsetY - 25}px`; // slightly offset above finger for touch screens
    
    const ghostSquares = ghost.querySelectorAll('.block-square');
    ghostSquares.forEach(sq => {
      sq.style.width = `${cellWidth}px`;
      sq.style.height = `${cellHeight}px`;
      sq.style.fontSize = '1.3rem';
      sq.style.borderRadius = '6px';
    });
    
    let lastValidTarget = null;
    let hoveredCells = [];
    
    function onPointerMove(moveEvent) {
      // Move ghost
      const x = moveEvent.clientX;
      const y = moveEvent.clientY;
      const ghostTop = y - offsetY - 35; // Hover Offset
      const ghostLeft = x - offsetX;
      
      ghost.style.left = `${ghostLeft}px`;
      ghost.style.top = `${ghostTop}px`;
      
      // Clear previous hover previews
      clearPreviews();
      hoveredCells = [];
      
      // Check grid cell under the cursor
      // offset touch focus location slightly above pointer to allow visual alignment
      const searchY = moveEvent.pointerType === 'touch' ? y - 40 : y;
      const searchX = x;
      
      const elementUnder = document.elementFromPoint(searchX, searchY);
      if (!elementUnder) return;
      
      const cell = elementUnder.closest('.cell');
      if (cell && elements.grid.contains(cell)) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        
        // Check if placement is possible using this cell as anchor [0,0]
        const isValid = canPlaceBlockAt(block, row, col);
        
        // Highlight grid previews
        block.cells.forEach(c => {
          const targetRow = row + c.rOffset;
          const targetCol = col + c.cOffset;
          
          if (targetRow >= 0 && targetRow < 8 && targetCol >= 0 && targetCol < 8) {
            const gridCell = getGridCellDOM(targetRow, targetCol);
            if (gridCell) {
              if (isValid) {
                gridCell.classList.add('preview-valid');
              } else {
                gridCell.classList.add('preview-invalid');
              }
              hoveredCells.push(gridCell);
            }
          }
        });
        
        if (isValid) {
          lastValidTarget = { r: row, c: col };
        } else {
          lastValidTarget = null;
        }
      } else {
        lastValidTarget = null;
      }
    }
    
    function onPointerUp(upEvent) {
      container.releasePointerCapture(upEvent.pointerId);
      document.body.removeChild(ghost);
      container.style.visibility = 'visible';
      
      clearPreviews();
      
      // Cleanup events
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      
      if (lastValidTarget) {
        // Place Block
        placeBlockAt(block, lastValidTarget.r, lastValidTarget.c, slotIndex);
      } else {
        // Drop failed, play error shake animation and audio
        container.classList.add('shake');
        sound.playDenied();
        setTimeout(() => {
          container.classList.remove('shake');
        }, 350);
      }
    }
    
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
  });
}

function clearPreviews() {
  document.querySelectorAll('.cell').forEach(c => {
    c.classList.remove('preview-valid', 'preview-invalid');
  });
}

function getGridCellDOM(r, c) {
  const index = r * 8 + c;
  return elements.grid.children[index];
}

// 13. Grid Placement Logic
function canPlaceBlockAt(block, startRow, startCol) {
  for (let i = 0; i < block.cells.length; i++) {
    const c = block.cells[i];
    const targetRow = startRow + c.rOffset;
    const targetCol = startCol + c.cOffset;
    
    // Check bounds
    if (targetRow < 0 || targetRow >= 8 || targetCol < 0 || targetCol >= 8) {
      return false;
    }
    
    // Check collision
    if (state.grid[targetRow][targetCol].occupied) {
      return false;
    }
  }
  return true;
}

function placeBlockAt(block, startRow, startCol, slotIndex) {
  block.cells.forEach(c => {
    const targetRow = startRow + c.rOffset;
    const targetCol = startCol + c.cOffset;
    
    state.grid[targetRow][targetCol] = {
      occupied: true,
      char: c.char,
      color: block.color
    };
  });
  
  // Play drop sound
  sound.playDrop();
  
  // Award placement score (number of cells placed)
  state.score += block.cells.length;
  updateScores();
  
  // Remove block from rack
  state.rackBlocks[slotIndex] = null;
  const slot = document.getElementById(`rack-slot-${slotIndex}`);
  slot.innerHTML = '';
  
  // Render grid immediately to show newly placed block
  renderGrid();
  
  // Run checks: Blasting lines & English words!
  setTimeout(() => {
    checkBlasts();
  }, 200);
}

// 14. Blast Checker: Full Lines & Spelled English Words
function checkBlasts() {
  const rowsToBlast = new Set();
  const colsToBlast = new Set();
  const wordCellsToBlast = []; // array of {r, c}
  const wordsSpelled = [];
  
  // A. Check Full Rows & Columns
  for (let r = 0; r < 8; r++) {
    let rowFull = true;
    for (let c = 0; c < 8; c++) {
      if (!state.grid[r][c].occupied) {
        rowFull = false;
        break;
      }
    }
    if (rowFull) rowsToBlast.add(r);
  }
  
  for (let c = 0; c < 8; c++) {
    let colFull = true;
    for (let r = 0; r < 8; r++) {
      if (!state.grid[r][c].occupied) {
        colFull = false;
        break;
      }
    }
    if (colFull) colsToBlast.add(c);
  }
  
  // B. Check Horizontal & Vertical English Words
  // Horizontal word scanner
  for (let r = 0; r < 8; r++) {
    let c = 0;
    while (c < 8) {
      // Find contiguous occupied letters
      if (state.grid[r][c].occupied) {
        let startCol = c;
        let wordStr = "";
        let coords = [];
        
        while (c < 8 && state.grid[r][c].occupied) {
          wordStr += state.grid[r][c].char;
          coords.push({ r, c });
          c++;
        }
        
        // Find valid dictionary substrings within this block
        // Test all substrings of length >= 3
        findSubstringsInSegment(wordStr, coords, wordCellsToBlast, wordsSpelled);
      } else {
        c++;
      }
    }
  }
  
  // Vertical word scanner
  for (let c = 0; c < 8; c++) {
    let r = 0;
    while (r < 8) {
      if (state.grid[r][c].occupied) {
        let startRow = r;
        let wordStr = "";
        let coords = [];
        
        while (r < 8 && state.grid[r][c].occupied) {
          wordStr += state.grid[r][c].char;
          coords.push({ r, c });
          r++;
        }
        
        findSubstringsInSegment(wordStr, coords, wordCellsToBlast, wordsSpelled);
      } else {
        r++;
      }
    }
  }
  
  // C. Consolidate Cells to Blast
  const blastMap = Array(8).fill(null).map(() => Array(8).fill(false));
  let cellsCount = 0;
  const charsBlasted = [];
  
  // Mark Row blasts
  rowsToBlast.forEach(r => {
    for (let c = 0; c < 8; c++) {
      if (!blastMap[r][c]) {
        blastMap[r][c] = true;
        cellsCount++;
      }
    }
  });
  
  // Mark Col blasts
  colsToBlast.forEach(c => {
    for (let r = 0; r < 8; r++) {
      if (!blastMap[r][c]) {
        blastMap[r][c] = true;
        cellsCount++;
      }
    }
  });
  
  // Mark Word blasts
  wordCellsToBlast.forEach(coord => {
    if (!blastMap[coord.r][coord.c]) {
      blastMap[coord.r][coord.c] = true;
      cellsCount++;
    }
  });
  
  // D. Process Clears
  if (cellsCount > 0) {
    state.consecutiveClears++;
    // Combo math
    if (state.consecutiveClears > 1) {
      state.comboMultiplier = state.consecutiveClears;
    } else {
      state.comboMultiplier = 1;
    }
    
    // Add letters to collector pool before clearing
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (blastMap[r][c]) {
          charsBlasted.push(state.grid[r][c].char);
        }
      }
    }
    
    // Animation trigger on DOM elements
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (blastMap[r][c]) {
          const domCell = getGridCellDOM(r, c);
          domCell.classList.add('blast');
        }
      }
    }
    
    // Play SFX
    if (wordsSpelled.length > 0) {
      sound.playWordSpelled();
      
      // Floating word spelled popups
      wordsSpelled.forEach((word, index) => {
        spawnComboPopup(word, `+${100 * state.comboMultiplier} ${word}!`, true, index);
        // Speak word
        speakWord(word);
      });
    } else {
      sound.playBlast();
    }
    
    // Floating combo indicators
    if (rowsToBlast.size + colsToBlast.size > 0) {
      const lineClears = rowsToBlast.size + colsToBlast.size;
      const pointsEarned = lineClears * 100 * state.comboMultiplier;
      
      state.score += pointsEarned;
      spawnComboPopup("score", `+${pointsEarned} ${state.comboMultiplier > 1 ? `COMBO x${state.comboMultiplier}` : ''}`, false, 0);
    }
    
    if (wordsSpelled.length > 0) {
      state.score += wordsSpelled.length * 150 * state.comboMultiplier;
    }
    
    updateScores();
    
    // Wait for animations to complete, then update grid states
    setTimeout(() => {
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (blastMap[r][c]) {
            state.grid[r][c] = { occupied: false, char: '', color: '' };
          }
        }
      }
      renderGrid();
      
      // Check quest collection
      checkLetterCollection(charsBlasted);
      
      // Check for cascading empty racks
      checkRackEmpty();
    }, 450);
    
  } else {
    // No clears made, reset combos
    state.consecutiveClears = 0;
    state.comboMultiplier = 1;
    
    checkRackEmpty();
  }
}

// Substring helper scanner
function findSubstringsInSegment(wordStr, coords, outBlastCoords, outWordsSpelled) {
  const len = wordStr.length;
  // Test all possible subsegments of size >= 3
  for (let size = len; size >= 3; size--) {
    for (let start = 0; start <= len - size; start++) {
      const sub = wordStr.substring(start, start + size);
      
      if (COMMON_WORDS.has(sub)) {
        // Spell word! Record coordinates of the subsegment
        outWordsSpelled.push(sub);
        
        for (let i = start; i < start + size; i++) {
          outBlastCoords.push(coords[i]);
        }
        
        // Highlight matching cell letters on grid before clearing
        for (let i = start; i < start + size; i++) {
          const cellDom = getGridCellDOM(coords[i].r, coords[i].c);
          if (cellDom) cellDom.classList.add('spelling-word');
        }
      }
    }
  }
}

// 15. Score UI Updates
function updateScores() {
  elements.scoreVal.textContent = state.score;
  if (state.score > state.bestScore) {
    state.bestScore = state.score;
    localStorage.setItem('blockblast_english_best', state.bestScore);
    elements.bestScoreVal.textContent = state.bestScore;
  }
}

// Spawns clean float points/combo popup bubble on board
function spawnComboPopup(id, text, isWord = false, index = 0) {
  const container = elements.boardContainer;
  const popup = document.createElement('div');
  
  popup.classList.add('combo-popup');
  if (isWord) popup.classList.add('word-spelled');
  popup.textContent = text;
  
  // Random position within container grid boundaries
  const randomX = 30 + Math.random() * 40;
  const randomY = 40 + Math.random() * 30 + (index * 20); // shift multiple words downwards
  
  popup.style.left = `${randomX}%`;
  popup.style.top = `${randomY}%`;
  
  container.appendChild(popup);
  
  // Self cleanup
  setTimeout(() => {
    container.removeChild(popup);
  }, 1000);
}

// 16. Empty Rack checker
function checkRackEmpty() {
  const allEmpty = state.rackBlocks.every(b => b === null);
  if (allEmpty) {
    // Generate new set of 3 blocks
    for (let i = 0; i < 3; i++) {
      generateBlock(i);
    }
  }
  
  // Game Over checks
  checkGameOver();
}

// 17. Game Over Checker
function checkGameOver() {
  // Check if at least one block can be placed on grid
  let hasValidMove = false;
  
  for (let i = 0; i < 3; i++) {
    const block = state.rackBlocks[i];
    if (!block) continue;
    
    // Check all cells of 8x8 grid as potential anchor starts
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (canPlaceBlockAt(block, r, c)) {
          hasValidMove = true;
          break;
        }
      }
      if (hasValidMove) break;
    }
    
    // Disable block in rack visual if it cannot be placed anywhere
    const blockEl = document.querySelector(`.draggable-block-container[data-slot-index="${i}"]`);
    if (blockEl) {
      // Temporarily check if this specific block is placeable
      let thisBlockPlaceable = false;
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (canPlaceBlockAt(block, r, c)) {
            thisBlockPlaceable = true;
            break;
          }
        }
        if (thisBlockPlaceable) break;
      }
      
      if (!thisBlockPlaceable) {
        blockEl.classList.add('disabled');
      } else {
        blockEl.classList.remove('disabled');
      }
    }
  }
  
  // Trigger game over screen
  if (!hasValidMove && state.rackBlocks.some(b => b !== null)) {
    setTimeout(() => {
      sound.playGameOver();
      elements.gameOverScore.textContent = state.score;
      elements.gameOverWords.textContent = state.wordsCompletedCount;
      elements.gameOverDialog.showModal();
    }, 800);
  }
}

// 18. New Game Setup
function startNewGame() {
  // Reset grid
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      state.grid[r][c] = { occupied: false, char: '', color: '' };
    }
  }
  
  state.score = 0;
  state.consecutiveClears = 0;
  state.comboMultiplier = 1;
  state.wordsCompletedCount = 0;
  
  updateScores();
  renderGrid();
  
  // Select active word
  state.activeWordIndex = 0;
  loadNextWordQuest();
  
  // Reset rack
  state.rackBlocks = [null, null, null];
  elements.rackSlot0.innerHTML = '';
  elements.rackSlot1.innerHTML = '';
  elements.rackSlot2.innerHTML = '';
  
  // Spawn blocks
  for (let i = 0; i < 3; i++) {
    generateBlock(i);
  }
}

// 19. Start Modal Category Generation
function populateCategories() {
  elements.startCategoryList.innerHTML = '';
  for (const catKey in VOCABULARY_DATA) {
    const data = VOCABULARY_DATA[catKey];
    const item = document.createElement('div');
    item.classList.add('category-option');
    if (catKey === state.activeCategory) item.classList.add('active');
    item.dataset.category = catKey;
    
    item.innerHTML = `
      <div>
        <span>${data.name}</span>
        <div class="category-option-desc">${data.description}</div>
      </div>
      <span style="font-size: 0.8rem; opacity: 0.5;">▶</span>
    `;
    
    item.addEventListener('click', () => {
      selectCategory(catKey);
    });
    
    elements.startCategoryList.appendChild(item);
  }
}

// 20. Event Bindings
function bindEvents() {
  // Sound toggle button
  elements.btnSound.addEventListener('click', () => {
    const muted = sound.toggleMute();
    elements.btnSound.textContent = muted ? '🔇' : '🔊';
    sound.init();
  });
  
  // Category select button opens starting screen
  elements.btnCategorySelect.addEventListener('click', () => {
    populateCategories();
    elements.startDialog.showModal();
  });
  
  // Restart button
  elements.btnRestart.addEventListener('click', () => {
    if (confirm("Bạn có muốn chơi lại bàn cờ mới?")) {
      startNewGame();
    }
  });
  
  // Start Game Button in Dialog
  elements.btnStartGame.addEventListener('click', () => {
    elements.startDialog.close();
    sound.init();
    startNewGame();
  });
  
  // Close word flashcard
  elements.btnCloseWordDetail.addEventListener('click', () => {
    elements.wordDetailDialog.close();
    loadNextWordQuest();
    checkRackEmpty(); // checks if game over on close
  });
  
  // Pronounce word button in flashcard
  elements.cardSpeechBtn.addEventListener('click', () => {
    speakWord(state.activeWordObj.word);
  });
  
  // Game Over Restart
  elements.btnRestartGame.addEventListener('click', () => {
    elements.gameOverDialog.close();
    startNewGame();
  });
}

// 21. Main Setup & Load
window.addEventListener('DOMContentLoaded', () => {
  // Load HighScore
  const savedBest = localStorage.getItem('blockblast_english_best');
  if (savedBest) {
    state.bestScore = parseInt(savedBest);
    elements.bestScoreVal.textContent = state.bestScore;
  }
  
  createGrid();
  bindEvents();
  
  // Proactively show the welcome dialog and populate categories
  populateCategories();
  elements.startDialog.showModal();
});