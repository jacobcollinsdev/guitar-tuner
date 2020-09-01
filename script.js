const strings = document.querySelectorAll('.string');
const notes = document.querySelectorAll('.note');
const loop = document.querySelector('.loop');
const fretboard = document.querySelector('.fretboard')
const themes = document.querySelectorAll('input[type="radio"]');
let audio = document.querySelector('audio');

themes.forEach(theme => theme.addEventListener('change', updateBackground))
notes.forEach(note => note.addEventListener('click', playNote));

window.addEventListener('keydown', playSound);

function playNote(e){
  audio.dataset.note = e.target.dataset.note;
  audio.attributes.src.nodeValue = `audio/${e.target.dataset.note}.wav `;

  checkLoop();

  audio.currentTime = 0;
  audio.play();

  //Add active classes
  let string = e.target.previousElementSibling;
  string.classList.add('vibrate');
  let note = e.target;
  note.classList.add('playing');

  //Remove active classes

  string.addEventListener('animationend', ()=>{
    string.classList.remove('vibrate');
    note.classList.remove('playing');
  });

}

function updateBackground(e){
  fretboard.classList.remove('dark');
  fretboard.classList.remove('light');
  fretboard.classList.remove('green');
  fretboard.classList.remove('red');
  fretboard.classList.remove('blue');
  fretboard.classList.remove('brown');
  fretboard.classList.add(e.target.id);
}

function playSound(e){
  console.log(e.key);
  let lowE = "audio/Low-E.wav";
  let aKey = "audio/A.wav";
  let dKey = "audio/D.wav";
  let gKey = "audio/G.wav";
  let bKey = "audio/B.wav";
  let highE = "audio/High-E.wav";

  switch(e.key){
    case "6":
      audio.attributes.src.nodeValue = lowE;
      break;
    case "5":
      audio.attributes.src.nodeValue = aKey;
      break;
    case "4":
      audio.attributes.src.nodeValue = dKey;
      break;
    case "3":
      audio.attributes.src.nodeValue = gKey;
      break;
    case "2":
      audio.attributes.src.nodeValue = bKey;
      break;
    case "1":
      audio.attributes.src.nodeValue = highE;
      break;
    default:
      return;
  }

  checkLoop();

  audio.play()
  notes[notes.length - e.key].classList.add('playing');
  strings[strings.length - e.key].classList.add('vibrate');

  strings.forEach(string => string.addEventListener('animationend', ()=>{
    notes[notes.length - e.key].classList.remove('playing');
  strings[strings.length - e.key].classList.remove('vibrate');
  }))
}


function checkLoop(){
  if(loop.checked){
    audio.loop = true;
  }else{
    audio.loop = false;
  }

  loop.addEventListener('change', ()=>{
    if(!loop.checked){
      audio.loop = false;
    }
  })
}