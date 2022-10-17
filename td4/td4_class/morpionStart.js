import { Morpion } from "./class_morpion.js";

let nbCoups;
let joueur;
let symbole;
let size;
let morpion;
let modeJeu;
let scores = [0, 0];
let zoneMessage;
const btnReset = document.getElementById("btn_reset");
btnReset.addEventListener("click", recommence);

function recommence() {
  const MAX_GRILLE = 8;
  const MIN_GRILLE = 3;
  size = Number.parseInt(document.getElementById("taille").value);
  morpion = new Morpion(size);
  zoneMessage = document.getElementById("messages");
  modeJeu = document.getElementById("simple").checked ? "simple" : "complet";
  if (
    Number.isNaN(morpion.taille) ||
    morpion.taille < MIN_GRILLE ||
    morpion.taille > MAX_GRILLE
  ) {
    zoneMessage.innerHTML = "Taille invalide !";
  } else {
    const table = document.getElementById("table_morpion");
    for (let l = table.rows.length - 1; l >= 0; l--) {
      table.deleteRow(l);
      morpion = new Morpion(size);
    }

    morpion.table = new Array(morpion.taille);
    for (let i = 0; i < morpion.taille; i++) {
      const ligne = table.insertRow(i);
      morpion.table[i] = new Array(this.taille);
      for (let j = 0; j < morpion.taille; j++) {
        morpion.table[i][j] = " ";

        const id = "" + ((i + 1) * 10 + (j + 1));
        const cell = ligne.insertCell(j);
        cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";

        cell.firstChild.addEventListener("click", () =>
          clicBouton(cell.firstChild, i, j)
        );
        document.getElementById(id).value = "";
      }
    }
    nbCoups = 0;
    joueur = 1;
    symbole = "x";

    zoneMessage.innerHTML = "Joueur 1, à toi !";
    document.getElementById("btn_reset").disabled = true;
    console.log(morpion.table);
  }
}

function clicBouton(uneCase, y, x) {
  if (morpion.table[y][x] === " ") {
    morpion.table[y][x] = symbole;
    uneCase.value = symbole;
    uneCase.classList.add("joueur" + joueur);
    nbCoups++;

    const victoire = morpion.checkWin(symbole, y, x);
    if (victoire) {
      zoneMessage.innerHTML = "Le joueur " + joueur + " a gagné !";
      desactiveEcouteurs();
      symbole === "x" ? scores[0]++ : scores[1]++;
      document.getElementById("score").innerHTML =
        "X : " + scores[0] + " - O  : " + scores[1];
    } else if (nbCoups === morpion.taille * morpion.taille) {
      zoneMessage.innerHTML = "Match nul !";
      desactiveEcouteurs();
    } else {
      if (symbole === "x") {
        symbole = "o";
        joueur = 2;
      } else {
        symbole = "x";
        joueur = 1;
      }
      zoneMessage.innerHTML = "Joueur " + joueur + ", à toi de jouer !";
    }
  } else {
    zoneMessage.innerHTML = "Case déjà occupée !!! ";
  }
}

function desactiveEcouteurs() {
  for (let i = 0; i < morpion.taille; i++) {
    for (let j = 0; j < morpion.taille; j++) {
      document.getElementById("" + ((i + 1) * 10 + (j + 1))).disabled = true;
    }
  }
  document.getElementById("btn_reset").disabled = false;
}

document.getElementById("score").innerHTML =
  "X : " + scores[0] + " - O  : " + scores[1];
