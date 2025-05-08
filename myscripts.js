function showResume() {
    document.getElementById("pdf-container").style.display = "block";

    document.getElementById("contact-container").style.display = "none";
    document.getElementById("aboutme-container").style.display = "none";
}

function showContact() {
    document.getElementById("contact-container").style.display = "block";

    document.getElementById("pdf-container").style.display = "none";
    document.getElementById("aboutme-container").style.display = "none";
}

function showAboutMe() {
    document.getElementById("aboutme-container").style.display = "block";
    
    document.getElementById("pdf-container").style.display = "none";
    document.getElementById("contact-container").style.display = "none";
}


function downloadResume() {
    const link = document.createElement("a");
    link.href = "images/msc/Johnson-2025Resume.pdf"; 
    link.download = "LoganJohnsonResume.pdf"; 
    link.click();
}