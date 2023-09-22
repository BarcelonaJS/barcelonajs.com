function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

ready(function () {
    const toggleButtonOn = document.getElementById("toggleButtonOn");
    const toggleButtonOff = document.getElementById("toggleButtonOff");
    const flyoutMenu = document.getElementById("flyoutMenu");
    const flyoutMenuItems = document.querySelectorAll("#flyoutMenu a");

    const toggleMenu = function () {
        if (flyoutMenu.classList.contains("hidden")) {
            flyoutMenu.classList.remove("hidden");
        } else {
            flyoutMenu.classList.add("hidden");
        }
    };

    flyoutMenuItems.forEach(function (item) {
        item.addEventListener("click", toggleMenu);
    });
    toggleButtonOn.addEventListener("click", toggleMenu);
    toggleButtonOff.addEventListener("click", toggleMenu);
});