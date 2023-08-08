import React from 'react'
import { FcCheckmark, FcCancel } from "react-icons/fc";

export default function Table2() {
  return (
    <div className='container-fluid'>
      <table className="table table-hover">
        <thead>
        <tr>
            <th scope="col" className='light-text'>Date</th>
            <th scope="col" className='light-text'>Amount</th>
            <th scope="col" className='light-text'>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr> 
            <td>July 11, 2023</td>
            <td>$5,03,123</td>
            <td><div><FcCancel size={20} /> Pending</div></td>

        </tr>
        <tr>
            <td>July 10, 2023</td>
            <td>$5,03,123</td> 
            <td> <div><FcCheckmark size={20} /> Success</div></td>
        </tr>
        <tr>
            <td>July 9, 2023</td>
            <td>$5,03,123</td> 
            <td><div><FcCheckmark size={20} /> Success</div></td>
        </tr>
        <tr>
            <td>July 8, 2023</td>
            <td>$5,03,123</td> 
            <td><div><FcCheckmark size={20} /> Success</div></td>
        </tr>

        </tbody>
        </table>
    </div>
  )
}
