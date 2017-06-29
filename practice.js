var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({

initial: function(){
  return {elapsed:0};
  },
  
 addcomp: function(){
  this.timer=setInterval(this.tick,50);
  },
  
 removecomp:function(){
  clearInterval(timer);
  },
  
 tick: function(){
   this.setState({elapsed: new Date() - this.props.start});
  },
  
 render: function(){
  var elapsed = Math.round(this.state.elapsed/100)
  
  var sec = (elapsed/10).toFixed(1);
  
  return <p>The timer has started {seconds} seconds before</p>
  }});
  
  ReactDOM.render(<timer start={Date.now()}/>,document.getElementById('timer'));
