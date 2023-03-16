let ammo = false;
let bele = false;
let fos = false;
let tri = false;

function onQRCodeScanned(scannedText)
{
    alert(scannedText);
    switch (scannedText) {
        case 'Belemnite':
            Belemnite();
          break;
        case 'Trilobite':
            Trilobite();
          break;
        case 'Ammonite':
            Ammonite();
          break;
        case 'Fosil':
            Fosil();
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
function Belemnite(){
    document.querySelector("#ammonite").setAttribute("visible", false);
    document.querySelector("#belemnites").setAttribute("visible", true);
    document.querySelector("#fosil").setAttribute("visible", false);
    document.querySelector("#trilobite").setAttribute("visible", false);
    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Otros/Belemnite.jpg";
    document.getElementById("imagenes").style.display = "block";

    ammo = false;
    bele = true;
    fos = false;
    tri = false;
}

//Funciones para ocultar segun sea el marcador
function Ammonite(){
    document.querySelector("#ammonite").setAttribute("visible", true);
    document.querySelector("#belemnites").setAttribute("visible", false);
    document.querySelector("#fosil").setAttribute("visible", false);
    document.querySelector("#trilobite").setAttribute("visible", false);
    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Otros/Ammonite.jpg";
    document.getElementById("imagenes").style.display = "block";

    ammo = true;
    bele = false;
    fos = false;
    tri = false;
}

//Funciones para ocultar segun sea el marcador
function Trilobite(){
    document.querySelector("#ammonite").setAttribute("visible", false);
    document.querySelector("#belemnites").setAttribute("visible", false);
    document.querySelector("#fosil").setAttribute("visible", false);
    document.querySelector("#trilobite").setAttribute("visible", true);
    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Otros/Trilobite";
    document.getElementById("imagenes").style.display = "block";

    ammo = false;
    bele = false;
    fos = false;
    tri = true;
}

//Funciones para ocultar segun sea el marcador
function Fosil(){
    document.querySelector("#ammonite").setAttribute("visible", false);
    document.querySelector("#belemnites").setAttribute("visible", false);
    document.querySelector("#fosil").setAttribute("visible", true);
    document.querySelector("#trilobite").setAttribute("visible", false);
    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Otros/Fosil_Vegetal.jpg";
    document.getElementById("imagenes").style.display = "block";

    ammo = false;
    bele = false;
    fos = true;
    tri = false;
}