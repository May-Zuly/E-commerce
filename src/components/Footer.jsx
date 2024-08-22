import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-center py-3 text-white fixed-bottom">
            <p>© {currentYear} Flitry Phone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
