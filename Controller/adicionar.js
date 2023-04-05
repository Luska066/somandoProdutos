import { objectPerson } from "./functions.js";
export class Adicionar {   
    addArrayObject(object){
        objectPerson.push(object);
    }

    AddedLi(textValues,valueNumbers){
        const ul = document.querySelector('#ul');
        ul.insertAdjacentHTML('beforeend',`<li>Produto : ${textValues} ------ Valor : R$${valueNumbers}</li>`) ;
        const li = document.querySelectorAll('li');
    }
    
    addedItemInHTML(textValue,valueNumber){
        const textValues = textValue;
        const valueNumbers = valueNumber;
        this.AddedLi(textValues,valueNumbers)
    }
         
    ActionAddedFunction(textValue,valueNumber,valores){
        this.addArrayObject(valores);  
        this.addedItemInHTML(textValue,valueNumber);
    }
}
export class Gets{
    getValues(textValue,valueNumber){
        const person = {
            name:textValue,
            value:valueNumber,   
        }
       return person;
    }
    getTotal(object){
        const ValueTotal = object.map(e => {
            return e.value
        }).reduce((soma,i) => {
            return soma += i
        },0);
        return ValueTotal
    }
}