/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 20);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Giacomo",
  surname: "Rossettini",
  age: 33
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Javascript", "Python", "PHP"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills[me.skills.length + 1] = "Nuovo";

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

let dice = function () {
  let random = Math.ceil(Math.random() * 6);
  return random;
};

dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

let whoIsBigger = function (num1 = 0, num2 = 0) {
  switch (num1 > num2) {
    case true:
      return num1;
    default:
      return num2;
  }
};

let result = whoIsBigger(20, 4);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let splitMe = (string) => string.split(" ");

//Siccome non era esplicito nelle istruzioni, mi è sfuggito il fatto che ogni prima lettera dovesse essere maiuscola.
//il procedimento sarebbe stato simile, fino ad arrivare a let parolaFinale = primaLettera.toUpperCase + stringa.slice(1)
let stringSplitted = splitMe("Il test teorico è andato malissimo");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

let killLast = function (string) {
  let spliced = string.split("");
  spliced.pop();
  let reunion = spliced.join("");
  return reunion;
};

let deleteOne = function (string, boolean) {
  let trueString = string.slice(1);
  if (boolean === true) {
    return trueString;
  } else {
    return killLast(string);
  }
};

let deleteOneVerify = deleteOne("Vediamo se funziona", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

let onlyLetters = function (string) {
  let splitted = string.split("");
  let array = [];

  // Trasformo in numeri i valori
  for (let i = 0; i < splitted.length; i++) {
    let number = parseInt(splitted[i]);
    array.push(number);
  }

  // Tengo solo i numeri
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }

  // Confronto
  for (let i = 0; i < splitted.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (parseInt(splitted[i]) === array[j]) {
        splitted.splice(i, 1);
        i--;
        break;
      }
    }
  }

  let joined = splitted.join("");
  return joined;
};

let onlyLettersVerify = onlyLetters("ho 10 cani e 3 gatti");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

let isThisAnEmail = function (string) {
  let splitted = string.split("");
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "@") {
      return true;
    }
  }
  return "Inserisci un indirizzo mail valido";
};

//so che bisognerebbe controllare che ci sia un solo carattere "@" e per farlo basta creare un nuovo for loop che confronti posizione per posizione e restutuisca false se [@] === [@]
//ma non ho abbastanza tempo

let isThisAnEmailVerify = isThisAnEmail("prova@gmail.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

let day = new Date();
let today = function () {
  let week = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  let dayToday = day.getDay();
  return week[dayToday];
};
// ma che senso ha che domenica corrisponda a 0 invece che a 6????? Sono diventato matto!!!!!!!
let dayVerify = `Oggi è ${today()}`;

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

let rollTheDices = function (num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    let random = Math.ceil(Math.random() * 6);
    array.push(random);
  }

  let sum = array.reduce((counter, currentValue) => counter + currentValue, 0);
  let obj = {
    sum: sum,
    values: array
  };
  return obj;
};

let rollTheDicesVerify = rollTheDices(5);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

let howManyDays = function (dataRicevuta) {
  let oggi = new Date();
  let differenzaTempo = oggi - dataRicevuta;

  // Converto la differenza da millisecondi a giorni (1 giorno = 1000ms * 60s * 60m * 24h) e ammetto che questa operazione sono andato a cercarmela
  // perché è davvero macchinosa
  let differenzaGiorni = Math.floor(differenzaTempo / (1000 * 60 * 60 * 24));
  return differenzaGiorni;
};

let dataRicevuta = new Date("1991-01-17"); // metto la data del mio compleanno
let giorniTrascorsi = howManyDays(dataRicevuta);
let fraseFinale = `Sono trascorsi ${giorniTrascorsi} giorni dalla data specificata.`;

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

let isTodayMyBirthday = function (dataRicevuta) {
  let today = new Date();

  // Confronta giorno e mese con la data ricevuta
  if (today.getDate() === dataRicevuta.getDate() && today.getMonth() === dataRicevuta.getMonth()) {
    return "Oggi è il tuo compleanno";
  } else {
    return "Oggi non è il tuo compleanno";
  }
};

let dataRicevutaNew = new Date("2024-08-30");
let isBirthday = isTodayMyBirthday(dataRicevutaNew);

// questa è stata divertente!!!!

// Arrays & Oggetti

// mi permetto di spostare l'array in alto perché così vado meglio

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let deleteProp = function (obj, string) {
  for (let i = 0; i < obj.length; i++) {
    delete obj[i][string];
  }
  return obj;
};

