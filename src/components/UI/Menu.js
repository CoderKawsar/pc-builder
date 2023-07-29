import Link from "next/link";
import React from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";

function Menu() {
  return (
    <div className="navbar bg-gray-200 h-20 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/pc-builder">PC Builder</Link>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href="/categories/cpu">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="/categories/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/power-supply">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="/categories/storage-device">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/categories/others">Others</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src={logo} width={40} height={40} alt="PC BUILDER" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/pc-builder">PC Builder</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
                <li>
                  <Link href="/categories/cpu">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="/categories/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/power-supply">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="/categories/storage-device">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/categories/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
