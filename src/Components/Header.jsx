import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";

function Header() {
  return (
    <>
      <header className="bg-white text-black">
        <div className="xl:container xl:mx-auto flex flex-row items-center justify-between text-center py-4">
          <div>
            <h1 className="text-xl font-">Donovan McCollum</h1>
          </div>
          <div className="flex gap-4 ">
            <a href="" className="hover:text-gray-400 text-3xl">
              <ImGithub />
            </a>
            <a href="" className="hover:text-gray-400 text-3xl">
              <ImLinkedin />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
