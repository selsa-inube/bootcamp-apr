class Group {
constructor() {
    this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
        this.members.push(value);
        }
    }

    delete(value) {
        let index = this.members.indexOf(value);
        if (index !== -1) {
        this.members.splice(index, 1);
        }
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
        group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30)); 
group.add(10);
group.delete(10);
console.log(group.has(10)); 
  