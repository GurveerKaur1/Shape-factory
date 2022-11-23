'use strict';

import{ onEvent, select, selectAll, print } from './utilis.js';
import{ Shape } from './shapes.js';

const start = select('button');
const shape = select('.shape');
//const value = select('.value');
const colour = select('.color');
const para = select('p')

const name = {
  blue: '#09f',
  green: '#9f0',
  orange: '#f90',
  pink: '#f09',
  purple: '#90f'
}


const child = document.querySelector('.child');
const arr =[];

let count = 0;
onEvent('click', start, function(event) {
  
  event.preventDefault();
if(count >= 30){
  return;
}
count+=1;
  
  const div = document.createElement('div');
  div.classList.add(shape.value);
  div.classList.add("shapes");
  div.style.backgroundColor = name[colour.value];
 let arr2 = new Shape(shape.value, colour.value)
  
  arr.push(arr2)
  
  child.appendChild(div);
  
   div.setAttribute('shapeType', count);
  
  onEvent('click', div, (event)=>{
    
  

    para.innerText = `Unit: ${(arr.indexOf(arr2)) + 1} ${arr[event.target.getAttribute('shapeType') - 1].getinfo() }`;
    
    
   
  });
 
});










