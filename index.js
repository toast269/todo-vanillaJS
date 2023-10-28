const body = document.body;
const form = document.querySelector('form');
const ul = document.createElement('ul');
ul.className = 'list-group'
body.appendChild(ul);

const input = document.querySelector('#inputBox');
input.placeholder = "Type your task here"
input.className = 'form-control mr-sm-2'

const btn = document.querySelector('#btn')
btn.innerText = 'Add';
btn.className = "btn btn-outline-success my-sm-0"

const removeElement = (el) => {
    el.remove()
    console.log(`${el.innerText} removed!`)
}

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(`You added ${input.value}`)
    const li = document.createElement('li')
    li.innerText = input.value
    li.className = 'list-group-item'
    li.id = 'card'
    input.value = ''
    ul.append(li)
    li.onclick = removeElement.bind(null, li)
}