import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3  h-[100vh] justify-center items-center rounded-tl-3xl rounded-br-3xl text-center sticky top-0 bg-[#f5be6b11]  ">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-3xl md:text-6xl uppercase font-extrabold text-wrap my-7 text-[#d4accc]">
          By Odisha, for odisha and of the odisha{" "}
        </h2>

        <Button
          gradientDuoTone="redToYellow"
          className="rounded-tl-xl rounded-bl-none bg-transparent"
        >
          <Link to="/login">Join Now.</Link>
        </Button>
      </div>
      <div className="p-7 flex-1 relative">
        <img src="/wallpaper2.avif" />
      </div>
    </div>
  );
}
