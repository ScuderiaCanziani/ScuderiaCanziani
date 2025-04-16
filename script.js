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
