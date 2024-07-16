import React, { useState } from "react";
import Modal from "./components/Modal";
import InnerModal from "./components/InnerModal";
import InnerModalTwo from "./components/InnerModalTwo";

const App = () => {
  const [isOuterModalOpen, setOuterModalOpen] = useState(false);
  const [isInnerModalOpen, setInnerModalOpen] = useState(false);
  const [isInnerModalTwo, setInnerModalTwo] = useState(false);

  return (
    <div className="App">
      <div className="flex flex-row-reverse container mx-auto flex justify-between py-2 mr-24">
        <nav className="space-x-4 text-hijau-guys text-xs font-bold font-montserrat">
          <a href="#programstudi" className="hover:text-gray-300">
            PROGRAM STUDI
          </a>
          <a href="#siakad" className="hover:text-gray-300">
            SIAKAD
          </a>
          <a href="#streaming" className="hover:text-gray-300">
            STREAMING
          </a>
          <a href="#akademik" className="hover:text-gray-300">
            AKADEMIK
          </a>
          <a href="#akreditasi" className="hover:text-gray-300">
            AKREDITASI
          </a>
          <a href="#kontak" className="hover:text-gray-300">
            KONTAK
          </a>
          <a href="#tracek" className="hover:text-gray-300">
            TRACER
          </a>
        </nav>
      </div>
      <header className="bg-hijau-guys text-white py-5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-20 h-7">
            <img
              src="/cobaan.png"
              alt="Logo"
              className="cursor-pointer"
              onClick={() => setOuterModalOpen(true)}
            />
          </div>
          <nav className="space-x-4 text-xs font-bold font-montserrat mr-20">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              Agenda
            </a>
            <a href="#services" className="hover:text-gray-300">
              Berita
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Karya Mahasiswa
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Lowongan
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Teknologi
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Angket
            </a>
          </nav>
        </div>
      </header>
      <section
        className="bg-cover bg-center h-96 text-white flex items-center justify-center"
        style={{ backgroundImage: "url(/cobaan2.jpeg)" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg font-montserrat">
          <h2 className="text-4xl font-bold mb-4">
            Selamat Datang di Fakultas Sains dan Teknologi
          </h2>
          <p className="text-xl">Universitas Ibrahimy</p>
        </div>
      </section>
      <section id="about" className="bg-gray-200 py-8">
        <div className="bg-gray-200 container mx-auto flex justify-between">
          <nav className="text-black text-xl font-bold font-montserrat">
            <a href="#programstudi" className="hover:text-gray-300 underline">
              KABAR TERBARU
            </a>
          </nav>
        </div>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 py-2">
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">
                  Headless UI
                </span>
                Completely unstyled, fully accessible UI components
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  Completely unstyled, fully accessible UI components, designed
                  to integrate beautifully with Tailwind CSS.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Completely unstyled, fully accessible UI components
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="/cobaan2.jpeg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-purple-500">
                  Heroicons
                </span>
                Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  A set of 450+ free MIT-licensed SVG icons. Available as basic
                  SVG icons and via first-party React and Vue libraries.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Beautiful hand-crafted SVG icons, by the makers of Tailwind
                  CSS.
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="/cobaan4.jpeg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-cyan-500">
                  Hero Patterns
                </span>
                Seamless SVG background patterns by the makers of Tailwind CSS.
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Seamless SVG background patterns by the makers of Tailwind
                  CSS.
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="/cobaan3.jpeg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
        </ul>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 py-2">
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-indigo-500">
                  Headless UI
                </span>
                Completely unstyled, fully accessible UI components
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  Completely unstyled, fully accessible UI components, designed
                  to integrate beautifully with Tailwind CSS.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Completely unstyled, fully accessible UI components
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="/cobaan2.jpeg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-purple-500">
                  Heroicons
                </span>
                Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  A set of 450+ free MIT-licensed SVG icons. Available as basic
                  SVG icons and via first-party React and Vue libraries.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Beautiful hand-crafted SVG icons, by the makers of Tailwind
                  CSS.
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="/cobaan4.jpeg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="mb-1 block text-sm leading-6 text-cyan-500">
                  Hero Patterns
                </span>
                Seamless SVG background patterns by the makers of Tailwind CSS.
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Seamless SVG background patterns by the makers of Tailwind
                  CSS.
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="/cobaan3.jpeg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
        </ul>
      </section>
      <footer className="bg-hijau-guys text-white py-3">
        <div className="container mx-auto flex justify-between items-center text-sm"></div>
      </footer>
      <Modal isOpen={isOuterModalOpen} onClose={() => setOuterModalOpen(false)}>
        <h2 className="text-2xl mb-4 text-center">Pilih Dahulu...!</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setInnerModalOpen(true)}
        >
          Login
        </button>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
          onClick={() => setInnerModalTwo(true)}
        >
          Register
        </button>

        <InnerModal
          isOpen={isInnerModalOpen}
          onClose={() => setInnerModalOpen(false)}
        >
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="cursor-pointer object-contain h-20 w-25"
                  onClick={() => setOuterModalOpen(true)}
                />
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Form Login Administrator
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form action="">
                    <div className="mb-4">
                      <label className="block mb-2 font-bold font-montserrat">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 font-bold font-montserrat">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setInnerModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setInnerModalOpen(false)}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </InnerModal>
        <InnerModalTwo
          isOpen={isInnerModalTwo}
          onClose={() => setInnerModalTwo(false)}
        >
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <img
                  src="src/logo.png"
                  alt="Logo"
                  className="cursor-pointer object-contain h-20 w-25"
                  onClick={() => setOuterModalOpen(true)}
                />
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Form Register Administrator
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form action="">
                    <div className="mb-4">
                      <label className="block mb-2 font-bold font-montserrat">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 font-bold font-montserrat">
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 font-bold font-montserrat">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setInnerModalTwo(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setInnerModalTwo(false)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </InnerModalTwo>
      </Modal>
    </div>
  );
};

export default App;
