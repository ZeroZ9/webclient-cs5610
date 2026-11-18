"use client";
import { useEffect, useState } from "react";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    fetch("/api/lab5/hello")
      .then((response) => response.json())
      .then(setHello);
  }, []);
  return (
    <div id="wd-hello-route">
      <h3>Next.js Route Handler</h3>
      <p>
        Message: <b>{hello.message}</b>
      </p>
      <hr className="my-3" />
    </div>
  );
}
