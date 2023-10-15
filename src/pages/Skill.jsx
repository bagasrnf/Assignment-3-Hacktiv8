import React, { Component } from "react";
import { FaCode, FaNetworkWired, FaPalette } from "react-icons/fa";
class Skill extends Component {
  render() {
    return (
      <section className=" pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h1 className="font-bold text-2xl text-dark mb-5 lg:text-3xl">
                Skills
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 hover:scale-110 transition">
              <div className="bg-white rounded-xl shadow-lg mb-10">
                <div className="py-8 px-6">
                  <FaPalette className="w-10 h-10" />
                  <h3 className="my-2 font-semibold text-xl text-dark">
                    Web Design
                  </h3>
                  <hr />
                  <p className="mt-2 font-medium text-base text-brown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum ex, quos iusto eaque similique, fugit esse doloremque,
                    deleniti nulla sit consectetur. Recusandae cumque voluptatum
                    commodi?
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 hover:scale-110 transition">
              <div className="bg-white rounded-xl shadow-lg mb-10">
                <div className="py-8 px-6">
                  <FaCode className="w-10 h-10" />
                  <h3 className="my-2 font-semibold text-xl text-dark">
                    Web Developer
                  </h3>
                  <hr />
                  <p className="mt-2 font-medium text-base text-brown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum ex, quos iusto eaque similique, fugit esse doloremque,
                    deleniti nulla sit consectetur. Recusandae cumque voluptatum
                    commodi?
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 hover:scale-110 transition">
              <div className="bg-white rounded-xl shadow-lg mb-10">
                <div className="py-8 px-6">
                  <FaNetworkWired className="w-10 h-10" />
                  <h3 className="my-2 font-semibold text-xl text-dark">
                    Network Engginering
                  </h3>
                  <hr />
                  <p className="mt-2 font-medium text-base text-brown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum ex, quos iusto eaque similique, fugit esse doloremque,
                    deleniti nulla sit consectetur. Recusandae cumque voluptatum
                    commodi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
