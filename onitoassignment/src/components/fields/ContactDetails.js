import React from "react";

function ContactDetails(props) {
  return (
    <div className="">
      <h1 className="text-lg font-semibold w-fit border-b-black border-b-2">
        Contact Details
      </h1>
      <div className=" flex flex-wrap gap-3 pt-3">
        <div>
          <div className="flex gap-5">
            <label>Guardian Details</label>
            <select
              {...props.register("guardianLabel")}
              placeholder="Enter Label"
              className="px-1 border-gray-400 rounded border bg-white w-24 outline-none"
            >
              <option>Mr.</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Miss</option>
            </select>
            <input
              {...props.register("guardianName")}
              className="border border-gray-400 outline-none px-1 rounded"
              placeholder="Enter Gaurdian Name"
            />
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <label>Email</label>
            <input
              {...props.register("email")}
              type="email"
              className="border border-gray-400 outline-none px-1 rounded"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <label>Emergency Number</label>
            <input
              {...props.register("emergencyContact")}
              className="border border-gray-400 outline-none px-1 rounded"
              placeholder="Enter Emergency No"
            />
          </div>
          {props.formState.errors.emergencyContact && (
            <p className="text-red-500 pt-1">
              {props.formState.errors.emergencyContact.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
