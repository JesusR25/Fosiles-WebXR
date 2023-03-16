let mamu = false;
let pte = false;
let allo = false;
let pere = false;

function onQRCodeScanned(scannedText)
{
    alert(scannedText);
    switch (scannedText) {
        case 'Mammut':
            Mammuth();
          break;
        case 'Pterodactylus':
            Pterodactylus();
          break;
        case 'Allosaurus':
            Allosaurus();
          break;
        case 'Perezoso':
            Perezoso();
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
function Pterodactylus(){
    document.querySelector("#allosaurus").setAttribute("visible", false);
    document.querySelector("#pterodactyl").setAttribute("visible", true);
    document.querySelector("#perezoso").setAttribute("visible", false);
    document.querySelector("#mammoth").setAttribute("visible", false);

    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Terrestres/Pterodactylus.jpg";
    document.getElementById("imagenes").style.display = "block";
    mamu = false;
    pte = true;
    allo = false;
    pere = false;
}
//Funcion para ocultar mammut
function Mammuth(){
    document.querySelector("#allosaurus").setAttribute("visible", false);
    document.querySelector("#pterodactyl").setAttribute("visible", false);
    document.querySelector("#perezoso").setAttribute("visible", false);
    document.querySelector("#mammoth").setAttribute("visible", true);

    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Terrestres/Mammut.jpg";
    document.getElementById("imagenes").style.display = "block";
    mamu = true;
    pte = false;
    allo = false;
    pere = false;
}
//Funcion para ocultar allosaurus
function Allosaurus(){
    document.querySelector("#allosaurus").setAttribute("visible", true);
    document.querySelector("#pterodactyl").setAttribute("visible", false);
    document.querySelector("#perezoso").setAttribute("visible", false);
    document.querySelector("#mammoth").setAttribute("visible", false);

    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Terrestres/Allosaurus.jpg";
    document.getElementById("imagenes").style.display = "block";
    mamu = false;
    pte = false;
    allo = true;
    pere = false;
}
//Funcion para mostrar perezoso
function Perezoso(){
    document.querySelector("#allosaurus").setAttribute("visible", false);
    document.querySelector("#pterodactyl").setAttribute("visible", false);
    document.querySelector("#perezoso").setAttribute("visible", true);
    document.querySelector("#mammoth").setAttribute("visible", false);

    //Mostrar imagen
    document.getElementById("imagenes").removeAttribute('src');
    document.getElementById("inf").src="../../assets/Fichas/Terrestres/Perezoso.jpg";
    document.getElementById("imagenes").style.display = "block";
    mamu = false;
    pte = false;
    allo = false;
    pere = true;
}