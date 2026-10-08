// export default function CourseStatus() {
//   return (
//     <div id="wd-course-status">
//       <h2>Course Status</h2>
//       <button>Unpublish</button> <button>Publish</button>
//       <br />
//       <br />
//       <button>Unpublish and Publish</button> <br />
//       <button>Import Existing Content</button> <br />
//       <button>Import from Commons</button> <br />
//       <button>Choose Home Page</button> <br />
//       <button>View Course Stream</button> <br />
//       <button>New Announcement</button> <br />
//       <button>New Analytics</button> <br />
//       <button>View Course Notifications</button>
//     </div>
//   );
// }

import { FaCheckCircle, FaStream } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineSpeakerphone, HiOutlineSparkles } from "react-icons/hi";
import { IoBarChartOutline, IoNotificationsOutline } from "react-icons/io5";

const buttonList = [
  { label: "Import Existing Content", icon: BiImport },
  { label: "Import from Commons", icon: LiaFileImportSolid },
  { label: "Choose Home Page", icon: AiOutlineHome },
  { label: "View Course Stream", icon: FaStream },
  { label: "New Announcement", icon: HiOutlineSpeakerphone },
  { label: "New Analytics", icon: IoBarChartOutline },
  { label: "View Course Notifications", icon: IoNotificationsOutline },
];

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <div className="mt-4">
        {buttonList.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm hover:bg-neutral-100"
          >
            <Icon className="me-2 shrink-0 text-base" /> {label}
          </button>
        ))}
        <button
          id="wd-ai-status"
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <HiOutlineSparkles className="me-2 shrink-0 text-base" /> Sample action
        </button>
      </div>
    </div>
  );
}
