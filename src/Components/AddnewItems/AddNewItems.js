import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewItems.css';

const AddNewItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3000/bigData.json', data)
            .then(res => {
                if (res.data) {
                    alert('new Employee added');
                    reset();
                }
                
        })
    }
    return (
        <div className='add-service my-5'>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="First_Name" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Last_Name" />
                <textarea {...register("description")} placeholder="Description"/>
                <input type="email" {...register("price")} placeholder="email"/>
                <input {...register("img")} placeholder="Product Image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewItems;