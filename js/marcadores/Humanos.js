let Austra = false;
let Habi = false;
let Nean = false;
let Erec = false;
let Sapi = false;
let Paran = false;


function onQRCodeScanned(scannedText)
{
    alert(scannedText);
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Australopithecus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Homo_Habilis.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Neanderthal.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Homo_Erectus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Homo_Sapiens.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    //Mostrar imagen
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Humanos/Paranthropus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
            if (!Paran) return;
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

//Controlador para autra
AFRAME.registerComponent("conas", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#aut").addEventListener("model-loaded", evt => {
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
            if (!Austra) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Austra) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Austra) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Austra) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Austra) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
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
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
            if (!Erec) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Erec) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Erec) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Erec) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Erec) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
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
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
            if (!Habi) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Habi) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Habi) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Habi) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Habi) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
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
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
            if (!Sapi) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Sapi) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Sapi) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Sapi) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Sapi) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
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
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
            if (!Nean) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!Nean) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!Nean) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!Nean) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!Nean) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
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
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

function volver(){
    window.history.back();
}

function ocultar(){
    document.getElementById('imagenes').style.display = "none";
}

function readDeviceOrientation() {
    if (Math.abs(window.orientation) === 90) {
        //Landscape
        document.getElementById("inf").style.width = "50%";
        document.getElementById("inf").style.marginLeft = "7%";
        document.getElementById("inf").style.marginTop = "7%";
    } else {
        //Portrait
    }
}
screen.orientation.addEventListener("change", readDeviceOrientation);