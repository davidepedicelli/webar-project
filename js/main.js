window.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");
  
  const charA = document.querySelector("[gltf-model='./models/characterA.gltf']");
  const charB = document.querySelector("[gltf-model='./models/characterB.gltf']");

  // Sequenza di interazione semplice
  setTimeout(() => {
    console.log("Character A dice: Benvenuto!");
    // Qui puoi aggiungere audio TTS o pre-registrato
  }, 2000);

  setTimeout(() => {
    console.log("Character B risponde: Ti mostro il menù!");
  }, 5000);
});
