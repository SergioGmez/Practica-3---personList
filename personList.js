"use strict";

function listPerson(){
    var list = []; 
        
    this.capacity = function(){
        return 4;
    }    
    
    this.isEmpty = function (){
            if (list[0] == null ){
                return true;
            }else{
                return false;
            }
    }
    
    this.isFull = function(){   
        if (list[this.capacity()-1] == undefined){
            return false;
        }else{
            return true;
        }
    }
    
    this.size = function(){
        return list.length;
    }
    
    this.add = function(person){

        if (this.isFull()){
            return "Error. The list is full."
        }

        this.errorsPerson(person);

        return list.push(person);
    },
    
    this.addAt = function(person, index){
    
        if (this.isFull()){
            return "Error. The list is full."
        }

        if ( index < 0 || index > this.capacity()){
            return "The index is out of the limits of the list";
        }

        for (var i=0; i<index; i++){
            if ( list[i] == null ){
                return "Error. The list has empty indexes before.";
            }
        }

        this.errorsPerson(person);

        list.splice(index, 0, person);

        return list.length;                   
    },
    
    this.toString = function(){
        var aux = "";

        list.forEach( function dates(item, index){
               aux = aux + "[Index: "+index+"] Name: "+item.name+", Surname: "+item.surname+" "; } 
        )  
        return aux;
    },
    
    this.errorsPerson = function(person){
    
        if ( typeof person != person ){
            return "Error. The object is not a person."
        }

        if (person.name == null || person.surname == null){
            return "Error. Name or surname is null."
        }
    },
    
    this.get = function(index){
    
        if ( index < 0 || index > this.capacity()){
            return "The index is out of the limits of the list";
        }
    
        return list[index];
    },
    
    this.indexOf = function(person){
    
        this.errorsPerson(person);

        return list.indexOf(person);
    },
    
    this.lastIndexOf = function(person){
    
        this.errorsPerson(person);

        return list.lastIndexOf(person);
    },
    
    this.clear = function (){ 
        list.length = 0;
    },
    
    this.firstElement = function(){

        if (this.isEmpty()){
            return "Error. The list is empty."
        }

        return list[0];
    },
    
    this.lastElement = function(){
    
        if (this.isEmpty()){
            return "Error. The list is empty."
        }

        return list[this.size()-1];
    },
    
    this.remove = function(index){
    
        if (this.isEmpty()){
            return "Error. The list is empty."
        }

        this.errorsPerson();

        return list.splice(index, 1);
    },
    
    this.removeElement = function(elem){

        if (this.isEmpty(list)){
            return "Error. The list is empty.";
        }

        return list.splice(list.indexOf(elem), 1);   
    },
    
    this.set = function(elem, index){
        var aux;

        if ( index < 0 || index > this.capacity()){
            return "The index is out of the limits of the list";
        }
        
        this.errorsPerson();

        aux = list[index];
        list[index] = elem

        return aux;
    }
}


function testConsole(){
    var list = new listPerson();
    var person1 = {name:"1", surname:"1.1"};
    var person2 = {name:"2", surname:"2.1"};
    var person3 = {name:"3", surname:"3.1"};
    
     console.log("Capacidad: "+list.capacity());
    console.log("¿Lista vacia? "+list.isEmpty());
    console.log("¿Lista llena? "+list.isFull());
    console.log("Numero de elementos: "+list.size());
    console.log("Añadimos person1. Tamaño: "+list.add(person1));
    console.log("Lista: "+list.toString());
    console.log("¿Lista vacia? "+list.isEmpty());
    console.log("Añadimos person2. Tamaño: "+list.add(person2));
    console.log("Lista: "+list.toString());
    console.log("Añadimos person3 en el index 1. Tamaño: "+list.addAt(person3, 1));
    console.log("Lista: "+list.toString());
    console.log("Index de person2: "+list.indexOf(person2));
    console.log("Limpiamos lista.");
    list.clear();
    console.log("¿Lista vacia? "+list.isEmpty());
     console.log("Añadimos person1. Tamaño: "+list.add(person1));
    console.log("Añadimos person3 en el index 1. Tamaño: "+list.addAt(person3, 1));
    console.log("Añadimos person2 en el index 0. Tamaño: "+list.addAt(person2, 0));
    console.log("Lista: "+list.toString());
    console.log("Primer elemento: "+list.firstElement());
    console.log("Ultimo elemento: "+list.lastElement());
    console.log("Borramos el index 0. Elemento: "+list.remove(0));
    console.log("Lista: "+list.toString());;
    console.log("Index de person1 empezando por final: "+list.lastIndexOf(person1));
    console.log("Borramos person3. "+list.removeElement(person3));
    console.log("Lista: "+list.toString());;
    console.log("Cambiamos el valor del indice 0 por person2: "+list.set( person2, 0));
    console.log("Lista: "+list.toString());;
}

testConsole();
