'use strict'
//alert('js works')

/////////////////////////////////////////////////////////////////////////////////////////////////////
const mapa = document.querySelector('#map')


//This boy take the state name when you click on it 
const getEstado = ( {target} ) =>{

    const estado = target.id.replace('BR-','')

    console.log(estado)
}

mapa.addEventListener('click', getEstado)

/////////////////////////////////////////////////////////////////////////////////////////////////////
//this another boy create the box where the information goes on
//a very generic div 
const infoMap = document.getElementById("info-map");
const box = document.createElement("div");
// let a = "zzzz"
// box.textContent = a
box.classList.add("box");
infoMap.appendChild(box);

//________________________________this boy, the smal and adorable circle___________________
const circleMap = document.getElementById("circleMap");
const circle = document.createElement("div");

let contentNameStatde = "nome estado"
let contentTextCapital = "capital"
let contentTextRegiao = "regiao"

box.textContent = contentTextCapital + contentTextCapital + contentTextRegiao
box.style.
box.classList.add("box");
infoMap.appendChild(circle);

////////////////////////////////////////////////////////////////////////////////////////////////
//this baby rigth there makes the api works 
