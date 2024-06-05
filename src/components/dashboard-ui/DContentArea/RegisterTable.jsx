/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

import {
  Button,
  Card,
  CardFooter,
  IconButton,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import { useMyPatientRegistersQuery } from "../../../redux/features/form/formApi";
import moment from "moment";
import { iDownload, iView } from "../../../utils/icons";
import ViewRegisterInfo from "./RegisterTable-ui/ViewRegisterInfo";
import PdfMain from "./RegisterTable-ui/pdf-ui/PdfMain";
import { ScaleLoader } from "react-spinners";
import { handleDownload } from "../../../lib/globalService";
import { h7formData, resH7From } from "../../../utils/data";
import { saveAs } from "file-saver";

const TABLE_HEAD = [
  "Name",
  "Phone",
  "Martial Status",
  "Address",
  "Date",
  "Issued ID",
  "Insurance Card",
  "H7 Form",
  "Action",
];
const viewItems = [
  { id: 1, name: "Form 1", value: "F1" },
  { id: 2, name: "Form 2", value: "F2" },
  { id: 3, name: "Form 3", value: "F3" },
  { id: 4, name: "Full View", value: "All" },
];

const RegisterTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, refetch, isLoading } = useMyPatientRegistersQuery({
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

  const [isPrfOne, setIsPrfOne] = useState(false);
  const [isPrfTwo, setIsPrfTwo] = useState(false);
  const [isPrfThree, setIsPrfThree] = useState(false);
  const [prfData, setPrfData] = useState(null);
  const [printOrder, setPrintOrder] = useState("");

  const [formData, setFormData] = useState(null);

  const handleView = (data, view) => {
    if (view === "F1") {
      setIsPrfOne(true);
    } else if (view === "F2") {
      setIsPrfTwo(true);
    } else if (view === "F3") {
      setIsPrfThree(true);
    } else if (view === "All") {
      setIsPrfOne(true);
      setIsPrfTwo(true);
      setIsPrfThree(true);
    }

    if (data) {
      setPrfData(data);
    }
  };

  const handleClose = () => {
    setIsPrfOne(false);
    setIsPrfTwo(false);
    setIsPrfThree(false);
    setPrfData(null);
    setPrintOrder("");
  };

  const handlePdfAction = (data, value) => {
    if (value && data) {
      setPrintOrder(value);
      setFormData(data);
    }
  };

  const saveAsFile = (xmlString, fileName) => {
    const blob = new Blob([xmlString], { type: "text/xml;charset=utf-8" });
    saveAs(blob, fileName);
  };

  const h7FormDownload = async (name) => {
    saveAsFile(resH7From, name);
    // const data = h7formData;
    // await fetch(`http://110.39.184.210:5443/ADTMessages`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data?.messageXML) {
    //       saveAsFile(data?.messageXML, name);
    //     } else {
    //       saveAsFile(resH7From, name);
    //     }
    //   });
  };

  return (
    <>
      {/* <PdfFOne data={data?.data[0].prfOneData} /> */}
      <Card className="w-full max-w-[1400px] mx-auto flex-grow pt-1 mb-4 h-full flex flex-col justify-between text-current">
        <table className="w-full min-w-max table-auto text-left overflow-scroll">
          <thead className="bg-primary h-fit text-center">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 text-white p-4"
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
          {data?.data?.length > 0 && !isLoading && (
            <tbody className="max-h-full flex-grow text-center">
              {data?.data?.map((item, index) => {
                return (
                  <tr key={index} className="h-fit even:bg-blue-gray-50/50">
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.prfOneData?.patient_information?.first_name}
                      </Typography>
                    </td>
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {
                          item?.prfOneData?.patient_information
                            ?.primary_phone_number
                        }
                      </Typography>
                    </td>
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.prfOneData?.patient_information?.martial_status}
                      </Typography>
                    </td>
                    <td
                      className={`p-4 border-b border-blue-gray-50 max-w-[300px]`}
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item?.prfOneData?.patient_information?.street_address}
                      </Typography>
                    </td>
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {moment(item?.prfOneData?.createdAt).format(
                          "DD MMM YYYY"
                        )}
                      </Typography>
                    </td>
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      {item?.prfOneData?.patient_information?.picture && (
                        <Button
                          onClick={() =>
                            handleDownload(
                              item?.prfOneData?.patient_information?.picture
                            )
                          }
                          className="font-medium bg-blue-600 rounded px-2 py-1 text-xs normal-case"
                        >
                          Download
                        </Button>
                      )}
                    </td>
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      {item?.prfOneData?.insurance_information?.front_picture &&
                        item?.prfOneData?.insurance_information
                          ?.back_picture && (
                          <Popover>
                            <PopoverHandler>
                              <Button className="font-medium bg-blue-600 rounded px-2 py-1 text-xs normal-case">
                                Download
                              </Button>
                            </PopoverHandler>
                            <PopoverContent className="w-32 h-fit p-1 grid grid-cols-1 bg-blue-gray-100 rounded border">
                              <Button
                                onClick={() =>
                                  handleDownload(
                                    item?.prfOneData?.insurance_information
                                      ?.front_picture
                                  )
                                }
                                className="font-medium bg-blue-600 rounded-sm px-2 py-1 text-xs normal-case"
                              >
                                Front Part
                              </Button>
                              <Button
                                onClick={() =>
                                  handleDownload(
                                    item?.prfOneData?.insurance_information
                                      ?.back_picture
                                  )
                                }
                                className="font-medium bg-blue-600 rounded-sm px-2 py-1 text-xs normal-case mt-1"
                              >
                                Back Part
                              </Button>
                            </PopoverContent>
                          </Popover>
                        )}
                    </td>

                    {/* //* h7 form */}
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      <Popover placement="bottom">
                        <PopoverHandler>
                          <IconButton
                            size="sm"
                            className="bg-pink-600 shadow-none rounded"
                          >
                            <div className="w-5">{iDownload}</div>
                          </IconButton>
                        </PopoverHandler>
                        <PopoverContent className="w-32 h-fit p-1 grid grid-cols-1 bg-blue-gray-100 rounded border">
                          <Button
                            onClick={() => h7FormDownload("hfrom.txt")}
                            className="font-medium bg-blue-600 rounded-sm px-2 py-3 text-xs normal-case"
                          >
                            As .Txt
                          </Button>
                          <Button
                            onClick={() => h7FormDownload("hfrom.xml")}
                            className="font-medium bg-blue-600 rounded-sm px-2 py-3 text-xs normal-case mt-1"
                          >
                            As .Xml
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </td>
                    <td className={`p-4 border-b border-blue-gray-50`}>
                      <div className="flex items-center justify-center gap-3">
                        <Popover>
                          <PopoverHandler>
                            <IconButton
                              size="sm"
                              className="font-medium bg-blue-600 rounded"
                            >
                              <div className="w-5">{iView}</div>
                            </IconButton>
                          </PopoverHandler>
                          <PopoverContent className="w-32 h-fit p-1 grid grid-cols-1 bg-primary">
                            {viewItems?.map((vi, i) => (
                              <Button
                                onClick={() => handleView(item, vi.value)}
                                key={i}
                                className="w-full h-10 rounded-none shadow-none bg-primary hover:bg-darkPrimary"
                              >
                                {vi.name}
                              </Button>
                            ))}
                          </PopoverContent>
                        </Popover>

                        <Popover>
                          <PopoverHandler>
                            <IconButton
                              size="sm"
                              className="bg-primary shadow-none rounded"
                            >
                              <div className="w-5">{iDownload}</div>
                            </IconButton>
                          </PopoverHandler>
                          <PopoverContent className="w-32 h-fit p-1 grid grid-cols-1 bg-primary">
                            {viewItems?.map((vi, i) => (
                              <Button
                                onClick={() => handlePdfAction(item, vi.value)}
                                key={i}
                                className="w-full h-10 rounded-none shadow-none bg-primary hover:bg-darkPrimary"
                              >
                                {vi.name}
                              </Button>
                            ))}
                          </PopoverContent>
                        </Popover>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <ScaleLoader color="#993132" />
          </div>
        ) : (
          <>
            {data?.data?.length < 1 && (
              <div className="flex justify-center items-center">
                <h1>Not Found</h1>
              </div>
            )}
          </>
        )}

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 h-fit">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {data?.pagination?.page} of {data?.pagination?.totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              className="bg-primary text-white rounded"
              size="sm"
              onClick={handlePreviousClick}
            >
              Previous
            </Button>
            <Button
              className={`bg-primary text-white rounded`}
              size="sm"
              onClick={handleNextClick}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      <ViewRegisterInfo
        prfData={prfData}
        isClose={handleClose}
        isPrfOne={isPrfOne}
        isPrfTwo={isPrfTwo}
        isPrfThree={isPrfThree}
      />

      <PdfMain data={formData} setData={setFormData} printOrder={printOrder} />
    </>
  );
};

export default RegisterTable;
