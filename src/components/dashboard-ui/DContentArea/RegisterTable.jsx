import React from "react";

import { Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import { useMyPatientRegistersQuery } from "../../../redux/features/form/formApi";
import moment from "moment";

const TABLE_HEAD = ["Name", "Phone", "Salutation", "Address", "Date", "Action"];

const RegisterTable = () => {
  const { data } = useMyPatientRegistersQuery();
  // console.log(data);
  return (
    <Card className="w-full pt-4 min-h-screen flex flex-col justify-between">
      <table className="w-full min-w-max table-auto text-left overflow-scroll">
        <thead className="bg-gray-900 h-fit">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-gray-900 text-white p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none text-white"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        {data?.data?.length > 0 ? (
          <tbody className="max-h-full flex-grow">
            {data?.data?.map((item, index) => {
              return (
                <tr key={index} className="h-fit">
                  <td className={`p-4 border-b border-blue-gray-50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item?.patient_information?.first_name}
                    </Typography>
                  </td>
                  <td className={`p-4 border-b border-blue-gray-50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item?.patient_information?.primary_phone_number}
                    </Typography>
                  </td>
                  <td className={`p-4 border-b border-blue-gray-50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item?.patient_information?.salutation}
                    </Typography>
                  </td>
                  <td className={`p-4 border-b border-blue-gray-50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item?.patient_information?.street_address}
                    </Typography>
                  </td>
                  <td className={`p-4 border-b border-blue-gray-50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {moment(item?.createdAt).format("DD MMM YYYY")}
                    </Typography>
                  </td>
                  <td className={`p-4 border-b border-blue-gray-50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      View
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <div>Not Found</div>
        )}
      </table>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 h-fit">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterTable;
