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

//Controlador para megadolon
AFRAME.registerComponent("mega", {
  init: function () {
      // track markerFound/markerLost
      // grab the model reference
      document.querySelector("#megadolon").addEventListener("model-loaded", evt => {
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
          if (!mega) return;
          this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!mega) return;
          this.isPanning = true
          this.mesh.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!mega) return;
          this.isPanning = true
          this.mesh.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!mega) return;
          xrot = true;
          this.mesh.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!mega) return;
          xrot = true;
          this.mesh.rotation.x += 4 * Math.PI / 360;
      })


      hammertime.on("panend", () => this.isPanning = false, xrot = false)
      hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

      hammertime.on("swipeleft", ({ velocity }) => {
          if (!mega) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swiperight", ({ velocity }) => {
          if (!mega) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipeup", ({ velocity }) => {
          if (!mega) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipedown", ({ velocity }) => {
          if (!mega) return;
          this.swipeVelocity = velocity
      })
  },
  tick: function () {
      if (!(mega && this.swipeVelocity && !this.isPanning)){
          return;
      }else{
          this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
          //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
          this.swipeVelocity *= 0.93;
          if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
      }
      
      
  }
})

//Controlador para Mosasaurus
AFRAME.registerComponent("mosa", {
  init: function () {
      // track markerFound/markerLost
      // grab the model reference
      document.querySelector("#mesasa").addEventListener("model-loaded", evt => {
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
          if (!mesa) return;
          this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!mesa) return;
          this.isPanning = true
          this.mesh.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!mesa) return;
          this.isPanning = true
          this.mesh.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!mesa) return;
          xrot = true;
          this.mesh.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!mesa) return;
          xrot = true;
          this.mesh.rotation.x += 4 * Math.PI / 360;
      })


      hammertime.on("panend", () => this.isPanning = false, xrot = false)
      hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

      hammertime.on("swipeleft", ({ velocity }) => {
          if (!mesa) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swiperight", ({ velocity }) => {
          if (!mesa) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipeup", ({ velocity }) => {
          if (!mesa) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipedown", ({ velocity }) => {
          if (!mesa) return;
          this.swipeVelocity = velocity
      })
  },
  tick: function () {
      if (!(mesa && this.swipeVelocity && !this.isPanning)){
          return;
      }else{
          this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
          //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
          this.swipeVelocity *= 0.93;
          if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
      }
      
      
  }
})

//Controlador para megadolon
AFRAME.registerComponent("ballena", {
  init: function () {
      // track markerFound/markerLost
      // grab the model reference
      document.querySelector("#ballena").addEventListener("model-loaded", evt => {
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
          if (!balle) return;
          this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!balle) return;
          this.isPanning = true
          this.mesh.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!balle) return;
          this.isPanning = true
          this.mesh.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!balle) return;
          xrot = true;
          this.mesh.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!balle) return;
          xrot = true;
          this.mesh.rotation.x += 4 * Math.PI / 360;
      })


      hammertime.on("panend", () => this.isPanning = false, xrot = false)
      hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

      hammertime.on("swipeleft", ({ velocity }) => {
          if (!balle) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swiperight", ({ velocity }) => {
          if (!balle) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipeup", ({ velocity }) => {
          if (!balle) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipedown", ({ velocity }) => {
          if (!balle) return;
          this.swipeVelocity = velocity
      })
  },
  tick: function () {
      if (!(balle && this.swipeVelocity && !this.isPanning)){
          return;
      }else{
          this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
          //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
          this.swipeVelocity *= 0.93;
          if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
      }
      
      
  }
})

//Controlador para tiburon
AFRAME.registerComponent("tibu", {
  init: function () {
      // track markerFound/markerLost
      // grab the model reference
      document.querySelector("#tiburon").addEventListener("model-loaded", evt => {
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
          if (!tibu) return;
          this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!tibu) return;
          this.isPanning = true
          this.mesh.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!tibu) return;
          this.isPanning = true
          this.mesh.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!tibu) return;
          xrot = true;
          this.mesh.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!tibu) return;
          xrot = true;
          this.mesh.rotation.x += 4 * Math.PI / 360;
      })


      hammertime.on("panend", () => this.isPanning = false, xrot = false)
      hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

      hammertime.on("swipeleft", ({ velocity }) => {
          if (!tibu) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swiperight", ({ velocity }) => {
          if (!tibu) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipeup", ({ velocity }) => {
          if (!tibu) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipedown", ({ velocity }) => {
          if (!tibu) return;
          this.swipeVelocity = velocity
      })
  },
  tick: function () {
      if (!(tibu && this.swipeVelocity && !this.isPanning)){
          return;
      }else{
          this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
          //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
          this.swipeVelocity *= 0.93;
          if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
      }
      
      
  }
})

//Controlador para mcelacanto
AFRAME.registerComponent("cela", {
  init: function () {
      // track markerFound/markerLost
      // grab the model reference
      document.querySelector("#celacanto").addEventListener("model-loaded", evt => {
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
          if (!cela) return;
          this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!cela) return;
          this.isPanning = true
          this.mesh.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!cela) return;
          this.isPanning = true
          this.mesh.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!cela) return;
          xrot = true;
          this.mesh.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!cela) return;
          xrot = true;
          this.mesh.rotation.x += 4 * Math.PI / 360;
      })


      hammertime.on("panend", () => this.isPanning = false, xrot = false)
      hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

      hammertime.on("swipeleft", ({ velocity }) => {
          if (!cela) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swiperight", ({ velocity }) => {
          if (!cela) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipeup", ({ velocity }) => {
          if (!cela) return;
          this.swipeVelocity = velocity
      })
      hammertime.on("swipedown", ({ velocity }) => {
          if (!cela) return;
          this.swipeVelocity = velocity
      })
  },
  tick: function () {
      if (!(cela && this.swipeVelocity && !this.isPanning)){
          return;
      }else{
          this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
          //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
          this.swipeVelocity *= 0.93;
          if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
      }
      
      
  }
})