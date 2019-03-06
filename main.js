//const printToDom = (divId, textToPrint) => {
 //   const selectedDiv = document.getElementById(divId);
 //   selectedDiv.innerHTML += textToPrint;

console.log('hi');

const dinosaurs = [
    {
        dinoType: 't-rex'

    },
    {
        dinoType: 'stegosaurus'

    },
    {
        dinoType: 'velociraptor'

    }
];

//loop over the dinosaurs
//build up a dom string
//print the dom string to the dom (will be an =)
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        
    }
    printToDom('dino-barn', domString)
};

const init = () => {
    buildDinosaurs();

};
init();