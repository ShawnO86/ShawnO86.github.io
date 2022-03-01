

function sendForm() {
    let servCost = document.querySelector('#cost').value;
    let servRate; 
    if (servCost < 5 || servCost > 500){
        alert("Error: please enter a value between $5.00 and $500.00.");
    } else {
        if (document.getElementById('great').checked == true) {
            servRate = 0.2;
        } else if (document.getElementById('okay').checked == true) {
            servRate = 0.15;
        } else if (document.getElementById('poor').checked == true) {
            servRate = 0.1;
        }
        let servTip = parseFloat(servCost) * parseFloat(servRate);
        let totalCost = servTip + parseFloat(servCost);
        document.getElementById('tip').innerHTML = Math.ceil(servTip);
        document.getElementById('total').innerHTML = Math.ceil(totalCost * 100) / 100;
        }
}
