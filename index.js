
const container = document.getElementById('container');

// const coverScreen = document.createElement('div');
// coverScreen.id ='coverScreen'
// container.appendChild(coverScreen);
// coverScreen.addEventListener('click', ()=>{
//     runPassword()
// })
// function runPassword(){
//     const input = document.createElement('input');
//     coverScreen.appendChild(input)
// }

run()

function run(){
    container.innerHTML = ''
    const manuHolder = document.createElement('div');
    manuHolder.id = 'manuHolder';

    container.appendChild(manuHolder)

    const buttonA = buildSectionButton('Headlines', firstList)
    const buttonB = buildSectionButton('Cancellation', secoundList)
    const buttonC = buildSectionButton('quick notes', theirdList)
    const buttonD = buildSpcialSectionButton('text-builder')
    const buttonE = buildSectionButton('hallo! 5')

}


//container.style.backgroundColor = 'blue'


function buildSectionButton(name, list, align){

    const button = document.createElement('div');
    button.classList.add('SectionButton');
    button.innerText = name;
    button.id = name;

    button.addEventListener('mouseenter', ()=>{
        button.classList.add('SectionButtonWide')
        addSubSections(name, list);
    })
    button.addEventListener('mouseleave', ()=>{
        button.classList.remove('SectionButtonWide')
        button.innerHTML = name;
    })
    manuHolder.appendChild(button)
}

function addSubSections(name, list){

    const section = document.getElementById(name);
    section.innerHTML = '';

    for(let i=0; i<list.length; i++){
        const subSection = document.createElement('div');
        const subSubSectionID = `ss${name}${i}`
        subSection.id = subSubSectionID;

        const subSectionTitle = list[i][0];
        subSection.innerText = subSectionTitle;

        subSection.classList.add('subSection');
        section.appendChild(subSection);

        subSection.addEventListener('mouseenter', ()=>{
            subSection.classList.add('subSectionExpend');
            createListItem(list, i, subSubSectionID, subSectionTitle)
        })
        subSection.addEventListener('mouseleave', ()=>{
            subSection.classList.remove('subSectionExpend');
            subSection.innerHTML = '';
            subSection.innerText = subSectionTitle
        })
    
    }
}
function createListItem(list, listID, subSubSectionID, subSectionTitle){

    const subSection = document.getElementById(subSubSectionID)
    subSection.innerHTML = subSectionTitle; 

    for( let i=1; i<list[listID].length; i++){
        const listItem = document.createElement('div');
        listItem.classList.add('listItem');

        listItem.innerText = list[listID][i][0];

        const listItemValue = list[listID][i][1];

        listItem.addEventListener('click', ()=>{
            navigator.clipboard.writeText(listItemValue);
        })
        //console.log(listItemValue)testB1testA2testB1testA2

        subSection.appendChild(listItem)
    }
}

function buildSpcialSectionButton(name){
    const button = document.createElement('div');
    button.classList.add('SectionButton');
    button.innerText = name;
    button.id = name;
    button.addEventListener('mouseenter', ()=>{
        button.innerHTML = '';
        button.classList.add('SectionButtonWide');
        addSpcialSubSections(name, forthList);
    })
    button.addEventListener('mouseleave', ()=>{
        button.classList.remove('SectionButtonWide');
        button.innerHTML = name;
    })
    manuHolder.appendChild(button);

    const sentence = '';

    const lateButton = document.createElement('div');


}
function addSpcialSubSections(name, list){
    
    const section = document.getElementById(name);
    section.innerHTML = '';

    for(let i=0; i<list.length; i++){
        const subSection = document.createElement('div');
        const subSubSectionID = `ss${name}${i}`
        subSection.id = subSubSectionID;

        const subSectionTitle = list[i][0];
        subSection.innerText = subSectionTitle;

        subSection.classList.add('subSection');
        section.appendChild(subSection);

        subSection.addEventListener('mouseenter', ()=>{
            subSection.classList.add('subSectionExpend');
            createListItem(list, i, subSubSectionID, subSectionTitle)
        })
        subSection.addEventListener('mouseleave', ()=>{
            subSection.classList.remove('subSectionExpend');
            subSection.innerHTML = '';
            subSection.innerText = subSectionTitle
        })
    
    }

}
