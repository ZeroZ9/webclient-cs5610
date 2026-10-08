import { Magra } from "next/font/google";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import ForegroundColors from "./ForegroundColors";
import "./index.css";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <>
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        <p>
          Style attribute allows configuring look and feel right on the element.
          Although it&apos;s very convenient it is considered bad practice and
          you should avoid using the style attribute
        </p>
      </div>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>

        <p id="wd-ai-id-selector">
          A fourth paragraph, styled by its own id selector.
        </p>

        <p id="wd-id-selector-3">I mean the powershot v1 is underrated.</p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

        <p className="wd-your-class">Testing my class on p</p>
        <h4 className="wd-your-class">Testing my class on h4</h4>

        <p className="wd-ai-class-selector">
          Another sample paragraph, styled with a different class.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the same class as the paragraph above
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <span className="wd-selector-2-5">
                Thhis is my 2.5 children element.
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This span is styled by the descendant rule
                .wd-selector-1 .wd-ai-selector-5
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h6 className="hihi" id="test-rule">
          Test rule
        </h6>
      </div>

      <div>
        <p className="wd-ai-cascade" id="wd-ai-cascade">
          Cascade test: tag, class, and id rules all target this paragraph.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </>
  );
}
