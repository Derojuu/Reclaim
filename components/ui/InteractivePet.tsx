'use client';

import React, { useState, useCallback } from 'react';
import { PetState } from '@/types';
import { PET_STATES } from '@/constants/site';
import { cn } from '@/lib/utils';

export const InteractivePet: React.FC = () => {
  const [petState, setPetState] = useState<PetState>('Quiet');
  const [soundOn, setSoundOn] = useState<boolean>(true);

  const playTone = useCallback(
    (state: PetState) => {
      if (!soundOn || typeof window === 'undefined') return;
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        if (state === 'Done') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
          osc.start(now);
          osc.stop(now + 0.4);
        } else if (state === 'Needs you') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(659.25, now); // E5
          osc.frequency.setValueAtTime(880, now + 0.1); // A5
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
        } else if (state === 'Working') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(329.63, now); // E4
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
          osc.start(now);
          osc.stop(now + 0.15);
        } else {
          // Quiet
          osc.type = 'sine';
          osc.frequency.setValueAtTime(261.63, now); // C4
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        }
      } catch {
        // audio might be blocked by browser gesture policies
      }
    },
    [soundOn]
  );

  const handleStateChange = (state: PetState) => {
    setPetState(state);
    playTone(state);
  };

  const getAnimation = () => {
    switch (petState) {
      case 'Working':
        return 'fp-type 0.8s ease-in-out infinite';
      case 'Needs you':
        return 'fp-wave 1.2s ease-in-out infinite';
      case 'Done':
        return 'fp-bounce 1.4s ease-in-out infinite';
      case 'Quiet':
      default:
        return 'fp-breathe 4.5s ease-in-out infinite';
    }
  };

  return (
    <div
      className="pet-demo"
      data-reveal="true"
      data-pet-state={petState}
      data-pet-sound={soundOn ? 'on' : 'off'}
    >
      <button
        className={cn('pet-sound-toggle', soundOn && 'active')}
        type="button"
        aria-pressed={soundOn}
        onClick={() => setSoundOn(!soundOn)}
      >
        <span aria-hidden="true">●</span>
        {soundOn ? 'Sound on' : 'Sound off'}
      </button>

      <div className="pet-live">
        <div className="pet-context mono">
          <span>Most recent agent</span>
          <b>Codex</b>
        </div>

        <div style={{ width: 174, height: 174, position: 'relative', display: 'inline-block' }}>
          <svg
            viewBox="0 0 100 100"
            width={174}
            height={174}
            style={{ overflow: 'visible', display: 'block' }}
          >
            <defs>
              <radialGradient id="fp-g-reclaim" cx="38%" cy="30%" r="80%">
                <stop offset="0%" stopColor="oklch(0.8472 0.0654 35)" />
                <stop offset="55%" stopColor="oklch(0.6872 0.0934 35)" />
                <stop offset="100%" stopColor="oklch(0.5672 0.0841 35)" />
              </radialGradient>
            </defs>

            {/* Ground shadow */}
            <ellipse cx={50} cy={92} rx={26} ry={5} fill="#000" opacity={0.28} />

            {/* Pet Body with state-driven animation */}
            <g
              style={{
                animation: getAnimation(),
                transformOrigin: '50px 88px',
                transition: 'transform 0.3s ease',
              }}
            >
              {/* Accessory / Backpack / Device on side */}
              <g style={{ transform: 'translate(74px,50px) scale(1.05)', transformOrigin: '0px 0px' }}>
                <ellipse cx={0} cy={0} rx={16} ry={20} fill="oklch(0.46 0.03 55)" />
                <path
                  d="M-14 -8 q14 -8 28 0"
                  fill="none"
                  stroke="oklch(0.34 0.03 55)"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <rect x={-9} y={2} width={18} height={10} rx={4} fill="oklch(0.34 0.03 55)" opacity={0.6} />
                <rect x={-2} y={-16} width={4} height={8} rx={2} fill="oklch(0.34 0.03 55)" />
              </g>

              {/* Main Body */}
              <path
                d="M50 13 C75 13 90 30 90 53 C90 76 74 88 50 88 C26 88 10 76 10 53 C10 30 25 13 50 13 Z"
                fill="url(#fp-g-reclaim)"
                stroke="oklch(0.9072 0.0467 35 / .9)"
                strokeWidth={1.5}
              />

              {/* Feet */}
              <ellipse cx={33} cy={86} rx={10} ry={6} fill="oklch(0.5672 0.0841 35)" />
              <ellipse cx={67} cy={86} rx={10} ry={6} fill="oklch(0.5672 0.0841 35)" />

              {/* Body overlay */}
              <path
                d="M50 13 C75 13 90 30 90 53 C90 76 74 88 50 88 C26 88 10 76 10 53 C10 30 25 13 50 13 Z"
                fill="url(#fp-g-reclaim)"
              />

              {/* Spine ridge highlight */}
              <path
                d="M60 22 C64 38 60 58 52 74"
                fill="none"
                stroke="oklch(0.34 0.03 55)"
                strokeWidth={4}
                strokeLinecap="round"
                opacity={0.82}
              />

              {/* Specular gloss */}
              <ellipse
                cx={38}
                cy={33}
                rx={15}
                ry={10}
                fill="#ffffff"
                opacity={0.32}
                transform="rotate(-22 38 33)"
              />
              <ellipse cx={30} cy={40} rx={4} ry={6} fill="#ffffff" opacity={0.22} />

              {/* Facial features based on state */}
              {petState === 'Quiet' && (
                <>
                  {/* Closed sleeping eyes */}
                  <path d="M36 50 q5 4 10 0" fill="none" stroke="#1c1c22" strokeWidth={2.6} strokeLinecap="round" />
                  <path d="M54 50 q5 4 10 0" fill="none" stroke="#1c1c22" strokeWidth={2.6} strokeLinecap="round" />
                  <path d="M44 61 q6 4 12 0" fill="none" stroke="#1c1c22" strokeWidth={2.4} strokeLinecap="round" opacity={0.8} />
                </>
              )}

              {petState === 'Working' && (
                <>
                  {/* Focused alert eyes with highlight */}
                  <ellipse cx={41} cy={49} rx={3} ry={4} fill="#1c1c22" />
                  <ellipse cx={59} cy={49} rx={3} ry={4} fill="#1c1c22" />
                  <ellipse cx={42} cy={47} rx={1} ry={1} fill="#ffffff" />
                  <ellipse cx={60} cy={47} rx={1} ry={1} fill="#ffffff" />
                  <path d="M46 58 q4 2 8 0" fill="none" stroke="#1c1c22" strokeWidth={2.4} strokeLinecap="round" />
                </>
              )}

              {petState === 'Needs you' && (
                <>
                  {/* Wide questioning eyes */}
                  <circle cx={40} cy={48} r={5} fill="#1c1c22" />
                  <circle cx={60} cy={48} r={5} fill="#1c1c22" />
                  <circle cx={42} cy={46} r={2} fill="#ffffff" />
                  <circle cx={62} cy={46} r={2} fill="#ffffff" />
                  <ellipse cx={50} cy={60} rx={4} ry={5} fill="#1c1c22" opacity={0.85} />
                </>
              )}

              {petState === 'Done' && (
                <>
                  {/* Happy crescent eyes & smile */}
                  <path d="M36 49 q5 -5 10 0" fill="none" stroke="#1c1c22" strokeWidth={2.8} strokeLinecap="round" />
                  <path d="M54 49 q5 -5 10 0" fill="none" stroke="#1c1c22" strokeWidth={2.8} strokeLinecap="round" />
                  <path d="M43 59 q7 8 14 0" fill="none" stroke="#1c1c22" strokeWidth={2.8} strokeLinecap="round" />
                </>
              )}
            </g>
          </svg>

          {/* Zzz animation for Quiet state */}
          {petState === 'Quiet' && (
            <div
              style={{
                position: 'absolute',
                top: '10.44px',
                right: '3.48px',
                fontFamily: 'var(--mono)',
                color: 'rgb(182,184,189)',
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '0px',
                  fontSize: '15.95px',
                  animation: '2.4s ease-in 0s infinite normal none running fp-zzz',
                }}
              >
                z
              </span>
              <span
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '-2px',
                  fontSize: '21.75px',
                  animation: '2.4s ease-in 0.8s infinite normal none running fp-zzz',
                }}
              >
                z
              </span>
              <span
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '-4px',
                  fontSize: '27.55px',
                  animation: '2.4s ease-in 1.6s infinite normal none running fp-zzz',
                }}
              >
                z
              </span>
            </div>
          )}

          {/* Sparkles for Done state */}
          {petState === 'Done' && (
            <div
              style={{
                position: 'absolute',
                top: '8px',
                right: '12px',
                color: '#f59e0b',
                fontSize: '18px',
                animation: 'fp-spark 1.2s ease-in-out infinite',
              }}
            >
              ✨
            </div>
          )}

          {/* Agent Indicator Badge */}
          <div
            title="Codex"
            style={{
              position: 'absolute',
              bottom: '3.48px',
              right: '13.92px',
              width: '19.14px',
              height: '19.14px',
              borderRadius: '50%',
              background: 'rgb(25,195,125)',
              border: '2px solid rgb(10,10,12)',
            }}
          />
        </div>
      </div>

      <div className="pet-controls" aria-label="Try the Reclaim pet states">
        {PET_STATES.map((state) => (
          <button
            key={state}
            type="button"
            className={petState === state ? 'active' : ''}
            aria-pressed={petState === state}
            onClick={() => handleStateChange(state)}
          >
            {state}
          </button>
        ))}
      </div>

      <p className="pet-hint mono">One pet · your most recent agent</p>
    </div>
  );
};
