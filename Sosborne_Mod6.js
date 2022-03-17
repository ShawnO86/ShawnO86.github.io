class Dog {

    constructor(name, breed, show, notes, mySound, myImg, canTalk){
        this.name = name;
        this.breed = breed;
        this.show = show;
        this.notes = notes;
        this.mySound = mySound;
        this.myImg = myImg;
        this.canTalk = canTalk;
    }
    set new_name(name) {
        this.name = name;
      }    
    set new_breed(breed) {
        this.breed = breed;
      }   
    set new_show(show) {
        this.show = show;
      }
    set new_notes(notes) {
        this.notes = notes;
      }
    set new_mySound(mySound) {
        this.mySound = mySound;
      }
    set new_myImg(myImg) {
        this.myImg = myImg;
      }
    set new_canTalk(canTalk) {
        this.canTalk = canTalk;
    }
    get greeting() {
        return "Hi, my name is " + this.name + ", when I'm scared I say, " + this.mySound + " I star in '" + this.show + "'. My character is a " + this.breed + ", and the show is about the " + this.notes + ".";
    }
    
};

let scoobDisp = new Dog(
  "Scooby-Doo", 
  "Great Dane", 
  "Scooby-Doo Where Are You", 
  "lifelong companion of Shaggy Rogers; a big dog and several teenage humans.", 
  "Ruh-roh, Raggy!",
  "https://upload.wikimedia.org/wikipedia/en/5/53/Scooby-Doo.png",
  true);

let brianDisp = new Dog(
  "Brian Griffin", 
  "White Labrador Retriever", 
  "Family Guy", 
  "The family dog and equal family member; about the Griffins, a dysfunctional family.", 
  "You Know What, Stewie...",
  "https://upload.wikimedia.org/wikipedia/en/1/12/Brian_Griffin.png",
  true);

let courageDisp = new Dog(
  "Courage",
  "Beagle",
  "Courage the Cowardly Dog",
  "About an anthropomorphic dog who lives with a married couple of elderly farmers in the Middle of Nowhere.",
  "AAAAAAAAAAAAAAAAAAAAHHH!",
  "https://static.wikia.nocookie.net/courage/images/4/46/New_Courage.png",
  true);

const boxContainer = document.querySelector('.dogCage');

function createBox(object) {
  const boxItem = document.createElement("div");
  boxItem.setAttribute("class", "box");

    boxItem.addEventListener("click", function(){
      let objectDesc = "";
        for(let x in object){
          objectDesc += "<p><b>" + x + ":</b> " + object[x] + "</p>";
        }
        if(object.canTalk){
    boxItem.innerHTML = objectDesc += object.greeting += "<img src= " + object.myImg + ">";
        } else {
          boxItem.innerHTML = objectDesc += "<img src= " + object.myImg + ">";
        }
    })
  let dogName = document.createTextNode(object.name);
  boxItem.appendChild(dogName);
  boxContainer.appendChild(boxItem);
};

createBox(scoobDisp);
createBox(brianDisp);
createBox(courageDisp);
