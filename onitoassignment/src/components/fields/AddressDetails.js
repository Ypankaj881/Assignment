import React from "react";

function AddressDetails(props) {
  return (
    <div className="">
      <h1 className="text-lg font-semibold w-fit border-b-black border-b-2">
        Address Details
      </h1>
      <div className=" flex flex-wrap gap-3 pt-3">
        <div className="flex gap-5">
          <label>Address</label>
          <input
            {...props.register("address")}
            className="border border-gray-400 outline-none px-1 rounded"
            placeholder="Enter Address"
          />
        </div>
        <div className="flex gap-5">
          <label>State</label>
          <select
            {...props.register("state")}
            placeholder="Enter State"
            className="px-1 border-gray-400 outline-none rounded border bg-white w-40"
          >
            <option>Maharashtra</option>
            <option>Uttar Pradesh</option>
            <option>Delhi</option>
            <option>West Bengal</option>
            <option>Karnatka</option>
          </select>
        </div>
        <div className="flex gap-5">
          <label>City</label>
          <select
            {...props.register("city")}
            placeholder="Enter city/town/village"
            className="px-1 border-gray-400 rounded outline-none border bg-white w-40"
          >
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Lucknow</option>
            <option>Delhi</option>
            <option>Kolkata</option>
          </select>
        </div>
        <div className="flex gap-5">
          <label>Country</label>
          <input
            {...props.register("country")}
            className="border border-gray-400 outline-none px-1 rounded"
            placeholder="Enter Country"
          />
        </div>
        <div className="flex gap-5">
          <label>Pincode</label>
          <input
            {...props.register("pincode")}
            className="border border-gray-400 outline-none px-1 rounded"
            placeholder="Enter Pincode"
          />
        </div>
      </div>
    </div>
  );
}

export default AddressDetails;
