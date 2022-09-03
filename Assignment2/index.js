
class Customer{
    constructor(id, name, address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
class userDatabase{
    constructor(){
        this.data = [];
    }
    
    addRecord(row){
        this.data.push(row)
    }

    findRecord(id) {
        this.data.find((row)=>row.id == id);
    }

    removeRecord(id){
        for (const key in this.data) {
            if (this.data[key].id == id){
                this.data.splice(key, 1);
                return;
            }
        }
        throw "Record not found to remove"
    }
}