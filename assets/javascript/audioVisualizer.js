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

//load song
wavesurfer.load('themes/popraffy/assets/audio/test.mp3');

//play
wavesurfer.on('ready', function () {
    wavesurfer.play();
});

var count=true;
//play button click
$('#play-pause').click(function(){
    //if music is playing
    if(count){
        wavesurfer.pause();
        count=false;

        //set pause icon
        document.getElementById('play-pause').src= 'themes/popraffy/assets/images/audio-visualizer/play.png';
    }
    else{
        wavesurfer.play();
        count=true;

        //set play icon
        //set pause icon
        document.getElementById('play-pause').src='themes/popraffy/assets/images/audio-visualizer/pause.png';
    }
});

//on hover effect
$('#audio-player').hover(function() {

    //animate in

    //album cover
    $( ".album-cover" ).animate({
        height: 100,
        width:100
        
    },200);
    //title
    $( "#song-title").animate({
        opacity:1
    },300);
    //wave
    $( ".wave").animate({
        marginLeft: 40,
        marginTop: -2
    },200);

    //row size
    $( "#audio-player").animate({
        height:100,
        width:400
    },200);
}, function(){

    //animate out

    //album cover
    $( ".album-cover" ).animate({
        height: 60,
        width:60
        
    },300);
    //title
    $( "#song-title").animate({
        opacity:0
    },50);
    //wave
    $( ".wave").animate({
        marginLeft: 10,
        marginTop: -37
    },300);

    //row size
    $( "#audio-player").animate({
        height:60,
        width:300
    },300);

});

//clicking play button

    
    