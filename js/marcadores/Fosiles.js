let ammo = false;
let bele = false;
let fos = false;
let tri = false;

function onQRCodeScanned(scannedText)
{
    alert(scannedText);
    switch (scannedText) {
        case 'Belemnites':
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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Otros/Belemnite.jpg";
        document.getElementById("imagenes").style.display = "block";
    }

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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Otros/Ammonite.jpg";
        document.getElementById("imagenes").style.display = "block";
    }

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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Otros/Trilobite.jpg";
        document.getElementById("imagenes").style.display = "block";
    }

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
    document.getElementById("inf").removeAttribute('src');
    if (document.getElementById('ch').checked) {
        document.getElementById("inf").src="../../assets/Fichas/Otros/Fosil_Vegetal.jpg";
        document.getElementById("imagenes").style.display = "block";
    }

    ammo = false;
    bele = false;
    fos = true;
    tri = false;
}

//Controlador para belemnites
AFRAME.registerComponent("bele", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#belemnites").addEventListener("model-loaded", evt => {
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
            if (!bele) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!bele) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!bele) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!bele) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!bele) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!bele) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!bele) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!bele) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!bele) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(bele && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para trilobite
AFRAME.registerComponent("tri", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#trilobite").addEventListener("model-loaded", evt => {
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
            if (!tri) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!tri) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!tri) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!tri) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!tri) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!tri) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!tri) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!tri) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!tri) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(tri && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para Ammonite
AFRAME.registerComponent("amm", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#ammonite").addEventListener("model-loaded", evt => {
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
            if (!ammo) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!ammo) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!ammo) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!ammo) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!ammo) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!ammo) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!ammo) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!ammo) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!ammo) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(ammo && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})

//Controlador para Fosil
AFRAME.registerComponent("fos", {
    init: function () {
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("#fosil").addEventListener("model-loaded", evt => {
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
            if (!fos) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!fos) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!fos) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!fos) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!fos) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!fos) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!fos) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!fos) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!fos) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(fos && this.swipeVelocity && !this.isPanning)){
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
        //Ammonite
        document.querySelector("#ammonite").setAttribute("scale", "1 1 1");
        document.querySelector("#ammonite").setAttribute("position", "0.5 -1 -4");
        //Belemnites
        document.querySelector("#belemnites").setAttribute("scale", "70 70 70");
        document.querySelector("#belemnites").setAttribute("position", "0.5 -1 -4");
        //Fosil
        document.querySelector("#fosil").setAttribute("scale", "0.7 0.7 0.7");
        document.querySelector("#fosil").setAttribute("position", "0.5 -1.3 -4");
        //Trilobite
        document.querySelector("#trilobite").setAttribute("scale", "2 2 2");
        document.querySelector("#trilobite").setAttribute("position", "0.5 -1.3 -4");
    } else {
        document.getElementById("inf").style.marginLeft = "20%";
        document.getElementById("inf").style.width = "56%";
        document.getElementById("inf").style.marginTop = "15%";
        //Ammonite
        document.querySelector("#ammonite").setAttribute("scale", "0.3 0.3 0.3");
        document.querySelector("#ammonite").setAttribute("position", "0 -1 -4");
        //Belemnites
        document.querySelector("#belemnites").setAttribute("scale", "50 50 50");
        document.querySelector("#belemnites").setAttribute("position", "0 -1 -4");
        //Fosil
        document.querySelector("#fosil").setAttribute("scale", "0.4 0.4 0.4");
        document.querySelector("#fosil").setAttribute("position", "0 -1.3 -4");
        //Trilobite
        document.querySelector("#trilobite").setAttribute("scale", "1 1 1");
        document.querySelector("#trilobite").setAttribute("position", "0 -1.3 -4");
    }
}
screen.orientation.addEventListener("change", readDeviceOrientation);