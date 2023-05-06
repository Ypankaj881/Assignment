import React from "react";

function PersonalDetails(props) {
  console.log(props);
  console.log("idtype", props.formState.errors.govtIssuedId);
  return (
    <div className="">
      <h1 className="text-lg font-semibold w-fit border-b-black border-b-2">
        PersonalDetails
      </h1>
      <div className=" flex flex-wrap gap-3 pt-3">
        <div>
          <div className="flex gap-5">
            <label>Name</label>
            <input
              {...props.register("name", { required: true })}
              className="border border-gray-400 outline-none rounded px-1 w-60"
              placeholder="Enter Name"
            />
          </div>
          {props.formState.errors.name && (
            <p className="text-red-500 pt-1">
              {props.formState.errors.name.message}
            </p>
          )}
        </div>
        <div>
          <div className="flex gap-5">
            <label>Date of Birth or Age</label>
            <input
              {...props.register("dateOfBirthOrAge", { required: true })}
              className="border border-gray-400 outline-none px-1 rounded"
              placeholder="DD/MM/YY or Age in Years"
            />
          </div>
          {props.formState.errors.dateOfBirthOrAge && (
            <p className="text-red-500 pt-1 w-80">
              {props.formState.errors.dateOfBirthOrAge.message}
            </p>
          )}
        </div>
        <div>
          <div className="flex gap-5">
            <label>Sex</label>
            <select
              {...props.register("sex", { required: true })}
              placeholder="Enter Sex"
              className=" border-gray-400 outline-none rounded border bg-white w-32"
            >
              <option>Male</option>
              <option>FeMale</option>
            </select>
          </div>
          {props.formState.errors.sex && (
            <p className="text-red-500 pt-1">Sex is required.</p>
          )}
        </div>
        <div>
          <div className="flex gap-5">
            <label>Mobile</label>
            <input
              {...props.register("mobile")}
              className="border border-gray-400 outline-none px-1 rounded"
              placeholder="Enter Mobile"
            />
          </div>
          {props.formState.errors.mobile && (
            <p className="text-red-500 pt-1">
              {props.formState.errors.mobile.message}
            </p>
          )}
        </div>
        <div>
          <div className="flex gap-5">
            <label>Govt Issued Id</label>
            <select
              {...props.register("govtIssuedIdType")}
              placeholder="Id Type"
              className="px-1 border-gray-400 rounded outline-none border bg-white w-36"
            >
              <option>Aadhar</option>
              <option>PAN</option>
            </select>
            <input
              {...props.register("govtIssuedId")}
              className="border border-gray-400 outline-none px-1 rounded w-60"
              placeholder="Enter Govt ID"
            />
          </div>
          {props.formState.errors.govtIssuedId && (
            <p className="text-red-500 pt-1">
              {props.formState.errors.govtIssuedId.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
