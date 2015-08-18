/**
 * Created by Amir on 17/08/15.
 */

var Note = React.createClass({

    getInitialState: function(){
        return{editing: false}
    },

    componentWillMount : function(){
        return this.style = {
            top : this.randomBetween(0, window.innerHeight - 260) + 'px',
            right : this.randomBetween(0, window.innerWidth - 200) + 'px',
            transform : 'rotate('+ this.randomBetween(-10, 10) +'deg)'
        }
    },

    componentDidMount : function(){

        $(this.getDOMNode()).draggable();

    },

    randomBetween : function(min, max){
        return (min + Math.ceil(Math.random() * max))
    },

    edit : function(){
        this.setState({editing: true});
    },

    save : function(){
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
        this.setState({editing: false});
    },

    remove : function(){
        this.props.onRemove(this.props.index);
    },

    renderDisplay: function(){
        return(

            <div className="note" style={this.style} >
                <p> { this.props.children } </p>
                <span className="tools">

                    <button onClick={ this.edit } className="btn btn-default glyphicon glyphicon-pencil" />
                    <button onClick= { this.remove } className="btn btn-danger glyphicon glyphicon-trash" />

                </span>
            </div>

        )
    },

    renderForm: function(){
        return(
            <div className="note" style={this.style}>
                <textarea ref="newText" defaultValue={ this.props.children } className="form-control"></textarea>
                <button onClick={ this.save } className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
        )
    },

    render : function(){
        if(this.state.editing){
            return this.renderForm();
        }
        else{
            return this.renderDisplay();
        }
    }
});
