// import Link from "next/link";

// export default async function AssignmentEditor({
//   params,
// }: {
//   params: Promise<{ cid: string }>;
// }) {
//   const { cid } = await params;
//   return (
//     <div id="wd-assignments-editor">
//       <label htmlFor="wd-name">Assignment Name</label>
//       <input id="wd-name" defaultValue="A1 - ENV + HTML" />
//       <br />
//       <br />
//       <textarea id="wd-description">
//         The assignment is available online Submit a link to the landing page of
//       </textarea>
//       <br />
//       <table>
//         <tbody>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-points">Points</label>
//             </td>
//             <td>
//               <input id="wd-points" defaultValue={100} />
//             </td>
//           </tr>
//           <tr>
//             <td colSpan={2}>
//               <label htmlFor="wd-group">Assignment Group</label>
//               <select id="wd-group">
//                 <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                 <option value="QUIZZES">QUIZZES</option>
//                 <option value="EXAMS">EXAMS</option>
//                 <option value="PROJECT">PROJECT</option>
//               </select>
//             </td>
//           </tr>

//           <tr>
//             <td colSpan={2}>
//               <label htmlFor="wd-display-grade-as">Display Grade</label>
//               <select id="wd-display-grade-as">
//                 <option value="PERCENTAGE">PERCENTAGE</option>
//                 <option value="LETTER">LETTER</option>
//               </select>
//             </td>
//           </tr>

//           <tr>
//             <td colSpan={2}>
//               <label htmlFor="wd-submission-type">Submission Type</label>
//               <select id="wd-submission-type">
//                 <option value="ONLINE">ONLINE</option>
//                 <option value="PAPER">PAPER</option>
//               </select>
//             </td>
//           </tr>

//           <tr>
//             <td colSpan={2}>
//               <label>Online Entry Options</label> <br />
//               <input type="checkbox" name="online-options" id="wd-text-entry" />
//               <label htmlFor="wd-text-entry">Text Entry</label>
//               <br />
//               <input type="checkbox" name="online-options" id="wd-website-url" />
//               <label htmlFor="wd-website-url">Website URL</label>
//               <br />
//               <input
//                 type="checkbox"
//                 name="online-options"
//                 id="wd-media-recordings"
//               />
//               <label htmlFor="wd-media-recordings">Media Recordings</label>
//               <br />
//               <input
//                 type="checkbox"
//                 name="online-options"
//                 id="wd-student-annotation"
//               />
//               <label htmlFor="wd-student-annotation">Student Annotation</label>
//               <br />
//               <input type="checkbox" name="online-options" id="wd-file-upload" />
//               <label htmlFor="wd-file-upload">File Upload</label>
//             </td>
//           </tr>

//           <tr>
//             <td colSpan={2}>
//               <label>Assign section</label> <br />
//               <label htmlFor="wd-assign-to">Assign to</label>
//               <select id="wd-assign-to">
//                 <option value="student">Student</option>
//               </select>
//               <br />
//               <label htmlFor="wd-due-date">Due Date</label>
//               <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
//               <br />
//               <label htmlFor="wd-available-from">Available From</label>
//               <input
//                 type="date"
//                 id="wd-available-from"
//                 defaultValue="2024-05-06"
//               />{" "}
//               <label htmlFor="wd-available-until">Available Until</label>
//               <input
//                 type="date"
//                 id="wd-available-until"
//                 defaultValue="2024-05-13"
//               />
//             </td>
//           </tr>

