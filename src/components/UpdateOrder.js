import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OrderService from '../services/OrderService';
import AuthDetails from './auth/AuthDetails';

const UpdateOrder = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [order, setOrder] = useState(
        {
            id: id,
            firstName: "",
            lastName: "",
            emailId: "",
            jobInfo: "",
            fileUrl: "",
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            //setLoading(true);
            try {
                const response = await OrderService.getOrderById(id);
                setOrder(response.data);
            } catch(error) {
                console.log(error);
            }
            //setLoading(false);
        };

        fetchData();
    }, []);

    const updateOrder = (e) => {
        e.preventDefault();
        OrderService.updateOrder(order, id).then(() => {
            navigate("/orderList");
        }).catch((error) => {
            console.log(error);
        })

    }

    const handleChange = (e) => {
        const value = e.target.value;
        setOrder({...order, [e.target.name]: value});
    }

    const [file, setFile] = useState();
    function handleFileChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        handleChange(e);
    }

  return (
    <>
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Update Order</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name:</label>
                <input 
                type="text" 
                name="firstName" 
                onChange={(e) => handleChange(e)}
                value={order.firstName} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name:</label>
                <input 
                type="text" 
                name="lastName" 
                onChange={(e) => handleChange(e)}
                value={order.lastName} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email:</label>
                <input 
                type="email" 
                name="emailId" 
                onChange={(e) => handleChange(e)}
                value={order.emailId} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Job Info:</label>
                <input 
                type="jobinfo" 
                name="jobInfo" 
                onChange={(e) => handleChange(e)}
                value={order.jobInfo} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center  w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>File Url:</label>
                <input 
                type="file" 
                name="fileUrl" 
                className='px-0 py-2'
                onChange={handleFileChange}></input>
                <img src={file} class="object-scale-down h-48 w-96 ..." />
                
                {/* <input 
                type="fileurl" 
                name="fileUrl" 
                onChange={(e) => handleChange(e)}
                value={order.fileUrl} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input> */}
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button 
                onClick={updateOrder}
                className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700'
                >Update</button>
                <button 
                onClick={() => navigate("/orderList")}
                className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700'
                >Cancel</button>
            </div>
        </div>
    </div>
    <div className='max-w-2xl mx-auto shadow border-b'>
        <AuthDetails />
    </div>
    </>
  )
}

export default UpdateOrder