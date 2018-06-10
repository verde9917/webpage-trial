// change first color
var firstColor = document.getElementById('firstColor');
firstColor.addEventListener('change',changefirstColor,false);
function changefirstColor(){
    var newColor = firstColor.value;
    document.getElementById('head').style.backgroundColor = newColor;
    document.body.style.color = newColor;
    document.getElementById('footer').style.backgroundColor = newColor;
}

// change second color
var secondColor = document.getElementById('secondColor');
secondColor.addEventListener('change',changesecondColor,false);
function changesecondColor(){
    var newColor = secondColor.value;
    document.getElementById('head').style.color = newColor;
    document.body.style.backgroundColor = newColor;
    document.getElementById('footer').style.color = newColor;
}

// count numbers
var countButton = document.getElementById('countButton');
var charNumber = document.getElementById('count');
countButton.addEventListener('click',countNumber,false);
function countNumber(){
    charNumber.innerHTML = document.getElementById('inputText').value.length;
}

var textresetButton = document.getElementById('textresetButton');
textresetButton.addEventListener('click',clearText,false);
function clearText(){
    var area = document.getElementById('inputText');
    if(area.value != ''){
        area.value = '';
        charNumber.innerHTML = "0";
    }
}