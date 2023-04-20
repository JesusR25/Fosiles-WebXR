console.log("Hola");
document.querySelector("#tiburon").addEventListener('physicscollided', function (event) {
    console.log('Entity collided with', event.detail.collidingEntity);
  });

  document.querySelector("#caja").addEventListener('physicscollided', function (event) {
    console.log('Entity collided with', event.detail.collidingEntity);
  });