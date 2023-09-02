let Austra = false;
let Habi = false;
let Nean = false;
let Erec = false;
let Sapi = false;
let Paran = false;

let modaustra;
let modhabi;
let modnean;
let moderec;
let modsap;
let modparan;

function onQRCodeScanned(scannedText)
{
    //alert(scannedText);
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Australopithecus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", true);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    modaustra.scale.multiplyScalar(0).addScalar(1);
    modaustra.rotation.y = 0;
    modaustra.rotation.x = 0;
    Austra = true;
    Sapi = false;
    Nean = false;
    Habi = false;
    Erec = false;
    Paran = false;
}

function Habilis(){
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Homo_Habilis.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", true);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    modhabi.scale.multiplyScalar(0).addScalar(1);
    modhabi.rotation.y = 0;
    modhabi.rotation.x = 0;
    Austra = false;
    Sapi = false;
    Nean = false;
    Habi = true;
    Erec = false;
    Paran = false;
}

function Neanderthalesis(){
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Neanderthal.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", true);
    modnean.scale.multiplyScalar(0).addScalar(1);
    modnean.rotation.y = 0;
    modnean.rotation.x = 0;
    Austra = false;
    Sapi = false;
    Nean = true;
    Habi = false;
    Erec = false;
    Paran = false;
}

function Herectus(){
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Homo_Erectus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", true);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    moderec.scale.multiplyScalar(0).addScalar(1);
    moderec.rotation.y = 0;
    moderec.rotation.x = 0;
    Austra = false;
    Sapi = false;
    Nean = false;
    Habi = false;
    Erec = true;
    Paran = false;
}

function Sapiens(){
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Homo_Sapiens.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    document.querySelector("#pa").setAttribute("visible", false);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", true);
    document.querySelector("#hone").setAttribute("visible", false);
    modsap.scale.multiplyScalar(0).addScalar(1);
    modsap.rotation.y = 0;
    modsap.rotation.x = 0;
    Austra = false;
    Sapi = true;
    Nean = false;
    Habi = false;
    Erec = false;
    Paran = false;
}

function Paranthropus(){
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Paranthropus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    document.querySelector("#pa").setAttribute("visible", true);
    document.querySelector("#aut").setAttribute("visible", false);
    document.querySelector("#hoer").setAttribute("visible", false);
    document.querySelector("#hoha").setAttribute("visible", false);
    document.querySelector("#hosa").setAttribute("visible", false);
    document.querySelector("#hone").setAttribute("visible", false);
    modparan.scale.multiplyScalar(0).addScalar(1);
    modparan.rotation.y = 0;
    modparan.rotation.x = 0;
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
            modparan = evt.detail.model;
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = modparan.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!Paran) return;
            modparan.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Paran) return;
            this.isPanning = true
            modparan.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Paran) return;
            this.isPanning = true
            modparan.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Paran) return;
            xrot = true;
            modparan.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Paran) return;
            xrot = true;
            modparan.rotation.x += 4 * Math.PI / 360;
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
            modparan.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para autra
