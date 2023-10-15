import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section className="pt-24">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-dark">
                Bagas Raihan Nur Fahrezy
              </h1>

              <h2 className="font-semibold  text-base mb-6 lg:text-xl text-brown">
                Web Development and Web Design
              </h2>

              <a
                href="#"
                className="text-base font-semibold  px-3 py-4 rounded-2xl text-cream bg-dark hover:shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out"
              >
                Say Hello 👋
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 ">
              <div className="relative mt-10 lg:mt-9 lg:right-0 hover:scale-105 transition">
                <img
                  src="./src/assets/me.png"
                  alt="Bagas"
                  className="max-w-full mx-auto"
                />
                <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width="360"
                    height="360"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#113946"
                      d="M57.4,-34.4C70.3,-11,73.6,16.7,62.4,37.7C51.3,58.7,25.6,73.1,-1.5,73.9C-28.6,74.8,-57.2,62.1,-71.5,39.3C-85.9,16.5,-86,-16.6,-71.7,-40.9C-57.4,-65.2,-28.7,-80.7,-3.2,-78.9C22.3,-77,44.6,-57.8,57.4,-34.4Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
