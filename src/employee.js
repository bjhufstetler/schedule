class Employee {
    constructor(first, last){
        this.first = first,
        this.last = last
    }
    editPhoneNumber(arg) {
        if(Number.isInteger(arg) && arg.toString().length == 10){
            this.phone = arg;
        } else {
            throw new Error('Improper phone number format. Use: ##########');
        }
    }
    editEmail(arg) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(arg)) {
            this.email = arg;
        } else {
            throw new Error('Not a valid email address.')
        }
    }
}

module.exports = Employee;