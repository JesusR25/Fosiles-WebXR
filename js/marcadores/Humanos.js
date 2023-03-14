let Austra = false;
let Habi = false;
let Nean = false;
let Erec = false;
let Sapi = false;
let Paran = false;

7
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
    Austra = true;
    Sapi = false;
    Nean = false;
    Habi = false;
    Erec = false;
    Paran = false;
}

function Habilis(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", true);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    Austra = false;
    Sapi = false;
    Nean = false;
    Habi = true;
    Erec = false;
    Paran = false;
}

function Neanderthalesis(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", true);
    Austra = false;
    Sapi = false;
    Nean = true;
    Habi = false;
    Erec = false;
    Paran = false;
}

function Herectus(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", true);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    Austra = false;
    Sapi = false;
    Nean = false;
    Habi = false;
    Erec = true;
    Paran = false;
}

function Sapiens(){
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", true);
    document.querySelector("#hone").setAttribute("visible", false);
    Austra = false;
    Sapi = true;
    Nean = false;
    Habi = false;
    Erec = false;
    Paran = false;
}

function Paranthropus(){
    document.querySelector("#pa").setAttribute("visible", true);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    Austra = false;
    Sapi = false;
    Nean = false;
    Habi = false;
    Erec = false;
    Paran = true;
}

AFRAME.registerComponent("controller", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#pa").addEventListener("model-loaded", evt => {
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = this.mesh.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (Paran) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Paran) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Paran) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Paran) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Paran) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!Paran) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!Paran) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!Paran) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!Paran) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(Paran && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})