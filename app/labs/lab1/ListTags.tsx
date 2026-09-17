export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>

        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
            <li>Boiling eggs</li>
            <li>Boiling chicken</li>
            <li>Crab</li>
        </ol>

        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
        </ul>

        HTML tags covered in this chapter:
        <ul id="wd-ai-html-tags">
            <li>h1 - defines the largest section heading</li>
            <li>p - groups text into a paragraph with vertical spacing</li>
            <li>ol - creates a numbered, ordered list</li>
            <li>ul - creates a bulleted, unordered list</li>
            <li>table - organizes data into rows and columns</li>
        </ul>

        Your favorite books (in no particular order)
        <ul id="wd-your-books">
            <li>AIMA</li>
            <li>Networking Topdown appraoch</li>
            <li>Harry Potter</li>
        </ul>
    </div>
  );
}