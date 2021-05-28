var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }

}
function speak(){
    var synth=window.speechSynthesis;
    speakdata="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    },5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    }
    );
}

function save(){
    var link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}