import confetti from 'canvas-confetti';

// Audio Context Singleton for low-latency sound synthesis
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    console.warn('Web Audio not supported or blocked:', e);
    return null;
  }
}

/**
 * ÂM THANH CHÚC MỪNG MẠNH MẼ, HOÀNH TRÁNG
 * Fanfare kèn đồng hoàng gia kết hợp chuông ngân rực rỡ khi trả lời đúng
 */
export function playEpicFanfare() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Melody notes: C4, E4, G4, C5, then majestic finale chord (C5 + E5 + G5 + C6)
  const notes = [
    { freq: 392.00, start: 0.00, dur: 0.12 }, // G4
    { freq: 523.25, start: 0.12, dur: 0.12 }, // C5
    { freq: 659.25, start: 0.24, dur: 0.15 }, // E5
    { freq: 783.99, start: 0.39, dur: 0.35 }, // G5
    { freq: 1046.5, start: 0.75, dur: 0.90 }  // C6 (Triumph peak)
  ];

  // Harmonizing background chord at the climax
  const climaxChords = [
    { freq: 523.25, start: 0.75, dur: 0.9 }, // C5
    { freq: 659.25, start: 0.75, dur: 0.9 }, // E5
    { freq: 783.99, start: 0.75, dur: 0.9 }, // G5
  ];

  [...notes, ...climaxChords].forEach(({ freq, start, dur }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Warm brass / fanfare timbre combining sawtooth & rich overtone
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + start);

    // Dynamic brass envelope: punchy attack, bright sustain
    gain.gain.setValueAtTime(0.001, now + start);
    gain.gain.exponentialRampToValueAtTime(0.35, now + start + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.25, now + start + dur * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + start);
    osc.stop(now + start + dur);
  });

  // Sparkling celebratory high chimes
  const chimeFreqs = [1318.5, 1567.98, 2093.0];
  chimeFreqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const chimeStart = 0.8 + idx * 0.08;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + chimeStart);

    gain.gain.setValueAtTime(0.001, now + chimeStart);
    gain.gain.exponentialRampToValueAtTime(0.18, now + chimeStart + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + chimeStart + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + chimeStart);
    osc.stop(now + chimeStart + 0.6);
  });
}

/**
 * HIỆU ỨNG TUNG BÔNG TUNG HOA HOÀNH TRÁNG
 * Bắn pháo hoa, cánh hoa rực rỡ ngập tràn màn hình
 */
export function triggerCelebrationFlowers() {
  try {
    // Center big bloom burst
    confetti({
      particleCount: 75,
      spread: 100,
      origin: { y: 0.65 },
      colors: ['#2563eb', '#f97316', '#fbbf24', '#10b981', '#ec4899', '#38bdf8'],
      shapes: ['circle', 'square'],
      scalar: 1.2
    });

    // Left cannon
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#3b82f6', '#f97316', '#e11d48', '#fbbf24']
    });

    // Right cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#06b6d4', '#f59e0b', '#8b5cf6', '#10b981']
      });
    }, 150);
  } catch (e) {
    console.warn('Confetti error:', e);
  }
}

/**
 * KHI TRẢ LỜI SAI: PHÁT TIẾNG "Ố Ồ" (Speech & Web Audio)
 */
export function playWrongSoundAndVoice() {
  // 1. Phục vụ âm thanh "Ố Ồ" bằng Web Audio (hoạt động 100% không phụ thuộc giọng đọc)
  const ctx = getAudioContext();
  if (ctx) {
    const now = ctx.currentTime;

    // Syllable 1: "Ố" (Tone cao ngạc nhiên)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(320, now);
    osc1.frequency.exponentialRampToValueAtTime(370, now + 0.15);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.exponentialRampToValueAtTime(0.22, now + 0.03);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.22);

    // Syllable 2: "Ồ" (Tone trầm đi xuống buồn cười)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(260, now + 0.23);
    osc2.frequency.exponentialRampToValueAtTime(160, now + 0.55);

    gain2.gain.setValueAtTime(0.001, now + 0.23);
    gain2.gain.exponentialRampToValueAtTime(0.25, now + 0.26);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.23);
    osc2.stop(now + 0.65);
  }

  // 2. Giọng nói rõ ràng "Ố Ồ!" bằng SpeechSynthesis API
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance('Ố ồ!');
      utterance.rate = 1.0;
      utterance.pitch = 1.3;
      utterance.volume = 1.0;

      // Ưu tiên giọng tiếng Việt nếu có
      const voices = window.speechSynthesis.getVoices();
      const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
      if (viVoice) {
        utterance.voice = viVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }
}
