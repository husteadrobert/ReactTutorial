console.log('App.js is running');


// JSX - Javascript XML - > a Javascript Syntax Extension
// Babel is used to translate the <p> into JavascriptES5

const app = {
  title: "Indecision App",
  subtitle: "Let the computer decide for you",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
  const template = ( 
    <div>
      <h1>{app.title}</h1> 
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        /*numbers.map((number) => {
         return <p key={number}>{number}</p>;
        })*/
      }
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

};

render();
