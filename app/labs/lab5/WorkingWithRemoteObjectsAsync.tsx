"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState({
    id: 0,
    title: "",
    description: "",
    due: "",
    completed: false,
    score: 0,
  });

  const fetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
  };

  const updateTitle = async () => {
    const updated = await client.updateTitle(assignment.title);
    setAssignment(updated);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-working-with-remote-objects-async">
      <h3>Working with Remote Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        id="wd-assignment-title-async"
        className="me-2 rounded border border-neutral-300 px-3 py-3"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <button
        type="button"
        id="wd-update-assignment-title-async"
        className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        onClick={updateTitle}
      >
        Update Title
      </button>
      <pre className="mt-2">{JSON.stringify(assignment, null, 2)}</pre>
      <hr className="my-3" />
    </div>
  );
}
