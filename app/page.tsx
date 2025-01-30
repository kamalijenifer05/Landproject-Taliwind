"use client";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Navbar */}
      <div className="container mx-auto bg-purple-300">
        <nav className="flex justify-between p-3">
          <div className="flex items-center gap-2 text-2xl font-bold text-indigo-900">
            <img
              src="/images/team-building.png"
              alt="image"
              className="w-14 h-auto rounded-full bg-blue-400"
            />
            <a href="#">Jeni</a>
          </div>
          <ul className="hidden md:flex gap-6 items-center">
            <li><a href="#" className="link">Services</a></li>
            <li>
              <a href="#" className="link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-indigo-300 hidden md:block border-indigo-500 border-2 rounded-full px-5 text-indigo-900 py-o hover:bg-slate-400 hover:font-bold ">
            Signup
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="36"
              fill="currentColor"
              className="bi bi-list mr-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-6 items-center">
          <li>
            <a href="#" className="link">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contact
            </a>
          </li>
          <li>
            <button className="bg-indigo-300 hidden md:block border-indigo-500 border-2 rounded-full px-5 text-indigo-900 py-o hover:bg-slate-400 hover:font-bold ">
              Signup
            </button>
          </li>
        </ul>
      </div>

      {/* Spotlight Section */}
      <div className="container mx-auto mt-14 flex flex-col md:flex-row justify-between items-center text-justify">
        <div className="md:w-1/2">
          <p className="text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            voluptas minima ratione dolor ipsa explicabo aspernatur illo
            repellat nihil, porro sint magnam! Pariatur quos fugiat, itaque
            sapiente sequi animi atque!
          </p>
          <button className="mt-7 bg-indigo-200 p-3 border-2 border-indigo-600 rounded text-sky-950 font-semibold hover:bg-sky-100">
            Get Started
          </button>
        </div>
        <div className="md:w-1/3 h-auto">
          <img src="/images/hero.png" alt="images" />
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto flex flex-col md:flex-row mt-14 gap-10">
        <div className="md:w-1/3 flex flex-col items-center">
          <h1 className="font-semibold text-indigo-700">
            Mobile App Development
          </h1>
          <div>
            <img
              src="/images/img2.png"
              alt="images"
              className="py-4 w-[300px] h-[200px] "
            />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            ullam! Cumque atque eum iure. Labore est velit, obcaecati harum
            voluptatibus aliquam porro quis beatae quam.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center">
          <h1 className="font-semibold text-indigo-700">Web Development</h1>
          <div>
            <img
              src="/images/img1.png"
              alt="images"
              className="py-4 w-[300px] h-[200px]"
            />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            ullam! Cumque atque eum iure. Labore est velit, obcaecati harum
            voluptatibus aliquam porro quis beatae quam.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center">
          <h1 className="font-semibold text-indigo-700">Design</h1>
          <div>
            <img
              src="/images/img3.png"
              alt="images"
              className="py-4 w-[300px] h-[200px]"
            />
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            ullam! Cumque atque eum iure. Labore est velit, obcaecati harum
            voluptatibus aliquam porro quis beatae quam.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-14 container mx-auto">
        <div className="text-center">
          <h1 className="text-indigo-700 font-bold text-3xl">Pricing</h1>
          <p className="text-xl py-2">
            Offers Multiple PAckages for Monthly and Yearly Subscriptions
          </p>
          <p className="text-xl">Featured Plans Are Here</p>
        </div>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 md:gap-60 ">
          <div className="bg-purple-100 h-auto w-80 border-indigo-600 border-2 rounded-xl p-4 relative hover:shadow-xl hover:shadow-fuchsia-200 mt-16">
            <h1 className="text-indigo-600 font-bold text-2xl text-center">
              $999
            </h1>
            <h2 className="text-orange-500 text-lg text-center pt-2">Basic</h2>
            <p className="text-lg pt-2 text-center">
              All the basic features are included
            </p>
            <ul className="leading-relaxed px-10 py-3">
              <li className="flex items-center  gap-2 pt-3 text-base">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/dash.svg"
                    alt="image"
                    className="bg-fuchsia-300 rounded-full"
                  />
                </div>
                Customized Features
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base pb-4 ">
                <div>
                  <img
                    src="/images/dash.svg"
                    alt="image"
                    className="bg-fuchsia-300 rounded-full "
                  />
                </div>
                Dual Infrastructure
              </li>
            </ul>
            <button className="bg-fuchsia-100 px-3 py-2 border-2 border-indigo-600 rounded-3xl text-indigo-600 font-semibold hover:bg-sky-100 absolute transform -translate-y-1 translate-x-2">
              Get Started
            </button>
          </div>

          <div className="bg-purple-100 h-auto w-80 mt-5 border-indigo-600 border-2 rounded-xl p-4 relative hover:shadow-xl hover:shadow-fuchsia-200">
            <h1 className="text-indigo-600 font-bold text-2xl text-center">
              $999
            </h1>
            <h2 className="text-orange-500 text-lg text-center pt-2">Basic</h2>
            <p className="text-lg pt-2 text-center">
              All the basic features are included
            </p>
            <ul className="leading-relaxed px-10 py-3">
              <li className="flex items-center  gap-2 pt-3 text-base">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/dash.svg"
                    alt="image"
                    className="bg-fuchsia-300 rounded-full"
                  />
                </div>
                Customized Features
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base pb-4 ">
                <div>
                  <img
                    src="/images/dash.svg"
                    alt="image"
                    className="bg-fuchsia-300 rounded-full "
                  />
                </div>
                Dual Infrastructure
              </li>
            </ul>
            <button className="bg-fuchsia-100 px-3 py-2 border-2 border-indigo-600 rounded-3xl text-indigo-600 font-semibold hover:bg-sky-100 absolute transform translate-y-9 translate-x-2">
              Get Started
            </button>
          </div>

          <div className="bg-purple-100 mt-16 h-auto w-80 border-indigo-600 border-2 rounded-xl p-4 relative hover:shadow-xl hover:shadow-fuchsia-200">
            <h1 className="text-indigo-600 font-bold text-2xl text-center">
              $999
            </h1>
            <h2 className="text-orange-500 text-lg text-center pt-2">Basic</h2>
            <p className="text-lg pt-2 text-center">
              All the basic features are included
            </p>
            <ul className="leading-relaxed px-10 py-3">
              <li className="flex items-center  gap-2 pt-3 text-base">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/img4.svg"
                    alt="image"
                    className="bg-indigo-300 rounded-full"
                  />
                </div>
                Core Business System
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base ">
                <div>
                  <img
                    src="/images/dash.svg"
                    alt="image"
                    className="bg-fuchsia-300 rounded-full"
                  />
                </div>
                Customized Features
              </li>
              <li className="flex items-center  gap-2 pt-3 text-base pb-4 ">
                <div>
                  <img
                    src="/images/dash.svg"
                    alt="image"
                    className="bg-fuchsia-300 rounded-full "
                  />
                </div>
                Dual Infrastructure
              </li>
            </ul>
            <button className="bg-fuchsia-100 px-3 py-2 border-2 border-indigo-600 rounded-3xl text-indigo-600 font-semibold hover:bg-sky-100 absolute transform -translate-y-1 translate-x-2">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="mt-16 container mx-auto">
        <div className="text-center">
          <p className="text-indigo-600 font-semibold">Recent Updates</p>
          <h2 className="font-thin text-5xl pt-3">Featured Stories</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="bg-purple-300 h-auto p-4 hover:shadow-2xl">
            <div className="w-full">
              <img src="/images/hero.png" alt="image" />
            </div>
            <div className="text-center py-4">
              <h4 className="text-indigo-900 font-bold text-lg">
                Google Rankings
              </h4>
              <p className="font-thin py-3">
                Make it connect with every client worldwide
              </p>
              <a
                href="#"
                className="text-purple-700 font-bold hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-purple-300 h-auto p-4 hover:shadow-2xl">
            <div className="w-full">
              <img src="/images/hero.png" alt="image" />
            </div>
            <div className="text-center py-4">
              <h4 className="text-indigo-900 font-bold text-lg">
                Communication
              </h4>
              <p className="font-thin py-3">
                Best communication for the business
              </p>
              <a
                href="#"
                className="text-purple-700 font-bold hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-purple-300 h-auto p-4 hover:shadow-2xl">
            <div className="w-full">
              <img src="/images/hero.png" alt="image" />
            </div>
            <div className="text-center py-4">
              <h4 className="text-indigo-900 font-bold text-lg">
                Remote Working
              </h4>
              <p className="font-thin py-3">
                Make it connect with every client worldwide
              </p>
              <a
                href="#"
                className="text-purple-700 font-bold hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-14 bg-purple-100 h-auto">
        <div className="container mx-auto md:py-20 py-10 flex flex-col md:flex-row">
          {/* 25% */}
          <div className="w-1/4">
            <a href="#" className="text-indigo-900 font-bold text-3xl">
              Jenifer
            </a>
          </div>

          {/* 50% */}
          <div className="w-1/2 flex flex-col md:flex-row">
            <div className="pr-24">
              <h3 className="text-xl font-bold text-purple-900">Account</h3>
              <ul className="py-4 leading-loose text-purple-700 text-lg">
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <a href="">Register</a>
                </li>
                <li>
                  <a href="">Cart</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
              </ul>
            </div>
            <div className="pr-24">
              <h3 className="text-xl font-bold text-purple-900">Quick Link</h3>
              <ul className="py-4 leading-loose text-purple-700 text-lg">
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms Of Use</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="pr-24">
              <h3 className="text-xl font-bold text-purple-900">Support</h3>
              <ul className="py-4 leading-loose text-purple-700 text-lg">
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Subscribe</a>
                </li>
                <li>
                  <a href="">Email</a>
                </li>
              </ul>
            </div>
          </div>
          {/* 25% */}
          <div className="w-1/4 flex gap-8 justify-end">
            <a href="">
              <img
                src="/images/facebook (2).svg"
                alt="image"
                className="w-10 h-10"
              />
            </a>
            <a href="">
              <img
                src="/images/whatsapp.svg"
                alt="image"
                className="w-10 h-10"
              />
            </a>
            <a href="">
              <img
                src="/images/twitter.svg"
                alt="image"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
