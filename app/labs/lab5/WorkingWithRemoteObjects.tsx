"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  return (
    <div id="wd-working-with-remote-objects">
      <h3>Working With Remote Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white" href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title" className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title" className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <br />
      <a
        id="wd-update-assignment-score"
        className="me-2 mt-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        id="wd-assignment-score"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <br />
      <a
        id="wd-update-assignment-completed"
        className="me-2 mt-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <input
        id="wd-assignment-completed"
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <hr className="my-3" />
    </div>
  );
}
