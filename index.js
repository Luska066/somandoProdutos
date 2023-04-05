import { Function } from "./Controller/functions.js";
const Actions = new Function();

const form = document.querySelector('form')
    form.addEventListener('click',(event)=>{
    event.preventDefault();
    const valueText = document.querySelector('#text').value
    const valueValue = document.querySelector('#value').value
    const eventClick = event.target;
    const result = Actions.verifyEventClickButton(eventClick,valueText,valueValue) 
})


