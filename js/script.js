document.addEventListener("DOMContentLoaded", function() {
    // Efecto máquina de escribir
    const typewriterTitle = document.getElementById('typewriter-title');
    const typewriterSubtitle = document.getElementById('typewriter-subtitle');
    
    typewriterEffect(typewriterTitle, 50, function() {
        typewriterEffect(typewriterSubtitle, 50);
    });

    function typewriterEffect(element, speed, callback) {
        const text = element.textContent;
        element.textContent = '';
        element.classList.remove('hidden-text');
        element.classList.add('visible-text');
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, speed);
    }

    // Function to set the language

});
const translations = {
    es: {
        navAbout: "Sobre Mi",
        navSoftSkills: "Soft-Skills",
        navSkills: "Habilidades",
        navProjects: "Proyectos",
        navCertificates: "Certificados",
        navContact: "Contacto",
        aboutMeHeading: "Sobre Mi",
        aboutMeContent: "Hola, soy Javi, un apasionado desarrollador web con experiencia en la creación de sitios web y aplicaciones dinámicas.",
        softSkillsHeading: "Soft-Skills",
        communication: "Comunicación",
        teamwork: "Trabajo en equipo",
        adaptability: "Adaptabilidad",
        problemSolving: "Resolución de problemas",
        criticalThinking: "Pensamiento crítico",
        skillsHeading: "Habilidades",
        projectsHeading: "Proyectos",
        project1Title: "Tragaperras",
        project1Description: "¡Bienvenido al proyecto de Juego de Tragaperras! Este proyecto simula un sencillo juego de tragaperras utilizando Python. El juego permite a los jugadores depositar dinero, realizar apuestas en varias líneas, girar la máquina tragaperras y verificar sus ganancias. El proyecto está diseñado para demostrar conceptos básicos de programación en Python, como bucles, funciones y condicionales.",
        project1Skills: "Habilidades: Python",
        project2Title: "Portfolio",
        project2Description: "Portafolio personal desarrollado con HTML, CSS y JavaScript. Incluye información sobre mi experiencia, habilidades, proyectos y certificados. También incluye un formulario de contacto para que los visitantes puedan enviarme un mensaje.",
        project2Skills: "Habilidades: HTML, CSS, JavaScript",
        project3Title: "Proyecto 3",
        project3Description: "Descripción del proyecto 3.",
        project3Skills: "Habilidades: HTML, CSS, JavaScript, React",
        certificatesHeading: "Certificados",
        certificate1Title: "B2 INGLES",
        certificate1Description: "Certificado en Ingles Nivel B2",
        certificate2Title: "Carnet de Conducir",
        certificate2Description: "Carnet de conducir B",
        certificate3Title: "AWS Academy Graduate",
        certificate3Description: "S Academy Introduction to Cloud Semester 1 badge image. Learning. Issued by Amazon Web Services Training and Certification AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
        contactHeading: "Contacto",
        nameLabel: "Nombre",
        emailLabel: "Email",
        messageLabel: "Mensaje",
        sendButton: "Enviar",
        footerText: "&copy; 2024 Fco.Javier Gonzalez Romero. Todos los derechos reservados."
    },
    en: {
        navAbout: "About Me",
        navSoftSkills: "Soft-Skills",
        navSkills: "Skills",
        navProjects: "Projects",
        navCertificates: "Certificates",
        navContact: "Contact",
        aboutMeHeading: "About Me",
        aboutMeContent: "Hello, I'm Javi, a passionate web developer with experience in creating dynamic websites and applications.",
        softSkillsHeading: "Soft-Skills",
        communication: "Communication",
        teamwork: "Teamwork",
        adaptability: "Adaptability",
        problemSolving: "Problem Solving",
        criticalThinking: "Critical Thinking",
        skillsHeading: "Skills",
        projectsHeading: "Projects",
        project1Title: "Slot Machine",
        project1Description: "Welcome to the Slot Machine Game project! This project simulates a simple slot machine game using Python. Players can deposit money, place bets on multiple lines, spin the slot machine, and check their winnings. The project is designed to demonstrate basic programming concepts in Python, such as loops, functions, and conditionals.",
        project1Skills: "Skills: Python",
        project2Title: "Portfolio",
        project2Description: "Personal portfolio developed with HTML, CSS, and JavaScript. It includes information about my experience, skills, projects, and certificates. It also includes a contact form so visitors can send me a message.",
        project2Skills: "Skills: HTML, CSS, JavaScript",
        project3Title: "Project 3",
        project3Description: "Project 3 description.",
        project3Skills: "Skills: HTML, CSS, JavaScript, React",
        certificatesHeading: "Certificates",
        certificate1Title: "B2 English",
        certificate1Description: "B2 Level English Certificate",
        certificate2Title: "Driving License",
        certificate2Description: "Driving License B",
        certificate3Title: "AWS Academy Graduate",
        certificate3Description: "S Academy Introduction to Cloud Semester 1 badge image. Learning. Issued by Amazon Web Services Training and Certification AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1",
        contactHeading: "Contact",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendButton: "Send",
        footerText: "&copy; 2024 Fco.Javier Gonzalez Romero. All rights reserved."
    }
};

