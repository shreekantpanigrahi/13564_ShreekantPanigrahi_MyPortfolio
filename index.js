document.addEventListener('DOMContentLoaded', function() {
    var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');

    function opentab(event, tabname) { // Add event parameter
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Hamburger menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Attach tab event listeners (if your HTML has tab links)
    let tabItems = document.querySelectorAll('.tab-links');
    tabItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const tabname = this.getAttribute('data-tab'); // Assuming you use data attributes
            opentab(event, tabname);
        });
    });
});
