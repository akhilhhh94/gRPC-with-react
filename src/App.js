import React from 'react';


const { googleRPC, reactRPC } = require("reactrpc");

const requests = require("./helloworld_pb");
const clients = require("./helloworld_grpc_web_pb.js");
googleRPC.build(
  requests,
  clients,
  "http://" + window.location.hostname + ":8080"
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ''
    };
    const stream = this.props.Greeter.sayRepeatHello(
      { name: "Josh", count: 10, msgType: "RepeatHelloRequest" },
      {}
    );
    stream.onMessage(res => {
      console.log(res.getMessage());
      this.setState({
        greeting: res.getMessage()
  });
    });
    console.log(stream);
  }

  render() {
    console.log("This is the props", this.props);
    this.props.Health.check(
      { service: "Greeter", msgType: "HealthCheckRequest" },
      {},
      (err, response) => {
        console.log(response.getStatus());
      }
    );
    return (
      <div>
        <h1>ReactRPC</h1>
        <h2>{this.state.greeting}</h2>
      </div>
    );
  }
}

export default googleRPC.wrapper(App);

