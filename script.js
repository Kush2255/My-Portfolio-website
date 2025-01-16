document.addEventListener('DOMContentLoaded', function () {  
    function showMoreProjects() {
        var hiddenProjects = document.querySelectorAll('.more-projects');  
        hiddenProjects.forEach(function (project) {
            project.style.display = 'block';
        });    
        var seeMoreButton = document.querySelector('.btn');
        if (seeMoreButton) {
            seeMoreButton.style.display = 'none';
        }
    }
    var seeMoreButton = document.querySelector('.btn');
    if (seeMoreButton) {
        seeMoreButton.addEventListener('click', showMoreProjects);
    }
});

