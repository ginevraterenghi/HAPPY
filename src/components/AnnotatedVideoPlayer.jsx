import React, { useState } from 'react';
import './AnnotatedVideoPlayer.css';

export default function AnnotatedVideoPlayer({ instrument = 'violin' }) {
  const [isCorrect, setIsCorrect] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showJoints, setShowJoints] = useState(true);
  const [showAngles, setShowAngles] = useState(true);
  const [showTension, setShowTension] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

  // Biomechanical markers for Violin
  const violinData = {
    correct: {
      head: { cx: 250, cy: 110, angle: "5° (Ottimale)" },
      neck: { cx: 250, cy: 130 },
      leftShoulder: { cx: 200, cy: 150, label: "Livellata" },
      rightShoulder: { cx: 300, cy: 152, label: "Rilassata" },
      leftElbow: { cx: 160, cy: 230, angle: "98°" },
      leftWrist: { cx: 180, cy: 180, angle: "172° (Allineato)" },
      leftHand: { cx: 175, cy: 155 },
      instrument: "M195,178 L120,150 L125,140 L200,168 Z", // straight violin
      tensionPoints: [],
      notes: "La colonna è allineata. Il polso sinistro è piatto, favorendo lo scorrimento naturale delle dita senza affaticamento muscolare."
    },
    incorrect: {
      head: { cx: 242, cy: 118, angle: "24° (Compresso)" },
      neck: { cx: 248, cy: 132 },
      leftShoulder: { cx: 195, cy: 138, label: "Sollevata (+12%)" },
      rightShoulder: { cx: 305, cy: 154, label: "Compensata" },
      leftElbow: { cx: 175, cy: 242, angle: "65°" },
      leftWrist: { cx: 195, cy: 205, angle: "125° (Collassato)" },
      leftHand: { cx: 178, cy: 165 },
      instrument: "M195,188 L120,165 L125,155 L200,178 Z", // tilted violin
      tensionPoints: [
        { cx: 195, cy: 138, r: 14, text: "Sovraccarico Trapezio" },
        { cx: 195, cy: 205, r: 12, text: "Flessione Tunnel Carpale" },
        { cx: 242, cy: 118, r: 14, text: "Tensione Cervicale" }
      ],
      notes: "Collassamento del polso e bloccaggio del collo. La spalla sinistra sollevata crea una tensione costante che può portare a tendiniti croniche."
    }
  };

  // Biomechanical markers for Piano
  const pianoData = {
    correct: {
      head: { cx: 220, cy: 100, angle: "0° (Asse)" },
      neck: { cx: 220, cy: 125 },
      leftShoulder: { cx: 200, cy: 150, label: "Rilassata" },
      rightShoulder: { cx: 200, cy: 150, label: "Rilassata" },
      leftElbow: { cx: 202, cy: 220, angle: "92° (Ottimale)" },
      leftWrist: { cx: 260, cy: 220, angle: "180° (Piatto)" },
      leftHand: { cx: 300, cy: 225 },
      instrument: "M290,225 L340,225 L340,250 L290,250 Z", // keys level
      tensionPoints: [],
      notes: "Sguardo allineato allo spartito. Gomiti all'altezza della tastiera. Il polso neutro trasmette l'energia dall'avambraccio direttamente ai tasti."
    },
    incorrect: {
      head: { cx: 240, cy: 115, angle: "18° (Proiettata)" },
      neck: { cx: 232, cy: 135 },
      leftShoulder: { cx: 202, cy: 142, label: "Tesa" },
      rightShoulder: { cx: 202, cy: 142, label: "Tesa" },
      leftElbow: { cx: 195, cy: 235, angle: "115° (Basso)" },
      leftWrist: { cx: 270, cy: 205, angle: "148° (Spezzato)" },
      leftHand: { cx: 300, cy: 228 },
      instrument: "M290,225 L340,225 L340,250 L290,250 Z",
      tensionPoints: [
        { cx: 270, cy: 205, r: 12, text: "Flessori dita tesi" },
        { cx: 240, cy: 115, r: 14, text: "Ipercifosi Cervicale" }
      ],
      notes: "Tastiera troppo alta o sedia troppo bassa. Il polso 'spezzato' verso il basso blocca i tendini flessori delle dita, forzando la mano a sforzi continui."
    }
  };

  // Biomechanical markers for Flute
  const fluteData = {
    correct: {
      head: { cx: 250, cy: 110, angle: "3° (Rilassato)" },
      neck: { cx: 250, cy: 130 },
      leftShoulder: { cx: 200, cy: 155, label: "Libera" },
      rightShoulder: { cx: 300, cy: 150, label: "Libera" },
      leftElbow: { cx: 175, cy: 200, angle: "85°" },
      leftWrist: { cx: 215, cy: 165, angle: "175°" },
      leftHand: { cx: 220, cy: 155 },
      instrument: "M220,155 L380,158 L380,164 L220,161 Z", // straight flute
      tensionPoints: [],
      notes: "Flauto parallelo al suolo (o leggermente inclinato). Colonna eretta. Spalle livellate per favorire la massima espansione della cassa toracica."
    },
    incorrect: {
      head: { cx: 235, cy: 115, angle: "18° (Inclinato)" },
      neck: { cx: 240, cy: 132 },
      leftShoulder: { cx: 200, cy: 165, label: "Compressa" },
      rightShoulder: { cx: 295, cy: 140, label: "Sollevata (+15%)" },
      leftElbow: { cx: 185, cy: 215, angle: "112°" },
      leftWrist: { cx: 218, cy: 180, angle: "135° (Teso)" },
      leftHand: { cx: 225, cy: 168 },
      instrument: "M225,168 L360,195 L358,201 L223,174 Z", // sagging flute
      tensionPoints: [
        { cx: 295, cy: 140, r: 14, text: "Sovraccarico Trapezio Destro" },
        { cx: 235, cy: 115, r: 12, text: "Compressione Cervicale" }
      ],
      notes: "Inclinazione eccessiva della testa per assecondare la caduta del flauto. Blocco della respirazione diaframmatica a causa delle spalle contratte."
    }
  };

  const currentSource = instrument === 'piano' 
    ? pianoData 
    : instrument === 'flute' 
      ? fluteData 
      : violinData;

  const activeData = isCorrect ? currentSource.correct : currentSource.incorrect;

  return (
    <div className="annotated-player">
      {/* Top dashboard metadata */}
      <div className="player-meta-bar">
        <div className="meta-left">
          <span className="live-tag">ANALYSIS: ONLINE</span>
          <span className="tech-spec font-mono">INSTRUMENT: {instrument.toUpperCase()}</span>
        </div>
        <div className="meta-right font-mono">
          <span>FPS: 60</span>
          <span>GRID: {showGrid ? "ON" : "OFF"}</span>
          <span>POSTURE: <span className={isCorrect ? "glow-green" : "glow-coral"}>{isCorrect ? "CORRETTA" : "ANOMALA"}</span></span>
        </div>
      </div>

      {/* Main Display Frame */}
      <div className="player-display-frame">
        {/* Spatial blueprint lines grid */}
        {showGrid && (
          <div className="postural-grid-overlay">
            <div className="grid-line line-h-center"></div>
            <div className="grid-line line-v-center"></div>
            <div className="grid-radial-circle r-1"></div>
            <div className="grid-radial-circle r-2"></div>
          </div>
        )}

        {/* Dynamic Vector Figure SVG */}
        <svg viewBox="100 50 300 300" className="vector-figure-svg">
          {/* Spatial tracking axes */}
          {showGrid && (
            <>
              {/* Axes lines connecting points */}
              <line x1={activeData.neck.cx} y1="0" x2={activeData.neck.cx} y2="400" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1={activeData.leftShoulder.cy} x2="500" y2={activeData.leftShoulder.cy} stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
            </>
          )}

          {/* Instrument silhouette */}
          <path d={activeData.instrument} fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="6" />
          <path d={activeData.instrument} fill="none" stroke={isCorrect ? "var(--primary-color)" : "var(--accent-color)"} strokeWidth="2" />

          {/* Spine and Neck Line */}
          <path 
            d={`M250,320 L250,220 Q250,160 ${activeData.neck.cx},${activeData.neck.cy} L${activeData.head.cx},${activeData.head.cy}`} 
            fill="none" 
            stroke="var(--text-muted)" 
            strokeWidth="3" 
            strokeLinecap="round"
          />

          {/* Shoulders alignment line */}
          <line 
            x1={activeData.leftShoulder.cx} 
            y1={activeData.leftShoulder.cy} 
            x2={activeData.rightShoulder.cx} 
            y2={activeData.rightShoulder.cy} 
            stroke={isCorrect ? "var(--accent-green)" : "var(--accent-color)"} 
            strokeWidth="3" 
            strokeDasharray={isCorrect ? "" : "3 3"}
          />

          {/* Left Arm tracking path */}
          <path 
            d={`M${activeData.leftShoulder.cx},${activeData.leftShoulder.cy} L${activeData.leftElbow.cx},${activeData.leftElbow.cy} L${activeData.leftWrist.cx},${activeData.leftWrist.cy} L${activeData.leftHand.cx},${activeData.leftHand.cy}`} 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.6)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />

          {/* Glowing joints dots */}
          {showJoints && (
            <>
              <circle cx={activeData.head.cx} cy={activeData.head.cy} r="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
              <circle cx={activeData.head.cx} cy={activeData.head.cy} r="5" fill={isCorrect ? "var(--accent-green)" : "var(--accent-color)"} />
              
              <circle cx={activeData.leftShoulder.cx} cy={activeData.leftShoulder.cy} r="6" fill="var(--primary-color)" />
              <circle cx={activeData.rightShoulder.cx} cy={activeData.rightShoulder.cy} r="6" fill="var(--primary-color)" />
              <circle cx={activeData.leftElbow.cx} cy={activeData.leftElbow.cy} r="6" fill="var(--primary-color)" />
              <circle cx={activeData.leftWrist.cx} cy={activeData.leftWrist.cy} r="6" fill="var(--primary-color)" />
            </>
          )}

          {/* Biomechanical angles overlay */}
          {showAngles && (
            <>
              {/* Elbow angle indicator */}
              <text x={activeData.leftElbow.cx - 38} y={activeData.leftElbow.cy + 5} className="svg-tech-text label-angle">
                {activeData.leftElbow.angle}
              </text>
              <path d={`M${activeData.leftElbow.cx - 15},${activeData.leftElbow.cy} A15,15 0 0,0 ${activeData.leftElbow.cx - 5},${activeData.leftElbow.cy - 12}`} fill="none" stroke="var(--primary-color)" strokeWidth="1.5" />

              {/* Wrist angle indicator */}
              <text x={activeData.leftWrist.cx + 12} y={activeData.leftWrist.cy + 4} className="svg-tech-text label-angle">
                {activeData.leftWrist.angle}
              </text>

              {/* Neck angle indicator */}
              <text x={activeData.head.cx + 22} y={activeData.head.cy + 4} className="svg-tech-text label-angle">
                {activeData.head.angle}
              </text>
            </>
          )}

          {/* Muscle tension points warnings */}
          {showTension && !isCorrect && (
            activeData.tensionPoints.map((pt, idx) => (
              <g key={idx}>
                {/* Concentric red warning rings */}
                <circle cx={pt.cx} cy={pt.cy} r={pt.r} fill="none" stroke="var(--accent-color)" strokeWidth="1.5" className="tension-ring-anim" />
                <circle cx={pt.cx} cy={pt.cy} r={pt.r + 6} fill="none" stroke="var(--accent-color)" strokeWidth="0.8" opacity="0.6" strokeDasharray="2 2" />
                
                {/* Pointer lines to side tags */}
                <line x1={pt.cx} y1={pt.cy} x2={pt.cx > 250 ? pt.cx + 25 : pt.cx - 25} y2={pt.cy - 15} stroke="var(--accent-color)" strokeWidth="1" />
                <text 
                  x={pt.cx > 250 ? pt.cx + 28 : pt.cx - 28} 
                  y={pt.cy - 18} 
                  textAnchor={pt.cx > 250 ? "start" : "end"} 
                  className="svg-tech-text label-tension"
                >
                  {pt.text}
                </text>
              </g>
            ))
          )}
        </svg>

        {/* Video simulation play state overlay */}
        <div className="tracking-coordinate-corner font-mono">
          <div>LOC_X: {(150 + (isCorrect ? 10 : 30)).toFixed(2)}</div>
          <div>LOC_Y: {(200 - (isCorrect ? 20 : 5)).toFixed(2)}</div>
          <div>TENSION: {!isCorrect ? "HIGH CRITICAL" : "BALANCED"}</div>
        </div>
      </div>

      {/* Interactive Controls Panel */}
      <div className="player-controls-panel">
        <div className="mode-toggle-group">
          <button 
            className={`mode-btn correct-btn ${isCorrect ? 'active' : ''}`}
            onClick={() => setIsCorrect(true)}
          >
            <span>MODE: POSTURA CORRETTA</span>
          </button>
          <button 
            className={`mode-btn incorrect-btn ${!isCorrect ? 'active' : ''}`}
            onClick={() => setIsCorrect(false)}
          >
            <span>MODE: ANOMALIA POSTURALE</span>
          </button>
        </div>

        {/* Toggle checkboxes for layout overlays */}
        <div className="overlay-checkboxes">
          <button className={`toggle-opt ${showGrid ? 'active' : ''}`} onClick={() => setShowGrid(!showGrid)}>
            Griglia 2D
          </button>
          <button className={`toggle-opt ${showJoints ? 'active' : ''}`} onClick={() => setShowJoints(!showJoints)}>
            Articolazioni
          </button>
          <button className={`toggle-opt ${showAngles ? 'active' : ''}`} onClick={() => setShowAngles(!showAngles)}>
            Goniometria
          </button>
          <button className={`toggle-opt ${showTension ? 'active' : ''}`} onClick={() => setShowTension(!showTension)}>
            Tensione
          </button>
        </div>

        {/* Step-by-step gesture timeline */}
        <div className="timeline-steps-slider">
          <span className="timeline-label font-mono">SEQUENZA GESTO:</span>
          <div className="timeline-dots">
            <button className={`time-dot-btn ${activeStep === 1 ? 'active' : ''}`} onClick={() => setActiveStep(1)}>1. Posizionamento</button>
            <button className={`time-dot-btn ${activeStep === 2 ? 'active' : ''}`} onClick={() => setActiveStep(2)}>2. Pressione tasti</button>
            <button className={`time-dot-btn ${activeStep === 3 ? 'active' : ''}`} onClick={() => setActiveStep(3)}>3. Rilascio</button>
          </div>
        </div>
      </div>

      {/* Dynamic clinical explanation notes */}
      <div className="player-notes-card card">
        <span className="notes-tag font-mono">DOTT. FIORELLA (FISIOTERAPIA) & PROT. ACCADEMICO:</span>
        <p className="notes-text">{activeData.notes}</p>
      </div>
    </div>
  );
}
