import React from 'react'

function ContactDetails(props) {
    return (
        <div >
            <h1 className="text-xl font-semibold">Contact Details</h1>
            <div className=" flex flex-wrap gap-10">
                <div className="flex gap-5">
                    <label>Guardian Details</label>
                    <select {...props.register('guardianLabel')} placeholder="Enter Label" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                    <input {...props.register('guardianName')} className="border" placeholder="Enter Gaurdian Name" />
                </div>
                <div className="flex gap-5">
                    <label>Email</label>
                    <input {...props.register('email')} type='email' className="border" placeholder="Enter Email" />
                </div>

                <div className="flex gap-5">
                    <label>Emergency Contact Number</label>
                    <input {...props.register('emergencyContact')} type="number" className="border" placeholder='Enter Emergency No' />
                    {props.formState.errors.emergencyContact && <p>{props.formState.errors.emergencyContact.message}</p>}

                </div>
            </div>
        </div>
    )
}

export default ContactDetails