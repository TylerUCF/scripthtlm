"use strict";


function getCounter() {
  const el = document.getElementById("counter");
  return parseInt(el.textContent, 10) || 0;
}

function setCounter(value) {
  document.getElementById("counter").textContent = String(value);
}


function tickUp() {
  setCounter(getCounter() + 1);
}

function tickDown() {
  setCounter(getCounter() - 1);
}


function runForLoop() {
  const n = getCounter();
  const out = [];

  for (let i = 0; i <= n; i++) {
    out.push(i);
  }

  document.getElementById("forLoopResult").textContent = out.join(" ");
}


function showOddNumbers() {
  const n = getCounter();
  const out = [];

  for (let i = 1; i <= n; i += 2) {
    out.push(i);
  }

  document.getElementById("oddNumberResult").textContent = out.join(" ");
}


function addMultiplesToArray() {
  const n = getCounter();
  const arr = [];

 
  for (let i = Math.floor(n / 5) * 5; i >= 5; i -= 5) {
    arr.push(i);
  }


  console.log(arr);
}


function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}


function loadCar(which) {

  let chosen = null;

  if (which === 1) chosen = window.carObject1;
  else if (which === 2) chosen = window.carObject2;
  else if (which === 3) chosen = window.carObject3;

  if (!chosen) return;

  document.getElementById("carType").value = chosen.cType;
  document.getElementById("carMPG").value = chosen.cMPG;
  document.getElementById("carColor").value = chosen.cColor;
}


function changeColor(which) {
  const p = document.getElementById("styleParagraph");

  if (which === 1) p.style.color = "red";
  else if (which === 2) p.style.color = "green";
  else if (which === 3) p.style.color = "blue";
}
