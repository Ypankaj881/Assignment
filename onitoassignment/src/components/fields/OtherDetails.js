import React from "react";

function OtherDetails(props) {
  return (
    <div className="">
      <h1 className="text-lg font-semibold  w-fit border-b-black border-b-2">
        Other Details
      </h1>
      <div className=" flex flex-wrap gap-3 py-3">
        <div className="flex gap-5">
          <label>Occupation</label>
          <input
            {...props.register("occupation")}
            className="border border-gray-400 outline-none px-1 rounded"
            placeholder="Enter Occupation"
          />
        </div>
        <div className="flex gap-5">
          <label>Religion</label>
          <select
            {...props.register("relegion")}
            placeholder="Enter Religion"
            className="px-1 border-gray-400 rounded outline-none border bg-white w-40"
          >
            <option>Hindu</option>
            <option>Sikh</option>
          </select>
        </div>
        <div className="flex gap-5">
          <label>Maritial Status</label>
          <select
            {...props.register("maritialStatus")}
            placeholder="Enter Maritial Status"
            className="px-1 border-gray-400 rounded outline-none border bg-white w-40"
          >
            <option>Married</option>
            <option>Unmarried</option>
          </select>
        </div>
        <div className="flex gap-5">
          <label>Blood Group</label>
          <select
            {...props.register("bloodGroup")}
            placeholder="Group"
            className="px-1 border-gray-400 rounded outline-none border bg-white w-40"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>
        <div className="flex gap-5">
          <label>Nationality</label>
          <input
            {...props.register("nationality")}
            className="border border-gray-400 outline-none px-1 rounded"
            placeholder="Enter Nationality"
          />
        </div>

        <button onClick={() => props.handleResetField("nationality")}>
          clear
        </button>
      </div>
    </div>
  );
}

export default OtherDetails;
