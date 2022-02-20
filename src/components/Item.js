class Item {

static lastId=0;
//indica variável de classe



    constructor(text){
    this.text = text
    this.id = Item.lastId++
this.done = false
this.date = new Date().toLocaleDateString();
this.hour = new Date().getHours();
this.minutes = new Date().getMinutes();

}

}

export default Item


