import { Outlet } from "react-router-dom";

export default function Registration() {
  return (
    <div className=" mx-auto grid max-w-[1450px] grid-cols-12 gap-4 px-4">
      <div className="col-span-6 grid grid-rows-[auto,1fr] py-4">
        <img src={"/logo.svg"} alt="logo" />
        <div className=" w- self-center justify-self-center">
          <Outlet />
        </div>
      </div>
      <div className="col-span-6 h-screen py-4">
        <img
          src="/img.png"
          alt="testimonials"
          className="h-full w-full rounded-[32px] object-cover"
        />
      </div>
    </div>
  );
}
