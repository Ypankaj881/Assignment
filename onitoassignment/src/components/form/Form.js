import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import PersonalDetails from "../fields/PersonalDetails";
import ContactDetails from "../fields/ContactDetails";
import AddressDetails from "../fields/AddressDetails";
import OtherDetails from "../fields/OtherDetails";
import { Link } from "react-router-dom";
import axios from "axios";

function Form() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object({
    name: yup.string().min(4).max(20).required(),
    dateOfBirthOrAge: yup.number().positive().integer().required(),
    mobile: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter a valid phone number"
      )
      .max(10),
    emergencyContact: yup
      .string()
      .matches(phoneRegExp, "Emergency phone number is not valid")
      .required(),
    govtIssuedIdType: yup.string(),
    govtIssuedId: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(12)
      .max(12)
      .when("govtIssuedIdType", {
        is: (aCheckbox) => aCheckbox === "PAN",
        then: () =>
          yup
            .string()
            .max(10)
            .min(10)
            .required("I am required now the checkbox is checked")
            .matches(/^[a-zA-Z0-9]*$/),
      }),
  });

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleResetField = (key) => {
    resetField(key);
  };

  const handleRefresh = () => {
    reset();
  };

  const submit = async (data) => {
    const postResponse = await axios.post(
      "http://localhost:5000/api/adddata",
      data
    );

    if (postResponse.data.success) {
      alert(postResponse.data.message);
    }
    reset();
  };

  return (
    <div className="flex justify-center items-center w-[100%] pt-6">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[75%] border-2 px-5 py-2 bg-slate-50"
      >
        <div className=" text-end">
          <Link className=" underline text-blue-600" to="/users">
            Show Table
          </Link>
        </div>
        <div className="flex flex-col flex-wrap gap-3 text-sm ">
          <PersonalDetails
            {...{
              register,
              formState: { errors },
            }}
          />
          <ContactDetails
            {...{
              register,
              formState: { errors },
            }}
          />
          <AddressDetails
            {...{
              register,
              formState: { errors },
              handleResetField,
            }}
          />
          <OtherDetails
            {...{
              register,
              handleResetField,
              formState: { errors },
            }}
          />
        </div>
        <div className="text-end">
          <input
            className=" text-red-500 border border-red-600 hover:bg-red-600 hover:text-white cursor-pointer w-24 font-bold py-2 px-4 rounded mr-6"
            type="button"
            value="CANCEL"
            onClick={handleRefresh}
          />
          <input
            className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
