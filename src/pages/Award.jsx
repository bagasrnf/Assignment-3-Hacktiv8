import React, { Component } from "react";
class Award extends Component {
  render() {
    return (
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h1 className="font-bold text-2xl mb-5 lg:text-3xl">Award</h1>
            </div>
          </div>

          <div className="flex flex-wrap sm:justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 hover:scale-110 transition">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img
                  src="./src/assets/award1.jpg"
                  alt="Award 1"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 text-xl font-semibold">Web Design</h3>
                  <p className="font-medium text-base text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere velit repudiandae dolores commodi aliquid ratione qui
                    accusantium perferendis fuga animi.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 hover:scale-110 transition">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img
                  src="./src/assets/award2.jpg"
                  alt="Award 1"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 text-xl font-semibold">Web Design</h3>
                  <p className="font-medium text-base text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere velit repudiandae dolores commodi aliquid ratione qui
                    accusantium perferendis fuga animi.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 hover:scale-110 transition">
              <div className="bg-white rounded-xl shadow-lg mb-10 overflow-hidden">
                <img
                  src="./src/assets/award3.jpg"
                  alt="Award 1"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3 className="mb-3 text-xl font-semibold">Web Design</h3>
                  <p className="font-medium text-base text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere velit repudiandae dolores commodi aliquid ratione qui
                    accusantium perferendis fuga animi.
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

export default Award;
