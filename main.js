
//nav-area element
var navArea = document.querySelector('.nav');
//scroll event listener
window.addEventListener('scroll', function () {
    if (window.innerWidth < 700) {
        navArea.style.display = 'none';
    } else {
        // Check scroll position
        if (window.scrollY < 500) {
            navArea.style.display = 'none';
        } else {
            navArea.style.display = 'flex';
        }
    }
});

//nav-area element
var socialBtn = document.querySelector('.social-btn');
//scroll event listener
window.addEventListener('scroll', function () {
    //scroll position
    if (window.innerWidth > 700) {
        socialBtn.style.display = 'none';
    } else {
        // Check scroll position
        if (window.scrollY > 100) {
            socialBtn.style.display = 'none';
        } else {
            socialBtn.style.display = 'flex';
        }
    }
});
var hamburger = document.querySelector('.hamburger');
//scroll event listener
window.addEventListener('scroll', function () {
    //scroll position
    if (window.innerWidth > 700) {
        hamburger.style.display = 'none';
    } else {
        // Check scroll position
        if (window.scrollY < 500) {
            hamburger.style.display = 'none';
        } else {
            hamburger.style.display = 'flex';
        }
    }
});

function showTab(tabName) {
    // Bootstrap tab activation
    var tab = new bootstrap.Tab(document.getElementById(tabName + '-tab'));
    tab.show();

    // Hide all tab contents
    document.querySelectorAll('.tab-pane').forEach(function (tabContent) {
        tabContent.classList.remove('show', 'active');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('show', 'active');
}


function filterWorks(category) {
    // Hide all work items
    document.querySelectorAll('.work-item').forEach(function (item) {
        item.style.display = 'none';
    });

    // Show the selected category or all works
    if (category === 'all') {
        document.querySelectorAll('.work-item').forEach(function (item) {
            item.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.' + category).forEach(function (item) {
            item.style.display = 'block';
        });
    }

    // Update active tab styling
    document.querySelectorAll('.btn').forEach(function (btn) {
        btn.classList.remove('active-tab');
    });
    event.currentTarget.classList.add('active-tab');
}

function toggleCaseStudy(caseStudyId) {
    // Hide all case studies
    document.querySelectorAll('.case-study').forEach(function (caseStudy) {
        caseStudy.classList.remove('active');
    });

    // Show the selected case study
    document.getElementById(caseStudyId).classList.add('active');
}

// Trigger the click event on the "All" tab by default
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-outline-primary').click();
});

function navAction() {
    var close = document.querySelector('.close');
    close.classList.toggle('open')
}
