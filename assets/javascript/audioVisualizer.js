var wavesurfer = WaveSurfer.create({
    //attach to div by id
    container: '#waveform',
    //set barwidth(without this, bars come from top and bottom of line)
    barWidth: 5,
    //set color of cursor
    cursorColor: 'rgba(255,255,255,.2)',
    //set cursor width
    cursorWidth: 5,
    //max height of wave
    height:60,
    //max canvas size
    autoCenter:true,

    //color of wave after cursor
    waveColor: 'rgba(0,0,0,.2);'
});

wavesurfer.load('themes/popraffy/assets/audio/test.mp3');

var songNameDiv = document.getElementById('song-name');

$('audio-player').on('mouseover', function(){
    songNameDiv.classList.addClass('fade-in');
}).on('mouseout', function(){
    songNameDiv.classList.removeClass('fade-in');
});