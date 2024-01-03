import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { iClose, iTick } from "../../utils/icons";
import { useLocation } from "react-router-dom";

const SignatureInput = ({ img, setValue }) => {
  const [open, setOpen] = useState(true);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#3B3B3B");
  const [size, setSize] = useState("3");
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const timeout = useRef(null);
  const [cursor, setCursor] = useState("default");

  const { pathname } = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");

    canvas.height = 70;
    canvas.width = 300;

    const canvasimg = localStorage.getItem("canvasimg");
    if (canvasimg) {
      var image = new Image();
      ctx.current = canvas.getContext("2d");
      image.onload = function () {
        ctx.current.drawImage(image, 0, 0);
        setIsDrawing(false);
      };
      image.src = canvasimg;
    }
  }, [ctx]);

  const startPosition = (event) => {
    setIsDrawing(true);
    draw(event);
  };

  const movePosition = (event) => {
    if (isDrawing) {
      draw(event);
    }
  };

  const endPosition = () => {
    setIsDrawing(false);
    ctx.current.beginPath();
  };

  const draw = (event) => {
    const clientX = event.type.startsWith("touch")
      ? event.touches[0].clientX
      : event.clientX;
    const clientY = event.type.startsWith("touch")
      ? event.touches[0].clientY
      : event.clientY;

    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");
    ctx.current.lineWidth = size;
    ctx.current.lineCap = "round";
    ctx.current.strokeStyle = color;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.current.lineTo(x, y);
    ctx.current.stroke();
    ctx.current.beginPath();
    ctx.current.moveTo(x, y);

    if (timeout.current !== undefined) clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      var base64ImageData = canvas.toDataURL("image/png");
      localStorage.setItem("canvasimg", base64ImageData);
    }, 400);
  };

  const clearCanvas = () => {
    localStorage.removeItem("canvasimg");
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setValue("");
    setOpen(true);

    if (timeout.current !== undefined) clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      var base64ImageData = canvas.toDataURL("image/png");
      localStorage.setItem("canvasimg", base64ImageData);
    }, 400);
  };

  const uploadImageToImageBB = async () => {
    const canvas = canvasRef.current;
    const base64ImageData = canvas.toDataURL("image/png").split(",")[1];

    try {
      const formData = new FormData();
      formData.append("image", base64ImageData);
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=a7d7f71dd880a5f41e280ad8662af557",
        formData
      );

      if (response.data && response.data.data && response.data.data.url) {
        toast.success("Signature Add Success");
        setValue(response.data.data.url);
        setOpen(false);
      } else {
        alert("Signature Add Failed");
      }
    } catch (error) {
      console.error("Error uploading image to ImageBB:", error);
    }
  };

  useEffect(() => {
    clearCanvas();
  }, []);

  return (
    <div className="relative w-full max-w-[200px]">
      <div
        className={`relative  ${
          !open
            ? "hidden"
            : pathname?.includes("/dashboard")
            ? "hidden"
            : "block"
        }`}
      >
        <canvas
          style={{
            cursor: cursor,
            overflow: "hidden",
            border: "1px solid #993132",
            maxHeight: "150px",
          }}
          onTouchStart={startPosition}
          onTouchMove={movePosition}
          onTouchEnd={endPosition}
          onMouseDown={startPosition}
          onMouseMove={movePosition}
          onMouseUp={endPosition}
          ref={canvasRef}
        />
      </div>
      {img && !open && <img src={img} className="w-[150px] " alt="" />}
      {img && pathname?.includes("/dashboard") && (
        <img src={img} className="w-[150px] " alt="" />
      )}

      {!pathname?.includes("/dashboard") && (
        <div
          className={`grid ${
            open ? "grid-cols-2" : "grid-cols-1"
          } w-fit cursor-pointer absolute -top-[24px] -right-[102px] bg-[#993133] hover:bg-[#8c3335]`}
        >
          <div
            onClick={clearCanvas}
            className=" text-white w-7 p-1 h-6 flex justify-center items-center"
          >
            {iClose}
          </div>
          {open && (
            <div
              className="btn btn-success cursor-pointer text-white w-7 p-1 h-6 flex justify-center items-center bg-green-600 hover:bg-green-700"
              onClick={uploadImageToImageBB}
            >
              {iTick}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignatureInput;
