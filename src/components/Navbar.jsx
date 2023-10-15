import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    const navItems = [
      { path: "/", title: "Home" },
      { path: "/about", title: "About" },
      { path: "/experience", title: "Experience" },
      { path: "/skills", title: "Skills" },
      { path: "/interest", title: "Interest" },
      { path: "/award", title: "Award" },
    ];
    return (
      <header className="fixed w-full px-12 z-30 h-24 flex items-center bg-slate-200 ">
        <div className="flex flex-row items-center w-full justify-between">
          <Link path={"/"}>
            <h1 className="text-2xl">Bagas Raihan Nur Fahrezy</h1>
          </Link>

          <nav className="flex gap-x-12 font-semibold">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-slate-800 hover:text-green-500 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
