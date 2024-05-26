"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

const JSG: React.FC = () => {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);
  const scoreRef =
    useRef<HTMLDivElement>(null);
  const startButtonRef =
    useRef<HTMLButtonElement>(null);
  const modalRef =
    useRef<HTMLDivElement>(null);
  const boardScoreRef =
    useRef<HTMLDivElement>(null);
  const superShootRef =
    useRef<HTMLDivElement>(null);

  class Player {
    x: number;
    y: number;
    radius: number;
    color: string;

    constructor(
      x: number,
      y: number,
      radius: number,
      color: string
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }

    draw(c: CanvasRenderingContext2D) {
      c.beginPath();
      c.arc(
        this.x,
        this.y,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      c.fillStyle = this.color;
      c.fill();
    }
  }

  class Bullet {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: { x: number; y: number };

    constructor(
      x: number,
      y: number,
      radius: number,
      color: string,
      velocity: { x: number; y: number }
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
    }

    draw(c: CanvasRenderingContext2D) {
      c.beginPath();
      c.arc(
        this.x,
        this.y,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      c.fillStyle = this.color;
      c.fill();
    }

    update(
      c: CanvasRenderingContext2D
    ) {
      this.draw(c);
      this.x += this.velocity.x * 1.1;
      this.y += this.velocity.y * 1.1;
    }
  }

  class Enemy {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: { x: number; y: number };

    constructor(
      x: number,
      y: number,
      radius: number,
      color: string,
      velocity: { x: number; y: number }
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
    }

    draw(c: CanvasRenderingContext2D) {
      c.beginPath();
      c.arc(
        this.x,
        this.y,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      c.fillStyle = this.color;
      c.fill();
    }

    update(
      c: CanvasRenderingContext2D
    ) {
      this.draw(c);
      this.x += this.velocity.x * 2;
      this.y += this.velocity.y * 2;
    }
  }

  const friction = 0.97;
  class Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: { x: number; y: number };
    alpha: number;

    constructor(
      x: number,
      y: number,
      radius: number,
      color: string,
      velocity: { x: number; y: number }
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.alpha = 1;
    }

    draw(c: CanvasRenderingContext2D) {
      c.save();
      c.globalAlpha = this.alpha;
      c.beginPath();
      c.arc(
        this.x,
        this.y,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      c.fillStyle = this.color;
      c.fill();
      c.restore();
    }

    update(
      c: CanvasRenderingContext2D
    ) {
      this.draw(c);
      this.velocity.x *= friction;
      this.velocity.y *= friction;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.01;
    }
  }

  class SuperBullet {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: { x: number; y: number };
    alpha: number;

    constructor(
      x: number,
      y: number,
      radius: number,
      color: string,
      velocity: { x: number; y: number }
    ) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.alpha = 1;
    }

    draw(c: CanvasRenderingContext2D) {
      c.save();
      c.globalAlpha = this.alpha;
      c.beginPath();
      c.arc(
        this.x,
        this.y,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      c.fillStyle = this.color;
      c.fill();
      c.restore();
    }

    update(
      c: CanvasRenderingContext2D
    ) {
      this.draw(c);
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.01;
    }
  }

  let player: Player;
  let bullets: Bullet[] = [];
  let enemies: Enemy[] = [];
  let particles: Particle[] = [];
  let score = 0;
  let superBullets: SuperBullet[] = [];
  let superShoot = 0;

  const init = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      player = new Player(
        x,
        y,
        20,
        "#ffffff"
      );
      bullets = [];
      enemies = [];
      particles = [];
      score = 0;
      if (scoreRef.current)
        scoreRef.current.innerHTML =
          String(score);
      superShoot = 0;
      if (superShootRef.current)
        superShootRef.current.innerHTML =
          String(superShoot);
    }
  };

  let frame = 0;

  const spawnEnemy = () => {
    if (frame % 60 === 0) {
      const radius =
        Math.random() * 30 + 20;
      let x: number;
      let y: number;
      const canvas = canvasRef.current;
      if (canvas) {
        if (Math.random() < 0.5) {
          x =
            Math.random() < 0.5
              ? 0 - radius
              : canvas.width + radius;
          y =
            Math.random() *
            canvas.height;
        } else {
          x =
            Math.random() *
            canvas.width;
          y =
            Math.random() < 0.5
              ? 0 - radius
              : canvas.height + radius;
        }

        const color = `hsl(${
          Math.random() * 360
        }, 50%, 50%)`;
        const angle = Math.atan2(
          y - canvas.height / 2,
          x - canvas.width / 2
        );
        const velocity = {
          x: -Math.cos(angle),
          y: -Math.sin(angle),
        };

        if (enemies.length < 512) {
          enemies.push(
            new Enemy(
              x,
              y,
              radius,
              color,
              velocity
            )
          );
        }
      }
    }
  };

  let animationID: number;

  const animate = () => {
    frame += 1;
    for (
      let i = -1;
      i < score / 20000;
      i++
    ) {
      spawnEnemy();
    }
    if (frame % 600 === 0) {
      superShoot += 1;
      if (superShootRef.current)
        superShootRef.current.innerHTML =
          String(superShoot);
    }

    animationID =
      requestAnimationFrame(animate);

    const canvas = canvasRef.current;
    if (canvas) {
      const c = canvas.getContext("2d");
      if (c) {
        c.fillStyle =
          "rgba(0, 0, 0, 0.1)";
        c.fillRect(
          0,
          0,
          canvas.width,
          canvas.height
        );

        player.draw(c);
        bullets.forEach(
          (bullet, index) => {
            bullet.update(c);
            if (
              bullet.x + bullet.radius <
                0 ||
              bullet.x - bullet.radius >
                canvas.width ||
              bullet.y + bullet.radius <
                0 ||
              bullet.y - bullet.radius >
                canvas.height
            ) {
              setTimeout(() => {
                bullets.splice(
                  index,
                  1
                );
              }, 0);
            }
          }
        );

        superBullets.forEach(
          (
            superBullet,
            superBulletindex
          ) => {
            superBullet.update(c);
            if (
              superBullet.x +
                superBullet.radius <
                0 ||
              superBullet.x -
                superBullet.radius >
                canvas.width ||
              superBullet.y +
                superBullet.radius <
                0 ||
              superBullet.y -
                superBullet.radius >
                canvas.height
            ) {
              setTimeout(() => {
                superBullets.splice(
                  superBulletindex,
                  1
                );
              }, 0);
            }
          }
        );

        enemies.forEach(
          (enemy, index) => {
            enemy.update(c);
            const p_e_d = Math.hypot(
              player.x - enemy.x,
              player.y - enemy.y
            );
            if (
              p_e_d -
                enemy.radius -
                player.radius <
              0
            ) {
              cancelAnimationFrame(
                animationID
              );
              if (modalRef.current)
                modalRef.current.style.display =
                  "flex";
              if (boardScoreRef.current)
                boardScoreRef.current.innerHTML =
                  String(score);
            }

            bullets.forEach(
              (bullet, bulletindex) => {
                const dist = Math.hypot(
                  bullet.x - enemy.x,
                  bullet.y - enemy.y
                );
                if (
                  dist -
                    enemy.radius -
                    bullet.radius <
                  1
                ) {
                  score += 100;
                  if (scoreRef.current)
                    scoreRef.current.innerHTML =
                      String(score);
                  for (
                    let i = 0;
                    i <
                    enemy.radius / 2;
                    i++
                  ) {
                    particles.push(
                      new Particle(
                        bullet.x,
                        bullet.y,
                        Math.random() *
                          3 +
                          1,
                        enemy.color,
                        {
                          x:
                            (Math.random() -
                              0.5) *
                            Math.random() *
                            enemy.radius,
                          y:
                            (Math.random() -
                              0.5) *
                            Math.random() *
                            enemy.radius,
                        }
                      )
                    );
                  }
                  if (
                    enemy.radius - 10 >
                    20
                  ) {
                    enemy.radius -= 10;
                  } else {
                    setTimeout(() => {
                      enemies.splice(
                        index,
                        1
                      );
                      bullets.splice(
                        bulletindex,
                        1
                      );
                    }, 0);
                  }
                }
              }
            );

            superBullets.forEach(
              (
                superBullet,
                superBulletindex
              ) => {
                const dist = Math.hypot(
                  superBullet.x -
                    enemy.x,
                  superBullet.y -
                    enemy.y
                );
                if (
                  dist -
                    enemy.radius -
                    superBullet.radius <
                  0.1
                ) {
                  score += 101;
                  if (scoreRef.current)
                    scoreRef.current.innerHTML =
                      String(score);
                  if (
                    superBullets.length <
                    128
                  ) {
                    for (
                      let i = 0;
                      i < 6;
                      i++
                    ) {
                      superBullets.push(
                        new SuperBullet(
                          superBullet.x,
                          superBullet.y,
                          Math.random() *
                            3 +
                            3,
                          enemy.color,
                          {
                            x:
                              ((Math.random() -
                                0.5) *
                                Math.random() *
                                enemy.radius) /
                              3,
                            y:
                              ((Math.random() -
                                0.5) *
                                Math.random() *
                                enemy.radius) /
                              3,
                          }
                        )
                      );
                    }
                    setTimeout(() => {
                      superBullets.splice(
                        superBulletindex,
                        1
                      );
                      enemies.splice(
                        index,
                        1
                      );
                    }, 0);
                  }
                }
              }
            );
          }
        );

        superBullets.forEach(
          (
            superBullet,
            superBulletindex
          ) => {
            if (
              superBullet.alpha <= 0
            ) {
              superBullets.splice(
                superBulletindex,
                1
              );
            } else {
              superBullet.update(c);
            }
          }
        );

        particles.forEach(
          (particle, index) => {
            if (particle.alpha <= 0) {
              particles.splice(
                index,
                1
              );
            } else {
              particle.update(c);
            }
          }
        );
      }
    }
  };

  useEffect(() => {
    const handleCanvasClick = (
      event: MouseEvent
    ) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const angle = Math.atan2(
          event.clientY -
            canvas.height / 2,
          event.clientX -
            canvas.width / 2
        );
        const velocity = {
          x: Math.cos(angle) * 4,
          y: Math.sin(angle) * 4,
        };
        if (superShoot < 1) {
          bullets.push(
            new Bullet(
              canvas.width / 2,
              canvas.height / 2,
              5,
              "white",
              velocity
            )
          );
        } else if (superShoot > 0) {
          superShoot -= 1;
          if (superShootRef.current)
            superShootRef.current.innerHTML =
              String(superShoot);
          superBullets.push(
            new SuperBullet(
              canvas.width / 2,
              canvas.height / 2,
              25,
              "white",
              velocity
            )
          );
        }
      }
    };

    const handleStartButtonClick =
      () => {
        init();
        cancelAnimationFrame(
          animationID
        );
        animate();
        if (modalRef.current)
          modalRef.current.style.display =
            "none";
      };

    if (canvasRef.current) {
      canvasRef.current.width =
        window.innerWidth;
      canvasRef.current.height =
        window.innerHeight;
    }

    window.addEventListener(
      "click",
      handleCanvasClick
    );
    if (startButtonRef.current) {
      startButtonRef.current.addEventListener(
        "click",
        handleStartButtonClick
      );
    }

    handleStartButtonClick();

    return () => {
      window.removeEventListener(
        "click",
        handleCanvasClick
      );
      if (startButtonRef.current) {
        startButtonRef.current.removeEventListener(
          "click",
          handleStartButtonClick
        );
      }
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black">
      <canvas ref={canvasRef}></canvas>
      <div className="absolute top-0 left-0 text-white">
        <div className="text-7xl select-none flex">
          <p className="pr-2">SCORE:</p>
          <div
            id="score"
            ref={scoreRef}
          ></div>
        </div>
        <div
          id="SuperShoot"
          ref={superShootRef}
          style={{ display: "none" }}
        ></div>
      </div>
      <div className="absolute ">
        <div
          className="flex flex-col text-white text-7xl"
          id="scoreBoard"
          ref={modalRef}
          style={{ display: "none" }}
        >
          <div className="flex select-none">
            <p className="pr-2">
              SCORE:
            </p>
            <div
              id="BoardScore"
              ref={boardScoreRef}
            ></div>
          </div>
          <div className="h-10"></div>
          <button
            className="animate-shake animate-duration-200 select-none"
            id="startButton"
            ref={startButtonRef}
          >
            RESTART
          </button>
        </div>
      </div>
      <div className="absolute text-white bottom-0 left-0 select-none">
        <p className="text-9xl">
          FE DEVELOPER
        </p>
        <p className="text-8xl">
          SHIN HYEON JUNG
        </p>
      </div>
    </section>
  );
};

export default JSG;
