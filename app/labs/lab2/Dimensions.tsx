export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a deliberately long sentence that keeps going well past the edges of its
          box, so you can clearly see that the declared width of 120px and height of 60px
          stay fixed while the extra text simply overflows.
        </div>
        <div className="wd-my-dimension wd-bg-color-green wd-fg-color-white">
            My own dimension 2.1.12 300px width x 150px height
            </div>
      </div>
    </div>
  );
}