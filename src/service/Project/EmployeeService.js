export default class EmployeeService {
  getEmployee() {
    return fetch("data/project/employee.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
