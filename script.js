document.addEventListener("DOMContentLoaded", function() {
    function toggleVisibility(container) {
        let isVisible = container.style.visibility === "visible";
        
        if (isVisible) {
            container.style.opacity = "0";
            container.style.transform = "translateX(-50%) translateY(0px)";
            container.style.pointerEvents = "none";
            setTimeout(() => container.style.visibility = "hidden", 300);
        } else {
            container.style.visibility = "visible";
            container.style.opacity = "1";
            container.style.transform = "translateX(-50%) translateY(-10px)";
            container.style.pointerEvents = "auto";
        }
    }

    // Phone Click Event
    var phoneIcon = document.getElementById("phone-icon");
    var phoneContainer = document.getElementById("phone-number-container");
    phoneIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        toggleVisibility(phoneContainer);
    });

    // Email Click Event
    var emailIcon = document.getElementById("email-icon");
    var emailContainer = document.getElementById("email-address-container");
    emailIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        toggleVisibility(emailContainer);
    });

    // Close when clicking outside
    document.addEventListener("click", function(event) {
        if (!phoneIcon.contains(event.target) && !phoneContainer.contains(event.target)) {
            phoneContainer.style.opacity = "0";
            phoneContainer.style.transform = "translateX(-50%) translateY(0px)";
            phoneContainer.style.pointerEvents = "none";
            setTimeout(() => phoneContainer.style.visibility = "hidden", 300);
        }

        if (!emailIcon.contains(event.target) && !emailContainer.contains(event.target)) {
            emailContainer.style.opacity = "0";
            emailContainer.style.transform = "translateX(-50%) translateY(0px)";
            emailContainer.style.pointerEvents = "none";
            setTimeout(() => emailContainer.style.visibility = "hidden", 300);
        }
    });
});
