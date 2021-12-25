class Employee {
    constructor(first, last, role){
        this.first = first,
        this.last = last,
        this.role = role
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
    editAddress(arg) {
        this.address = arg;
    }
    editFirst(arg) {
        this.first = arg;
    }
    editLast(arg) {
        this.last = arg;
    }
    editRole(arg) {
        if(arg == "Student" || arg == "Permanent Party") {
            this.role = arg;
        } else {
            throw new Error('Invalid role: must be Student or Permanent Party.')
        }
    }
}

module.exports = Employee;