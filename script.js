window.addEventListener('scroll', function() {
    var bg = document.getElementById('background');
    var yPos = -window.pageYOffset / 4; // Réglez cette valeur pour ajuster la vitesse de défilement

    bg.style.backgroundPositionY = yPos + 'px';
});
