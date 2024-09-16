const addItemsForm = document.querySelector('.add-items');
const itemsList = document.querySelector('.items');
const items = JSON.parse(localStorage.getItem('items')) || [];

function generateList(items = []) {
    itemsList.innerHTML = items.map((item, idx) => {
        return `
            <li>
                <input type="checkbox" data-index=${idx} id="item-${idx}" ${item.done ? 'checked' : ''} />
                <label for="item-${idx}">${item.name}</label>
            </li>
        `
    }).join('') ;
}

function addItem(e) {
    e.preventDefault();

    const itemName = this.querySelector("[name=item]").value;
    const item = {
        name: itemName,
        done: false
    }
    items.push(item);
    generateList(items);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;

    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    generateList(items);
}

generateList(items)
addItemsForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);