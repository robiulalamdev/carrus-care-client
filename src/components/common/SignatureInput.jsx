import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignatureInput = ({ img, setValue }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#3B3B3B");
  const [size, setSize] = useState("3");
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const timeout = useRef(null);
  const [cursor, setCursor] = useState("default");

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");

    canvas.height = 100;
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

  //   console.log(img);

  return (
    <>
      <div
        className={`relative w-full max-w-[200px] ${img ? "hidden" : "block"}`}
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
        <div className="flex px-2 gap-4 w-fit cursor-pointer absolute -top-[25px] -right-[102px] bg-[#993133]">
          <div onClick={clearCanvas} className=" text-white">
            X
          </div>
          <div
            className="btn btn-success cursor-pointer text-white"
            onClick={uploadImageToImageBB}
          >
            Save
          </div>
        </div>
      </div>
      {img && <img src={img} className="w-[150px]" alt="" />}
    </>
  );
};

export default SignatureInput;
