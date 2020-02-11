document.addEventListener("DOMContentLoaded", function() {
    const backButtonDom = document.getElementById("back-button");

    backButtonDom.addeventListener("click", function() {
        window.history.back();
    });
});