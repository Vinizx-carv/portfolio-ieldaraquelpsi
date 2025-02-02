$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
    $('#mobile_menu a').on('click', function () {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('.duvida', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.bloco', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.bloco_bnf', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',

    });
    ScrollReveal().reveal('.text_about', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',

    });
    ScrollReveal().reveal('.img_about', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',

    });
    ScrollReveal().reveal('.image', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',

    });
    ScrollReveal().reveal('.text', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',

    });
    ScrollReveal().reveal('.beneficio', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',

    });
    const questions = document.querySelectorAll(".duvida h3");


    questions.forEach((question) => {
        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;


            answer.classList.toggle("active");

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
   
});
function sendMessage() {
    
    const phoneNumber = "5586994948558";
    
    const message = "Olá, gostaria de mais informações!";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
