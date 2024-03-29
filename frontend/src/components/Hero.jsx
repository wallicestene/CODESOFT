/* eslint-disable react/prop-types */
import { Search } from "lucide-react";
// import HeroImage from "/HeroImage.png";
import Banner from "./Banner";
const Hero = ( { data, isLoading, error }) => {
  return (
    <div>
      <section className="hero relative">
        <div className="imgContainer relative overflow-hidden">
          <img
            src={"https://images.unsplash.com/photo-1525540810550-5032f5d191b1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            className=" w-screen h-screen object-cover object-center"
            loading="lazy"
            alt="Her image"
          />
        <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 from-0% via-slate-900 via-[20%]" />
          
        </div>
        <div className="absolute w-full grid place-items-center top-1/2 left-1/2 -translate-x-1/2 font-Open-Sans">
          <div className=" h-full lg:w-1/2 w-11/12 rounded-md bg-gray-50 flex items-center flex-row-reverse p-1">
            <div className=" px-3 py-1 text-center bg-Primary-500 rounded-md text-white cursor-pointer">
              <span>Search</span>
            </div>
            <input
              className=" w-full h-full outline-none bg-transparent indent-2 border-none"
              type="text"
              placeholder="Search blog"
            />
            <div className=" p-1">
              <Search />
            </div>
          </div>
          <div className="  text-white my-5 flex-wrap">
    
            <div>
              <ul className=" flex gap-x-5 flex-wrap">
                <li className=" border border-white py-1 px-3 rounded-md bg-Secondary-950/5 overflow-hidden backdrop-blur-md">
                  Design
                </li>
                <li className=" border border-white py-1 px-3 rounded-md  bg-Secondary-950/5 overflow-hidden backdrop-blur-md">
                  Technology
                </li>
                <li className=" border border-white py-1 px-3 rounded-md  bg-Secondary-950/5 overflow-hidden backdrop-blur-md">
                  Coding
                </li>
              </ul>
            </div>
          </div>
          <Banner data={data}  isLoading={isLoading} error={error}/>
        </div>
      </section>
    </div>
  );
};

export default Hero;
