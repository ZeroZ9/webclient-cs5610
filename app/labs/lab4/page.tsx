"use client";
import "@/app/labs/lab2/tailwind/utilities.css";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandCounter from "./zustand/ZustandCounter";
import ZustandExamples from "./zustand/ZustandExamples";
import ZustandProfileForm from "./zustand/ZustandProfileForm";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";
import WindowSizeDemo from "./hooks/WindowSizeDemo";
import ToggleDemo from "./hooks/ToggleDemo";
import LocalStorageDemo from "./hooks/LocalStorageDemo";
import IndependentToggles from "./hooks/IndependentToggles";
import HookProfileForm from "./hooks/HookProfileForm";
const sayHello = (good: string) => {
  alert(good);
};

const myName = () => {
  alert("My name is Long!");
};

const sampleFromParent = () => {
  alert("Sample from parent");
};

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent /> 
      <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} secondFunction={myName} theOtherFunction={sampleFromParent} /> 
      <CounterBroken /> 
      <Counter /> 
      <BooleanStateVariables /> 
      <StringStateVariables /> 
      <DateStateVariable /> 
      <ObjectStateVariable />
      <ArrayStateVariable /> 
      <ProfileForm /> 
      <ParentStateComponent /> 
      <PropDrilling /> 
      <UrlEncoding />
      <ContextExamples /> 
      <ContextProfileForm />
      <ZustandCounter /> 
      <ZustandExamples /> 
      <ZustandProfileForm />
      <ReduxExamples />
      <Effect />
      <WindowSizeDemo /> 
      <ToggleDemo />
      <LocalStorageDemo />
      <IndependentToggles />
      <HookProfileForm />
    </div>
  );
}