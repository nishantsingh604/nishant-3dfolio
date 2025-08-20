"use client";

import {
  Navbar,
  NavItems,
  NavBody,
 
  NavbarLogo,
  NavbarButton,
 
} from "../components/Navb.jsx";
import { useState } from "react";

const Navbard = () => {
  const navItems = [
    { name: "About", link: "#features" },
    { name: "Projects", link: "#pricing" },
    { name: "Contact", link: "#contact" }
  ];

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full mt-3 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              href={"https://github.com/nishantsingh604"}
            >
              Github
            </NavbarButton>
            <NavbarButton variant="primary">Resume</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        {/* <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav> */}
      </Navbar>
    </div>
  );
};



// ✅ Default export
export default Navbard;
