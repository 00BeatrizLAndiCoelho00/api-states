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

let boxStyle = '<div class="boxInfos"></div>'
box.innerHTML = boxStyle;

box.classList.add("box");

infoMap.appendChild(box);