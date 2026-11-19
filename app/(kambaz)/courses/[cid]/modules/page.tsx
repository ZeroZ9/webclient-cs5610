"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";
import * as client from "../../client";
import { useEffect } from "react";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const allModules = useModulesStore((state) => state.modules);
  const updateModule = useModulesStore((state) => state.updateModule);
  const modules = allModules.filter((module) => module.course === cid);

  const setModules = useModulesStore((state) => state.setModules);
  const deleteModule = useModulesStore((state) => state.deleteModule);

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };

  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };

  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(cid));
    };
    load();
  }, [cid]);

  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            title={
              module.editing ? (
                <input
                  className="w-full max-w-md rounded border border-neutral-300 px-2 py-1 text-base"
                  value={module.name}
                  autoFocus
                  onChange={(e) =>
                    updateModule({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                />
              ) : (
                module.name
              )
            }
            controls={
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={onRemoveModule}
              />
            }
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
