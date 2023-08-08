import React from 'react'

export default function Table() {
  return (
    <div className='container-fluid'>
      <table className="table table-hover">
        <thead>
        <tr>
            <th scope="col" className='light-text'>Name</th>
            <th scope="col" className='light-text'>Role</th>
        </tr>
        </thead>
        <tbody>
        <tr> 
            <td>Prashant Kumar</td>
            <td>Super Admin</td>            
        </tr>
        <tr>
            <td>Jasraj Singh Bhatia</td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Tarun Kheria</td>
            <td>Admin</td>
        </tr>
        <tr>
            <td>Aditya Mullay</td>
            <td>Management staff</td>
        </tr>

        </tbody>
        </table>
    </div>
  )
}
