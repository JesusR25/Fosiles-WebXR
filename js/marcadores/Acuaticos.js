let balle = false;
let cela = false;
let tibu = false;
let mega = false;
let mesa = false;

function onQRCodeScanned(scannedText)
{
    switch (scannedText) {
        case 'Megalodon':
            Megalodon();
          break;
        case 'Mosasaurus':
            Mosasaurus();
          break;
        case 'Ballena Azul':
            Ballena();
          break;
        case 'Tiburon':
            Tiburon();
          break;
        case 'Celacanto':
          Celacanto();
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

function Megalodon(){
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", true);
  document.querySelector("#mesasa").setAttribute("visible", false);
  //Mostrar imagen
  document.getElementById("imagenes").removeAttribute('src');
  document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Megalodon.jpg";
  document.getElementById("imagenes").style.display = "block";
  balle = false;
  cela = false;
  tibu = false;
  mega = true;
  mesa = false;
}

function Mosasaurus(){
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", true);
  //Mostrar imagen
  document.getElementById("imagenes").removeAttribute('src');
  document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Mosasaurus.jpg";
  document.getElementById("imagenes").style.display = "block";
  balle = false;
  cela = false;
  tibu = false;
  mega = false;
  mesa = true;
}

function Ballena(){
  document.querySelector("#ballena").setAttribute("visible", true);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", false);
  //Mostrar imagen
  document.getElementById("imagenes").removeAttribute('src');
  document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Ballena.jpg";
  document.getElementById("imagenes").style.display = "block";
  balle = true;
  cela = false;
  tibu = false;
  mega = false;
  mesa = false;
}

function Tiburon(){
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", true);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", false);
  //Mostrar imagen
  document.getElementById("imagenes").removeAttribute('src');
  document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Tiburon.jpg";
  document.getElementById("imagenes").style.display = "block";
  balle = false;
  cela = false;
  tibu = true;
  mega = false;
  mesa = false;
}

function Celacanto(){
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", true);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", false);
  //Mostrar imagen
  document.getElementById("imagenes").removeAttribute('src');
  document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Celacanto.jpg";
  document.getElementById("imagenes").style.display = "block";
  balle = false;
  cela = true;
  tibu = false;
  mega = false;
  mesa = false;
}