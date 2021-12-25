const Employee = require('../src').Employee;

describe('Employee', () => {
    test('init', () => {
        let emp = new Employee('Brandon', 'Hufstetler');
        expect(emp.first).toBe("Brandon");
        expect(emp.last).toBe("Hufstetler");
    })
    let emp;
    beforeEach(() => {
        emp = new Employee('Brandon', 'Hufstetler');
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
})