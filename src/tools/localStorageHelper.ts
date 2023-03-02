export const localStorageHelper = {
  get: (key: string) => {
    const stored = localStorage.getItem(key);
    return stored == null ? undefined : stored;
  },
  set: (key: string, value: any) => {
    localStorage.setItem(key, value);
  },
  delete: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
