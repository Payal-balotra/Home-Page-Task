import { useEffect, useState } from "react";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto close mobile menu when desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full bg-white shadow-md">

      {/* TOP BAR */}
      <div className="hidden md:block bg-teal-700 text-white text-center py-1.5 text-xs">
        Refer and earn extra discount
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden md:flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 gap-4 w-full max-w-[1400px] mx-auto">

        {/* LOGO */}
        <img
          src="/logo.svg"
          alt="Gemlay"
          className="h-8 md:h-12 w-auto object-contain shrink-0"
        />

        {/* SEARCH BAR (shows icon on md, full input on lg+) */}
        <div className="flex justify-center flex-1 px-2 lg:px-6 min-w-0 items-center">
          {/* SEARCH ICON for md (hidden on lg) */}
          <a href="/search" className="block md:block lg:hidden mr-3">
            <img src="/search.png" alt="search" className="h-5 w-5" />
          </a>

          {/* full input on lg and up with inline search icon */}
          <div className="hidden lg:block w-full max-w-[450px] relative">
            <img src="/search.png" alt="search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70 pointer-events-none" />
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full border border-gray-300 rounded-full py-2 lg:py-2.5 pl-10 pr-4 text-xs lg:text-sm outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
        </div>

        {/* RIGHT ICONS — show only Wishlist & Cart on md; show all on lg+ */}
        <div className="flex items-center gap-4 lg:gap-5 text-gray-700 min-w-0">

          {/* icons visible only on lg and up */}
          <span className="hidden lg:flex items-center gap-4">
            <IconItem src="/gift.svg" label="GSP" href="/gsp" />
            <Divider />
            <IconItem src="/Black.png" label="OFFERS" href="/offers" />
            <Divider />
          </span>

          {/* always-visible (md+) icons: wishlist and cart */}
          <IconItem src="/wishlist.png" label="WISHLIST" href="/wishlist" />
          <Divider className="hidden md:inline" />

          <IconItem src="/bag.svg" label="CART" href="/bag" badge={1} />
          <Divider className="hidden lg:inline" />

          {/* extra icons only at lg+ */}
          <span className="hidden lg:flex items-center gap-4">
            <IconItem src="/qr.svg" label="VERIFY REPORT" href="/verify" />
            <Divider />
            <ProfileItem src="/profile.svg" name="Ashish Sood" href="/profile" />
          </span>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:block bg-[#0A1F3D] border-t border-gray-700">
        <ul className="max-w-7xl mx-auto flex justify-center items-center gap-6 lg:gap-8 xl:gap-10 py-3.5 text-[11px] lg:text-xs font-medium text-white tracking-wider flex-wrap px-4">
          <NavItem>NEW ARRIVAL</NavItem>
          <NavItem>RINGS</NavItem>
          <NavItem>EARRINGS</NavItem>
          <NavItem>PENDANTS</NavItem>
          <NavItem>BRACELETS &amp; BANGLES</NavItem>
          <NavItem>SOLITAIRES</NavItem>
          <NavItem>GOLD COINS</NavItem>
          <NavItem>ALL JEWELLERY</NavItem>
        </ul>
      </nav>

      {/* MOBILE HEADER */}
      <div className="md:hidden px-3 py-3 flex items-center justify-between">

        <button
          className="text-2xl text-gray-700 w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* MOBILE LOGO */}
        <img
          src="/logo.svg"
          alt="Gemlay"
          className="h-8 w-auto max-w-[140px] shrink-0 object-contain"
        />

        {/* MOBILE ICONS */}
        <div className="flex items-center gap-2 shrink-0">
          <MobileIcon src="/search.png" href="/search.png" />
          <MobileIcon src="/wishlist.png" href="/wishlist.png" />

          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            <a href="/bag.svg">
              <img src="/bag.svg" className="h-5 w-5" alt="cart" />
              <span className="absolute top-0 right-0 h-4 w-4 text-[9px] bg-teal-700 text-white rounded-full flex items-center justify-center">
                1
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <nav className="border-t bg-white md:hidden">
          <ul className="flex flex-col py-3 text-sm font-medium text-gray-800">
            <MobileNavItem>New Arrival</MobileNavItem>
            <MobileNavItem>Rings</MobileNavItem>
            <MobileNavItem>Earrings</MobileNavItem>
            <MobileNavItem>Pendants</MobileNavItem>
            <MobileNavItem>Bracelets & Bangles</MobileNavItem>
            <MobileNavItem>Solitaires</MobileNavItem>
            <MobileNavItem>Gold Coins</MobileNavItem>
            <MobileNavItem>All Jewellery</MobileNavItem>
          </ul>
        </nav>
      )}

      {/* HERO BANNER */}
      <section className="w-full">
        <img src="/front.png" alt="" className="w-full h-auto object-cover" />
      </section>

    </header>
  );
}

/* ================= ICON COMPONENTS ================= */

function IconItem({ src, label, badge, href }) {
  return (
    <div className="relative flex flex-col items-center shrink-0 cursor-pointer hover:text-teal-700">
      <a href={href} className="flex flex-col items-center">
        <img src={src} className="h-5 lg:h-6 object-contain mb-1" alt={label} />
        <span className="text-[8px] lg:text-[10px] text-center whitespace-nowrap">
          {label}
        </span>
      </a>

      {badge && (
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-teal-700 text-white text-[8px] rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </div>
  );
}

function ProfileItem({ src, name, href }) {
  return (
    <a href={href} className="flex items-center gap-2 shrink-0 cursor-pointer">
      <img src={src} className="h-6 w-6 lg:h-7 lg:w-7 rounded-full object-cover" alt={name} />
      <span className="text-[10px] lg:text-sm whitespace-nowrap hover:text-teal-700">
        Hi, {name}
      </span>
    </a>
  );
}

const Divider = () => <span className="w-px h-6 bg-gray-300" />;

const NavItem = ({ children }) => (
  <li><a className="hover:text-teal-400 cursor-pointer">{children}</a></li>
);

const MobileNavItem = ({ children }) => (
  <li><a className="block px-6 py-2 hover:bg-gray-50">{children}</a></li>
);

const MobileIcon = ({ src, href }) => (
  <a href={href} className="w-8 h-8 flex items-center justify-center shrink-0">
    <img src={src} className="h-5 w-5" alt="" />
  </a>
);
