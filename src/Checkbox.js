/**
 * Created by Amir on 17/08/15.
 */

var Checkbox = React.createClass({

    getInitialState: function(){
      return{checked: true}
    },

    handleCheck: function(){
      this.setState({checked: !this.state.checked })
    },

    render : function(){
        var msg = "Checked!";

        if(this.state.checked){
            msg = "Checked!";
        }
        else{
            msg = "Unchecked!";
        }

        return(

            <div>
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={ this.state.checked } />
                <p> This box is {msg}. </p>
            </div>

        )
    }
});

React.render(<Checkbox>Hello World!</Checkbox>, document.getElementById('react-container'));
