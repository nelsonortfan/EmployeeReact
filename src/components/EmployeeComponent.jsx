import React, { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


  return (
    <div>EmployeeComponent</div>
  )
}

export default EmployeeComponent