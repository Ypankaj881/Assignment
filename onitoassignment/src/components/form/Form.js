import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import PersonalDetails from '../fields/PersonalDetails';
import ContactDetails from '../fields/ContactDetails';
import AddressDetails from '../fields/AddressDetails';
import OtherDetails from '../fields/OtherDetails';
import { Link } from "react-router-dom";
import axios from 'axios';


function Form() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const schema = yup.object({
        name: yup.string().min(4).max(20).required(),
        dateOfBirthOrAge: yup.number().positive().integer().required(),
        mobile: yup
            .string()
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Enter a valid phone number"
            ).max(10),
        emergencyContact: yup.string().matches(phoneRegExp, 'Emergency phone number is not valid').required(),
        govtIssuedIdType: yup.string(),
        govtIssuedId: yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(12)
            .max(12).when("govtIssuedIdType", {
                is: (aCheckbox) => aCheckbox === "PAN",
                then: () => yup.string().max(10).min(10).required('I am required now the checkbox is checked').matches(/^[a-zA-Z0-9]*$/)
            })

    })



    const { register, handleSubmit, watch, resetField, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    console.log("formState", watch())

    const handleResetField = (key) => {
        resetField(key)
    }
    const submit = async (data) => {
        console.log("data", data)
        const data2 = await axios.post("http://localhost:5000/api/adddata", data)

        if (data2.success) {
            alert(data2.message)
        }

    }

    return (

        <div>
            <Link to="/users">Go to Table</Link>
            <form onSubmit={handleSubmit(submit)}>
                <div className='flex flex-col gap-10 w-1/2'>
                    <PersonalDetails {...{
                        register,
                        formState: { errors },
                    }} />
                    <ContactDetails {...{
                        register,
                        formState: { errors },
                    }} />
                    <AddressDetails {...{
                        register,
                        formState: { errors },
                        handleResetField
                    }} />
                    <OtherDetails {...{
                        register,
                        handleResetField,
                        formState: { errors },
                    }} />
                </div>

                <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" />

            </form>
        </div>


    )
}

export default Form