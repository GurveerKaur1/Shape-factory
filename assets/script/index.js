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
  arr.push(div);
  
  
  
  child.appendChild(div);
  
   //div.setAttribute(shape);
  //let target = shape.getAttribute('target')
  onEvent('click', div, function(){
    
  

    //para.innerText = arr[event.shape.getAttribute(shape)].getinfo();
    
    
    para.innerText = `Unit:${arr.indexOf(div) + 1} ${shape.value} ${colour.value}`;
  });
 
});










