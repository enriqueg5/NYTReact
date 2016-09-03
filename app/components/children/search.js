var React = require('react');

var Query = require('./grandChildren/query.js');
var Results = require('./grandChildren/results.js');
var Search = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: "",
      results: "",
      history: [] /*Note how we added in this history state variable*/
    }
  },

  // This function allows childrens to update the parent.
  setTerm: function(term){
    this.setState({
      searchTerm: term
    })
  },
  render: function(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search Articles</h3>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }

});
module.exports = Search;
