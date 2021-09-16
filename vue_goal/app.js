Vue.createApp({
    data() {
        return {
        goals: [],
        enteredValue: ''
    };
},
methods: {
    addGoal() {
        this.goals.push(this.enteredValue);
            this.enteredValue = '';
    }
}
}).mount('#app');


/*
VANILLA JS

const buttonEl = document.querySelector('button');      // gi tilgang til button
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');


function addGoal() {                                    //add a fucntion
const enteredValue = inputEl.value;                 //get acces to input value
const listItemEl = document.createElement('li');    // create a list element
listItemEl.textContent = enteredValue;              // add text content
listEl.appendChild(listItemEl);                     // append list item
inputEl.value = '';                                 // clear value
}


buttonEl.addEventListener('click', addGoal);

*/