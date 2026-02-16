export class Student {
    firstname: string
    lastname: string

    constructor(firsname: string ,lastname: string){
        this.firstname = firsname = 'John';
        this.lastname = lastname = 'Doe';
    }
    printName(){
        console.log(`${this.firstname} ${this.lastname}`);
    }
    
}