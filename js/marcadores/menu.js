function advertencia(){
    swal({
      title: "Advertencia",
      text: " Esta es una aplicación de realidad aumentada con fines educativos, en ningún momento se pone en riesgo la seguridad del usuario. \nEn caso de que el usuario sea un menor de edad, se sugiere que esté supervisado por un adulto. \nSe recomienda estar atento al espacio físico donde se use la aplicación para evitar alguna situación de riesgo. \nEsta aplicación no requiere de ningún dispositivo adicional para su uso.",
      icon: "warning",
      button: "Entendido",
    });
  }
  
  function Humanos(){
    window.location.href = "Humanos.html";
  }
  
  function Terrestres(){
    window.location.href = "Animales Terrestres.html";
  }
  
  function Acuaticos(){
    window.location.href = "Animales Acuaticos.html";
  }

  function Fosiles(){
    window.location.href = "Restos Fosiles.html";
  }

  function Quiz(){
    Swal.fire({
      title: 'Quiz',
      html: '•	En esta escena, deberás responder un examen que contempla los conocimientos adquiridos con el sitio web.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/Paginas/Quiz.html";
      }
    })
  }

  function Dinosaurios(){
    Swal.fire({
      title: 'Dinosaurios',
      html: '•	En esta escena se muestran algunos otros dinosaurios ya extintos.<br><br>	•	Presiona el botón anterior o siguiente para cambiar de dinosaurio.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/Paginas/Dinosaurios.html";
      }
    })
  }

  function escenario(){
    Swal.fire({
      title: 'Dinosaurios',
      html: '•	En esta escena podrás crear un escenario con los dinosaurios de tu elección.<br><br>	•	Presiona el botón para elegir el dinosaurio y da click sobre cualquier punto de la pantalla para colocar el dinosaurio.<br><br>	•	Presiona el botón "Captura" para capturar la pantalla de su celular y guardarla en su dispositivo.<br><br>	•	Podras mover la posicion y la escala del modelo utilizando gestos en la pantalla.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/Paginas/Escenario.html";
      }
    })
  }

  function Juego(){
    Swal.fire({
      title: 'Quiz',
      html: '•	El objetivo es controlar a un tiburón por nedio del táctil del dispositivo móvil. Devera comer todos los peces en un lapso de tiempo.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/Paginas/Juego.html";
      }
    })
  }

  function dinoquiz(){
    Swal.fire({
      title: 'Quiz',
      html: '•	En esta escena, deberás responder un examen que contempla los conocimientos adquiridos con la aplicación de realidad aumentada.<br><br>	•	Selecciona una de las respuestas disponibles y posteriormente, presiona el botón siguiente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/Paginas/QuizDino.html";
      }
    })
  }

function Humanos2(){
    Swal.fire({
      title: 'Evolución del Ser Humano',
      html: '•	Conoce los principales acontecimientos del ser humano a través de la historia.<br><br> •	Para ello están disponibles los modelos Paranthropus, Australopithecus, Homo Sapiens, Homo Hábilis, Homo Erectus y Neanderthal, que pueden ser visualizados a través de posicionar el marcador sobre la cámara o a través de seleccionar el botón correspondiente del menú Elementos 3D.<br><br> •	En pantalla aparecerá su representación en 3D con su respectiva ficha técnica.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      }
    })
  }
  
  function Terrestres2(){
    Swal.fire({
      title: 'Restos fósiles de animales terrestres',
      html: '•	Conoce la información de algunas criaturas que habitan o habitaron sobre la superficie terrestre. Para ello están disponibles los modelos “Mammut", "Perezoso", "Pterodactylus" y "Allosaurus". <br><br> •	Escanea el marcador correspondiente o selecciona el botón correspondiente del menú Elementos 3D.<br><br> •	En pantalla aparecerá su representación en 3D con su respectiva ficha técnica.' ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      }
    })
  }
  
  function Acuaticos2(){
    Swal.fire({
      title: 'Fósiles de animales acuáticos',
      html: '•	Conoce la información de algunas criaturas que habitan o habitaron en los océanos.<br><br>	•	Para ello están disponibles los modelos "Mosasaurus", "Megalodón", "Ballena", "Tiburón" y "Celacanto". <br><br>• Escanea el marcador correspondiente o selecciona el botón correspondiente del menú Elementos 3D.<br><br> •	En pantalla aparecerá su representación en 3D con su respectiva ficha técnica. ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      }
    })
  }

  function Fosiles2(){
    Swal.fire({
      title: 'Otros Restos Fósiles',
      html: '•	En esta escena se muestran algunos otros restos fósiles, algunos habitaron sobre la superficie terrestre y otros en los océanos.<br><br>	•	Se encuentran disponibles los modelos "Belemnite", "Trilobite", "Ammonite" y "Fósil Vegetal". <br><br>• Escanea el marcador o selecciona el botón correspondiente del menú Elementos 3D. <br><br> •	En pantalla aparecerá su representación en 3D con su respectiva ficha técnica.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
      }
    })
  }
