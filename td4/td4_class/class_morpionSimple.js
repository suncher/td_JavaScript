
export class MorpionSimple extends Morpion {
  constructor(taille) {
    super(taille);
  }
 
  checkWin (symbole, y, x) {
    let winCondition = 3;
    let nbSymboles;
  
    // gagné en ligne ?
    const ligne = y;
    nbSymboles = 0;
    for (let col = 0; col < this.#taille; col++) {
      if (this.#table[ligne][col] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === winCondition) {
      return true;
    }
  
    // gagné en colonne ?
    const col = x;
    nbSymboles = 0;
    for (let ligne = 0; ligne < this.#taille; ligne++) {
      if (this.#table[ligne][col] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === winCondition) {
      return true;
    }
  
    // gagné diagonale
    if (x === y) {
      nbSymboles = 0;
      for (let lc = 0; lc < this.#taille; lc++) {
        if (this.#table[lc][lc] === symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === winCondition) {
        return true;
      }
    }
  
    // gagné diag inverse
    if (x === this.#taille - (y + 1)) {
      nbSymboles = 0;
      for (let ligne = 0; ligne < this.#taille; ligne++) {
        if (this.#table[ligne][this.#taille - (ligne + 1)] === symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === winCondition) {
        return true;
      }
    }
    return false;
  };
}
