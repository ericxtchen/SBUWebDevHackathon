const treeContainer = document.querySelector('.tree-container');
const popup = document.getElementById("checklist-popup");
const treeSections = document.querySelectorAll('.tree-section');

console.log('Tree sections found:', treeSections.length);

const sectionStatus = {
    'Tree A1': false,
    'Tree A2': false,
    'Tree A3': false
};

const treeLevels = [
    `<svg id="tree" width="177" height="264" viewBox="0 0 59 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.0151" y="38.319" width="14.4855" height="48.8607" rx="7.24277" fill="#A98467" />
        <rect x="22.0537" y="20.2538" width="14.4855" height="48.8607" rx="7.24277" fill="#936845" />
        <rect x="0.0333176" width="58.9667" height="58.9667" rx="29.4833" fill="#ADC178" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.215479 26.2944C0.0732194 27.4687 0 28.6643 0 29.8771C0 46.1603 13.2001 59.3604 29.4833 59.3604C45.7665 59.3604 58.9667 46.1603 58.9667 29.8771C58.9667 28.6643 58.8935 27.4687 58.7512 26.2944C56.9833 40.8879 44.5538 52.195 29.4833 52.195C14.4129 52.195 1.98332 40.8879 0.215479 26.2944Z"
            fill="#8FB26E" />
    </svg>`,
  `<svg id="tree" width="60" height="139" viewBox="0 0 60 139" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20.8124" y="62.1118" width="16.3026" height="76.8552" rx="8.15131" fill="#A98467"/>
<rect x="20.8557" y="33.6963" width="16.3026" height="76.8552" rx="8.15131" fill="#936845"/>
<rect x="0.0338364" y="37.571" width="59" height="59" rx="29.5" fill="#ADC178"/>
<rect x="3.00418" width="53.9929" height="53.9929" rx="26.9964" fill="#CBDA87"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.215604 63.8802C0.0732618 65.0553 0 66.2516 0 67.465C0 83.7574 13.2076 96.965 29.5 96.965C45.7924 96.965 59 83.7574 59 67.465C59 66.2516 58.9267 65.0553 58.7844 63.8803C57.0155 78.482 44.579 89.7955 29.5 89.7955C14.421 89.7955 1.98446 78.482 0.215604 63.8802Z" fill="#8FB26E"/>
</svg>`,
    `<svg id="tree" width="59" height="174" viewBox="0 0 59 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20.8005" y="96.7438" width="16.2933" height="76.8112" rx="8.14664" fill="#A98467"/>
<rect x="21" y="62" width="16.2933" height="76.8112" rx="8.14664" fill="#936845"/>
<rect x="0.0338135" y="66.6969" width="58.9662" height="58.9662" rx="29.4831" fill="#ADC178"/>
<rect x="3.00246" y="29.1475" width="53.9619" height="53.9619" rx="26.981" fill="#8FB26E"/>
<rect x="6.95969" width="45.6358" height="45.6358" rx="22.8179" fill="#CBDA87"/>`,
    `<svg id="tree" width="59" height="193" viewBox="0 0 59 193" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20.8005" y="115.744" width="16.2933" height="76.8112" rx="8.14664" fill="#A98467"/>
<rect x="21" y="81.0001" width="16.2933" height="76.8112" rx="8.14664" fill="#936845"/>
<rect x="0.0338211" y="85.6969" width="58.9662" height="58.9662" rx="29.4831" fill="#ADC178"/>
<rect x="3.00246" y="48.1475" width="53.9619" height="53.9619" rx="26.981" fill="#8FB26E"/>
<rect x="6.95969" y="19" width="45.6358" height="45.6358" rx="22.8179" fill="#CBDA87"/>
<rect x="14" width="32" height="32" rx="16" fill="#F3EE9C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.215481 111.991C0.0732201 113.165 0 114.361 0 115.574C0 131.857 13.2 145.057 29.4831 145.057C45.7661 145.057 58.9662 131.857 58.9662 115.574C58.9662 114.361 58.893 113.165 58.7507 111.991C56.9828 126.584 44.5534 137.891 29.4831 137.891C14.4128 137.891 1.98332 126.584 0.215481 111.991Z" fill="#8FB26E"/>
</svg>`
];

function updateTree() {
    const completedSections = Object.values(sectionStatus).filter(status => status).length;
    const treeContainer = document.querySelector('.tree-container');
    treeContainer.innerHTML = treeLevels[completedSections];
}

function checkSectionCompletion(section) {
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    return Array.from(checkboxes).every(checkbox => checkbox.checked);
}

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

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("active");
    }
});