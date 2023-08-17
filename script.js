// Função para alternar a visibilidade da barra de navegação em dispositivos móveis
function toggleNav() {
    var navbar = document.querySelector('.navbar-nav');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}

// Event listener para fechar a barra de navegação quando o usuário clicar em algum link
var links = document.querySelectorAll('.navbar-nav .nav-link');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        var navbar = document.querySelector('.navbar-nav');
        navbar.style.display = 'none';
    });
}
