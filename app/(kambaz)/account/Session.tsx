"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAccountContext } from "./AccountContext";
import * as client from "./client";
import * as coursesClient from "../courses/client";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export default function Session({
  children,
}: {
  children: ReactNode;
}) {
  const [pending, setPending] = useState(true);
  const { setCurrentUser } = useAccountContext();
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        setCurrentUser(currentUser);
        // Load my enrollments from the server so course pages know I'm enrolled
        setEnrollments(await coursesClient.findMyEnrollments());
      } catch {
        setCurrentUser(null);
      } finally {
        setPending(false);
      }
    };
    fetchProfile();
  }, [setCurrentUser, setEnrollments]);

  if (pending) {
    return null;
  }
  return children;
}