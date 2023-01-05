export default (employee = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...employee, action.payload];
        case 'UPDATE': 
            //matches that employee id is equal to the id in payload if yes it returns actions.payload(new array of employee) or else it will return the previous employee data
            return employee.map((emp)=> emp._id = action.payload._id ? action.payload : emp);
        case 'DELETE': 
            return employee.filter((emp) => emp._id !== action.payload); 
        case 'FETCH_USER':
                return { ...employee, employee: action.payload };
        default:
            return employee;
    }
}