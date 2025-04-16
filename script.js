// Gestisce l'apertura e la chiusura del menu laterale
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Aggiunge/lega la classe active per aprire/chiudere il menu
});
