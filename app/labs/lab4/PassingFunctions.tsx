export default function PassingFunctions({
  message,
  theFunction,
  secondFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  secondFunction?: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      {secondFunction && (
        <button
          type="button"
          onClick={secondFunction}
          id="wd-pass-functions-second-click"
          className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Invoke Second Function
        </button>
      )}
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