//           <tr>
//             <td colSpan={2}>
//               <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
//                 Cancel
//               </Link>{" "}
//               <Link href={`/courses/${cid}/assignments`} id="wd-save">
//                 Save
//               </Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label className="block" htmlFor="wd-name">
        Assignment Name
      </label>
      <input
        className="p-2 w-full md:w-[500px]"
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
      />
      <br />
      <br />
      <textarea
        className="mt-1 w-full h-[300px] md:w-[500px]"
        id="wd-description"
      >
        The assignment is available online Submit a link to the landing page of
        your Web application running on Vercel.
      </textarea>
      <br />
      <table className="pl-5 mt-3.5 [&_td]:py-2">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input className="ml-2" id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <div className="relative ml-2">
                <select
                  id="wd-group"
                  className="w-full appearance-none rounded border border-neutral-400 bg-white py-2 pl-2 pr-8"
                >
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
                <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500" />
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade</label>
            </td>
            <td>
              <div className="relative ml-2">
                <select
                  id="wd-display-grade-as"
                  className="w-full appearance-none rounded border border-neutral-400 bg-white py-2 pl-2 pr-8"
                >
                  <option value="PERCENTAGE">PERCENTAGE</option>
                  <option value="LETTER">LETTER</option>
                </select>
                <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500" />
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <div className="border border-neutral-400 p-2 ml-2 rounded">
                <div className="relative ml-2">
                  <select
                    id="wd-submission-type"
                    className="w-full appearance-none rounded border border-neutral-400 bg-white py-2 pl-2 pr-8"
                  >
                    <option value="ONLINE">ONLINE</option>
                    <option value="PAPER">PAPER</option>
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500" />
                </div>

                <div className="p-2">
                  <label className="font-bold">Online Entry Options</label>
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      name="online-options"
                      id="wd-text-entry"
                    />
                    <label htmlFor="wd-text-entry">Text Entry</label>
                  </div>
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      name="online-options"
                      id="wd-website-url"
                    />
                    <label htmlFor="wd-website-url">Website URL</label>
                  </div>
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      name="online-options"
                      id="wd-media-recordings"
                    />
                    <label htmlFor="wd-media-recordings">
                      Media Recordings
                    </label>
                  </div>
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      name="online-options"
                      id="wd-student-annotation"
                    />
                    <label htmlFor="wd-student-annotation">
                      Student Annotation
                    </label>
                  </div>
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      name="online-options"
                      id="wd-file-upload"
                    />
                    <label htmlFor="wd-file-upload">File Upload</label>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Assign section</label>
            </td>
            <td>
              <div className="border border-neutral-400 p-2 ml-2 rounded">
                <label className="font-bold" htmlFor="wd-assign-to">
                  Assign to
                </label>
                <div className="relative">
                  <select
                    id="wd-assign-to"
                    className="w-full appearance-none rounded border border-neutral-400 bg-white py-2 pl-2 pr-8"
                  >
                    <option value="student">Student</option>
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500" />
                </div>
                <br />
                <label className="font-bold" htmlFor="wd-due-date">
                  Due Date
                </label>
                <br />
                <input
                  className="border border-neutral-400 rounded p-2 appearance-none"
                  type="date"
                  id="wd-due-date"
                  defaultValue="2024-05-13"
                />
                <br />

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="font-bold" htmlFor="wd-available-from">
                      Available From
                    </label>
                    <br />
                    <input
                      className="border border-neutral-400 rounded p-2 appearance-none"
                      type="date"
                      id="wd-available-from"
                      defaultValue="2024-05-06"
                    />{" "}
                  </div>

                  <div>
                    <label className="font-bold" htmlFor="wd-available-until">
                      Available Until
                    </label>
                    <br />
                    <input
                      className="border border-neutral-400 rounded p-2 appearance-none" 
                      type="date"
                      id="wd-available-until"
                      defaultValue="2024-05-13"
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <label className="block" htmlFor="wd-ai-editor-notes">
        Sample notes
      </label>
      <textarea
        className="mt-1 w-full h-[120px] md:w-[500px]"
        id="wd-ai-editor-notes"
      />
      <hr />
      <div className="mt-4 flex gap-2">
        <Link
          href="/courses/1234/assignments"
          id="wd-cancel"
          className="inline-block rounded border border-neutral-400 bg-neutral-200 px-4 py-2 text-gray-700 no-underline hover:bg-neutral-300"
        >
          Cancel
        </Link>
        <Link
          href="/courses/1234/assignments"
          id="wd-save"
          className="inline-block rounded bg-red-600 px-4 py-2 text-white no-underline hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
