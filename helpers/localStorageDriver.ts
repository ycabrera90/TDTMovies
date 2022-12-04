const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;

export interface LocalStorageDriver {
  getValue: (key: string) => any | null;
  setValue: (key: string, value: any) => void;
  delValue: (key: string) => void;
}

const localStorageDrive: LocalStorageDriver = {
  getValue(key) {
    return JSON.parse(`${localStorage.getItem(`${PROJECT_ID}__${key}`)}`);
  },

  setValue(key, value) {
    localStorage.setItem(`${PROJECT_ID}__${key}`, JSON.stringify(value));
  },

  delValue(key) {
    localStorage.removeItem(`${PROJECT_ID}__${key}`);
  },
};

export default localStorageDrive;
