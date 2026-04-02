"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getTransition } from "@/lib/motion";

interface TerminalLine {
  type: "input" | "output";
  content: string;
}

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help        - Show this help message",
    "  about       - Learn about me",
    "  skills      - View my tech stack",
    "  contact     - Get my contact info",
    "  projects    - Jump to projects section",
    "  clear       - Clear terminal",
    "  neofetch    - Display system info",
    "  game        - Play Snake! 🐍",
    "",
    "Fun commands (try them!):",
    "  flip        - Flip the world upside down",
    "  party       - Disco mode!",
    "  matrix      - Enter the Matrix",
    "  shake       - Earthquake!",
    "  hack        - Become a hackerman",
    "  exit        - Try to escape",
    "  sudo hire-me - ???",
  ],
  about: [
    "Hey! I'm Souhaib Harrabi",
    "A Full Stack Developer based in Dubai, UAE",
    "I build scalable web & mobile apps",
    "Currently open to new opportunities!",
  ],
  skills: [
    "Backend:  ASP.NET Core, Node.js, PostgreSQL",
    "Frontend: Vue.js, React, TypeScript",
    "Mobile:   Flutter, React Native, Capacitor",
    "DevOps:   Docker, Git, CI/CD",
    "Other:    SignalR, JWT, Clean Architecture",
  ],
  contact: [
    "Email:    harrabisouhaib@gmail.com",
    "GitHub:   github.com/CodeBySouhaib",
    "LinkedIn: linkedin.com/in/harrabisouhaib",
  ],
  "sudo hire-me": [
    "Permission granted!",
    "Sending job offer...",
    "Just kidding, but I'm available for hire!",
    "Check out my projects below or contact me.",
  ],
  "rm -rf /": [
    "Nice try! But this terminal is sandboxed.",
    "No systems were harmed.",
  ],
  whoami: ["souhaib@portfolio ~ You're awesome!"],
  ls: ["about.txt  skills.json  projects/  contact.md  secret/"],
  "cat secret": ["403 Forbidden: Nice try, hacker!"],
  pwd: ["/home/souhaib/portfolio"],
  date: [new Date().toLocaleString()],
  echo: ["Usage: echo <message>"],
  neofetch: [
    "     .-.       souhaib@portfolio",
    "    (o o)      -----------------",
    "    | O |      OS: Web Browser",
    "    |   |      Host: souhaib.dev",
    "   _'---'_     Uptime: since 2021",
    "  /  |||  \\    Languages: TS, C#, Dart",
    "    ^^ ^^      Framework: Next.js 14",
    "              Theme: Dark Mode",
    "              Terminal: Interactive",
    "              Coffee: Unlimited",
    "",
    "  > Get rich or debug trying",
  ],
};

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to Souhaib's terminal! Type 'help' for commands." },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gameActive, setGameActive] = useState(false);
  const [snake, setSnake] = useState<{x: number, y: number}[]>([{x: 10, y: 5}]);
  const [food, setFood] = useState<{x: number, y: number}>({x: 15, y: 5});
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">("right");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<NodeJS.Timeout | null>(null);
  const reduceMotion = useReducedMotion();

  const GAME_WIDTH = 30;
  const GAME_HEIGHT = 10;

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Snake game logic
  useEffect(() => {
    if (!gameActive || gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };
        
        switch (direction) {
          case "up": head.y -= 1; break;
          case "down": head.y += 1; break;
          case "left": head.x -= 1; break;
          case "right": head.x += 1; break;
        }

        // Check wall collision
        if (head.x < 0 || head.x >= GAME_WIDTH || head.y < 0 || head.y >= GAME_HEIGHT) {
          setGameOver(true);
          setGameActive(false);
          setLines(prev => [
            ...prev,
            { type: "output", content: "" },
            { type: "output", content: "💀 GAME OVER! Final Score: " + score },
            { type: "output", content: "Type 'game' to play again!" },
          ]);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          setGameActive(false);
          setLines(prev => [
            ...prev,
            { type: "output", content: "" },
            { type: "output", content: "💀 GAME OVER! Final Score: " + score },
            { type: "output", content: "Type 'game' to play again!" },
          ]);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(s => s + 10);
          setFood({
            x: Math.floor(Math.random() * GAME_WIDTH),
            y: Math.floor(Math.random() * GAME_HEIGHT)
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    gameRef.current = setInterval(moveSnake, 150);
    return () => {
      if (gameRef.current) clearInterval(gameRef.current);
    };
  }, [gameActive, gameOver, direction, food, score]);

  // Render game board
  const renderGame = () => {
    const board: string[] = [];
    board.push("┌" + "─".repeat(GAME_WIDTH) + "┐  Score: " + score);
    
    for (let y = 0; y < GAME_HEIGHT; y++) {
      let row = "│";
      for (let x = 0; x < GAME_WIDTH; x++) {
        if (snake.some((s, i) => s.x === x && s.y === y)) {
          row += snake[0].x === x && snake[0].y === y ? "●" : "○";
        } else if (food.x === x && food.y === y) {
          row += "★";
        } else {
          row += " ";
        }
      }
      row += "│";
      board.push(row);
    }
    board.push("└" + "─".repeat(GAME_WIDTH) + "┘");
    board.push("");
    board.push("  Use WASD or Arrow Keys to move | Q to quit");
    
    return board;
  };

  // Handle game input
  const handleGameKey = (e: React.KeyboardEvent) => {
    if (!gameActive) return false;
    
    const key = e.key.toLowerCase();
    
    if (key === "w" || e.key === "ArrowUp") {
      if (direction !== "down") setDirection("up");
      e.preventDefault();
      return true;
    }
    if (key === "s" || e.key === "ArrowDown") {
      if (direction !== "up") setDirection("down");
      e.preventDefault();
      return true;
    }
    if (key === "a" || e.key === "ArrowLeft") {
      if (direction !== "right") setDirection("left");
      e.preventDefault();
      return true;
    }
    if (key === "d" || e.key === "ArrowRight") {
      if (direction !== "left") setDirection("right");
      e.preventDefault();
      return true;
    }
    if (key === "q") {
      setGameActive(false);
      setGameOver(false);
      setLines(prev => [...prev, { type: "output", content: "Game ended. Final score: " + score }]);
      e.preventDefault();
      return true;
    }
    
    return false;
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    // Add to history
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Add input line
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: cmd },
    ];

    if (trimmedCmd === "clear") {
      setLines([
        { type: "output", content: "Terminal cleared. Type 'help' for commands." },
      ]);
      setGameActive(false);
      setGameOver(false);
      return;
    }

    if (trimmedCmd === "game" || trimmedCmd === "snake") {
      setLines([
        ...newLines,
        { type: "output", content: "Starting Snake Game... 🐍" },
        { type: "output", content: "" },
      ]);
      setSnake([{x: 10, y: 5}]);
      setFood({x: 15, y: 5});
      setDirection("right");
      setScore(0);
      setGameOver(false);
      setGameActive(true);
      return;
    }

    if (trimmedCmd === "projects") {
      newLines.push({ type: "output", content: "Navigating to projects..." });
      setLines(newLines);
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return;
    }

    if (trimmedCmd.startsWith("echo ")) {
      const message = cmd.slice(5);
      newLines.push({ type: "output", content: message || "(empty)" });
      setLines(newLines);
      return;
    }

    // Handle sudo hire-me specifically (normalize different formats)
    if (trimmedCmd === "sudo hire-me" || trimmedCmd === "sudo hirme" || trimmedCmd === "sudo hire me") {
      newLines.push({ type: "output", content: "[sudo] password for visitor: ********" });
      setLines([...newLines]);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "Verifying credentials..." }]);
      }, 600);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "Access granted! 🔓" }]);
      }, 1200);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "" }]);
        setLines(prev => [...prev, { type: "output", content: "📧 Sending job offer to harrabisouhaib@gmail.com..." }]);
      }, 1800);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "📄 Generating contract... [██████████] 100%" }]);
      }, 2400);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "💰 Transferring signing bonus... $999,999.99" }]);
      }, 3000);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "" }]);
        setLines(prev => [...prev, { type: "output", content: "Just kidding... but I AM available for hire! 😄" }]);
        setLines(prev => [...prev, { type: "output", content: "Contact me: harrabisouhaib@gmail.com" }]);
      }, 3800);
      
      // Confetti-like effect
      setTimeout(() => {
        const colors = ["#22c55e", "#3b82f6", "#eab308", "#ef4444", "#a855f7"];
        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement("div");
          confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            pointer-events: none;
            z-index: 9999;
            border-radius: 50%;
            animation: confetti-fall 3s ease-out forwards;
          `;
          document.body.appendChild(confetti);
          setTimeout(() => confetti.remove(), 3000);
        }
      }, 3000);
      
      return;
    }

    // CRAZY EASTER EGGS
    if (trimmedCmd === "flip" || trimmedCmd === "rotate") {
      newLines.push({ type: "output", content: "Flipping the world upside down... Hold on!" });
      setLines(newLines);
      document.body.style.transition = "transform 1s ease";
      document.body.style.transform = "rotate(180deg)";
      setTimeout(() => {
        document.body.style.transform = "rotate(0deg)";
      }, 3000);
      return;
    }

    if (trimmedCmd === "party" || trimmedCmd === "disco") {
      newLines.push({ type: "output", content: "PARTY MODE ACTIVATED! 🎉🎉🎉" });
      setLines(newLines);
      const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00", "#00ffff"];
      let i = 0;
      const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = "#0a0a0a";
      }, 3000);
      return;
    }

    if (trimmedCmd === "matrix") {
      newLines.push({ type: "output", content: "Entering the Matrix..." });
      setLines(newLines);
      document.body.style.transition = "filter 0.5s ease";
      document.body.style.filter = "hue-rotate(90deg) saturate(2)";
      setTimeout(() => {
        document.body.style.filter = "none";
      }, 4000);
      return;
    }

    if (trimmedCmd === "shake" || trimmedCmd === "earthquake") {
      newLines.push({ type: "output", content: "EARTHQUAKE!!! 🌋" });
      setLines(newLines);
      document.body.style.animation = "shake 0.5s ease-in-out 6";
      setTimeout(() => {
        document.body.style.animation = "";
      }, 3000);
      return;
    }

    if (trimmedCmd === "hack" || trimmedCmd === "hackerman") {
      newLines.push({ type: "output", content: "ACCESSING MAINFRAME..." });
      setLines([...newLines]);
      
      // Add green hacker overlay
      const overlay = document.createElement("div");
      overlay.id = "hack-overlay";
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 255, 0, 0.1);
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: overlay;
      `;
      document.body.appendChild(overlay);
      document.body.style.transition = "background-color 0.3s ease";
      document.body.style.backgroundColor = "#001a00";
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "Bypassing firewall... [████████░░] 80%" }]);
      }, 800);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "Cracking encryption... [██████████] 100%" }]);
      }, 1600);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "Downloading internet... 🌐" }]);
      }, 2400);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "Stealing cookies... 🍪🍪🍪" }]);
      }, 3200);
      
      setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: "" }]);
        setLines(prev => [...prev, { type: "output", content: "Just kidding, you're not that cool 😎" }]);
        document.body.style.backgroundColor = "#0a0a0a";
        document.getElementById("hack-overlay")?.remove();
      }, 4000);
      
      return;
    }

    if (trimmedCmd === "exit") {
      newLines.push({ type: "output", content: "Nice try! You can't escape this terminal 😈" });
      setLines(newLines);
      document.body.style.transition = "transform 0.5s ease";
      document.body.style.transform = "scale(0.01)";
      setTimeout(() => {
        document.body.style.transform = "scale(1)";
      }, 1500);
      return;
    }

    const response = COMMANDS[trimmedCmd];
    
    if (response) {
      const outputLines = Array.isArray(response) ? response : [response];
      outputLines.forEach((line) => {
        newLines.push({ type: "output", content: line });
      });
    } else {
      newLines.push({
        type: "output",
        content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
      });
    }

    setLines(newLines);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle game input first
    if (gameActive && handleGameKey(e)) {
      return;
    }
    
    if (e.key === "Enter") {
      handleCommand(currentInput);
      setCurrentInput("");
    } else if (e.key === "ArrowUp" && !gameActive) {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown" && !gameActive) {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple autocomplete
      const matches = Object.keys(COMMANDS).filter((cmd) =>
        cmd.startsWith(currentInput.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={getTransition(reduceMotion, { duration: 0.5, delay: 0.8 })}
      className="w-full max-w-2xl mx-auto mt-12"
    >
      <div className="bg-[#0d0d0d] border border-[#262626] rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#171717] border-b border-[#262626]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
          </div>
          <span className="ml-2 text-xs text-[#737373] font-mono">
            souhaib@portfolio ~ bash
          </span>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="p-4 h-80 overflow-y-auto font-mono text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Show game if active */}
          {gameActive ? (
            <div className="text-[#27ca3f]">
              {renderGame().map((line, i) => (
                <div key={i} className="whitespace-pre">{line}</div>
              ))}
            </div>
          ) : (
            <>
              {lines.map((line, index) => (
                <div key={index} className="mb-1">
                  {line.type === "input" ? (
                    <div className="flex">
                      <span className="text-[#27ca3f]">souhaib</span>
                      <span className="text-[#737373]">@</span>
                      <span className="text-[#3B82F6]">portfolio</span>
                      <span className="text-[#737373] mx-1">$</span>
                      <span className="text-[#e5e5e5]">{line.content}</span>
                    </div>
                  ) : (
                    <div className="text-[#a3a3a3] whitespace-pre-wrap">{line.content}</div>
                  )}
                </div>
              ))}

              {/* Current Input Line */}
              <div className="flex items-center">
                <span className="text-[#27ca3f]">souhaib</span>
                <span className="text-[#737373]">@</span>
                <span className="text-[#3B82F6]">portfolio</span>
                <span className="text-[#737373] mx-1">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-[#e5e5e5] caret-[#3B82F6]"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="w-2 h-5 bg-[#3B82F6] animate-blink" />
              </div>
            </>
          )}
          {/* Hidden input for game controls */}
          {gameActive && (
            <input
              ref={inputRef}
              type="text"
              onKeyDown={handleKeyDown}
              className="opacity-0 absolute"
              autoFocus
            />
          )}
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#171717] border-t border-[#262626] text-xs text-[#525252] font-mono">
          Try: help, about, skills, neofetch, sudo hire-me
        </div>
      </div>
    </motion.div>
  );
}
