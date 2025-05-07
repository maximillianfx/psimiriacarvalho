document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.item-doubt').forEach(function (title) {
        title.addEventListener('click', function () {
            const subList = this.children[2];
            const arrowIcon = this.children[1];
            if (subList) {
                subList.classList.toggle('open');
                arrowIcon.classList.toggle('rotate');
            }
        });
    });
});
