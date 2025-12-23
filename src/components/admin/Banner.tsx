import { assets } from "../../assets/assets";
import Logo from "../../constants/Logo";


const Banner = () => {
  return (
    <div className="bg-[#1f1f51] text-white px-[10%] py-[10%]">
      <div className="text-center md:text-left md:max-w-[452px]">
        {/* Logo */}
        <Logo textColor="white"/>

        {/* Text */}
        <div className="w-full flex flex-col gap-[20px] mt-[2.5rem] md:mt-[5rem] mb-[0rem] md:mb-0 items-center md:items-start">
          <h1 className="w-full max-w-[398px] text-[18px] md:text-3xl font-bold">
            Welcome to Arenas Group of Schools Administration Portal
          </h1>
          <p className="w-full max-w-[452px] text-[11px] md:text-sm">
            Streamlining operations for academic excellence, staff management, and administrative efficiency.
          </p>
        </div>

        {/* Illustration */}
        <div className="w-[65%] flex justify-center items-center mx-auto hidden md:block">
          <img
            src={assets.authImg}
            alt="School Bus Illustration"
            className="object-cover w-[100%]"
          />
        </div>

        {/* Curve */}
        {/* <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
}

export default Banner