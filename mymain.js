const coords={ x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

const colors = ["#7d0928", "#8d1c24", "#9d2c1d", "#ab3c11", "#b84c00", "#c45e00", "#cf6f00", "#d88200", "#df9500", "#e4a900", "#e7bd00", "#e8d103"];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;


    circles.forEach(function (circle, index) {
        circle.style.left = x-12 +"px";
        circle.style.top = y-12 + "px";

        circle.style.scale = (circles.length -index) / circles.length ;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});

// STICKY NAV///////////////
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*Responsive nav menu toggle*/
const nav = document.querySelector('.nav-links');
const closeBtn = document.querySelector(".downloadCVtn");
const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", () => {
//   navigation.classList.add("active");
// });

// closeBtn.addEventListener("click", () => {
//   navigation.classList.remove("active");
// });

$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
});