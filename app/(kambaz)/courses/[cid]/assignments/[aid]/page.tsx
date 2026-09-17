import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <label htmlFor="wd-group">Assignment Group</label>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </tr>

          <tr>
            <label htmlFor="wd-display-grade-as">Display Grade</label>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">PERCENTAGE</option>
              <option value="LETTER">LETTER</option>
            </select>
          </tr>

          <tr>
            <label htmlFor="wd-submission-type">Submission Type</label>
            <select id="wd-submission-type">
              <option value="ONLINE">ONLINE</option>
              <option value="PAPER">PAPER</option>
            </select>
          </tr>

          <tr>
            <label>Online Entry Options</label> <br />
            <input type="checkbox" name="online-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="online-options" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="online-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="online-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="online-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </tr>

          <tr>
            <label>Assign section</label> <br />
            <label htmlFor="wd-assign-to">Assign to</label>
            <select id="wd-assign-to">
              <option value="student">Student</option>
            </select>
            <br />
            <label htmlFor="wd-due-date">Due Date</label>
            <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            <br />
            <label htmlFor="wd-available-from">Available From</label>
            <input
              type="date"
              id="wd-available-from"
              defaultValue="2024-05-06"
            />{" "}
            <label htmlFor="wd-available-until">Available Until</label>
            <input
              type="date"
              id="wd-available-until"
              defaultValue="2024-05-13"
            />
          </tr>

          <tr>
            <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
              Cancel
            </Link>{" "}
            <Link href={`/courses/${cid}/assignments`} id="wd-save">
              Save
            </Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
