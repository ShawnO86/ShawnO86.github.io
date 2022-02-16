
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
    const myNum = document.querySelector('.numB');
    const numDisp = document.querySelector('.dispNumb')
    let myNumDisp = '';
    let i = 1;
    do {
        myNumDisp += i + " ";
        i++;
    } while (i <= myNum.value);
    numDisp.innerHTML = myNumDisp;
}

let text = "";
const myArr = ['Accounting', 'Algebra', 'Programming', 'Art', 'Data Analytics'];
myArr.forEach(dispArray);
document.querySelector('.dispArr').innerHTML = text;

function dispArray(item, index) {
    text += " [" + index + "] " + item + ", ";
}
