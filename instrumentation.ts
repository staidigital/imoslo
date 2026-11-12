export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    if (typeof global.localStorage === "undefined" || typeof global.localStorage.getItem !== "function") {
      const store: Record<string, string> = {};
      // @ts-ignore
      global.localStorage = {
        _data: store,
        getItem(key: string): string | null {
          return store[key] ?? null;
        },
        setItem(key: string, value: string): void {
          store[key] = String(value);
        },
        removeItem(key: string): void {
          delete store[key];
        },
        clear(): void {
          Object.keys(store).forEach((k) => delete store[k]);
        },
        get length(): number {
          return Object.keys(store).length;
        },
        key(index: number): string | null {
          return Object.keys(store)[index] ?? null;
        },
      };
    }
  }
}
