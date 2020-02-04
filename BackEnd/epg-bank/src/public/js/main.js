/* --------- Esconder navbar ao fazer scroll ----------- */
var prevScrollpos = window.pageYOffset; //obtem a primeira posicao do scroll (antes de altera-lo)
window.onscroll = () => { 
    var currentScrollpos = window.pageYOffset; //obtem actual posicao do scroll depois de altera-lo
    if( prevScrollpos > currentScrollpos ) 
        document.getElementById('mynavbar').style.top = '0';
    else 
        document.getElementById('mynavbar').style.top = '-100px';
    prevScrollpos = currentScrollpos;
}

$('.chips-tags').material_chip({
    placeholder: 'Insira uma tag',
    secondaryPlaceholder: '+Tag',
    autocompleteData: {
    'Desportivo': null,
    'Informática': null,
    'Bebida': null
    }
});

var chip = {
    tag: 'Desportivo'
};
    

$(() => {
    //$('#accountcts').on("click", {section: '#accountcts-section'}, scrollToSection);
    $('#accountcts').click( () => {
        alert("accountctos");
        $('html,body').animate({scrollTop: $('#accountcts-section').offset().top}, 700);
    });

    $('#about').click(() => {

        $('html,body').animate({scrollTop: $('#about-section').offset().top}, 700);

    });

});


$(() =>  {
     $('#about').click(() => {
        $('html,body').animate({scrollTop: $('#about-section').offset().top}, 700);
        $('#about-section').fadeIn("slow");
    });
});

$(() => {
     $('#skills').click( () => {
        $('html,body').animate({scrollTop: $('#skills-section').offset().top}, 700);
        $('#skills-section').fadeIn("slow");
    });
});

$(function(e) {
     $('#projects').click( () => {
        $('html,body').animate({scrollTop: $('#projects-section').offset().top}, 700);
        $('#projects-section').fadeIn("slow");
    });
});