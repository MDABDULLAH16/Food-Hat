"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // 1. Is this the room we are currently in?
  // We check if the current path is EXACTLY the same as our link
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      // 2. We add dynamic styles (The "Glow" when active)
      className={`
        px-4 py-2 rounded-md transition-all
        ${
          isActive
            ? "bg-green-500 text-white font-bold" // How it looks when you are IN the room
            : "text-gray-600 hover:bg-green-100" // How it looks when you are NOT in the room
        }
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
