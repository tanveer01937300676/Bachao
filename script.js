
// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements by their IDs
    let requestCountElement = document.getElementById("request-count");
    let aidCountElement = document.getElementById("aid-count");

    // Initialize counts
    let requestCount = 0;
    let aidCount = 0;

    // Define target numbers
    const targetRequests = 20;
    const targetAids = 10;

    // Define interval time in milliseconds
    const intervalTime = 1000; // 1 second

    // Function to update Total Requests
    let requestInterval = setInterval(function () {
        requestCountElement.textContent = requestCount + " requests received";
        requestCount++;
        if (requestCount > targetRequests) {
            clearInterval(requestInterval);
            requestCountElement.textContent = targetRequests + " requests received";
        }
    }, intervalTime);

    // Function to update Total Aids
    let aidInterval = setInterval(function () {
        aidCountElement.textContent = aidCount + " aids provided";
        aidCount++;
        if (aidCount > targetAids) {
            clearInterval(aidInterval);
            aidCountElement.textContent = targetAids + " aids provided";
        }
    }, intervalTime);
});







