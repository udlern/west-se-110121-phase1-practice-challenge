const generateElement = element => document.createElement(element)
function renderCharacterName(name) {
    const span = generateElement('span')
    const characterDiv = document.querySelector("#character-bar")
    characterDiv.appendChild(span)
    const characterName = name 
    span.appendChild(characterName)
}

function init() {
    characters.forEach(renderCharacterName);
}

init();
