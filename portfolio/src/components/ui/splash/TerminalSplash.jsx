import { useEffect, useRef, useState } from 'react';
import './TerminalSplash.css';

const COMMAND = 'Enter';

const TerminalSplash = ({ onComplete }) => {
  const [typedText, setTypedText] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const completeCalledRef = useRef(false);
  const timersRef = useRef([]);
  const audioContextRef = useRef(null);

  const addTimer = (timerId) => {
    timersRef.current.push(timerId);
  };

  const clearAllTimers = () => {
    timersRef.current.forEach((timerId) => {
      clearTimeout(timerId);
      clearInterval(timerId);
    });
    timersRef.current = [];
  };

  const playClickBeep = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
      }

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const now = audioContext.currentTime;

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(700 + Math.random() * 260, now);

      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.024, now + 0.006);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start(now);
      oscillator.stop(now + 0.045);
    } catch {
      // Audio may be blocked by browser autoplay policy.
    }
  };

  const playMorseSuccess = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
      }

      const unit = 85;

      const pattern = [
        1, 1, 1, // S (...)
        3, 3, 3, // O (---)
        1, 1, 1, // S (...)
      ];

      let offset = 0;

      pattern.forEach((durationUnits, index) => {
        addTimer(
          setTimeout(() => {
            try {
              const now = audioContext.currentTime;

              const oscillator = audioContext.createOscillator();
              const gainNode = audioContext.createGain();

              oscillator.type = 'sine';
              oscillator.frequency.setValueAtTime(620, now);

              gainNode.gain.setValueAtTime(0.0001, now);
              gainNode.gain.exponentialRampToValueAtTime(0.03, now + 0.01);
              gainNode.gain.exponentialRampToValueAtTime(
                0.0001,
                now + (durationUnits * unit) / 1000
              );

              oscillator.connect(gainNode);
              gainNode.connect(audioContext.destination);

              oscillator.start(now);
              oscillator.stop(now + (durationUnits * unit) / 1000 + 0.015);
            } catch {
              // Ignore intermittent audio scheduling failures.
            }
          }, offset)
        );

        const isGroupBreak = index === 2 || index === 5;
        offset += durationUnits * unit + (isGroupBreak ? 3 * unit : unit);
      });
    } catch {
      // Audio may be blocked by browser autoplay policy.
    }
  };

  const finishSplash = () => {
    if (completeCalledRef.current) return;

    completeCalledRef.current = true;
    setIsClosing(true);

    addTimer(
      setTimeout(() => {
        onComplete?.();
      }, 520)
    );
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex >= COMMAND.length) {
        clearInterval(typingInterval);

        playMorseSuccess();

        addTimer(
          setTimeout(() => {
            finishSplash();
          }, 1450)
        );

        return;
      }

      const nextCharacter = COMMAND[charIndex];
      setTypedText((previous) => previous + nextCharacter);

      playClickBeep();

      charIndex += 1;
    }, 90);

    addTimer(typingInterval);

    return () => {
      clearAllTimers();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className={`terminal-splash ${isClosing ? 'terminal-splash--hide' : ''}`}>
      <div className="terminal-splash__noise" />

      <div className="terminal-splash__window">
        <div className="terminal-splash__header">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <p>boot://haytam-portfolio</p>
        </div>

        <div className="terminal-splash__body">
          <p className="line line--command">
            <span className="prompt">&gt; </span>
            <span>boot developer_portfolio</span>
          </p>

          <p className="line line--muted">Loading developer profile...</p>
          <p className="line line--muted">Loading projects...</p>
          <p className="line line--muted">Loading experience...</p>

          <p className="line line--welcome">Welcome to</p>
          <p className="line line--title">Haytam Raba Portfolio</p>

          <p className="line line--command">
            <span className="prompt">&gt; </span>
            <span>{typedText}</span>
            <span className="cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalSplash;