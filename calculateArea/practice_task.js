let grocery1, grocery2, grocery3;

function totalAmount() {
    grocery1 = Number(document.getElementById('grocery1').value)
    console.log(grocery1)
    grocery2 = Number(document.getElementById('grocery2').value)
    console.log(grocery2)
    grocery3 = Number(document.getElementById('grocery1').value)
    console.log(grocery3)
    let totalAmount = grocery1 + grocery2 + grocery3
    document.getElementById('result').innerText = `The total Amoune is : $ ${totalAmount}`
}