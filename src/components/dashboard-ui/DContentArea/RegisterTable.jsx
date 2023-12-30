import { useEffect, useState } from "react";

import { Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import { useMyPatientRegistersQuery } from "../../../redux/features/form/formApi";
import moment from "moment";

const TABLE_HEAD = ["Name", "Phone", "Salutation", "Address", "Date", "Action"];

const RegisterTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch } = useMyPatientRegistersQuery({
    page: currentPage,
    pageSize: 10,
  });

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < data?.pagination?.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    refetch();
  }, [currentPage]);
  return (
    <Card className="w-full flex-grow pt-4 h-full flex flex-col justify-between">
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
          Page {data?.pagination?.page} of {data?.pagination?.totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={handlePreviousClick}>
            Previous
          </Button>
          <Button variant="outlined" size="sm" onClick={handleNextClick}>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterTable;
