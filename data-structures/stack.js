class Stack
{
    constructor() 
    {
        this.items = [];
    }

    push(item)
    {
        this.items.push(item);
    }

    pop()
    {
        if(this.items.length === 0)
        {
            return 'underflow';
        }
        else
        {
            return this.items.pop();
        }
    }

    peek() 
    {
        return this.items[this.items.length - 1];
    }

    isEmpty() 
    {
        if(this.items.length === 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

let s1 = new Stack();
console.log(`is stack empty? => ${s1.isEmpty()}`);
console.log('Pushing 1 onto the stack');
s1.push(1);
console.log('Pushing 2 onto the stack');
s1.push(2);

console.log(`is stack empty? => ${s1.isEmpty()}`);
console.log(`Top of the stack contains => ${s1.peek()}`);
console.log('Pop operation is being performed');
console.log(s1.pop());
console.log(`Top of the stack contains => ${s1.peek()}`);