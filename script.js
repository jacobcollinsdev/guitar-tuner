const strings = document.querySelectorAll('.string');
const notes = document.querySelectorAll('.note');
const loop = document.querySelector('.loop');
let audio = document.querySelector('audio');

notes.forEach(note => note.addEventListener('click', playNote));
// strings.forEach(string => string.addEventListener('click', playNote))

// loop.addEventListener('change', ()=>{
//   if(playNoteRunning);
// })

function playNote(e){
  // const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);
  console.log(e.target);
  audio.dataset.note = e.target.dataset.note;
  audio.attributes.src.nodeValue = `audio/${e.target.dataset.note}.wav `;
  console.log(audio);

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

  audio.currentTime = 0;
  audio.play();

  //Add active classes
  let string = e.target.previousElementSibling;
  string.classList.add('vibrate');
  this.classList.add('playing');

  let note = e.target;
  string.classList.add('vibrate');
  note.classList.add('playing');

  //Remove active classes
  string.addEventListener('animationend', ()=>{
    string.classList.remove('vibrate');
    this.classList.remove('playing');
  })

  string.addEventListener('animationend', ()=>{
    string.classList.remove('vibrate');
    note.classList.remove('playing');
  });

}

// function loopNote(e){
//   // const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);  
//   console.log(e.target);
//   audio.dataset.note = e.target.dataset.note;
//   audio.attributes.src.nodeValue = `audio/${e.target.dataset.note}.wav `;
//   console.log(audio);

//   if(loop.checked){
//     audio.loop = true;
//   }

//   audio.currentTime = 0;
//   audio.play();

//   //Add active classes
//   let string = e.target.previousElementSibling;
//   string.classList.add('vibrate');
//   this.classList.add('playing');

//   let note = e.target;
//   string.classList.add('vibrate');
//   note.classList.add('playing');

//   //Remove active classes
//   string.addEventListener('animationend', ()=>{
//     string.classList.remove('vibrate');
//     this.classList.remove('playing');
//   })

//   string.addEventListener('animationend', ()=>{
//     string.classList.remove('vibrate');
//     note.classList.remove('playing');
//   });

// }
