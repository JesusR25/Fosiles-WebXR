let balle = false;
let cela = false;
let tibu = false;
let mega = false;
let mesa = false;

let modmega;
let modmosa;
let modballe;
let modtibu;
let modcela;

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
        case 'https://fosiles.vercel.app/Paginas/Restos%20Fosiles.html':
            window.location.href = "../Paginas/Restos Fosiles.html";
            break;
        case 'https://fosiles.vercel.app/Paginas/Humanos.html':
            window.location.href = "../Paginas/Humanos.html";
            break;
        case 'https://fosiles.vercel.app/Paginas/Animales%20Terrestres.html':
            window.location.href = "../Paginas/Animales Terrestres.html";
             break;
        case 'https://fosiles.vercel.app/Paginas/Animales%20Acuaticos.html':
            window.location.href = "../Paginas/Animales Acuaticos.html";
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
    //Mostrar imagen
  document.getElementById("inf").removeAttribute('src');
  if (document.getElementById('ch').checked) {
      document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Megalodon.jpg";
      document.getElementById("imagenes").style.display = "block";
  }
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", true);
  document.querySelector("#mesasa").setAttribute("visible", false);
  modmega.scale.multiplyScalar(0).addScalar(1);
  modmega.rotation.y = 0;
  modmega.rotation.x = 0;
  balle = false;
  cela = false;
  tibu = false;
  mega = true;
  mesa = false;
}

function Mosasaurus(){
    //Mostrar imagen
  document.getElementById("inf").removeAttribute('src');
  if (document.getElementById('ch').checked) {
    document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Mosasaurus.jpg";
    document.getElementById("imagenes").style.display = "block";
  }
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", true);
  modmosa.scale.multiplyScalar(0).addScalar(1);
  modmosa.rotation.y = 0;
  modmosa.rotation.x = 0;
  balle = false;
  cela = false;
  tibu = false;
  mega = false;
  mesa = true;
}

function Ballena(){
    document.getElementById("inf").removeAttribute('src');
  if (document.getElementById('ch').checked) {
    document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Ballena.jpg";
    document.getElementById("imagenes").style.display = "block";
  }
  document.querySelector("#ballena").setAttribute("visible", true);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", false);
  modballe.scale.multiplyScalar(0).addScalar(1);
  modballe.rotation.y = 0;
  modballe.rotation.x = 0;
  //Mostrar imagen
  balle = true;
  cela = false;
  tibu = false;
  mega = false;
  mesa = false;
}

function Tiburon(){
    //Mostrar imagen
  document.getElementById("inf").removeAttribute('src');
  if (document.getElementById('ch').checked) {
    document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Tiburon.jpg";
    document.getElementById("imagenes").style.display = "block";
  }
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", false);
  document.querySelector("#tiburon").setAttribute("visible", true);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", false);
  modtibu.scale.multiplyScalar(0).addScalar(1);
  modtibu.rotation.y = 0;
  modtibu.rotation.x = 0;
  balle = false;
  cela = false;
  tibu = true;
  mega = false;
  mesa = false;
}

