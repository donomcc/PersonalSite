import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";

function IntroSection() {
  return (
    <div>
      <section className="text-white">
        <div className="flex text-center items-center justify-between">
          <div className="flex flex-col w-100 px-7">
            <h2 className="text-3xl text-left">Hi, my name is</h2>
            <h1 className="text-5xl font-bold text-left">Donovan McCollum</h1>
            <p className="text-xl text-left">
              I'm a software engineer with a love for creating amazing
              applications and software. With my ninja-like programming skills,
              I enjoy taking on new challenges and creating innovative solutions
              to problems. Whether it's building a website from scratch or
              developing a complex software application, I'm always up for the
              challenge!
            </p>
            <div className="flex py-4 text-7xl gap-4">
              <a href="https://github.com/donomcc" target="_blank">
                <ImGithub className="transition ease-in-out hover:scale-110 cursor-pointer hover:text-tan" />
              </a>
              <a
                href="https://www.linkedin.com/in/donovanmccollum/"
                target="_blank"
              >
                <ImLinkedin className="transition ease-in-out hover:scale-110 cursor-pointer hover:text-tan" />
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://media.licdn.com/dms/image/C5603AQEm5PUjbgy1aA/profile-displayphoto-shrink_400_400/0/1626998423985?e=1682553600&v=beta&t=xTwAHiRPQmEeYEZEiF0orn6NysfQseJUVo4wyyOSrCw"
              alt="profile picture"
              className="profile"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
