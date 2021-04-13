import read from './reader';

import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    return read()
      .then((response) => json(response))
      .then((value) => new GameSaving(value))
      .catch((error) => new Error(error));
  }
}
