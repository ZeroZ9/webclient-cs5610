"use client";

import {create} from "zustand";

export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export type EnrollmentsStore = {
    enrollments: Enrollment[];
   enroll: (userId: string, courseId: string) => void;
    unenroll: (userId: string, courseId: string) => void;
    setEnrollments: (enrollments: Enrollment[]) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
    // Starts empty; filled from the server after sign-in (see Session.tsx and signin)
    enrollments: [],
    enroll: (userId, courseId) =>
        set((state) => ({
            enrollments: [
                ...state.enrollments,
                {
                    _id: crypto.randomUUID(),
                    user: userId,
                    course: courseId,
                },
            ],
        })),
    setEnrollments: (enrollments) => set({ enrollments }),
    unenroll: (userId, courseId) =>
        set((state) => ({
            enrollments: state.enrollments.filter(
                (e) => !(e.user === userId && e.course === courseId),
            ),
        })),
}));            
