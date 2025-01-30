// Function to update progress bar based on checkbox state
function updateProgress() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const checked = document.querySelectorAll("input[type='checkbox']:checked").length;
    const total = checkboxes.length;
    const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);
    document.querySelector(".progress-bar").style.width = percentage + "%";
    document.querySelector(".progress-bar").textContent = percentage + "%";
}

// Event listener to update progress on checkbox change
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", updateProgress);
    });
    updateProgress(); // Initial progress update
});
