// import React from 'react';
// class Reactstate extends React.Component{
//     constructor(){
//         super();
//         this.state={initialvalue:"welcome",name:"guys"}
//     }

//     render(){
//         return <div>
//             <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
//         </div>
//     }
// }

// export default Reactstate

// import React from 'react';
// class Reactstate extends React.Component{
//     constructor(){
//         super();
//         this.state={initialvalue:"welcome",name:"guys"}
//     }

//     changevalue = () =>
//     {
//        this.setState({initialvalue:"Thanks for coming"});
//     }
//     render(){
//         return <div>
//             <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
//             <br/>
//             <button onClick={this.changevalue}>Exit</button>
//         </div>
//     }
// }

// export default Reactstate

// import React from 'react';
// class Reactstate extends React.Component{
//     constructor(){
//         super();
//         this.state={initialvalue:"0"}
//     }

//     changevalue = () =>
//     {
//        this.setState({initialvalue:"-1"});
//     }
//     render(){
//         return <div>
//             <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
//             <br/>
//             <button onClick={this.changevalue}>start</button>
//             <button onClick={this.changevalue}>value</button>
//             <button onClick={this.changevalue}>Increment</button>
//             <button onClick={this.changevalue}>Decrement</button>
//         </div>
//     }
// }

// export default Reactstate

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleStart = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Value: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default Counter;