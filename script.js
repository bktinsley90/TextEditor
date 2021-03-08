
const updateText = () =>{
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}

const makeBold = (elem)=> {
 
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

const makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

const makeUnderline = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
    document.getElementById('text-output').classList.toggle('underline');
}


const alignText = (elem, alignType) => {
  
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName('align');
  for(let button of buttonsList){
      button.classList.remove('active')
  }
  elem.classList.add('active');
}