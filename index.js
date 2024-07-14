
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

    const buttonA = buildSectionButton('Headlines', firstList, 'subSection-A')
    const buttonB = buildSectionButton('Cancellation', secoundList, 'subSection-A')
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
        addSubSections(name, list, align);
    })
    button.addEventListener('mouseleave', ()=>{
        button.classList.remove('SectionButtonWide')
        button.innerHTML = name;
    })
    manuHolder.appendChild(button)
}

function addSubSections(name, list, align){

    const section = document.getElementById(name);
    section.innerHTML = '';

    for(let i=0; i<list.length; i++){
        const subSection = document.createElement('div');
        const subSubSectionID = `ss${name}${i}`
        subSection.id = subSubSectionID;

        const subSectionTitle = list[i][0][0];
        const subSectionHeigth = list[i][0][1];
        //console.log(subSectionHeigth)
        subSection.innerText = subSectionTitle;

        subSection.classList.add('subSection');
        subSection.classList.add(align)
        section.appendChild(subSection);

        subSection.addEventListener('mouseenter', ()=>{
            subSection.classList.add('subSectionExpend');
            subSection.style.height = subSectionHeigth;
            createListItem(list, i, subSubSectionID, subSectionTitle)
        })
        subSection.addEventListener('mouseleave', ()=>{
            subSection.classList.remove('subSectionExpend');
            subSection.innerHTML = '';
            subSection.innerText = subSectionTitle
            subSection.style.height = 'var(--sub-section-height)'
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
            //subSection.classList.remove('subSectionExpend');
        })
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
    
    

    const sentence = '';

    const lateButton = document.createElement('div');

    manuHolder.appendChild(button);
}
function addSpcialSubSections(name, list){
    const section = document.getElementById(name);
    section.innerHTML = '';

    for(let i=0; i<list.length; i++){
        const subSection = document.createElement('div');
        const subSubSectionID = `ss${name}${i}`
        subSection.id = subSubSectionID;

        const subSectionTitle = list[i][0][0];
        const subSectionHeigth = list[i][0][1];
        subSection.innerText = subSectionTitle;
        subSection.classList.add('specialSubSection');
        section.appendChild(subSection);

        subSection.addEventListener('mouseenter', async ()=>{    
            try{
                subSection.classList.add('subSectionExpend');
                subSection.classList.add('subSection-B');
                subSection.style.height = subSectionHeigth;
                await createSpcialListItem(list, i, subSubSectionID, subSectionTitle);
            } catch (error){
                console.error('things go bad in spcial-sub-section!');
            }
        })
        subSection.addEventListener('mouseleave', ()=>{
            subSection.classList.remove('subSectionExpend');
            subSection.classList.remove('subSection-B');
            subSection.innerHTML = '';
            subSection.innerText = subSectionTitle;
            subSection.style.height = 'var(--sub-section-height)'
        })
    }
    const runButton = document.createElement('div');
    runButton.classList.add('specialSubSection');
    runButton.id = 'runButton';
    runButton.innerText = 'RUN'

    section.appendChild(runButton)
}

function createSpcialListItem(list, listID, subSubSectionID, subSectionTitle){

    const subSection = document.getElementById(subSubSectionID)
    subSection.innerHTML = subSectionTitle; 

    for( let i=1; i<list[listID].length; i++){
        const listItem = document.createElement('div');
        listItem.classList.add('SpcialListItem');
        listItem.innerText = list[listID][i][0];
        const listItemValue = list[listID][i][1];

        listItem.addEventListener('click', ()=>{
            navigator.clipboard.writeText(listItemValue);
        })
        subSection.appendChild(listItem)
    }
}



