// Update index.js
const treeContainer = document.querySelector('.tree-container');
const popup = document.getElementById("checklist-popup");

treeContainer.addEventListener("click", () => {
    popup.classList.add("active");
});

// Close popup when clicking outside
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("active");
    }
});