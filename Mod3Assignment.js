
for (let i = 0; i < 11; i++){
    const countList = document.querySelector('#countList');
    const listItem = document.createElement("li");
    if (i % 2 == 0){
        let number = document.createTextNode(i + " is even");
        listItem.appendChild(number);
        countList.appendChild(listItem);
    } else {
        let number = document.createTextNode(i + " is odd");
        listItem.appendChild(number);
        countList.appendChild(listItem);
    }
}

function numLoop() {
    let myNum = document.querySelector('.numB').value;
    let numDisp = document.querySelector('.dispNumb');
    let myNumDisp = '';
    let i = 1;
    if (parseInt(myNum) < 5 || parseInt(myNum) > 20) {
        numDisp.innerHTML = "Please enter a number between 5 and 20";
    } else if (!Number.isInteger(parseInt(myNum))) {
        numDisp.innerHTML = "Please enter a <b>number</b> between 5 and 20.";
    } else {
    do {
        myNumDisp += i + " ";
        i++;
    } while (i <= myNum);
    numDisp.innerHTML = myNumDisp;
    }
}

let text = "";
const myArr = ['Accounting', 'Algebra', 'Programming', 'Art', 'Data Analytics'];
myArr.forEach(dispArray);
document.querySelector('.dispArr').innerHTML = text;

function dispArray(item, index) {
    text += " [" + index + "] " + item + ", ";
}
