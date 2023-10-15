import React, { Component } from "react";
import { FaCode, FaCamera, FaPalette } from "react-icons/fa";
class Interest extends Component {
  render() {
    return (
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h1 className="font-bold text-2xl mb-5 md:text-3xl lg:text-3xl text-dark">
                Interest
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-center mt-10 lg:mt-40">
            <div className="w-full px-4 mb-7 md:w-1/2 lg:w-1/3">
              <div
                className="w-20 h-20  rounded-full flex justify-center items-center border border-slate-950 mx-auto animate-bounce-slow text-slate-950 
                    hover:border-brown hover:bg-brown hover:text-white"
              >
                <FaCode className=" w-10 h-10 fill-current" />
              </div>
              <div className="flex justify-center ">
                <p className="font-semibold text-xl mb-3 lg:text-2xl lg:pt-10 text-dark">
                  Web Developer
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-7 md:w-1/2 lg:w-1/3 ">
              <div
                className="w-20 h-20  rounded-full flex justify-center items-center border border-slate-950 mx-auto animate-bounce-slow text-slate-950 
                    hover:border-brown hover:bg-brown hover:text-white"
              >
                <FaPalette className="w-10 h-10 fill-current" />
              </div>
              <div className="flex justify-center ">
                <p className="font-semibold text-xl mb-3 lg:text-2xl lg:pt-10 text-dark">
                  Web Desain
                </p>
              </div>
            </div>
            <div className="w-full px-4 mb-7 md:w-1/2 lg:w-1/3 ">
              <div
                className="w-20 h-20  rounded-full flex justify-center items-center border border-slate-950 mx-auto animate-bounce-slow text-slate-950 
                    hover:border-brown hover:bg-brown hover:text-white"
              >
                <FaCamera className="w-10 h-10 fill-current" />
              </div>
              <div className="flex justify-center ">
                <p className="font-semibold text-xl mb-3 lg:text-2xl lg:pt-10 text-dark">
                  Photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Interest;
