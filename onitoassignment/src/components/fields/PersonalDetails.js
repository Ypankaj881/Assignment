import React from "react";


function PersonalDetails(props) {
    console.log(props)
    console.log("idtype", props.formState.errors.govtIssuedId)
    return (
        <div>
            <h1 className="text-xl font-semibold">PersonalDetails</h1>
            <div className=" flex flex-wrap gap-10">
                <div className="flex gap-5">
                    <label>Name</label>
                    <input {...props.register('name', { required: true })} className="border" placeholder="Enter Name" />
                    {props.formState.errors.name && <p>{props.formState.errors.name.message}</p>}
                </div>
                <div className="flex gap-5">
                    <label>Date of Birth or Age</label>
                    <input {...props.register('dateOfBirthOrAge', { required: true })} className="border" placeholder="DD/MM/YY or Age in Years" />
                    {props.formState.errors.dateOfBirthOrAge && <p>{props.formState.errors.dateOfBirthOrAge.message}</p>}
                </div>
                <div className="flex gap-5">
                    <label>Sex</label>
                    <select {...props.register('sex', { required: true })} placeholder="Enter Sex" className="p-1 border-gray-300  rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                    {props.formState.errors.sex && <p>Sex is required.</p>}
                </div>
                <div className="flex gap-5">
                    <label>Mobile</label>
                    <input {...props.register('mobile')} className="border" placeholder="Enter Mobile" />
                    {props.formState.errors.mobile && <p>{props.formState.errors.mobile.message}</p>}
                </div>
                <div className="flex gap-5">
                    <label>Govt Issued Id</label>
                    <select {...props.register('govtIssuedIdType')} placeholder="Id Type" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Aadhar</option>
                        <option>PAN</option>
                    </select>
                    <input {...props.register('govtIssuedId')} className="border" placeholder="Enter Govt ID" />
                    {props.formState.errors.govtIssuedId && <p>{props.formState.errors.govtIssuedId.message}</p>}
                </div>

            </div>
        </div>
    );
}

export default PersonalDetails;
