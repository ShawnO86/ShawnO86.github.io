
//declaring and displaying literal object myDog
let myDog = {name: "Scooby-Doo", breed: "Great Dane", show: "Scooby-Doo Where Are You", notes: "lifelong companion of Shaggy Rogers; a big dog and several teenage humans.", mySound: "Ruh-roh, Raggy!"};
let dogDisp = document.getElementById('dogDesc');
dogDisp.innerHTML = "<b>Object Literal:</b> <br>Hi, my name is " + myDog.name + ", when I'm scared I say, " + myDog.mySound + " I star in '" + myDog.show + "'. My character is a " + myDog.breed + ", and the show is about the " + myDog.notes + ".";

//declaring myDogConst constructor function 
let dogConstDesc = document.getElementById('dogConstDesc');
function myDogConst(name, breed, show, notes, mySound) {
    this.name = name;
    this.breed = breed;
    this.show = show;
    this.notes = notes;
    this.mySound = mySound;
    this.myGreeting = function () {
        dogConstDesc.innerHTML = "<b>Constructor function:</b> <br>Hi, my name is " + this.name + ", when I'm scared I say, " + this.mySound + " I star in '" + this.show + "'. My character is a " + this.breed + ", and the show is about the " + this.notes + ".";
    };
    return(this);
}

//calling myDogConst

myDogConst.canTalk = true;
let scoob = new myDogConst("Scooby-Doo", "Great Dane", "Scooby-Doo Where Are You", "lifelong companion of Shaggy Rogers; a big dog and several teenage humans.", "Ruh-roh, Raggy!");
if(myDogConst.canTalk == true) {
    scoob.myGreeting();
}
