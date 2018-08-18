class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false,
      text: "Hey, now you can see me!"
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visible ? "Hide Details" : "Show Details"}</button>
        {this.state.visible && <p>{this.state.text}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//const appRoot = document.getElementById('app');
//
//const app = {
//  title: "Visiblity Toggle",
//  text: "Hey, now you can see me!",
//  toggled: false
//}
//
//const toggleApp = () => {
//  app.toggled = !app.toggled;
//  render();
//}
//
//const render = () => {
//  const template = (
//    <div>
//      <h1>{app.title}</h1>
//      <button onClick={toggleApp}>{app.toggled ? "Hide Details" : "Show Details"}</button>
//      {app.toggled && <p>{app.text}</p>}
//    </div>
//  );
//
//  ReactDOM.render(template, appRoot);
//}
//
//render();
