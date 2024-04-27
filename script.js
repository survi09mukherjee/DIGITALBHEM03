// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Function to filter courses by category
    function filterCourses(category) {
        const courses = document.querySelectorAll('.course');
        courses.forEach(course => {
            const courseCategory = course.getAttribute('data-category');
            if (courseCategory === category || category === 'all') {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }

    // Event listeners for category buttons
    document.getElementById('allCoursesBtn').addEventListener('click', function() {
        filterCourses('all');
    });

    document.getElementById('programmingBtn').addEventListener('click', function() {
        filterCourses('programming');
    });

    document.getElementById('designBtn').addEventListener('click', function() {
        filterCourses('design');
    });
});