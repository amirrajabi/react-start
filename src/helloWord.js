var HelloWord = React.createClass({
  render : function(){
    return(
        <div>
          <h1> {this.props.text} </h1>
          <p> {this.props.children} </p>
        </div>
    )
  }
});

React.render(
    <div>
        <HelloWord text="Hello">
            This is a Hello.
        </HelloWord>

        <HelloWord text="How are you?">
            This is a How are you.
        </HelloWord>

        <HelloWord text="Goodbye">
            This is a Goodbye
        </HelloWord>
    </div>,
    document.getElementById('react-container'));