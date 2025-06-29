import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Marcos",
            "lastName": "Figueroa",
            "email": "micorreo123@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Juan",
            "lastName": "Figueroa",
            "email": "micorreo446@gmail.com"
        },
        {
            "id": 1,
            "firstName": "Pedro",
            "lastName": "Figueroa",
            "email": "micorreo987@gmail.com"
        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee =>
                        <tr key={employee.id} >
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent