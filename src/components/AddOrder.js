import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderService from '../services/OrderService';
import AuthDetails from './auth/AuthDetails';

const AddOrder = () => {

    const [order, setOrder] = useState(
        {
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
            jobInfo: "",
            fileUrl: "",
        }
    );

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setOrder({...order, [e.target.name]: value});
    }

    const saveOrder = (e) => {
        //disable page refresh
        e.preventDefault();

        //handle api with axios, create service then hit
        OrderService.saveOrder(order).then((response) => {
            console.log(response);
            navigate("/orderList");
        }).catch((error)=>{
            console.log(error);
        });
    }

    const clearDetails = (e) => {
        e.preventDefault();
        setOrder(
            {
                id: "",
                firstName: "",
                lastName: "",
                emailId: "",
                jobInfo: "",
                fileUrl: "",
            }
        );
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
                <h1>Add New Order</h1>
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
                onClick={saveOrder}
                className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700'
                >Save</button>
                <button 
                onClick={clearDetails}
                className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700'
                >Clear</button>
            </div>
        </div>
    </div>
    <div className='max-w-2xl mx-auto shadow border-b'>
        <AuthDetails />
    </div>
    </>
  )
}

export default AddOrder;