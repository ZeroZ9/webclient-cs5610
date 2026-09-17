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

import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
       <input type="text" id="wd-search-assignment" placeholder="Search for Assignments" />{" "}
       <button id="wd-add-assignment-group">+ Group</button> {" "}
       <button id="wd-add-assignment">+ Assignment</button> <br />

       <h4 id="wd-assignments-title" style={{ display: "inline-block" }}>ASSIGNMENTS 40% of Total</h4> {" "}<button>+</button>
      <ul id="wd-assignment-list">
        <AssignmentItem cid={cid} aid="1" title="A1 ENV + HTML" details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="2" title="A2 CSS + TAILWIND" details="Multiple Modules | Not available until May 13 at 12:00am |
Due May 20 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="3" title="A A3 JS + REACT" details="Multiple Modules | Not available until May 20 at 12:00am |
Due May 27 at 11:59pm | 100 pts" />
      </ul>
    </div>
  );
}