// let deletePropVerify = deleteProp(movies, "Title");
// lo metto come commento per non sminchiare l'array

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

let newestMovie = function (array) {
  let counter = array[0].Year;
  for (let i = 0; i < array.length; i++) {
    if (array[i].Year > counter) {
      counter = array[i].Year;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].Year === counter) {
      return array[i];
    }
  }
};

let newestMovieVerify = newestMovie(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

let countMovies = (array) => array.length;

let countMoviesVerify = countMovies(movies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

let onlyTheYears = function (array) {
  let anniUscita = array.map((obj) => obj.Year);
  return anniUscita;
};

let onlyTheYearsVerify = onlyTheYears(movies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

let onlyInLastMillennium = function (array) {
  let newArray = [];
  array.forEach((n) => {
    if (n.Year < 2000) {
      newArray.push(n);
    }
  });
  return newArray;
};

let onlyInLastMillenniumVerify = onlyInLastMillennium(movies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

let sumAllTheYears = function (array) {
  let arrayYears = array.map((n) => n.Year);
  let sum = arrayYears.reduce((counter, anno) => parseInt(counter) + parseInt(anno), 0);
  return sum;
};

let sumAllTheYearsVerify = sumAllTheYears(movies);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

let searchByTitle = function (array, string) {
  let titleFilter = array.filter((n) => n.Title === string);
  return titleFilter[0];
};

let searchByTitleVerify = searchByTitle(movies, "Avengers: Endgame");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

let searchAndDivide = function (array, string) {
  let moviesMatch = [];
  let moviesUnmatch = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].Title === string) {
      moviesMatch.push(array[i]);
    } else {
      moviesUnmatch.push(array[i]);
    }
  }

  let obj = {
    match: moviesMatch,
    unmatch: moviesUnmatch
  };

  return obj;
};
let searchAndDivideVerify = searchAndDivide(movies, "Avengers: Endgame");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

let removeIndex = (array, num) => {
  let spliced = array.splice(num, 1);
  return array;
};

let removeIndexVerify = removeIndex(movies, 0);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

let idSelector = (id) => document.getElementById(id);
let idSelectorVerify = idSelector("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

let allTdSelector = () => document.querySelectorAll("td");
let allTdSelectorVerify = allTdSelector();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

let tdPrint = function () {
  let td = allTdSelector();

  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};

// tdPrint(); <---- lo metto come commento per non averlo in mezzo ai piedi

//____________________;

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

let redLink = function () {
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.backgroundColor = "red";
  });
};

redLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

let addElement = function () {
  let myList = document.getElementById("myList");
  let li = document.createElement("li");
  li.innerText = "6";
  myList.appendChild(li);
};

addElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

let wooosh = function () {
  let myList = document.getElementById("myList");

  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }

  return myList;
};

wooosh();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

let sonoStanco = function () {
  let tr = document.querySelectorAll("tr");
  tr.forEach((tr) => {
    tr.classList.add("test");
  });
};

sonoStanco();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

let halfTree = function (num) {
  for (let i = 1; i <= num; i++) {
    let tree = "";
    tree = "*".repeat(i);
    console.log(tree);
  }
};

// halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(num) {
  for (let i = 1; i <= num; i++) {
    let spaces = " ".repeat(num - i);
    let stars = "*".repeat(2 * i - 1);
    let christmas = spaces + stars;
    console.log(christmas);
  }
}
// tree(20);

/* ESERCIZIO EXTRA MESSO DA ME PERCHE' SONO SADICO, ADDOBBIAMO IL NOSTRO ALBERO */

function treeAddobbed(num) {
  for (let i = 1; i <= num; i++) {
    let spaces = " ".repeat(num - i);
    let stars = "";

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j % 3 === 0) {
        stars += "O";
      } else {
        stars += "*";
      }
    }

    console.log(spaces + stars);
  }
}

treeAddobbed(30);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

// un numero è considerato "primo" se può essere diviso solo per se stesso (tipo 10 non è un numero primo perché può essere divisibile per 2 o per 5, mentre 13 si)
function isItPrime(num) {
  if (num <= 1) {
    return false; // I numeri minori o uguali a 1 non sono primi
  }

  // uso Math.sqrt per calcolare la radice quadrata del numero in quanto se num è divisibile per un numero maggiore della sua radice quadrata,
  // allora deve essere divisibile per qualche numero minore della sua radice quadrata
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let isItPrimeVerify = isItPrime(81);

/*



   *
  ***
 *****
*******






*/
