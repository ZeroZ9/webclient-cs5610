"use client";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import "../kambaz.css";
import "@/app/labs/lab2/tailwind/utilities.css";


const links = [
  { label: "Signin", path: "signin" },
  { label: "Signup", path: "signup" },
  { label: "Profile", path: "profile" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map(({ label, path }) => {
        const base = `/account/${path}`;
        const isActive = pathname === base || pathname.startsWith(base + "/");
        return (
          <Link
            key={path}
            href={`/account/${path}`}
            id={`wd-account-${path}-link`}
            className={
              isActive
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
