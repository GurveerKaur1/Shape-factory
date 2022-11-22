'use strict';

class Shape {
    constructor(name, colour){
        this._name = name;
        this._colour = colour;
    }

    setColour(value) {              
       return  this._colour=value; 
    }    

    setName(value1) {              
        return  this._name=value1; 
     }    
    getColour(){
        return this._colour;
    }

    getName(){
        return this._name;
    }

    getinfo(){
        return `${ this._name} ${ this._colour}`;
    }
}



export { Shape } ;

