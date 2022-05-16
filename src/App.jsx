import React from 'react';
import './App.css';
import { marked } from "https://cdn.skypack.dev/marked";
 function App () {
  const [text, setText] = React.useState(`
  # Primary header (similar to HTML H1 tag)

## Secondary header (similar to HTML H2 tag)

### Tertiary header (similar to HTML H3 tag)

#### Quaternary header (similar to HTML H4 tag)


This is how you create **bold** text
This is how you create __bold__ text

This is how you create *italic* text
This is how you create _italic_ text


> This is a block quote.

>> This is a nested (further indented) block quote.

Create an ordered list:
1. First item
2. Second item
3. Third item

Create an unordered list:
- First item
- Second item
- Third item
---
Click [here](http://example.com "Optional Title") to visit a website.

<http://automatic-link-to-url.com/>

<name@emailaddress.com>



\`code\`


![alternate text](./image.jpg "Optional Title")




\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`  

  This is a normal paragraph, followed by a code block.

for (int i = 0; i < 10; i++) {

    System.out.println("i = " + i);

}

The above will be displayed as a preformatted block of code.
  
  `);

  return (
    <div id ="main_content">
      <div>
      <h2 id="editor_head">Editor</h2>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
        </div>
      <div>
      <h2 id="preview_head">Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
        </div>
    </div>
   
  );
};


export default App;