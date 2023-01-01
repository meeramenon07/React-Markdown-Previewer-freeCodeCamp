
marked.setOptions({
  breaks: true
});

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html, and create a callback for links to return the link in a diffrent format then the default.
const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1 className="title">React Markdown Previewer</h1>
        <div className="AppWrap">
          <div className="EditorWrap">
            <Toolbar text="Editor" />
            <Editor
              markdown={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="PreviewWrap">
            <Toolbar text="Preview" />
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}

const Toolbar = props => {
  return (
    <div className="toolbar">
      {props.text}
    </div>
  );
};

const Editor = props => {
  return (
    <textarea
      id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"
    />
  );
};
**/
