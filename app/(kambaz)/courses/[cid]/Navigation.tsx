// import Link from "next/link";

// export default function CourseNavigation({ cid }: { cid: string }) {
//   return (
//     <div id="wd-courses-navigation">
//       <Link href={`/courses/${cid}/home`} id="wd-course-home-link">
//         Home
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/modules`} id="wd-course-modules-link">
//         Modules
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/piazza`} id="wd-course-piazza-link">
//         Piazza
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/zoom`} id="wd-course-zoom-link">
//         Zoom
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/assignments`} id="wd-course-assignments-link">
//         Assignments
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/quizzes`} id="wd-course-quizzes-link">
//         Quizzes
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/grades`} id="wd-course-grades-link">
//         Grades
//       </Link>{" "}
//       <br />
//       <Link href={`/courses/${cid}/people/table`} id="wd-course-people-link">
//         People
//       </Link>{" "}
//       <br />
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../../kambaz.css";

const links = [
  { label: "Home",        section: "home" },
  { label: "Modules",     section: "modules" },
  { label: "Piazza",      section: "piazza" },
  { label: "Zoom",        section: "zoom" },
  { label: "Assignments", section: "assignments" },
  { label: "Quizzes",     section: "quizzes" },
  { label: "Grades",      section: "grades" },
  { label: "People",      section: "people", page: "people/table" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ label, section, page }) => {
        const base = `/courses/${cid}/${section}`;
        const isActive = pathname === base || pathname.startsWith(base + "/");
        return (
          <Link
            key={section}
            href={`/courses/${cid}/${page ?? section}`}
            id={`wd-course-${section}-link`}
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
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
