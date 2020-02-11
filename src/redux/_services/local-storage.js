export default class LocalStorageJSON {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key, orDefault) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
      return orDefault ? orDefault : null;
    }
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }
}
