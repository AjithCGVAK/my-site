import React, {Component} from "react";

class Counter extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            count: 0

        }
    }
    incrimentCount = () =>{
        this.setState(prevState =>({count: prevState.count +1}));
    }
    render() {
        return(
        <div>
            <p>Count:{this.state.count}</p>
            <button onClick={this.incrimentCount}> increase</button>
        </div>
        );
    }
}
export default Counter;