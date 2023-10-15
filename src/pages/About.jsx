import React, { Component } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

class About extends Component {
  render() {
    return (
      <section className="pt-36">
        <div className="container">
          <h1 className="mx-auto text-center font-bold text-dark text-2xl mb-10 lg:text-3xl">
            About Me
          </h1>
          <div className="flex flex-wrap mt-4">
            <div className="w-full px-4 mb-10 lg:w-1/2 hover:scale-90 transition">
              <img
                src="./src/assets/me-about.jpg"
                alt="Bagas"
                width="500"
              ></img>
            </div>
            <div className="w-full lg:w-1/2">
              <h4 className="font-semibold text-xl mb-3 text-dark lg:text-2xl lg:pt-10">
                About Me More!
              </h4>
              <p className="font-medium text-base text-brown mb-5 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quod neque totam incidunt vero esse molestiae ipsam
                adipisci accusantium quibusdam mollitia pariatur autem dolores
                provident maxime consequatur ipsa error assumenda necessitatibus
                natus, cumque ab. Consectetur dolorem commodi doloribus, nam
                reprehenderit, minima quae ullam temporibus corrupti aspernatur
                rem quis facere harum.
              </p>
              <h4 className="font-semibold text-xl mb-4 text-dark lg:text-2xl">
                Catch Me on
                <div className="flex flex-wrap mt-4">
                  <a
                    href="https://www.instagram.com/bagas_rnf/"
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-500 border-slate-500
                    hover:border-[#C13584] hover:bg-[#C13584] hover:text-white"
                  >
                    <FaInstagram className="fill-current" />
                  </a>
                  <a
                    href="https://github.com/bagasrnf"
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-500 border-slate-500
                    hover:border-[#000000] hover:bg-[#000000] hover:text-white"
                  >
                    <FaGithub className="fill-current" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bagas-raihan-nur-fahrezy-1a8349280/"
                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-500 border-slate-500
                    hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                  >
                    <FaLinkedin className="fill-current" />
                  </a>
                </div>
              </h4>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
