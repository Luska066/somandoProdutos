export class Remove{
    removeArrayObject(object){
    
        const li = document.querySelectorAll('li');
        const liLenght = li.length
        if(liLenght > 0){
            object.pop();
            li[liLenght - 1].remove()
            console.log('Removido no Indice: '+(liLenght - 1) )
        }else{
        }
    }
}