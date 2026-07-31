"use client";

import { useEffect, useRef } from "react";

const GRID_SIZE = 32;

type Point = { x: number; y: number };

export function SnakeGame({ isPlaying = false }: { isPlaying?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Ensure height matches exactly the height of the Hero section, or let it resize.
    canvas.width = width;
    canvas.height = height;

    let cols = Math.floor(width / GRID_SIZE);
    let rows = Math.floor(height / GRID_SIZE);

    let snake: Point[] = [
      { x: Math.floor(cols / 2), y: Math.floor(rows / 2) },
      { x: Math.floor(cols / 2) - 1, y: Math.floor(rows / 2) },
      { x: Math.floor(cols / 2) - 2, y: Math.floor(rows / 2) },
    ];
    let direction: Point = { x: 1, y: 0 };
    let isGameOver = false;

    // Autoplay & Manual overrides
    let isManual = false;
    let manualDirection: Point | null = null;
    let manualTimeout: NodeJS.Timeout;

    function getRandomFoodPosition(): Point {
      let position: Point;
      while (true) {
        position = {
          x: Math.floor(Math.random() * cols),
          y: Math.floor(Math.random() * rows),
        };
        if (!snake.some(segment => segment.x === position.x && segment.y === position.y)) {
          break;
        }
      }
      return position;
    }

    let food: Point = getRandomFoodPosition();

    function getNextAutoDirection(): Point {
      const head = snake[0];

      const queue: { x: number, y: number, firstMove: Point }[] = [];
      const visited = new Set<string>();

      for (let i = 0; i < snake.length; i++) {
        visited.add(`${snake[i].x},${snake[i].y}`);
      }

      const moves = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
      ];

      const validInitialMoves = moves.filter(m => {
        const nx = head.x + m.x;
        const ny = head.y + m.y;
        if (snake.length > 1 && nx === snake[1].x && ny === snake[1].y) return false;
        if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) return false;
        if (visited.has(`${nx},${ny}`)) return false;
        return true;
      });

      if (validInitialMoves.length === 0) return direction;

      for (const m of validInitialMoves) {
        const nx = head.x + m.x;
        const ny = head.y + m.y;
        queue.push({ x: nx, y: ny, firstMove: m });
        visited.add(`${nx},${ny}`);
      }

      while (queue.length > 0) {
        const current = queue.shift()!;
        if (current.x === food.x && current.y === food.y) {
          return current.firstMove;
        }

        for (const m of moves) {
          const nx = current.x + m.x;
          const ny = current.y + m.y;
          if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && !visited.has(`${nx},${ny}`)) {
            visited.add(`${nx},${ny}`);
            queue.push({ x: nx, y: ny, firstMove: current.firstMove });
          }
        }
      }

      return validInitialMoves[0];
    }

    let lastTime = 0;
    const UPDATE_INTERVAL = 260; // Faster, slightly snappier snake
    let isCleanedUp = false;

    function gameLoop(time: number) {
      if (isCleanedUp) return;

      if (!isGameOver) {
        requestAnimationFrame(gameLoop);
      } else {
        setTimeout(() => {
          if (isCleanedUp) return;
          snake = [
            { x: Math.floor(cols / 2), y: Math.floor(rows / 2) },
            { x: Math.floor(cols / 2) - 1, y: Math.floor(rows / 2) },
            { x: Math.floor(cols / 2) - 2, y: Math.floor(rows / 2) },
          ];
          food = getRandomFoodPosition();
          isGameOver = false;
          direction = { x: 1, y: 0 };
          requestAnimationFrame(gameLoop);
        }, 1500);
        return;
      }

      if (time - lastTime >= UPDATE_INTERVAL) {
        lastTime = time;
        update();
        draw();
      }
    }

    function update() {
      if (isManual && manualDirection) {
        direction = manualDirection;
        manualDirection = null;
      } else if (!isManual) {
        direction = getNextAutoDirection();
      }

      const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

      // End game on wall or self-collision
      if (
        newHead.x < 0 || newHead.x >= cols ||
        newHead.y < 0 || newHead.y >= rows ||
        snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
      ) {
        isGameOver = true;
        return;
      }

      snake.unshift(newHead);

      if (newHead.x === food.x && newHead.y === food.y) {
        food = getRandomFoodPosition();
      } else {
        snake.pop();
      }
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      const centerX = food.x * GRID_SIZE + GRID_SIZE / 2;
      const centerY = food.y * GRID_SIZE + GRID_SIZE / 2;

      // Draw Food
      ctx.fillStyle = "#FF6B6B";
      ctx.beginPath();
      // Neo brutalist square food matching the "eating a dot" request
      ctx.fillRect(food.x * GRID_SIZE + 8, food.y * GRID_SIZE + 8, 16, 16);
      ctx.strokeStyle = isDark ? "#fff" : "#000";
      ctx.lineWidth = 2;
      ctx.strokeRect(food.x * GRID_SIZE + 8, food.y * GRID_SIZE + 8, 16, 16);

      // Draw Snake Body
      ctx.fillStyle = isDark ? "#4ADE80" : "#22c55e"; // Bright Neo-Brutalist Green

      snake.forEach((segment, index) => {
        const segX = segment.x * GRID_SIZE;
        const segY = segment.y * GRID_SIZE;

        // Taper the tail
        let size = 16;
        let offset = 8;
        if (index === snake.length - 1) {
          // Tip of the tail is smaller
          size = 8;
          offset = 12;
        } else if (index === snake.length - 2) {
          size = 12;
          offset = 10;
        }

        ctx.fillRect(segX + offset, segY + offset, size, size);

        // Connecting joints (filling the gap between segments)
        if (index > 0) {
          const prev = snake[index - 1]; // previous is closer to head, so it's larger
          let prevSize = 16;
          if (index - 1 === snake.length - 1) prevSize = 8;
          else if (index - 1 === snake.length - 2) prevSize = 12;

          const connSize = Math.min(size, prevSize);
          const connOffset = (GRID_SIZE - connSize) / 2;

          if (prev.x === segment.x) { // vertical connection
            const minY = Math.min(prev.y, segment.y) * GRID_SIZE;
            ctx.fillRect(segX + connOffset, minY + 16 + (16/2), connSize, 16);
          } else if (prev.y === segment.y) { // horizontal connection
            const minX = Math.min(prev.x, segment.x) * GRID_SIZE;
            ctx.fillRect(minX + 16 + (16/2), segY + connOffset, 16, connSize);
          }
        }
      });

      // Draw Snake Eyes
      const head = snake[0];
      const hx = head.x * GRID_SIZE;
      const hy = head.y * GRID_SIZE;
      ctx.fillStyle = "#000"; // Eyes are completely black

      if (direction.x === 1) { // moving right
        ctx.fillRect(hx + 18, hy + 10, 3, 3);
        ctx.fillRect(hx + 18, hy + 19, 3, 3);
      } else if (direction.x === -1) { // moving left
        ctx.fillRect(hx + 11, hy + 10, 3, 3);
        ctx.fillRect(hx + 11, hy + 19, 3, 3);
      } else if (direction.y === 1) { // moving down
        ctx.fillRect(hx + 10, hy + 18, 3, 3);
        ctx.fillRect(hx + 19, hy + 18, 3, 3);
      } else if (direction.y === -1) { // moving up
        ctx.fillRect(hx + 10, hy + 11, 3, 3);
        ctx.fillRect(hx + 19, hy + 11, 3, 3);
      }
      
      // Draw a subtle dark border around the head to emphasize it
      ctx.strokeStyle = "rgba(0,0,0,0.5)";
      ctx.lineWidth = 2;
      ctx.strokeRect(hx + 8, hy + 8, 16, 16);
    }

    // Start
    requestAnimationFrame(gameLoop);

    const handleResize = () => {
      // Re-initialize dimensions
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / GRID_SIZE);
      rows = Math.floor(height / GRID_SIZE);
    };

    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        if (isPlaying) {
          e.preventDefault();
        }
        isManual = true;
        clearTimeout(manualTimeout);
        manualTimeout = setTimeout(() => { isManual = false; }, 8000);

        if (e.key === 'ArrowUp' && direction.y !== 1) manualDirection = { x: 0, y: -1 };
        else if (e.key === 'ArrowDown' && direction.y !== -1) manualDirection = { x: 0, y: 1 };
        else if (e.key === 'ArrowLeft' && direction.x !== 1) manualDirection = { x: -1, y: 0 };
        else if (e.key === 'ArrowRight' && direction.x !== -1) manualDirection = { x: 1, y: 0 };
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });

    return () => {
      isCleanedUp = true;
      isGameOver = true;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-[1] overflow-hidden ${isPlaying ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
