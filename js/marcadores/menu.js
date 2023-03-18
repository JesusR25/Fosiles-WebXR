function advertencia(){
    swal({
      title: "Advertencia",
      text: " Esta es una aplicación de realidad aumentada con fines educativos, en ningún momento se pone en riesgo la seguridad del usuario. \nEn caso de que el usuario sea un menor de edad, se sugiere que esté supervisado por un adulto. \nSe recomienda estar atento al espacio físico donde se use la aplicación para evitar alguna situación de riesgo. \nEsta aplicación no requiere de ningún dispositivo adicional para su uso.",
      icon: "warning",
      button: "Entendido",
    });
  }
  
  function Humanos(){
    Swal.fire({
      title: 'Historia del Meteorito de Bacubirito',
      html: '•	En esta escena está disponible el marcador <b> Video. </b> <br><br> •	Conoce los principales acontecimientos del Meteorito, escanea el marcador o presiona el botón <b>Video</b> para reproducir el video. <br><br> •	Se sugiere coloque su dispositivo móvil en <b>posición vertical</b> con el fin de tener una mejor visualización.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Humanos.html";
      }
    })
  }
  
  function Terrestres(){
    Swal.fire({
      title: 'Meteorito de Bacubirito',
      html: '•	En esta pantalla visualizaras una representación en 3D del Meteorito de Bacubirito, podrás rotarlo, acercarlo o alejarlo con los gestos que utilices en la pantalla. <br><br> •	Se sugiere coloque su dispositivo móvil en <b>posición vertical</b> con el fin de tener una mejor visualización.' ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Animales Terrestres.html";
      }
    })
  }
  
  function Acuaticos(){
    Swal.fire({
      title: 'Composición Química del Meteorito',
      html: '•	En esta escena están disponibles los marcadores <b> Composición </b> y <b> Video</b>. <br><br>	•	Escanea el marcador <b>Video</b> o presiona el botón <b>Video</b> para reproducir el video que relata la composición química del Meteorito de Bacubirito.<br><br>• Escanea el marcador de <b>Composición</b> o presiona el botón <b>Composición</b> para visualizar qué elementos químicos forman parte del meteorito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Animales Acuaticos.html";
      }
    })
  }

  function Fosiles(){
    Swal.fire({
      title: 'Composición Química del Meteorito',
      html: '•	En esta escena están disponibles los marcadores <b> Composición </b> y <b> Video</b>. <br><br>	•	Escanea el marcador <b>Video</b> o presiona el botón <b>Video</b> para reproducir el video que relata la composición química del Meteorito de Bacubirito.<br><br>• Escanea el marcador de <b>Composición</b> o presiona el botón <b>Composición</b> para visualizar qué elementos químicos forman parte del meteorito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "Restos Fosiles.html";
      }
    })
  }