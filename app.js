
document.getElementById("contactButton").addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
});
document.getElementById("skillsButton").addEventListener("click", function() {
    var skillsList = document.getElementById("skillsList");
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
    } else {
        skillsList.style.display = "none";
    }
});
document.getElementById("educationButton").addEventListener("click", function() {
    var educationDetails = document.getElementById("educationDetails");
    if (educationDetails.style.display === "none") {
        educationDetails.style.display = "block";
    } else {
        educationDetails.style.display = "none";
    }
});

document.getElementById("projectsButton").addEventListener("click", function() {
    var projectsList = document.getElementById("projectsList");
    if (projectsList.style.display === "none") {
        projectsList.style.display = "block";
    } else {
        projectsList.style.display = "none";
    }
});


