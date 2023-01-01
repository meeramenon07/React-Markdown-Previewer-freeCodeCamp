

/**
// Allows line breaks with the return button
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
