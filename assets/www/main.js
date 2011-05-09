var deviceInfo = function() {
    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("version").innerHTML = device.version;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("name").innerHTML = device.name;
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth;
};

var audioPlaying = false;

var preventBehavior = function(e) {
    e.preventDefault();
};

function close() {
    var viewport = document.getElementById('viewport');
    viewport.style.position = "relative";
    viewport.style.display = "none";
}

// This is just to do this.
function readFile() {
    navigator.file.read('/sdcard/phonegap.txt', fail, fail);
}

function writeFile() {
    navigator.file.write('foo.txt', "This is a test of writing to a file",
            fail, fail);
}

//onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback 
//
function onError(error) {
    alert('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}

//Set audio position
//
function setAudioPosition(position) {
 document.getElementById('audio_position').innerHTML = position;
}

function playAudio(src) {
    // Create Media object from src
    my_media = new Media(src, onSuccess, onError);

    // Play audio
    my_media.play();
    audioPlaying = true;
}

// Pause audio
// 
function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}

//Stop audio
// 
function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
    clearInterval(mediaTimer);
    audioPlaying = false;
    mediaTimer = null;
}




function playGuidedBreathing(){
    
    if(audioPlaying === false)
    {
        playAudio("/android_asset/www/snd/guidedbreathingrelaxationv2.mp3");
    }
    else
    {
        stopAudio();
    }
}


function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceInfo, true);
}
