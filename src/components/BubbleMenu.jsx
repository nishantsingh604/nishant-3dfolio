import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SOCIAL_ITEMS = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    ariaLabel: "GitHub",
    rotation: -8,
    hoverStyles: { bgColor: "#333", textColor: "black" }
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    ariaLabel: "LinkedIn",
    rotation: 8,
    hoverStyles: { bgColor: "#0a66c2", textColor: "black" }
  },
  {
    label: "Twitter",
    href: "https://twitter.com/your-username",
    ariaLabel: "Twitter",
    rotation: -6,
    hoverStyles: { bgColor: "#1da1f2", textColor: "black" }
  }
];

export default function ConnectMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      // show overlay
      gsap.set(overlay, { display: "flex" });
      gsap.set(bubbles, { scale: 0 });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * 0.12;
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.5)"
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power3.out"
            },
            "-=0.4"
          );
        }
      });
    } else {
      // hide overlay
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in"
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
        }
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Toggle Button */}
      <nav className="absolute top-8 left-0 right-0 flex justify-center z-[1001]">
        <button
          onClick={handleToggle}
          className="px-6 py-3 rounded-full bg-black text-white shadow-lg"
        >
          {isMenuOpen ? "Close" : "Connect"}
        </button>
      </nav>

      {/* Overlay with socials */}
      <div
        ref={overlayRef}
        className="absolute inset-0 hidden items-center justify-center z-[1000] bg-white/80 backdrop-blur-md"
      >
        <ul className="list-none flex flex-wrap justify-center gap-4">
          {SOCIAL_ITEMS.map((item, idx) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel || item.label}
                className="px-6 py-4 rounded-full bg-white shadow-md text-lg transition duration-300 hover:scale-105"
                style={{
                  ["--hover-bg"]: item.hoverStyles?.bgColor,
                  ["--hover-color"]: item.hoverStyles?.textColor
                }}
                ref={(el) => {
                  if (el) bubblesRef.current[idx] = el;
                }}
              >
                <span
                  ref={(el) => {
                    if (el) labelRefs.current[idx] = el;
                  }}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
