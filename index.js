const tree = document.getElementById("tree");
const popup = document.getElementById("checklist-popup");

tree.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Close popup when clicking outside the content
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
