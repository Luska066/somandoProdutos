import { Adicionar,Gets} from "./adicionar.js";
import { Remove } from "./remove.js";
export const objectPerson = [];

const add = new Adicionar()
const remove = new Remove();
const gets = new Gets();

export class Function{
    verifyEventClickButton(event,valueText,valueValue){
        const textValue = valueText;
        const valueNumber = parseFloat(valueValue);
        const valores = gets.getValues(textValue, valueNumber)
        
        if( event.id === 'adicionar' ){
            console.log(objectPerson)
           add.ActionAddedFunction(textValue,valueNumber,valores)
           const total = gets.getTotal(objectPerson);
           
           const totalHTML = document.querySelector('.total');
           totalHTML.innerHTML = `Total: R$ ${total.toFixed(2)}`
           return true
        }else if(event.id === 'remover'){
            console.log(objectPerson)
            remove.removeArrayObject(objectPerson);
            const total = gets.getTotal(objectPerson);
            const totalHTML = document.querySelector('.total');
            totalHTML.innerHTML = `Total: R$ ${total.toFixed(2)}`
            if(total < 0){
                console.log('fffa')
            }else{
                console.log(total)
            }
            return true
        }else{
            return false;
        }
    }
}