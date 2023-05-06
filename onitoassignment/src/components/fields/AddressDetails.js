import React from 'react'

function AddressDetails(props) {


    return (
        <div>
            <h1 className="text-xl font-semibold">Address Details</h1>
            <div className=" flex flex-wrap gap-10">
                <div className="flex gap-5">
                    <label>Address</label>
                    <input {...props.register('address')} className="border" placeholder="Enter Address" />
                </div>
                <div className="flex gap-5">
                    <label>State</label>
                    <select {...props.register('state')} placeholder="Enter State" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label>City</label>
                    <select {...props.register('city')} placeholder="Enter city/town/village" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label>Country</label>
                    <input {...props.register('country')} className="border" placeholder="Enter Country" />
                </div>
                <div className="flex gap-5">
                    <label>Pincode</label>
                    <input {...props.register('pincode')} type="number" className="border" placeholder="Enter Pincode" />
                </div>


            </div>
        </div>
    )
}

export default AddressDetails