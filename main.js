//const printToDom = (divId, textToPrint) => {
 //   const selectedDiv = document.getElementById(divId);
 //   selectedDiv.innerHTML += textToPrint;

console.log('hi');

const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'rod'

    },
    {
        dinoType: 'stegosaurus',
        name: 'stan'

    },
    {
        dinoType: 'velociraptor',
        name: 'ruth'

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
        domString += `<div class="dinosaur">`;
        domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`
        
    }
    printToDom('dino-barn', domString)
};

const assignments = [
    {
        title: 'product-cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.wtf.com',
    },
    {
        title: 'duck-binders',
        dueDate: '03/20/2019',
        topic: 'Ducks in binders',
        notes: 'Bind Ducks',
        assignmentUrl: 'www.ducks.com',
    },
    {
        title: 'create-visualization',
        dueDate: '03/25/2019',
        topic: 'visualize life',
        notes: 'this is visual',
        assignmentUrl: 'www.vis.com',
    },
    {
        title: 'sing-loud',
        dueDate: '03/30/2019',
        topic: 'loud singing',
        notes: 'can you hear me?',
        assignmentUrl: 'www.sing.com',
    },
    {
        title: 'fix-brain',
        dueDate: '04/01/2019',
        topic: 'fixing brains',
        notes: 'my brain is fixed',
        assignmentUrl: 'https://www.brains.com',
    }

];
const buildAssignmentCards = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++){
        domString += `<div class ="card-container">`;
        domString += `<div class="assignments">`;
        domString +=   `<h3>${assignments[i].title}</h3>`;
        domString +=    `<p>due date: ${assignments[i].dueDate}</p>`;
        domString +=    `<p>topic: ${assignments[i].topic}</p>`;
        domString +=    `<p>notes: ${assignments[i].notes}</p>`;
        domString +=    `<p>assignmentUrl: <a href=${assignments[i].assignmentUrl}>HERE</a></p>`;
        domString += `</div>`
        domString += `</div>`

    }
    printToDom('assignment-barn', domString);
};

// have a total of 5 assignments 
//make fxn called buildAssignmentCards - loop over assignments and make a domString
//reuse the printToDom funciton to display the domString
//styling of cards





const init = () => {
    buildDinosaurs();
    buildAssignmentCards();

};
init();