import React, {Fragment} from "react";
import Provider from "./provider";
import Context from "./context";
const Agents = () =>{
  return <AgentOne />
}
const AgentOne = () =>{
  return <AgentTwo />
}
const AgentTwo = () =>{
  return <AgentBond />
}
const AgentBond = () =>{
  return(
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h2>Agent Information</h2>
            <h3>Mission Name: {context.data.mname}</h3>
            <h3>Mission Status: {context.data.accept}</h3>
            <button onClick={context.isMissionAccepted}>Change The Status</button>
            <button onClick={context.isMissionNotAccepted}>Change The Status for not</button>

            
          
          </Fragment>
        )
      }
    </Context.Consumer>
  );
}

const App = () => {
     return(
      <div>
        <h1>Context API</h1>
        <Provider>
          <Agents/>
        </Provider>
      </div>
     );
};

export default App;