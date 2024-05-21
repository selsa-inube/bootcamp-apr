class Group {
    constructor(){
        this.members = [];
    }


    add(value){
        if(!this.has(value)){
        this.members.push(value);
    }
}

    delete(value){
        const index = this.members.indexOf(value);
        if(index!== -1){
            this.members.splice(index, 1);
        }
    }
    has(value){
        return this.members.includes(value);
    }
    static from(iterable){
        const group = new Group();
        for(let value of iterable){
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator](){
        let index = 0 ;
        let members = this.members;

        return{
            next(){
                if(index >= members.length){
                    return {done: true};
            }else{
                return{value: members[index++], done: false};
            }
        }
    };
}
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c