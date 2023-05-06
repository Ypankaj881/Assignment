import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Table() {
    const [fetchedData, setFechtedData] = useState([]);

    useEffect(() => {
        fetaDataFunction();
    }, []);

    const fetaDataFunction = async () => {
        axios
            .get("http://localhost:5000/api/getdata")
            .then((data) => {
                if (data.data.success) {
                    setFechtedData(data.data.data);
                } else {
                    return;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Link to="/">Go to Form</Link>

            <table
                id="example"
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sex
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mobile
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            GovID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Guardian Detail
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nationality
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {fetchedData.map((val) => {
                        return (
                            <tr
                                key={val._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4">{val.name}</td>
                                <td className="px-6 py-4">{val.dateOfBirthOrAge}</td>
                                <td className="px-6 py-4">{val.sex}</td>
                                <td className="px-6 py-4">{val.mobile}</td>
                                <td className="px-6 py-4">{val.address}</td>
                                <td className="px-6 py-4">{val.govtIssuedId}</td>
                                <td className="px-6 py-4">{val.guardianName}</td>
                                <td className="px-6 py-4">{val.nationality}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
