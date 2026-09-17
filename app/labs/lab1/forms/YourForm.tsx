export default function YourForm() {
  return (
    <div id="wd-your-form">
        <h5>Text Fields</h5>
        <label htmlFor="wd-your-form-firstname">Firstname:</label>
        <input placeholder="Long" id="wd-your-form-firstname" /> <br />
        <label htmlFor="wd-your-form-lastname">Lastname:</label>
        <input placeholder="Tran" id="wd-your-form-lastname" /> <br />
        <label htmlFor="wd-your-form-password">Password:</label>
        <input placeholder="••••••••" id="wd-your-form-password" type="password" /> <br />

        <h5>Text Areas</h5>
        <label htmlFor="wd-your-form-Bio">bio:</label>
        <textarea id="wd-your-form-bio" cols={30} rows={10} defaultValue="The reason I am taking this course is helping me improve my knownlede in frontedn development and the skills I need to become a full stack developer." />
        <br />

        <h5>Radio Buttons</h5>
        <label>class standing</label> <br />
        <input type="radio" name="radio-class-standing" id="wd-your-form-freshman" />
        <label htmlFor="wd-your-form-freshman">Freshman</label> <br />
        <input type="radio" name="radio-class-standing" id="wd-your-form-sophomore" />
        <label htmlFor="wd-your-form-sophomore">Sophomore</label> <br />
        <input type="radio" name="radio-class-standing" id="wd-your-form-junior" />
        <label htmlFor="wd-your-form-junior">Junior</label> <br />
        <input type="radio" name="radio-class-standing" id="wd-your-form-senior" />
        <label htmlFor="wd-your-form-senior">Senior</label> <br />
        <br />
        <label>time in school</label> <br />
        <input type="radio" name="radio-time-in-school" id="wd-your-form-fulltime" />
        <label htmlFor="wd-your-form-fulltime">Full-time</label> <br />
        <input type="radio" name="radio-time-in-school" id="wd-your-form-parttime" />
        <label htmlFor="wd-your-form-parttime">Part-time</label> <br />

        <h5>Checkbox</h5>
        <label htmlFor="wd-select-languages">Languages:</label> <br />
        <input type="checkbox" name="checkbox-languages" id="wd-your-form-java" />
        <label htmlFor="wd-your-form-java">Java</label> <br />
        <input type="checkbox" name="checkbox-languages" id="wd-your-form-python" />
        <label htmlFor="wd-your-form-python">Python</label> <br />

        <h5>Dropdown</h5>
        <h6>Select one</h6>
        <label htmlFor="wd-select-one-college">College:</label> <br />
        <select id="wd-select-one-college" defaultValue="COE">
          <option value="COE">College of Engineering</option>
          <option value="CPS">College of Professional Studies</option>
          <option value="CFA">College of Fine Arts</option>
        </select>
        <h6>Select many</h6>
        <label htmlFor="wd-select-many-topics">Topics:</label> <br />
        <select multiple id="wd-select-many-topics" defaultValue={["WEBDEV", "AI"]}>
          <option value="WEBDEV">Web Development</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="SECURITY">Cyber Security</option>
          <option value="DATA">Data Science</option>
        </select>

        <h5>Typed Fields</h5>
        <label htmlFor="wd-your-school-email">Email:</label>
        <input type="email" placeholder="xxx@yyy.zzz" /> <br />
        <label htmlFor="wd-your-expected-graduation">Year:</label>
        <input type="number" defaultValue="2025" min={2026} max={2031} /> <br />
        <label htmlFor="wd-your-birthday">Birthday:</label>
        <input type="date" defaultValue="2000-01-21" min="1900-01-01" max="2025-12-31" /> <br />
        <label htmlFor="wd-your-exicted">Rating:</label>
        <input type="range" defaultValue="8" min="1" max="10" /> <br />

        <h5>Buttons</h5>
        <button id="wd-your-form-submit" type="submit">Submit</button>
        <button id="wd-your-form-reset" type="button">Cancel</button>
      </div>
    );
  }