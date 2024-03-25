function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Test the function
  let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
  
  console.log(updatedEmployee);
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property with specified key from a clone of the employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property with specified key from the employee object (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  
