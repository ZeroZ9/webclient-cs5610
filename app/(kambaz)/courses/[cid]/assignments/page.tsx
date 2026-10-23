// import Link from "next/dist/client/link";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <input type="text" id="wd-search-assignment" placeholder="Search for Assignments" />{" "}
//       <button id="wd-add-assignment-group">+ Group</button> {" "}
//       <button id="wd-add-assignment">+ Assignment</button> <br />

//       <h4 id="wd-assignments-title" style={{ display: "inline-block" }}>ASSIGNMENTS 40% of Total</h4> {" "}<button>+</button>
//       <ul id="wd-assignment-list">

//       </ul>
//     </div>
//   );
// }

// import AssignmentItem from "./AssignmentItem";

// export default async function Assignments({
//   params,
// }: {
//   params: Promise<{ cid: string }>;
// }) {
//   const { cid } = await params;
//   return (
//     <div id="wd-assignments">
//        <input type="text" id="wd-search-assignment" placeholder="Search for Assignments" />{" "}
//        <button id="wd-add-assignment-group">+ Group</button> {" "}
//        <button id="wd-add-assignment">+ Assignment</button> <br />

//        <h4 id="wd-assignments-title" style={{ display: "inline-block" }}>ASSIGNMENTS 40% of Total</h4> {" "}<button>+</button>
//       <ul id="wd-assignment-list">
//         <AssignmentItem cid={cid} aid="1" title="A1 ENV + HTML" details="Multiple Modules | Not available until May 6 at 12:00am |
// Due May 13 at 11:59pm | 100 pts" />
//         <AssignmentItem cid={cid} aid="2" title="A2 CSS + TAILWIND" details="Multiple Modules | Not available until May 13 at 12:00am |
// Due May 20 at 11:59pm | 100 pts" />
//         <AssignmentItem cid={cid} aid="3" title="A A3 JS + REACT" details="Multiple Modules | Not available until May 20 at 12:00am |
// Due May 27 at 11:59pm | 100 pts" />
//       </ul>
//     </div>
//   );
// }

import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import * as db from "../../../database";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid,
  );
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          className="inline-flex items-center rounded border bg-white px-2 py-0.5 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={cid}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
          />
        ))}
      </ul>
    </div>
  );
}
