// Update index.js
const treeContainer = document.querySelector('.tree-container');
const popup = document.getElementById("checklist-popup");
const treeSections = document.querySelectorAll('.tree-section');

console.log('Tree sections found:', treeSections.length);

// Track completion status of each section
const sectionStatus = {
    'Tree A1': false,
    'Tree A2': false,
    'Tree A3': false
};

// Tree SVG content for different completion levels
const treeLevels = [
    // Level 0 - Initial tree
    `<svg id="tree" width="177" height="264" viewBox="0 0 59 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.0151" y="38.319" width="14.4855" height="48.8607" rx="7.24277" fill="#A98467" />
        <rect x="22.0537" y="20.2538" width="14.4855" height="48.8607" rx="7.24277" fill="#936845" />
        <rect x="0.0333176" width="58.9667" height="58.9667" rx="29.4833" fill="#ADC178" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.215479 26.2944C0.0732194 27.4687 0 28.6643 0 29.8771C0 46.1603 13.2001 59.3604 29.4833 59.3604C45.7665 59.3604 58.9667 46.1603 58.9667 29.8771C58.9667 28.6643 58.8935 27.4687 58.7512 26.2944C56.9833 40.8879 44.5538 52.195 29.4833 52.195C14.4129 52.195 1.98332 40.8879 0.215479 26.2944Z"
            fill="#8FB26E" />
    </svg>`,
    // Level 1 - After completing A1
    `<svg id="tree" width="177" height="264" viewBox="0 0 59 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.0151" y="38.319" width="14.4855" height="48.8607" rx="7.24277" fill="#8B5A2B" />
        <rect x="22.0537" y="20.2538" width="14.4855" height="48.8607" rx="7.24277" fill="#654321" />
        <rect x="0.0333176" width="58.9667" height="58.9667" rx="29.4833" fill="#7BA05B" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.215479 26.2944C0.0732194 27.4687 0 28.6643 0 29.8771C0 46.1603 13.2001 59.3604 29.4833 59.3604C45.7665 59.3604 58.9667 46.1603 58.9667 29.8771C58.9667 28.6643 58.8935 27.4687 58.7512 26.2944C56.9833 40.8879 44.5538 52.195 29.4833 52.195C14.4129 52.195 1.98332 40.8879 0.215479 26.2944Z"
            fill="#5E8C31" />
    </svg>`,
    // Level 2 - After completing A2
    `<svg id="tree" width="177" height="264" viewBox="0 0 59 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.0151" y="38.319" width="14.4855" height="48.8607" rx="7.24277" fill="#6B4423" />
        <rect x="22.0537" y="20.2538" width="14.4855" height="48.8607" rx="7.24277" fill="#4B2F0F" />
        <rect x="0.0333176" width="58.9667" height="58.9667" rx="29.4833" fill="#4A7D20" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.215479 26.2944C0.0732194 27.4687 0 28.6643 0 29.8771C0 46.1603 13.2001 59.3604 29.4833 59.3604C45.7665 59.3604 58.9667 46.1603 58.9667 29.8771C58.9667 28.6643 58.8935 27.4687 58.7512 26.2944C56.9833 40.8879 44.5538 52.195 29.4833 52.195C14.4129 52.195 1.98332 40.8879 0.215479 26.2944Z"
            fill="#3D5E1A" />
    </svg>`,
    // Level 3 - After completing A3
    `<svg id="tree" width="177" height="264" viewBox="0 0 59 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.0151" y="38.319" width="14.4855" height="48.8607" rx="7.24277" fill="#4B2F0F" />
        <rect x="22.0537" y="20.2538" width="14.4855" height="48.8607" rx="7.24277" fill="#2B1B0B" />
        <rect x="0.0333176" width="58.9667" height="58.9667" rx="29.4833" fill="#2D4A0F" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.215479 26.2944C0.0732194 27.4687 0 28.6643 0 29.8771C0 46.1603 13.2001 59.3604 29.4833 59.3604C45.7665 59.3604 58.9667 46.1603 58.9667 29.8771C58.9667 28.6643 58.8935 27.4687 58.7512 26.2944C56.9833 40.8879 44.5538 52.195 29.4833 52.195C14.4129 52.195 1.98332 40.8879 0.215479 26.2944Z"
            fill="#1F3D0A" />
    </svg>`
];

// Function to update tree SVG
function updateTree() {
    const completedSections = Object.values(sectionStatus).filter(status => status).length;
    const treeContainer = document.querySelector('.tree-container');
    treeContainer.innerHTML = treeLevels[completedSections];
}

// Function to check if a section is completed
function checkSectionCompletion(section) {
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    return Array.from(checkboxes).every(checkbox => checkbox.checked);
}

// Add event listeners to all checkboxes
treeSections.forEach(section => {
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    const sectionTitle = section.querySelector('h3').textContent.trim();
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            sectionStatus[sectionTitle] = checkSectionCompletion(section);
            updateTree();
        });
    });
});

treeContainer.addEventListener("click", () => {
    popup.classList.add("active");
});

// Close popup when clicking outside
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("active");
    }
});