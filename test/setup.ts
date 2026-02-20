import '@testing-library/jest-dom';

// ── Mock IntersectionObserver ────────────────────────────────────────────────
// Used by: useScrollSpy, About, Portfolio, WorkHistory, Abilities, TerminalAnimation, Contact
const observers = new Set<MockIntersectionObserver>();

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  private callback: IntersectionObserverCallback;
  private elements = new Set<Element>();

  constructor(callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {
    this.callback = callback;
    observers.add(this);
  }

  observe(el: Element) {
    this.elements.add(el);
    // Auto-trigger as intersecting so components render their content
    this.callback(
      [
        {
          target: el,
          isIntersecting: true,
          intersectionRatio: 1,
          boundingClientRect: el.getBoundingClientRect(),
          intersectionRect: el.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        },
      ],
      this,
    );
  }

  unobserve(el: Element) {
    this.elements.delete(el);
  }

  disconnect() {
    this.elements.clear();
    observers.delete(this);
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

// ── Mock ResizeObserver ──────────────────────────────────────────────────────
// Used by: ParticleBackground, Abilities
// Fires the callback once on observe() with a mock entry so components can
// compute layout (e.g. Abilities skill pill positions).
class MockResizeObserver {
  private callback: ResizeObserverCallback;
  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }
  observe(target: Element) {
    // Simulate an initial resize event with dimensions
    this.callback(
      [
        {
          target,
          contentRect: {
            width: 800,
            height: 600,
            top: 0,
            left: 0,
            bottom: 600,
            right: 800,
            x: 0,
            y: 0,
            toJSON: () => {},
          },
          borderBoxSize: [{ blockSize: 600, inlineSize: 800 }],
          contentBoxSize: [{ blockSize: 600, inlineSize: 800 }],
          devicePixelContentBoxSize: [{ blockSize: 600, inlineSize: 800 }],
        } as unknown as ResizeObserverEntry,
      ],
      this,
    );
  }
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;

// ── Mock HTMLCanvasElement.getContext ─────────────────────────────────────────
// Used by: ParticleBackground, Abilities
HTMLCanvasElement.prototype.getContext = (() => {
  return {
    clearRect: () => {},
    fillRect: () => {},
    fillText: () => {},
    getImageData: () => ({ data: new Uint8ClampedArray(0) }),
    createRadialGradient: () => ({
      addColorStop: () => {},
    }),
    beginPath: () => {},
    arc: () => {},
    fill: () => {},
    stroke: () => {},
    moveTo: () => {},
    lineTo: () => {},
    drawImage: () => {},
    save: () => {},
    restore: () => {},
    scale: () => {},
    translate: () => {},
    rotate: () => {},
    set fillStyle(_v: string) {},
    set strokeStyle(_v: string) {},
    set lineWidth(_v: number) {},
    set globalAlpha(_v: number) {},
    set shadowBlur(_v: number) {},
    set shadowColor(_v: string) {},
    set font(_v: string) {},
    set textAlign(_v: string) {},
    set textBaseline(_v: string) {},
  };
}) as unknown as typeof HTMLCanvasElement.prototype.getContext;

// ── Mock window.matchMedia ───────────────────────────────────────────────────
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// ── Mock requestAnimationFrame / cancelAnimationFrame ────────────────────────
// Many components use rAF for animations
if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (cb: FrameRequestCallback) =>
    setTimeout(cb, 0) as unknown as number;
  globalThis.cancelAnimationFrame = (id: number) => clearTimeout(id);
}

// ── Mock performance.now ─────────────────────────────────────────────────────
if (typeof globalThis.performance === 'undefined') {
  globalThis.performance = { now: () => Date.now() } as Performance;
}

// ── Mock scrollTo ────────────────────────────────────────────────────────────
window.scrollTo = () => {};

// ── Clean up between tests ───────────────────────────────────────────────────
afterEach(() => {
  observers.clear();
});
