"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
const routes = [
  { name: "Home", path: "/" },
  {
    name: "All Events",
    path: "/events/all",
  },
];
const Header = () => {
  const activePathname = usePathname();
  return (
    <div className="flex justify-between items-center border-white/10 border-b h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              className={cn(
                "hover:text-white flex items-center transform relative",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                },
              )}
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathname === route.path && (
                <motion.div
                  className="absolute bg-accent h-1 w-full bottom-0"
                  layoutId="header-active-link"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
