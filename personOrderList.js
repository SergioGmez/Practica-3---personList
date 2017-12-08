"use strict";

function BaseException() {
}
BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;

BaseException.prototype.toString = function(){
	return this.name + ": " + this.message;
};

function listFullException() {
	this.name = "ListFullException";
	this.message = "Error. The list is full.";
}
listFullException.prototype = new BaseException();
listFullException.prototype.constructor = listFullException;

function listEmptyException() {
	this.name = "ListEmptyException";
	this.message = "Error. The list is empty.";
}
listEmptyException.prototype = new BaseException();
listEmptyException.prototype.constructor = listEmptyException;

function objectNotPerson() {
	this.name = "ObjectNotPerson";
	this.message = "Error. The object is not a person.";
}
objectNotPerson.prototype = new BaseException();
objectNotPerson.prototype.constructor = objectNotPerson;

function personPropertyEmpty() {
	this.name = "PersonPropertyEmpty";
	this.message = "Error. Name or surname is null.";
}
personPropertyEmpty.prototype = new BaseException();
personPropertyEmpty.prototype.constructor = personPropertyEmpty;

function indexOutLimit() {
	this.name = "IndexOutLimit";
	this.message = "The index is out of the limits of the list.";
}
indexOutLimit.prototype = new BaseException();
indexOutLimit.prototype.constructor = indexOutLimit;

function indexEmptyBefore() {
	this.name = "IndexEmptyBefore";
	this.message = "Error. The list has empty indexes before.";
}
indexEmptyBefore.prototype = new BaseException();
indexEmptyBefore.prototype.constructor = indexEmptyBefore;



function Person(name, surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype = {}; 
Person.prototype.constructor = Person;

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
        var index;
        
        if (this.isFull()){
            throw new listFullException();
        }
        
        this.errorsPerson(person);
        
        index = list.findIndex(function (value){
            return person.surname <= value.surname;
        });
        
        
        if (index != -1){
            if (list[index].surname == person.surname){
                if (list[index].name < person.name){
                    index = index + 1;
                }
            }
            list.splice(index, 0, person);
        }else{
            list.push(person);
        }
        
        return list.length;
    },
    
    
    this.toString = function(){
        var aux = "";

        list.forEach( function dates(item, index){
               aux = aux + "[Index: "+index+"] Name: "+item.name+", Surname: "+item.surname+" "; } 
        )  
        return aux;
    },
    
    
    this.get = function(index){
    
        if ( index < 0 || index > this.capacity()){
           throw new indexOutLimit();
        }
    
        return list[index];
    },
    
    this.indexOf = function(person){
    
        this.errorsPerson(person);

        return list.indexOf(person);
    },
    
    
    this.clear = function (){ 
        list.length = 0;
    },
    
    this.firstElement = function(){

        if (this.isEmpty()){
            throw new listEmptyException();
        }

        return list[0];
    },
    
    this.lastElement = function(){
    
        if (this.isEmpty()){
            throw new listEmptyException();
        }

        return list[this.size()-1];
    },
    
    this.remove = function(index){
    
        if (this.isEmpty()){
            throw new listEmptyException();
        }

        return list.splice(index, 1);
    },
    
    this.removeElement = function(person){

        if (this.isEmpty()){
            throw new listEmptyException();
        }
        
        this.errorsPerson(person);

        return list.splice(list.indexOf(person), 1);   
    },
    
    
    this.errorsPerson = function(person){ 

        if (!(person instanceof Person)) {
           throw new objectNotPerson();
        }

        if (person.name == null || person.surname == null){
            throw new personPropertyEmpty();
        }
    }
}




function testConsole(){
    var list = new listPerson();
    
    var person1 = new Person(1, 1.2);
    var person2 = new Person(2, 1.2);
    var person3 = new Person(3, 3.2);
    
    console.log("Capacidad: "+list.capacity());
    console.log("¿Lista vacia? "+list.isEmpty());
    console.log("¿Lista llena? "+list.isFull());
    console.log("Numero de elementos: "+list.size());
    console.log("Añadimos person2. Tamaño: "+list.add(person2));
    console.log("Lista: "+list.toString());
    console.log("¿Lista vacia? "+list.isEmpty());
    console.log("Añadimos person3. Tamaño: "+list.add(person3));
    console.log("Añadimos person1. Tamaño: "+list.add(person1));
    console.log("Lista: "+list.toString());
    console.log("Index de person2: "+list.indexOf(person2));
    console.log("Limpiamos lista.");
    list.clear();
    console.log("¿Lista vacia? "+list.isEmpty());
    console.log("Añadimos person3. Tamaño: "+list.add(person3));
    console.log("Añadimos person2. Tamaño: "+list.add(person2));
    console.log("Añadimos person1. Tamaño: "+list.add(person1));
    console.log("Lista: "+list.toString());
    console.log("Primer elemento: "+list.firstElement());
    console.log("Ultimo elemento: "+list.lastElement());
    console.log("Borramos el index 0. Elemento: "+list.remove(0));
    console.log("Lista: "+list.toString());;
    console.log("Borramos person3. "+list.removeElement(person3));
    console.log("Lista: "+list.toString());;
}

testConsole();
