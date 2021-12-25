const Employee = require('../src').Employee;

describe('Employee', () => {
    test('init', () => {
        let emp = new Employee('Brandon', 'Hufstetler');
        expect(emp.first).toBe("Brandon");
        expect(emp.last).toBe("Hufstetler");
    })
    let emp;
    beforeEach(() => {
        emp = new Employee('Brandon', 'Hufstetler', 'Permanent Party');
    })
    test('add phone', () => {
        emp.editPhoneNumber(4798839728);
        expect(emp.phone).toBe(4798839728);
        expect(() => emp.editPhoneNumber(479-883-9728)).toThrow();
        expect(() => emp.editPhoneNumber(47988.9728)).toThrow();
    })
    test('add email', () => {
        emp.editEmail('brandon.hufstetler@spaceforce.mil');
        expect(emp.email).toBe('brandon.hufstetler@spaceforce.mil');
        expect(() => emp.editEmail('@bjhufstetler')).toThrow();
    })
    test('add address', () => {
        emp.editAddress('610 Cherry St, Lompoc, CA 93437')
        expect(emp.address).toBe('610 Cherry St, Lompoc, CA 93437')
    })
    test('edit first', () => {
        emp.editFirst('Drandon');
        expect(emp.first).toBe('Drandon');
    })
    test('edti last', () => {
        emp.editLast('Buffstetler');
        expect(emp.last).toBe('Buffstetler');
    })
    test('edit role', () => {
        emp.editRole('Student');
        expect(emp.role).toBe('Student');
        emp.editRole('Permanent Party');
        expect(emp.role).toBe('Permanent Party');
        expect(() => emp.editRole('Tudent')).toThrow();
    })
})