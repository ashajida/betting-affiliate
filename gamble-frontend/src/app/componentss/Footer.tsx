import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-dark text-light py-[80px]">
      <div className="container">
        <div className="flex justify-center items-center">
          <p className="text-light">&copy; CopyRight {date.getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
