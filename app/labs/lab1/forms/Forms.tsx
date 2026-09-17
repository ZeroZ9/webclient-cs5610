import TextFields from "./TextFields";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";
import Buttons from "./Buttons";
import YourForm from "./YourForm";
import Checkboxes from "./Checkboxes";
export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <TextFields />
        <Textarea />
        <RadioButtons />
        <Checkboxes />
        <Dropdowns />
        <OtherFieldTypes />
        <Buttons />
        <YourForm />  
      </form>
    </div>
  );
}