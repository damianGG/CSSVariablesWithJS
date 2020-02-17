

const fontSize = document.getElementById('size')
const fontColor =document.querySelector('#color')
const inputText = document.querySelector('#inputText')
const fontFamily= document.getElementById('fontFamily')



inputText.addEventListener("change",updateText);
fontFamily.addEventListener("change", updateText);
fontColor.addEventListener("change", updateText);
fontSize.addEventListener("mousemove", updateText);


function updateText() {
    document.documentElement.style.setProperty(`--fontSize`,fontSize.value +'px');
    document.documentElement.style.setProperty(`--fontColor`,fontColor.value);
    document.documentElement.style.setProperty(`--fontFamily`,
    fontFamily.options[fontFamily.selectedIndex].value);
    document.querySelector('.fontSizeValue').innerText=`${fontSize.value} px`;
    document.querySelector('.outputText').innerText=`${inputText.value}`;
}

function testEvent (){
    console.log('czuje')
}


