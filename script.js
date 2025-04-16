// Gestisce l'apertura e la chiusura del menu laterale
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const menuList = document.getElementById('menu-list');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
        menuList.style.display = 'block';
    } else {
        menu.style.left = '-250px';
        menuList.style.display = 'none';
    }
});
