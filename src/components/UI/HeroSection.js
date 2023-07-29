import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(https://i.ibb.co/dfMtyP0/hero-5.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">PC Builder</h1>
          <p className="mb-5">
            Welcome to PC Builder! Build your dream computer with ease and
            confidence. Find high-quality PC components and expert guides for
            hassle-free shopping. Build your dream PC today!
          </p>
          <Link href="/build-pc" className="btn btn-primary">
            Build PC now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
