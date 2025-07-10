import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const links = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Portfolio Name */}
        <div className="text-3xl font-bold tracking-tight text-black">
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center text-lg font-medium">
  {links.map((link) => (
    <ScrollLink
      key={link.to}
      to={link.to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer text-black transition-colors hover:text-blue-600"
      onSetActive={(to) => setActive(to)}
    >
      {link.name}
    </ScrollLink>
  ))}
</nav>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
  <div className="md:hidden bg-white px-6 pb-4">
    {links.map((link) => (
      <ScrollLink
        key={link.to}
        to={link.to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="block py-2 text-lg font-medium cursor-pointer text-black transition-colors hover:text-blue-600"
        onSetActive={() => {
          setActive(link.to);
          setIsMenuOpen(false);
        }}
      >
        {link.name}
      </ScrollLink>
    ))}
  </div>
)}

    </header>
  );
};

export default Navbar;
