"use client";
import { useState } from "react";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`,
    );
    const data = await response.json();
    const symbols: Record<string, string> = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/",
    };
    setResult(
      data.error ?? `${data.a} ${symbols[op]} ${data.b} = ${data.result}`,
    );
  };

  return (
    <div id="wd-calculator">
      <h3>Calculator</h3>
      <input
        type="number"
        className="me-2 rounded border px-3 py-2"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br />
      <input
        type="number"
        className="me-2 rounded border px-3 py-2"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <span className="py-1">Operation </span>
      <select
        className="me-2 rounded border px-3 py-2"
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">add</option>
        <option value="subtract">subtract</option>
        <option value="multiply">multiply</option>
        <option value="divide">divide</option>
      </select>
      <br />
      <button
        type="button"
        className="rounded bg-blue-600 px-3 py-2 text-white"
        onClick={() => calculate(operation)}
      >
        Calculate
      </button>
      <p className="mt-2">Result: {result}</p>
      <hr className="my-3" />
    </div>
  );
}
