"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import * as client from "./client";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

  const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  const fetchWelcomeOnLoad = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnLoad(message);
  };

  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      <h4>Requesting on Click</h4>
      <button
        type="button"
        id="wd-fetch-welcome"
        className="me-2 inline-block rounded bg-blue-600 px-3 py-3 text-white"
        onClick={fetchWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p>
        Response from server: <b>{welcomeOnClick}</b>
      </p>
      <h4>Requesting on Load</h4>
      <p>
        Response on load: <b>{welcomeOnLoad}</b>
      </p>
      <hr className="my-3" />
    </div>
  );
}
