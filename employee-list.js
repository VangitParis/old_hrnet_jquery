$(function () {
    const employeesData = {
        jsonData: {
            "employees": [
                {
                    "firstName": "Jane",
                    "lastName": "Doe",
                    "startDate": "01/11/2003",
                    "department": "Sales",
                    "dateOfBirth": "08/08/2008",
                    "street": "123 Main St",
                    "city": "AnyTown",
                    "state": "California",
                    "zipCode": "12345"
                },
                {
                    "firstName": "Alice",
                    "lastName": "Smith",
                    "startDate": "18/01/2020",
                    "department": "Marketing",
                    "dateOfBirth": "15/03/1995",
                    "street": "456 Oak St",
                    "city": "Springfield",
                    "state": "New York",
                    "zipCode": "67890"
                },
                {
                    "firstName": "John",
                    "lastName": "Johnson",
                    "startDate": "02/01/2022",
                    "department": "Finance",
                    "dateOfBirth": "22/09/1980",
                    "street": "789 Elm St",
                    "city": "Riverside",
                    "state": "Texas",
                    "zipCode": "13579"
                },
                {
                    "firstName": "Emily",
                    "lastName": "Williams",
                    "startDate": "19/08/2009",
                    "department": "IT",
                    "dateOfBirth": "10/05/1992",
                    "street": "101 Pine St",
                    "city": "Cleveland",
                    "state": "Ohio",
                    "zipCode": "24680"
                },
                {
                    "firstName": "Michael",
                    "lastName": "Brown",
                    "startDate": "05/10/2019",
                    "department": "Human Resources",
                    "dateOfBirth": "03/12/1977",
                    "street": "202 Cedar St",
                    "city": "Phoenix",
                    "state": "Arizona",
                    "zipCode": "97531"
                },
                {
                    "firstName": "Olivia",
                    "lastName": "Miller",
                    "startDate": "20/09/2017",
                    "department": "Customer Service",
                    "dateOfBirth": "18/06/1985",
                    "street": "303 Maple St",
                    "city": "Denver",
                    "state": "Colorado",
                    "zipCode": "86420"
                },
                {
                    "firstName": "Daniel",
                    "lastName": "Jones",
                    "startDate": "30/06/2016",
                    "department": "Operations",
                    "dateOfBirth": "25/01/1990",
                    "street": "404 Birch St",
                    "city": "Orlando",
                    "state": "Florida",
                    "zipCode": "75309"
                },
                {
                    "firstName": "Sophia",
                    "lastName": "Davis",
                    "startDate": "06/07/2023",
                    "department": "Engineering",
                    "dateOfBirth": "07/04/1982",
                    "street": "505 Spruce St",
                    "city": "Seattle",
                    "state": "Washington",
                    "zipCode": "16243"
                },
                {
                    "firstName": "Ethan",
                    "lastName": "Moore",
                    "startDate": "03/01/2024",
                    "department": "Research and Development",
                    "dateOfBirth": "30/11/1998",
                    "street": "606 Walnut St",
                    "city": "Atlanta",
                    "state": "Georgia",
                    "zipCode": "53124"
                },
                {
                    "firstName": "Ava",
                    "lastName": "Clark",
                    "startDate": "10/12/2022",
                    "department": "Legal",
                    "dateOfBirth": "12/08/1972",
                    "street": "707 Fir St",
                    "city": "Dallas",
                    "state": "Texas",
                    "zipCode": "90876"
                },
                {
                    "firstName": "Liam",
                    "lastName": "Taylor",
                    "startDate": "16/04/2021",
                    "department": "Quality Assurance",
                    "dateOfBirth": "23/04/1987",
                    "street": "808 Pine St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zipCode": "35461"
                },
                {
                    "firstName": "Emma",
                    "lastName": "Hall",
                    "startDate": "18/03/2018",
                    "department": "Public Relations",
                    "dateOfBirth": "14/02/2000",
                    "street": "909 Oak St",
                    "city": "San Francisco",
                    "state": "California",
                    "zipCode": "78901"
                },
                {
                    "firstName": "Noah",
                    "lastName": "Anderson",
                    "startDate": "09/02/2020",
                    "department": "Supply Chain",
                    "dateOfBirth": "09/10/1993",
                    "street": "111 Pine St",
                    "city": "Miami",
                    "state": "Florida",
                    "zipCode": "24681"
                },
                {
                    "firstName": "Isabella",
                    "lastName": "Wright",
                    "startDate": "17/07/2015",
                    "department": "Logistics",
                    "dateOfBirth": "26/06/1989",
                    "street": "222 Cedar St",
                    "city": "Houston",
                    "state": "Texas",
                    "zipCode": "13579"
                },
                {
                    "firstName": "Mason",
                    "lastName": "Evans",
                    "startDate": "26/09/2012",
                    "department": "Training",
                    "dateOfBirth": "05/03/1975",
                    "street": "333 Elm St",
                    "city": "Los Angeles",
                    "state": "California",
                    "zipCode": "98765"
                },
                {
                    "firstName": "John",
                    "lastName": "Does",
                    "startDate": "11/01/2023",
                    "department": "Marketing",
                    "dateOfBirth": "11/09/1990",
                    "street": "123 street Kennedy",
                    "city": "Beverly Hills",
                    "state": "California",
                    "zipCode": "00012"
                },
                {
                    "firstName": "Mark",
                    "lastName": "Lavonne",
                    "startDate": "10/10/2020",
                    "department": "Human Sources",
                    "dateOfBirth": "01/01/2001",
                    "street": "3 av Johnson",
                    "city": "Madison",
                    "state": "Wisconsin",
                    "zipCode": "10001"
                },
                {
                    "firstName": "Tony",
                    "lastName": "Stark",
                    "startDate": "08/11/2022",
                    "department": "Engineering",
                    "dateOfBirth": "13/12/1998",
                    "street": "90 street Thomson",
                    "city": "Broadway",
                    "state": "New York",
                    "zipCode": "53000"
                }
            ]
        }
    }
  localStorage.setItem('data', JSON.stringify(employeesData));
  
    const employees = JSON.parse(localStorage.getItem('employees'));

    $('#employee-table').DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });
});