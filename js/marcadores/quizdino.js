import {quizdino} from '../firebase.js'

const questions = [
    {
      "question": "¿Cuál de estos dinosaurios era herbívoro?",
      "answer1": "Tyrannosaurus",
      "answer2": "Velociraptor",
      "answer3": "Stegosaurus",
      "answer4": "Spinosaurus",
      "Correcta": "Allosaurus"
    },
    {
      "question": "¿En qué periodo vivió el Triceratops?",
      "answer1": "Triásico",
      "answer2": "Jurásico",
      "answer3": "Cretácico",
      "answer4": "Paleógeno",
      "Correcta": "Australopithecus"
    },
    {
      "question":
        "¿Cuál de estos dinosaurios era el más grande?",
        "answer1": "Brachiosaurus",
        "answer2": "Allosaurus",
        "answer3": "Triceratops",
        "answer4": "Ankylosaurus",
        "Correcta": "Belemnite"
    },
    {
      "question": "¿Que dinosaurio tenía una placa en la cabeza y tres cuernos?.",
      "answer1": "Stegosaurus",
      "answer2": "Triceratops",
      "answer3": "Parasaurolophus",
      "answer4": "Archaeopteryx",
      "Correcta": "Homo Erectus"
    },
    {
      "question":
        "¿Qué dinosaurio es conocido por tener una gran vela ósea en su espalda?",
        "answer1": "Diplodocus",
        "answer2": "Spinosaurus",
        "answer3": "Carnotaurus",
        "answer4": "Stegosaurus",
        "Correcta": "Homo Sapiens"
    },
    {
      "question": "¿Cuál de estos en realidad era un reptil y no un dinosaurio?",
      "answer1": "Pterodactyl",
      "answer2": "Triceratops",
      "answer3": "Stegosaurus",
      "answer4": "Anklyosaurus",
      "Correcta": "Mammut"
    },
    {
        "question": "¿En qué período de la Era Mesozoica vivió el Tyrannosaurus rex?.",
        "answer1": "Triásico",
        "answer2": "Jurásico",
        "answer3": "Cretácico",
        "answer4": "Paleógeno",
        "Correcta": "Mosasaurus"
    },
    {
        "question": "Están adaptados a la vida arborícola, desplazándose muy lentamente entre las ramas. Las hojas, su principal fuente de alimento, proporcionan muy poca energía y nutrientes. Su digestión puede durar un mes o más en completarse",
        "answer1": "Mammut",
        "answer2": "Perezoso",
        "answer3": "Ardilla",
        "answer4": "Pterodactylo",
        "Correcta": "Perezoso"
    },
    {
        "question": "Eran artrópodos que se parecían a los crustáceos modernos, pero con una estructura corporal distintiva. Tenían una cabeza, un tórax y un pigidio, y su cuerpo estaba cubierto por una concha dura que se ha conservado muy bien en el registro fósil.",
        "answer1": "Trilobite",
        "answer2": "Ammonite",
        "answer3": "Fósil Vegetal",
        "answer4": "Belemnite",
        "Correcta": "Trilobite"
    }
  ]
  
  
  let currentQuestion = 0;
  let selectedAnswersData = [];
  let Respuestas = [];
  let desempeño = "";
  let ultima = false;
  let RespCorrectas = ["Bacubirito", "Falso", "Falso", "Verdadero", "Verdadero", "Falso", "Falso", "Meteorito", "Verdadero", "Verdadero"];
  const totalQuestions =questions.length;
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const option4 = document.querySelector('.option4');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const menu = document.querySelector('.menu');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  const valor1 = document.getElementById("opcion1");
  const valor2 = document.getElementById("opcion2");
  const valor3 = document.getElementById("opcion3");
  const valor4 = document.getElementById("opcion4");
  let correctas = 0;
  //Function to generate question 
  function generateQuestions (index) {
    if (index == 6) {
        document.getElementById("cuarta").style.display = "none";
        document.getElementById("tercera").style.display = "none";
        //Seleccion pregunta
        const question = questions[index];
        //Agregar respuestas a botones
        questionEl.innerHTML = `${index + 1}. ${question.question}`
        option1.innerHTML = `${question.answer1}`
        option2.innerHTML = `${question.answer2}`
        valor1.setAttribute("value", question.answer1);
        valor2.setAttribute("value", question.answer2);
    }else{
        document.getElementById("cuarta").style.display = "block";
        document.getElementById("tercera").style.display = "block";
        //Seleccion pregunta
        const question = questions[index];
        //Agregar respuestas a botones
        questionEl.innerHTML = `${index + 1}. ${question.question}`;
        option1.innerHTML = `${question.answer1}`;
        option2.innerHTML = `${question.answer2}`;
        option3.innerHTML = `${question.answer3}`;
        option4.innerHTML = `${question.answer4}`;
        valor1.setAttribute("value", question.answer1);
        valor2.setAttribute("value", question.answer2);
        valor3.setAttribute("value", question.answer3);
        valor4.setAttribute("value", question.answer4);
    }
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: '¡Por favor selecciona una respuesta!',
        })
          return;
      }
      //Validacion de respuesta
      const valor = document.querySelector('input[type="radio"]:checked').value;
      Respuestas.push(valor);
      const question = questions[currentQuestion];
      if(question.Correcta == valor){
        desempeño = desempeño + "C "
        correctas++;
        ultima = true;
        console.log(correctas);
      }else{
        desempeño = desempeño + "I "
        ultima = false;
      }
      selectedAnswersData.push()
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
        var date = new Date();
        var fecha = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        var hora =  date.toLocaleTimeString();
        quizdino(correctas, desempeño, fecha, hora );
        container.style.display = 'none';
        if(correctas <= 5){
          result.innerHTML =
           `<h1 class="final-score">Calificación: ${correctas} de 10 </h1>
           <div class="summary" style='display: flex;'>
              <h1>Mensaje</h1>
              <p>Te sugerimos ver de nueva cuenta los videos y vuelve a intentarlo.</p>
          </div>
          <button class="restart">Reiniciar prueba</button>
           `;
        }else if(correctas <=7){
          result.innerHTML =
           `<h1 class="final-score">Calificación obtenida: ${correctas} de 10 </h1>
           <div class="summary" style='display: flex;'>
              <h1>Mensaje</h1>
              <p>Tu desempeño es aceptable. Si deseas mejorar tu puntuación vuelve a intentarlo.</p>
          </div>
          <button class="restart">Reiniciar prueba</button>
           `;
        }else if(correctas <= 9){
          result.innerHTML =
           `<h1 class="final-score">Calificación obtenida: ${correctas} de 10 </h1>
           <div class="summary" style='display: flex;'>
              <h1>Mensaje</h1>
              <p>Tu desempeño es aceptable. Si deseas mejorar tu puntuación vuelve a intentarlo.</p>
          </div>
          <button class="restart">Reiniciar prueba</button>
           `;
        }else{
          result.innerHTML =
           `<h1 class="final-score">Calificación obtenida: ${correctas} de 10 </h1>
           <div class="summary" style='display: flex;'>
              <h1>Mensaje</h1>
              <p>Excelente, lo has hecho muy bien.</p>
          </div>
          <button class="restart">Reiniciar prueba</button>
           `;
        }
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      Respuestas.pop();
      if(ultima){
        correctas--;
      }
      desempeño = desempeño.substring(0, desempeño.length - 2);
      //remove last array value;
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      //Reload quiz to the start
      location.reload();
      }
  
  }

  function volver(){
    window.location.href = "../Paginas/Menu.html";
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  menu.addEventListener('click',volver);
  result.addEventListener('click',restartQuiz);
  