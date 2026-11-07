"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const allModules = useModulesStore((state) => state.modules);
  const updateModule = useModulesStore((state) => state.updateModule);
  const modules = allModules.filter((module) => module.course === cid);
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
                      updateModule({ ...module, editing: false });
                    }
                  }}
                />
              ) : (
                module.name
              )
            }
            controls={<ModuleControlButtons moduleId={module._id} />}
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
