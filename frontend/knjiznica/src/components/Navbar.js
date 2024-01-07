import React from "react";
import markoMarulic from "../images/markoMarulic.png";

const Navbar = () => {
  const jwtTokenCookie = localStorage.getItem("token") || null;

  const handleOdjava = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  };
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Knjižnica Marko Marulić</span>
            <img
              className="h-8 w-auto"
              src={markoMarulic}
              alt="Logo knjiznice"
              style={{ width: "60px", height: "60px" }}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Otvori main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="http://localhost:3000/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Početna
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Knjige
          </a>
          <a
            href="/addbook"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Dodaj knjigu
          </a>
        </div>
        {!jwtTokenCookie ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="http://localhost:3000/register"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Registracija{" "}
              <span aria-hidden="true" style={{ marginRight: "10px" }}></span>
            </a>
            <a
              href="http://localhost:3000/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Prijava <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="http://localhost:3000/profile"
              className="text-sm font-semibold leading-6 text-gray-900"
              style={{ marginRight: "10px" }}
            >
              Profil
            </a>
            <a
              href="http://localhost:3000/login"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleOdjava}
            >
              Odjava <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </nav>

      {/* Mobile menu, show/hide based on menu open state. */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Knjižnica Marko Marulić</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Zatvori main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="http://localhost:3000/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Početna
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Knjige
                </a>
                <a
                  href="http://localhost:3000/profile"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Profil
                </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="http://localhost:3000/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Prijava <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
