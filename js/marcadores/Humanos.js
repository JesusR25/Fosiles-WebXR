

function onQRCodeScanned(scannedText)
{
    switch (scannedText) {
        case 'Australopithecus':
            Australopithecus();
          break;
        case 'Homo Habilis':
            Habilis();
          break;
        case 'Homo Neanderthalensis':
            Neanderthalesis();
          break;
        case 'Homo Erectus':
            Herectus();
          break;
        case 'Homo Sapiens':
            Sapiens();
          break;
        case 'Paranthropus':
            Paranthropus();
          break;
      }
}

//funtion returning a promise with a video stream
function provideVideoQQ()
{
    return navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
        var exCameras = [];
        devices.forEach(function(device) {
        if (device.kind === 'videoinput') {
          exCameras.push(device.deviceId)
        }
     });
        
        return Promise.resolve(exCameras);
    }).then(function(ids){
        if(ids.length === 0)
        {
          return Promise.reject('Could not find a webcam');
        }
        
        return navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment'
            }
        });        
    });                
}  

//this function will be called when JsQRScanner is ready to use
function JsQRScannerReady()
{
    //create a new scanner passing to it a callback function that will be invoked when
    //the scanner succesfully scan a QR code
    var jbScanner = new JsQRScanner(onQRCodeScanned, provideVideoQQ);
    //reduce the size of analyzed images to increase performance on mobile devices
    jbScanner.setSnapImageMaxSize(300);
    var scannerParentElement = document.getElementById("scanner");
    if(scannerParentElement)
    {
        //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
    }        
}

//Funciones para ocultar segun sea el marcador
function Australopithecus(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", true);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
}

function Habilis(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", true);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
}

function Neanderthalesis(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", true);
}

function Herectus(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", true);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
}

function Sapiens(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", true);
    document.querySelector("#hone").setAttribute("visible", false);
}

function Paranthropus(){
    document.querySelector("#pa").setAttribute("visible", true);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
}