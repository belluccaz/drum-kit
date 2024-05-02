// Aguarda até que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Selecionando todos os botões do kit de bateria
  const buttons = document.querySelectorAll(".drum");

  // Definindo o nome e os sons associados a cada letra do nome
  const name = "WASDJKL";
  const sounds = {
    W: "crash",
    A: "tom-1",
    S: "snare",
    D: "kick-bass",
    J: "tom-3",
    K: "tom-2",
    L: "tom-4",
  };

  // Função para criar um mapa de sons e atribuir atributos aos botões
  function createSoundMap(name, sounds) {
    const soundMap = {};
    for (let i = 0; i < name.length; i++) {
      const letter = name[i];
      const button = buttons[i];
      soundMap[letter] = sounds[letter];
      // Adiciona atributos de som e chave de teclado aos botões
      button.setAttribute("data-sound", sounds[letter]);
      button.setAttribute("data-key", letter.charCodeAt(0));
      // Adiciona ouvinte de evento de clique a cada botão
      button.addEventListener("click", function () {
        const soundName = this.getAttribute("data-sound");
        // Reproduz o som associado ao botão
        playSound(soundName);
        // Chama a função para animação do botão
        buttonAnimation(this.classList[0]);
      });

      // Adiciona ouvinte de evento de pressionamento de tecla a cada botão
      window.addEventListener("keydown", function (event) {
        // Obtém a tecla pressionada e converte para maiúsculas
        const key = event.key.toUpperCase();
        // Verifica se a tecla corresponde a um som no mapa de sons
        if (key === letter) {
          const soundName = sounds[letter];
          // Reproduz o som associado ao botão
          playSound(soundName);
          // Chama a função para animação do botão
          buttonAnimation(button.classList[0]);
        }
      });
    }
    return soundMap;
  }

  // Criando o mapa de sons e atribuindo atributos aos botões
  const soundMap = createSoundMap(name, sounds);

  // Função para reproduzir um som
  function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
  }

  // Função para adicionar animação ao botão
  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // Adiciona a classe 'pressed' para animação
    activeButton.classList.add("pressed");
    // Remove a classe 'pressed' após 100ms
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
});
