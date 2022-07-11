export default function add(...args: number[]) {
  return args.reduce((acc, el) => acc + el, 0);
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test("add", () => {
    expect(add()).toBe(0);
    expect(add(0, 0, 0)).toBe(0);
    expect(add(42)).toBe(42);
    expect(add(1, 2, 3)).toBe(6);
    expect(add(-1, 1, -1, 1)).toBe(0);
  });
}
