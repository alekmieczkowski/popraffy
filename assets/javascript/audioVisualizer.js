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
    $( "#waveform").animate({
        marginLeft: 40,
        marginTop: -14
    },200);

    //row size
    $( "#audio-player").animate({
        height:100,
        width:430
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
    $( "#waveform").animate({
        marginLeft: 0,
        marginTop: -52
    },300);

    //row size
    $( "#audio-player").animate({
        height:60,
        width:360
    },300);

});

//clicking play button
$('#play').click(function() {
    
    