function setLanguage(language) {
    document.querySelector('.nav-item a[href="#sobre-mi"]').textContent = translations[language].navAbout;
    document.querySelector('.nav-item a[href="#soft-skills"]').textContent = translations[language].navSoftSkills;
    document.querySelector('.nav-item a[href="#habilidades"]').textContent = translations[language].navSkills;
    document.querySelector('.nav-item a[href="#proyectos"]').textContent = translations[language].navProjects;
    document.querySelector('.nav-item a[href="#certificados"]').textContent = translations[language].navCertificates;
    document.querySelector('.nav-item a[href="#contacto"]').textContent = translations[language].navContact;

    document.querySelector('#sobre-mi h2').textContent = translations[language].aboutMeHeading;
    document.querySelector('#sobre-mi p').textContent = translations[language].aboutMeContent;

    document.querySelector('#soft-skills h2').textContent = translations[language].softSkillsHeading;
    const softSkills = document.querySelectorAll('#soft-skills .list-inline-item');
    softSkills[0].childNodes[1].textContent = ` ${translations[language].communication}`;
    softSkills[1].childNodes[1].textContent = ` ${translations[language].teamwork}`;
    softSkills[2].childNodes[1].textContent = ` ${translations[language].adaptability}`;
    softSkills[3].childNodes[1].textContent = ` ${translations[language].problemSolving}`;
    softSkills[4].childNodes[1].textContent = ` ${translations[language].criticalThinking}`;

    document.querySelector('#habilidades h2').textContent = translations[language].skillsHeading;

    document.querySelector('#proyectos h2').textContent = translations[language].projectsHeading;
    document.querySelector('#proyectos .carousel-item:nth-child(1) .carousel-caption h3').textContent = translations[language].project1Title;
    document.querySelector('#proyectos .carousel-item:nth-child(1) .carousel-caption p').textContent = translations[language].project1Description;
    document.querySelector('#proyectos .carousel-item:nth-child(1) .carousel-caption p span').textContent = translations[language].project1Skills;

    document.querySelector('#proyectos .carousel-item:nth-child(2) .carousel-caption h3').textContent = translations[language].project2Title;
    document.querySelector('#proyectos .carousel-item:nth-child(2) .carousel-caption p').textContent = translations[language].project2Description;
    document.querySelector('#proyectos .carousel-item:nth-child(2) .carousel-caption p span').textContent = translations[language].project2Skills;

    document.querySelector('#proyectos .carousel-item:nth-child(3) .carousel-caption h3').textContent = translations[language].project3Title;
    document.querySelector('#proyectos .carousel-item:nth-child(3) .carousel-caption p').textContent = translations[language].project3Description;
    document.querySelector('#proyectos .carousel-item:nth-child(3) .carousel-caption p span').textContent = translations[language].project3Skills;

    document.querySelector('#certificados h2').textContent = translations[language].certificatesHeading;
    document.querySelector('#certificados .col-md-4:nth-child(1) .card-title').textContent = translations[language].certificate1Title;
    document.querySelector('#certificados .col-md-4:nth-child(1) .card-text').textContent = translations[language].certificate1Description;
    document.querySelector('#certificados .col-md-4:nth-child(2) .card-title').textContent = translations[language].certificate2Title;
    document.querySelector('#certificados .col-md-4:nth-child(2) .card-text').textContent = translations[language].certificate2Description;
    document.querySelector('#certificados .col-md-4:nth-child(3) .card-title').textContent = translations[language].certificate3Title;
    document.querySelector('#certificados .col-md-4:nth-child(3) .card-text').textContent = translations[language].certificate3Description;

    document.querySelector('#contacto h2').textContent = translations[language].contactHeading;
    document.querySelector('label[for="name"]').textContent = translations[language].nameLabel;
    document.querySelector('label[for="email"]').textContent = translations[language].emailLabel;
    document.querySelector('label[for="message"]').textContent = translations[language].messageLabel;
    document.querySelector('#contacto button[type="submit"]').textContent = translations[language].sendButton;
    document.querySelector('footer p').innerHTML = translations[language].footerText;
}

document.addEventListener("DOMContentLoaded", () => {
    // Por defecto, establecer el idioma en español
    setLanguage('es');
});