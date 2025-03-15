let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 console.log(length," -> ",typeof(length))

 width = parseFloat(document.getElementById('width').value);
 console.log(width," -> ",typeof(width))

 let area = length * width
 console.log(area," -> ",typeof(a))

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
 
}


