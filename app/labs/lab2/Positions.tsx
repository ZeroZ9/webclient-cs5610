export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div
            id="wd-ai-relative"
            className="wd-ai-pos-relative-nudge wd-bg-color-blue wd-fg-color-white wd-dimension-square"
          >
            AI nudge down left
          </div>
          <div className="wd-my-pos-relative wd-bg-color-green wd-fg-color-white wd-dimension-square">
            My own position 2.1.13 relative nudge up left
          </div>
        </div>
      </div>

      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          <div className="wd-my-absolute-pos wd-bg-color-green wd-fg-color-white wd-dimension-square">
            My own position 2.1.14 absolute 300px from left
          </div>
          <div
            id="wd-ai-absolute"
            className="wd-ai-pos-absolute-br wd-bg-color-red wd-dimension-square"
          >
            AI bottom right
          </div>
        </div>

        <div id="wd-css-position-fixed">
          <h2>Fixed position</h2>
          Checkout the blue square that says &quot;Fixed position&quot; stuck
          all the way on the right and half way down the page. It doesn&apos;t
          scroll with the rest of the page. Its position is &quot;Fixed&quot;.
          <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
            Fixed position
          </div>
          <div id="wd-ai-fixed" className="wd-ai-pos-fixed">
            AI fixed
          </div>

          <div className="wd-my-fixed-pos wd-bg-color-green wd-fg-color-white wd-dimension-square">
            My own 2.1.15 fixed 
            </div>
        </div>
      </div>
    </div>
  );
}