AFRAME.registerComponent("conas", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#aut").addEventListener("model-loaded", evt => {
            modaustra = evt.detail.model;
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = modaustra.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!Austra) return;
            modaustra.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Austra) return;
            this.isPanning = true
            modaustra.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Austra) return;
            this.isPanning = true
            modaustra.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Austra) return;
            xrot = true;
            modaustra.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Austra) return;
            xrot = true;
            modaustra.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!Austra) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!Austra) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!Austra) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!Austra) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(Austra && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            modaustra.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para homoerec
AFRAME.registerComponent("erec", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#hoer").addEventListener("model-loaded", evt => {
            moderec = evt.detail.model;
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = moderec.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!Erec) return;
            moderec.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Erec) return;
            this.isPanning = true
            moderec.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Erec) return;
            this.isPanning = true
            moderec.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Erec) return;
            xrot = true;
            moderec.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Erec) return;
            xrot = true;
            moderec.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!Erec) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!Erec) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!Erec) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!Erec) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(Erec && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            moderec.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para habilis
AFRAME.registerComponent("habilis", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#hoha").addEventListener("model-loaded", evt => {
            modhabi = evt.detail.model;
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = modhabi.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!Habi) return;
            modhabi.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Habi) return;
            this.isPanning = true
            modhabi.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Habi) return;
            this.isPanning = true
            modhabi.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Habi) return;
            xrot = true;
            modhabi.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Habi) return;
            xrot = true;
            modhabi.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!Habi) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!Habi) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!Habi) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!Habi) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(Habi && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            modhabi.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para sapiens
AFRAME.registerComponent("sapiens", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#hosa").addEventListener("model-loaded", evt => {
            modsap = evt.detail.model;
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = modsap.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!Sapi) return;
            modsap.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Sapi) return;
            this.isPanning = true
            modsap.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Sapi) return;
            this.isPanning = true
            modsap.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Sapi) return;
            xrot = true;
            modsap.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Sapi) return;
            xrot = true;
            modsap.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!Sapi) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!Sapi) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!Sapi) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!Sapi) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(Sapi && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            modsap.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para homonean
AFRAME.registerComponent("neander", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#hone").addEventListener("model-loaded", evt => {
            modnean = evt.detail.model;
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = modnean.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!Nean) return;
            modnean.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Nean) return;
            this.isPanning = true
            modnean.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Nean) return;
            this.isPanning = true
            modnean.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Nean) return;
            xrot = true;
            modnean.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Nean) return;
            xrot = true;
            modnean.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!Nean) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!Nean) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!Nean) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!Nean) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(Nean && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            modnean.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

function volver(){
    window.location.href = "../Paginas/Menu.html";
}

function ocultar(){
    document.getElementById('imagenes').style.display = "none";
}

function readDeviceOrientation() {
    if (Math.abs(window.orientation) === 90) {
        //Landscape
        document.getElementById("inf").style.marginLeft = "3%";
        document.getElementById("inf").style.width = "23%";
        document.getElementById("inf").style.marginTop = "3%";
        //Cambio de modelos
        //Pa
        document.querySelector("#pa").setAttribute("scale", "0.3 0.3 0.3");
        document.querySelector("#pa").setAttribute("position", "0 -1 -4");
        //Aut
        document.querySelector("#aut").setAttribute("scale", "0.012 0.012 0.012");
        document.querySelector("#aut").setAttribute("position", "0 -1.3 -4");
        //Hoer
        document.querySelector("#hoer").setAttribute("scale", "0.3 0.3 0.3");
        document.querySelector("#hoer").setAttribute("position", "0 -1 -4");
        //Hoha
        document.querySelector("#hoha").setAttribute("scale", "1 1 1");
        document.querySelector("#hoha").setAttribute("position", "0 -1 -4");
        //Hosa
        document.querySelector("#hosa").setAttribute("scale", "2 2 2");
        document.querySelector("#hosa").setAttribute("position", "0 -1 -4");
        //Hone
        document.querySelector("#hone").setAttribute("scale", "0.1 0.1 0.1");
        document.querySelector("#hone").setAttribute("position", "0 -2 -4");
    } else {
        document.getElementById("inf").style.marginLeft = "20%";
        document.getElementById("inf").style.width = "56%";
        document.getElementById("inf").style.marginTop = "15%";
        //Cambio de modelos
        //Pa
        document.querySelector("#pa").setAttribute("scale", "0.3 0.3 0.3");
        document.querySelector("#pa").setAttribute("position", "0 -1.3 -4");
        //Aut
        document.querySelector("#aut").setAttribute("scale", "0.012 0.012 0.012");
        document.querySelector("#aut").setAttribute("position", "0 -1.3 -4");
        //Hoer
        document.querySelector("#hoer").setAttribute("scale", "0.35 0.35 0.35");
        document.querySelector("#hoer").setAttribute("position", "0 -1 -4");
        //Hoha
        document.querySelector("#hoha").setAttribute("scale", "0.9 0.9 0.9");
        document.querySelector("#hoha").setAttribute("position", "0 -1 -4");
        //Hosa
        document.querySelector("#hosa").setAttribute("scale", "1.8 1.8 1.8");
        document.querySelector("#hosa").setAttribute("position", "0 -1 -4");
        //Hone
        document.querySelector("#hone").setAttribute("scale", "0.050 0.050 0.050");
        document.querySelector("#hone").setAttribute("position", "0 -1.5 -4");
    }
}
screen.orientation.addEventListener("change", readDeviceOrientation);
