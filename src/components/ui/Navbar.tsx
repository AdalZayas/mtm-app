/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { usePathname } from "next/navigation";
import React from "react";

function MTMNavbar() {
  // get current page path
  const currentPage = usePathname();

  const navItemClass = (path: string) =>
    currentPage === path
      ? "nav__item nav__item--active"
      : "nav__item nav__item--hover";

  const navItems = [
    // {
    //   name: "Temporada Actual",
    //   path: "/current-season",
    // },
    // {
    //   name: "Temporadas",
    //   path: "/seasons",
    // },
    // {
    //   name: "División de Ascenso",
    //   path: "/division-2",
    // },
    // {
    //   name: "Driver Of The Day",
    //   path: "/dotd",
    // },
    {
      name: "Coches",
      path: "/cars",
    },
    {
      name: "Pilotos",
      path: "/drivers",
    },

    // {
    //   name: "Calendario",
    //   path: "/calendar",
    // },
  ];

  return (
    <nav className="nav">
      <div className="nav__container">
        <a href="/" className="nav__brand">
          <span className="nav__brand-text">Mexican Touring Masters</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="nav__toggle nav__toggle--active"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="nav__menu" id="navbar-default">
          <ul className="nav__list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a key={index} className={navItemClass(item.path)} href={item.path}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MTMNavbar;
