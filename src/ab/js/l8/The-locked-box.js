class Box {
  constructor() {
    this.locked = true;
    this.#content = [];
  }

  #content = [];

  unlock() {
    this.locked = false;
  }

  lock() {
    this.locked = true;
  }

  get content() {
    if (this.locked) throw new Error("¡Bloqueado!");
    return this.#content;
  }
}

const box = new Box();

function withBoxUnlocked(body) {
  const wasLocked = box.locked;

  if (wasLocked) {
    box.unlock();
  }

  try {
    return body();
  } finally {
    if (wasLocked) {
      box.lock();
    }
  }
}

withBoxUnlocked(() => {
  box.content.push("pieza de oro");
});

try {
  withBoxUnlocked(() => {
    throw new Error("¡Piratas en el horizonte! ¡Abortar!");
  });
} catch (e) {
  console.log("Error generado: " + e);
}

console.log(box.locked);
