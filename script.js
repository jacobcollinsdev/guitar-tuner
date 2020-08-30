const strings = document.querySelectorAll('.string');
const notes = document.querySelectorAll('.note');
const loop = document.querySelector('.loop');

notes.forEach(note => note.addEventListener('click', playNote));
// strings.forEach(string => string.addEventListener('click', playNote))

function playNote(e){
  const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);
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
