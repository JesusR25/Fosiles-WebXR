var botonreg = document.getElementById("registrar");
var botonini = document.getElementById("iniciar");
var botoninv = document.getElementById("invitado");
var botonacerca = document.getElementById("aviso");

botonacerca.addEventListener("click", (e) => {
    Swal
      .fire({
        title: "Acerca de",
        html:'Este proyecto ha sido desarrollado para complementar la visita guiada del Meteorito de Bacubirito, actualmente ubicado en el Santuario, dentro del Centro de Ciencias de Sinaloa. <br><br> <b>Contacto</b> <br><br> aup840@gmail.com',
        confirmButtonText: "Entendido",
      })
      .then(resultado => {
    
      });
  });