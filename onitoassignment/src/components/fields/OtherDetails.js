import React from 'react'

function OtherDetails(props) {
    return (
        <div>
            <h1 className="text-xl font-semibold">Other Details</h1>
            <div className=" flex flex-wrap gap-10">
                <div className="flex gap-5">
                    <label>Occupation</label>
                    <input {...props.register('occupation')} className="border" placeholder="Enter Occupation" />
                </div>
                <div className="flex gap-5">
                    <label>Religion</label>
                    <select {...props.register('relegion')} placeholder="Enter Religion" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label>Maritial Status</label>
                    <select {...props.register('maritialStatus')} placeholder="Enter Maritial Status" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label>Blood Group</label>
                    <select {...props.register('bloodGroup')} placeholder="Group" className="p-1 border-gray-300 rounded-sm border bg-white w-40">
                        <option>Male</option>
                        <option>FeMale</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <label>Nationality</label>
                    <input {...props.register('nationality')} className="border" placeholder="Enter Nationality" />
                </div>

                <button onClick={() => props.handleResetField("nationality")} >clear</button>
            </div>
        </div>
    )
}

export default OtherDetails