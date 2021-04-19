const employee = {
    name: 'Sue',
    streetAddress: '1172 Broadway'
}

function updateEmployeeWithKeyAndValue(employee,{name, streetAddress}) {
    const employees = {
        name : 'Sam',
        streetAddress: '11 Broadway'
    }
    return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, {name= 'Sam'}){
    const employees = {
        name : 'Sam',
        streetAddress: '12 Broadway'
    }
    return employee;
}

function deleteFromEmployeeByKey(employee,{name, streetAddress}) {
    const employees = {
        name : 'Sam',
        streetAddress: '11 Broadway'
    }
    delete employees.name;
    return employees;
}

function destructivelyDeleteFromEmployeeByKey(employee,{name, streetAddress}) {
    const employees = {
        name : 'Sam',
        streetAddress: '11 Broadway'
    }
    return employee;
}

