'use strict'; 

const songs = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hihat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav',
};

const renderDiv  = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
};

const show = (songs) => {

 const keys = Object.keys(songs);

 keys.forEach(renderDiv)

} 

show (songs);



