const container = document.querySelectorAll('.content-container');
const icon = document.querySelectorAll('.s-icon');

for (i = 0; i < container.length; i++) {

    container[i].addEventListener("click", function () {
        this.classList.toggle('active');
        icon.src = "./assets/images/icon-minus.svg";
    })
};
