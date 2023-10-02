// -------------EXERCICE 1---------------
// Find the timezones of :

//     Anchorage (USA)
//     Reykjavik (Iceland)
//     Saint-Petersburg (Russia)

// And display the date and time of these cities along with the time and date of Brussels.

// ------APPROCHE------
//Anchorage UTC-8
//Reykjavik UTC
//Saint-Petersbourg UTC+3
//Brussels UTC+2
// utiliser .toLocaleString pour convertire la date au format local

function updateTimes() {
  const localHour = new Date();
  //source pour le toLocaleString et timeZone (en fin de doc) https://www.pierre-giraud.com/javascript-apprendre-coder-cours/objet-date/ + "fr/FR" pour avoir le format de date heure français,
  let anchorageTime = localHour.toLocaleString("fr-FR", {
    timeZone: "US/Alaska",
  });
  console.log("Anchorage: " + anchorageTime);

  let reykjavikTime = localHour.toLocaleString("fr-FR", {
    timeZone: "Etc/GMT+0",
  });
  console.log("Reykjavik: " + reykjavikTime);

  let sainPetersburgTime = localHour.toLocaleString("fr-FR", {
    timeZone: "Europe/Moscow",
  });
  console.log("Saint-Petersburg: " + sainPetersburgTime);

  let brusselsTime = localHour.toLocaleString("fr-FR", {
    timeZone: "Europe/Brussels",
  });
  console.log("Bruxelles: " + brusselsTime);
}

updateTimes();
//liste des timeZone (https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript)

//---------------EXERCICE 2---------------
//Using timestamps, find how many days have passed since the date of your birth.
// Write a function to find how many days have passed since any point in time (after 1970).
//-----APPROCHE-----
// def mon anniversaire et la date du jour
//calculer la diff et ramener en jour + arrondire

// ---2.1---
const myBday = new Date("june 4, 1997");
let currentDay = new Date();

function daysinceBday() {
  // let daysinceBday = (currentDay-myBday); reponse en millisecondes
  let daySinceBday = Math.floor((currentDay - myBday) / (1000 * 60 * 60 * 24)); //réponse en jours
  console.log("Days passed since my date of birth: " + daySinceBday + " days");
}
daysinceBday();

//---2.2---
//---APPROCHE---
//meme base que le 2.1, juste on demande à l'user d'entrer sa date de naissance. info : https://gomakethings.com/how-to-get-and-set-a-date-object-from-an-input-with-vanilla-javascript/
// pour ça on ajoute un form dans le HTML

const currentDate = new Date();
let field = document.querySelector("#birthday");
// eventlistener qui va déclencher à l'input et exécuter la fonction
field.addEventListener("input", function () {
  let userDate = new Date(field.value);
  let daySinceUserBday = Math.floor(
    (currentDate - userDate) / (1000 * 60 * 60 * 24)
  );
  console.log("Days passed since your date of birth: " + daySinceUserBday + " days");
});

//----------------EXERCICE 3------------------
// Using timestamps, find the exact time and date we will be in 80000 hours.

// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.

//---3.1---
//---APPROCHE---
// no idea

//---3.2---
//---APPROCHE---
// no idea
