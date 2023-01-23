import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order, deleteOrder }) => {
    
    const navigate = useNavigate();

    const editOrder = (e, id) => {
        e.preventDefault();
        navigate(`/editOrder/${id}`);
    }

  return (
    
    <tr key={order.id}>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{order.firstName}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{order.lastName}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{order.emailId}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{order.jobInfo}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>{order.fileUrl}</div>
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                            <a 
                            onClick={(e,id) => editOrder(e, order.id)} 
                            className='text-ingigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'
                            >Edit</a>
                            <a 
                            onClick={(e,id) => deleteOrder(e, order.id)} 
                            className='text-ingigo-600 hover:text-indigo-800 hover:cursor-pointer'
                            >Delete</a>
                        </td>
                    </tr>

  )
}

export default Order