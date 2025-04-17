// Gestisce l'apertura e la chiusura del menu laterale
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const menuList = document.getElementById('menu-list');
    
    // Aggiunge o rimuove la classe "active" per aprire/chiudere il menu
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');  // Chiude il menu
        menuList.style.display = 'none';   // Nasconde i link
    } else {
        menu.classList.add('active');     // Apre il menu
        menuList.style.display = 'block'; // Mostra i link
    }
});

  function openModal(url) {
    const modal = document.getElementById("canvaModal");
    const frame = document.getElementById("canvaFrame");
    frame.src = url;
    modal.style.display = "block";
  }

  function closeModal() {
    const modal = document.getElementById("canvaModal");
    const frame = document.getElementById("canvaFrame");
    modal.style.display = "none";
    frame.src = ""; // svuota per bloccare il video se presente
  }

  // Chiudi anche con ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
  });

  function openVideoModal(videoSrc) {
    const video = document.getElementById("modalVideo");
    const source = video.querySelector("source");

    // Imposta il video e ricarica
    source.src = videoSrc;
    video.load();

    // Appena pronto: parte dal secondo 0 con audio
    video.muted = false;
    video.currentTime = 0;

    // Mostra il modal
    document.getElementById("videoModal").style.display = "block";

    // Play forzato (alcuni browser lo bloccano se non c’è interazione)
    video.play().catch(err => {
      console.warn("Autoplay bloccato dal browser:", err);
    });
  }

  function closeVideoModal() {
    const video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0;
    document.getElementById("videoModal").style.display = "none";
  }

  // Chiudi cliccando fuori
  window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
      closeVideoModal();
    }
  };