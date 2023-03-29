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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Terrestres/Pterodactylus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Terrestres/Mammut.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Terrestres/Allosaurus.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Terrestres/Perezoso.jpg";
        document.getElementById("imagenes").style.display = "block";
    }
    mamu = false;
    pte = false;
    allo = false;
    pere = true;
}

//Controlador para mammut
AFRAME.registerComponent("mam", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#mammoth").addEventListener("model-loaded", evt => {
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
            if (!mamu) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!mamu) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!mamu) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!mamu) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!mamu) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!mamu) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!mamu) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!mamu) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!mamu) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(mamu && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para Pterodactylus
AFRAME.registerComponent("pet", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#pterodactyl").addEventListener("model-loaded", evt => {
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
            if (!pte) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!pte) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!pte) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!pte) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!pte) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!pte) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!pte) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!pte) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!pte) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(pte && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para Allosaurus
AFRAME.registerComponent("allo", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#allosaurus").addEventListener("model-loaded", evt => {
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
            if (!allo) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!allo) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!allo) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!allo) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!allo) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!allo) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!allo) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!allo) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!allo) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(allo && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})


//Controlador para Perezoso
AFRAME.registerComponent("pere", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#perezoso").addEventListener("model-loaded", evt => {
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
            if (!pere) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!pere) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!pere) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!pere) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!pere) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!pere) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!pere) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!pere) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!pere) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(pere && this.swipeVelocity && !this.isPanning)){
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
        document.getElementById("inf").style.marginLeft = "3%";
        document.getElementById("inf").style.width = "23%";
        document.getElementById("inf").style.marginTop = "3%";
        //Cambio modelos
        //Allosaurus
        document.querySelector("#allosaurus").setAttribute("scale", "1 1 1");
        document.querySelector("#allosaurus").setAttribute("position", "0.4 0 -4");
        //Pterodactyl
        document.querySelector("#pterodactyl").setAttribute("scale", "8 8 8");
        document.querySelector("#pterodactyl").setAttribute("position", "0.7 0 -4");
        //Mammoth
        document.querySelector("#mammoth").setAttribute("scale", "0.020 0.020 0.020");
        document.querySelector("#mammoth").setAttribute("position", "0 -2 -4");
        //Perezoso
        document.querySelector("#perezoso").setAttribute("scale", "0.8 0.8 0.8");
        document.querySelector("#perezoso").setAttribute("position", "-1.5 -2 -4");
    } else {
        document.getElementById("inf").style.marginLeft = "20%";
        document.getElementById("inf").style.width = "56%";
        document.getElementById("inf").style.marginTop = "15%";
        //Cambio modelos
        //Allosaurus
        document.querySelector("#allosaurus").setAttribute("scale", "0.4 0.4 0.4");
        document.querySelector("#allosaurus").setAttribute("position", "0 -1.7 -4");
        //Pterodactyl
        document.querySelector("#pterodactyl").setAttribute("scale", "5 5 5");
        document.querySelector("#pterodactyl").setAttribute("position", "0 -2 -4");
        //Mammoth
        document.querySelector("#mammoth").setAttribute("scale", "0.010 0.010 0.010");
        document.querySelector("#mammoth").setAttribute("position", "0 -2 -4");
        //Perezoso
        document.querySelector("#perezoso").setAttribute("scale", "0.8 0.8 0.8");
        document.querySelector("#perezoso").setAttribute("position", "-1.5 -2 -4");
    }
}
screen.orientation.addEventListener("change", readDeviceOrientation);
