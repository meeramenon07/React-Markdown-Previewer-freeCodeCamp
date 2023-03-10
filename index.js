marked.setOptions({
  breaks:true 
});

const renderer = new marked.Renderer();
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder 
    };
    this.handleChange = this.handleChange.bind(this);
      
    
  }
  handleChange(e){
    this.setState({
      markdown: e.target.value 
    });
  }
  render(){
    return(
      <div>
        <h1 className = "title">REACT MARKDOWN PREVIEWER</h1>
      
      <div className = "AppWrap">
        <div className = "EditorWrap">
          <Toolbar  text = "Editor"  />
          <Editor  
            markdown = {this.state.markdown}
            onChange = {this.handleChange}
            />
          
        </div>
        <div className = "PreviewWrap">
          <Toolbar   text = "Preview" />
          <Preview   markdown = {this.state.markdown}  />
          
        </div>
        
      </div>
     
      
    </div>
    
    );
  }
}

const Toolbar = props =>{
  return(
    <div className = "toolbar">
      {props.text}
    </div>
  
  );
};

const Editor = props =>{
  return(
    <textarea 
      id = "editor"
      value = {props.markdown}
      onChange  = {props.onChange}
      type = "text"
      
      />
  
  );
};

const Preview = props => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
    />
  );
};

const placeholder = `# My first  React Project!
## This is a Markdown Previewer..

### And browse some more items here:
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  

  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links]https://github.com/meeramenon07/), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
