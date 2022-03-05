var progressLine = document.querySelector(".wrapper .progressLine")
var textDark = document.querySelector(".wrapper .textDark")
window.onload(function1());

function function1() {
    // Function For Displaying Progress Bar

    setTimeout(function () {
        progressLine.style.transition = "3s"
        progressLine.style.width = "500px";

        // Function For Displaying Loading Animation

        setTimeout(function () {
            textDark.innerHTML = "Loading."

        }, 0)

        setTimeout(function () {
            textDark.innerHTML = "Loading.."

        }, 500)

        setTimeout(function () {
            textDark.innerHTML = "Loading..."

        }, 1000)

        setTimeout(function () {
            textDark.innerHTML = "Done!"

        }, 2750)


    }, 2000)
}