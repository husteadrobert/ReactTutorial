import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

// class based components vs stateless function components
export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }
  //Must pass down functions to children to alter this state
  handleDeleteOptions = () =>{
    this.setState(() => ({
      options: []
    }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // Do Nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";
    return ( 
      <div>
       <Header subtitle={subtitle} />
       <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
       <Options 
         options={this.state.options} 
         handleDeleteOptions={this.handleDeleteOptions}
         handleDeleteOption={this.handleDeleteOption}
        />
       <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}