function Celacanto(){
    //Mostrar imagen
  document.getElementById("inf").removeAttribute('src');
  if (document.getElementById('ch').checked) {
    document.getElementById("inf").src="../../assets/Fichas/Acuaticos/Celacanto.jpg";
    document.getElementById("imagenes").style.display = "block";
  }
  document.querySelector("#ballena").setAttribute("visible", false);
  document.querySelector("#celacanto").setAttribute("visible", true);
  document.querySelector("#tiburon").setAttribute("visible", false);
  document.querySelector("#megadolon").setAttribute("visible", false);
  document.querySelector("#mesasa").setAttribute("visible", false);
  modcela.scale.multiplyScalar(0).addScalar(1);
  modcela.rotation.y = 0;
  modcela.rotation.x = 0;
  document.querySelector("#celacanto").emit("zoom");
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
        modmega = evt.detail.model;
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
          modmega.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!mega) return;
          this.isPanning = true
          modmega.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!mega) return;
          this.isPanning = true
          modmega.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!mega) return;
          xrot = true;
          modmega.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!mega) return;
          xrot = true;
          modmega.rotation.x += 4 * Math.PI / 360;
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
          modmega.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
        modmosa = evt.detail.model;
          this.mesh = evt.detail.model
      })
      // hammerjs input helper
      const hammertime = new Hammer(document.body);

      // scale
      // scale is tricky, because it resets
      var currentScale = 1;
      hammertime.get('pinch').set({ enable: true });
      hammertime.on("pinchstart", (ev) => {
          currentScale = modmosa.scale.x;
      })
      hammertime.on("pinchmove", (ev) => {
          if (!mesa) return;
          modmosa.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!mesa) return;
          this.isPanning = true
          modmosa.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!mesa) return;
          this.isPanning = true
          modmosa.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!mesa) return;
          xrot = true;
          modmosa.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!mesa) return;
          xrot = true;
          modmosa.rotation.x += 4 * Math.PI / 360;
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
          modmosa.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
        modballe = evt.detail.model;
          this.mesh = evt.detail.model
      })
      // hammerjs input helper
      const hammertime = new Hammer(document.body);

      // scale
      // scale is tricky, because it resets
      var currentScale = 1;
      hammertime.get('pinch').set({ enable: true });
      hammertime.on("pinchstart", (ev) => {
          currentScale = modballe.scale.x;
      })
      hammertime.on("pinchmove", (ev) => {
          if (!balle) return;
          modballe.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!balle) return;
          this.isPanning = true
          modballe.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!balle) return;
          this.isPanning = true
          modballe.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!balle) return;
          xrot = true;
          modballe.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!balle) return;
          xrot = true;
          modballe.rotation.x += 4 * Math.PI / 360;
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
          modballe.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
        modtibu = evt.detail.model;
          this.mesh = evt.detail.model
      })
      // hammerjs input helper
      const hammertime = new Hammer(document.body);

      // scale
      // scale is tricky, because it resets
      var currentScale = 1;
      hammertime.get('pinch').set({ enable: true });
      hammertime.on("pinchstart", (ev) => {
          currentScale = modtibu.scale.x;
      })
      hammertime.on("pinchmove", (ev) => {
          if (!tibu) return;
          modtibu.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!tibu) return;
          this.isPanning = true
          modtibu.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!tibu) return;
          this.isPanning = true
          modtibu.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!tibu) return;
          xrot = true;
          modtibu.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!tibu) return;
          xrot = true;
          modtibu.rotation.x += 4 * Math.PI / 360;
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
          modtibu.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
        modcela = evt.detail.model;
          this.mesh = evt.detail.model
      })
      // hammerjs input helper
      const hammertime = new Hammer(document.body);

      // scale
      // scale is tricky, because it resets
      var currentScale = 1;
      hammertime.get('pinch').set({ enable: true });
      hammertime.on("pinchstart", (ev) => {
          currentScale = modcela.scale.x;
      })
      hammertime.on("pinchmove", (ev) => {
          if (!cela) return;
          modcela.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
      });

      // rotation
      // pan left/right for rotation
      this.isPanning = false;
      var xrot = false;
      hammertime.on("panleft", () => {
          if (!cela) return;
          this.isPanning = true
          modcela.rotation.y -= 4 * Math.PI / 360;
      })

      hammertime.on("panright", () => {
          if (!cela) return;
          this.isPanning = true
          modcela.rotation.y += 4 * Math.PI / 360;
      })

      hammertime.on("panup", () => {
          if (!cela) return;
          xrot = true;
          modcela.rotation.x -= 4 * Math.PI / 360;
      })

      hammertime.on("pandown", () => {
          if (!cela) return;
          xrot = true;
          modcela.rotation.x += 4 * Math.PI / 360;
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
          modcela.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
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
        //Cambio modelos
        //Ballena
        document.querySelector("#ballena").setAttribute("scale", "0.30 0.30 0.30");
        document.querySelector("#ballena").setAttribute("position", "2 -1 -4");
        //Celacanto
        document.querySelector("#celacanto").setAttribute("scale", "0.5 0.5 0.5");
        document.querySelector("#celacanto").setAttribute("position", "1 -1 -4");
        //Tiburon
        document.querySelector("#tiburon").setAttribute("scale", "0.6 0.6 0.6");
        document.querySelector("#tiburon").setAttribute("position", "5 -100 -450");
        //Megadolon
        document.querySelector("#megadolon").setAttribute("scale", "1 1 1");
        document.querySelector("#megadolon").setAttribute("position", "0 -2 -4");
        //Mesasa
        document.querySelector("#mesasa").setAttribute("scale", "0.080 0.080 0.080");
        document.querySelector("#mesasa").setAttribute("position", "0.3 -2.5 -15");
    } else {
        document.getElementById("inf").style.marginLeft = "20%";
        document.getElementById("inf").style.width = "56%";
        document.getElementById("inf").style.marginTop = "15%";
        //Cambio modelos
        //Ballena
        document.querySelector("#ballena").setAttribute("scale", "0.10 0.10 0.10");
        document.querySelector("#ballena").setAttribute("position", "-0.2 -1.5 -4");
        //Celacanto
        document.querySelector("#celacanto").setAttribute("scale", "0.25 0.25 0.25");
        document.querySelector("#celacanto").setAttribute("position", "0.3 -1.2 -4");
        //Tiburon
        document.querySelector("#tiburon").setAttribute("scale", "0.3 0.3 0.3");
        document.querySelector("#tiburon").setAttribute("position", "-0.5 -130 -450");
        //Megadolon
        document.querySelector("#megadolon").setAttribute("scale", "0.6 0.6 0.6");
        document.querySelector("#megadolon").setAttribute("position", "0 -2 -4");
        //Mesasa
        document.querySelector("#mesasa").setAttribute("scale", "0.037 0.037 0.037");
        document.querySelector("#mesasa").setAttribute("position", "-1 -3 -15");
    }
}
screen.orientation.addEventListener("change", readDeviceOrientation);
