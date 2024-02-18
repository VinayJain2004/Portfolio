// Tech Skill Bar

$(document).ready(function () {
    var skillIcons = $('#skill-icon i');

    var skillBars = $('.bar');

    skillIcons.on('click', function () {
        skillBars.removeClass('skill-active');
        
        var skillId = $(this).attr('id');

        $('#skill-' + skillId).addClass('skill-active');
    });
});

// Pro SKills Bar

const buttons = document.querySelectorAll("#buttons button");
const path1 = document.querySelector(".path-1");
const percentage = document.querySelector(".percentage");

let activeBtn = null;
let activeAnimation = "";
let activeValue = "90%";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.id;
        path1.style.animation = `animate-path${id === "Creativity" ? 1 : id === "Teamwork" ? 2 : id === "Communication" ? 3 : 4} 1s 1s linear forwards`;

        const percentageValue = id === "Creativity" ? "90%" : id === "Teamwork" ? "85%" : id === "Communication" ? "70%" : "80%";
        percentage.textContent = percentageValue;

        activeBtn = button;
        activeAnimation = path1.style.animation;
        activeValue = percentage.textContent;

        buttons.forEach((item) => item.classList.remove('active'));
        button.classList.add("active");
    });
    button.addEventListener("mouseenter", () => {
        const id = button.id;
        path1.style.animation = `animate-path${id === "Creativity" ? 1 : id === "Teamwork" ? 2 : id === "Communication" ? 3 : 4} 1s 1s linear forwards`;

        const percentageValue = id === "Teamwork" ? "85%" : id === "Creativity" ? "90%" : id === "Communication" ? "70%" : "80%";
        percentage.textContent = percentageValue;
    });
    button.addEventListener("mouseleave", () => {
        if(button !== activeBtn){
        path1.style.animation = activeAnimation;
        percentage.textContent = activeValue;}
    });
});