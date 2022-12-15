const draggableList = document.getElementById('draggable-list') 
const checkButton = document.querySelector('.check-btn')

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

const listItems = [];
let dragStartIndex, dragEndIndex; 

function createList() {
    [...richestPeople]
    .map(people => ({value: people, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((data, index) => {
        const list = document.createElement('li');
        list.setAttribute('data-index', index);
        list.innerHTML = `
            <span class="number">${index+1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${data}</p>
                <i class="fas fa-grip-lines"></i>
            </div>`;
        listItems.push(list);
        draggableList.appendChild(list)
    })

    addEventListeners();
}

createList();

function dragStart() {
    dragStartIndex = this.closest('li').getAttribute('data-index');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    dragEndIndex = this.getAttribute('data-index');
    swapItems();
    this.classList.remove('over');
}

function swapItems() {
    const itemOne = listItems[dragStartIndex].querySelector('.draggable');
    const itemTwo = listItems[dragEndIndex].querySelector('.draggable');

    listItems[dragStartIndex].appendChild(itemTwo);
    listItems[dragEndIndex].appendChild(itemOne);
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function addEventListeners() {
    const draggableList = document.querySelectorAll('.draggable');
    const draggableListItems = document.querySelectorAll('#draggable-list li');

    draggableList.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    draggableListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}

checkButton.addEventListener('click', function () {
    listItems.forEach((item, index) => {
        const personName = item.querySelector('.person-name').textContent.trim();
        if (personName !== richestPeople[index]) {
            item.classList.add('wrong');
        } else {
            item.classList.remove('wrong');
            item.classList.add('right');
        }
    })
}) 

