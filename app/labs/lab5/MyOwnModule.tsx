"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function MyOwnModule() {
  const [module, setModule] = useState({
    id: 1,
    name: "Gym time",
    description: "Leg day",
    course: "Gym 101",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-my-own-module">
      <h3>Module (On My Own)</h3>
      <h4>Retrieving Module</h4>
      <a id="wd-retrieve-assignments" className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white" href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title" className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-module-name"
        className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${ASSIGNMENT_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>
      <input
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <br />
      <a
        id="wd-update-module-description"
        className="me-2 mt-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        href={`${ASSIGNMENT_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>
      <input
        id="wd-module-description"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr className="my-3" />
    </div>
  );
}
