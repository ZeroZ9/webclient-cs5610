// import Link from "next/link";

// export default function KambazNavigation() {
//   return (
//     <div id="wd-kambaz-navigation">
//       <a
//         href="https://www.northeastern.edu/"
//         id="wd-neu-link"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Northeastern
//       </a>
//       <br />
//       <Link href="/account" id="wd-account-link">
//         Account
//       </Link>
//       <br />
//       <Link href="/dashboard" id="wd-dashboard-link">
//         Dashboard
//       </Link>
//       <br />
//       <Link href="/dashboard" id="wd-course-link">
//         Courses
//       </Link>
//       <br />
//       <Link href="/calendar" id="wd-calendar-link">
//         Calendar
//       </Link>
//       <br />
//       <Link href="/inbox" id="wd-inbox-link">
//         Inbox
//       </Link>
//       <br />
//       <Link href="/labs" id="wd-labs-link">
//         Labs
//       </Link>
//       <br />
//     </div>
//   );
// }

"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import Image from "next/image";

const links = [
  { label: "Account",   path: "/account",   id: "wd-account-link",   icon: FaRegCircleUser },
  { label: "Dashboard", path: "/dashboard", id: "wd-dashboard-link", icon: AiOutlineDashboard },
  { label: "Courses",   path: "/dashboard",   id: "wd-course-link",    icon: LiaBookSolid },
  { label: "Calendar",  path: "/calendar",  id: "wd-calendar-link",  icon: IoCalendarOutline },
  { label: "Inbox",     path: "/inbox",     id: "wd-inbox-link",     icon: FaInbox },
  { label: "Labs",      path: "/labs",      id: "wd-labs-link",      icon: LiaCogSolid },
];

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <Image src="/images/NEU.png" alt="NEU logo" width={120} height={120} />
      {links.map(({ label, path, id, icon: Icon }) => {
        const isActive = pathname.startsWith(path);
        // Account icon is white, but turns red when active so it shows on the white background
        const iconColor =
          id === "wd-account-link" && !isActive ? "text-white" : "text-red-600";
        return (
          <Link
            key={id}
            href={path}
            id={id}
            className={`block py-3 text-center text-sm no-underline ${
              isActive ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className={`inline-block text-3xl ${iconColor}`} />
            <br />
            {label}
          </Link>
        );
      })}
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}


