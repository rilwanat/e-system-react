import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderService from '../services/OrderService';
import Order from './Order';
import AuthDetails from './auth/AuthDetails';

const OrderList = () => {

    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await OrderService.getOrders();
                setOrders(response.data);
            } catch(error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const deleteOrder = (e, id) => {
        e.preventDefault();
        OrderService.deleteOrder(id).then((res) => {
            if(orders) {
                setOrders((prevElement) => {
                    return prevElement.filter((order) => order.id !== id)
                })
            }
        })
    }

  return (
    <>
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button onClick={() => navigate("/addOrder")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>
                Add Order
            </button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>EmailId</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>JobInfo</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>FileUrl</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                    {orders.map((order) => (
                        <Order 
                        order={order} 
                        deleteOrder={deleteOrder} 
                        key={order.id}
                        ></Order>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
    <div className='max-w-2xl mx-auto shadow border-b'>
        <AuthDetails />
    </div>
    </>
  )
}

export default OrderList