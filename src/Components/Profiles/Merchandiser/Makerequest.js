import React, { Component } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import Eachrequest from "./Eachrequest";

class Makerequest extends Component {
  state = {
    request: [],
    currentRequest: {
      product: "",
      // rgb: "",
      // pet: "",
      // can: "",
      quantity: "",
      rgbvalue: "",
      canvalue: "",
      petvalue: "",
      key: ""
    }
  };
  handleChange = e => {
    //You want to know which input is calling handleChange

    let currentRequest = this.state.currentRequest;

    currentRequest[e.target.name] = e.target.value;

    this.setState({
      currentRequest: currentRequest
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newReq = this.state.currentRequest;
    console.log(newReq);
    if (
      newReq.product ||
      newReq.rgb ||
      newReq.pet ||
      newReq.can ||
      newReq.quantity !== ""
    ) {
      const request = [...this.state.request, newReq];

      this.setState({
        request: request
      });
      fetch("https://ab-inbev-requestapp.herokuapp.com/Request");
    }
  };
  deleteRequest = key => {
    const filteredRequest = this.state.request.filter(req => req.key !== key);
    this.setState({
      request: filteredRequest
    });
  };
  setUpdate = (product, key) => {
    const requests = this.state.request;
    requests.map(req => {
      if (req.key === key) {
        req.product = product;
      }
    });
    this.setState({
      request: requests
    });
  };
  render() {
    return (
      <div class="ui container" id="container">
        <Eachrequest
          request={this.state.request}
          deleteRequest={this.deleteRequest}
          setUpdate={this.setUpdate}
        />

        <Form onSubmit={this.handleSubmit}>
          <div id="selectprod">
            <h6>Select Product</h6>
            <Input
              id="input"
              autocomplete="off"
              name="product"
              list="products"
              onChange={this.handleChange}
              placeholder="Select Products..."
            />
            <datalist id="products">
              <option value="Budweiser" />
              <option value="Castle Lite" />
              <option value="Hero" />
              <option value="Beta Malt" />
              <option value="Trophy" />
              <option value="Trophy Stout" />
              <option value="Eagle Lager" />
              <option value="Eagle Stout" />
            </datalist>
            &nbsp;&nbsp;
            <br />
            <div id="measurement">
              <Input
                id="input"
                autocomplete="off"
                list="rgb"
                name="rgb"
                onChange={this.handleChange}
                placeholder="RGB"
              />
              <datalist id="sku">
                <option value="RGB" />
                <option value="CAN" />
                <option value="PET" />
              </datalist>
              &nbsp;&nbsp;
              <Input
                id="prod-no"
                autocomplete="off"
                name="rgbvalue"
                onChange={this.handleChange}
                placeholder="Input Value..."
              />
              <br />
              <Input
                id="input"
                autocomplete="off"
                onChange={this.handleChange}
                name="can"
                list="can"
                placeholder="CAN"
              />
              <datalist id="rgb">
                <option value="375ml" />
                <option value="600ml" />
              </datalist>
              &nbsp;&nbsp;
              <Input
                id="prod-no"
                autocomplete="off"
                name="canvalue"
                onChange={this.handleChange}
                placeholder="Input Value..."
              />
              <br />
              <Input
                id="input"
                autocomplete="off"
                onChange={this.handleChange}
                name="pet"
                list="pet"
                placeholder="PET"
              />
              <datalist id="pet">
                <option value="250ml" />
                <option value="330ml" />
              </datalist>
              &nbsp;&nbsp;
              <Input
                id="prod-no"
                autocomplete="off"
                name="petvalue"
                onChange={this.handleChange}
                placeholder="Input Value..."
              />
            </div>
          </div>
          <Button id="button">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Makerequest;



// import React, { Component } from "react";
// import { Form, Table } from "semantic-ui-react";
// import TableInput from "./TableInput";
// import Eachrequest from "./Eachrequest";

// class Makerequest extends Component {
//   state = {
//     request: [],
//     currentRequest: {
//       product: "",
//       req: "",
//       key: ""
//     }
//   };

//   handleChange = e => {
//     let currentRequest = this.state.currentRequest;

//     currentRequest[e.target.name] = e.target.value;

//     this.setState({
//       currentRequest: currentRequest
//     });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     const newReq = this.state.currentRequest;
//     console.log(newReq);
//     if (newReq.product || newReq.req !== "") {
//       const request = [...this.state.request, newReq];

//       this.setState({
//         request: request
//       });
//     }
//   };
//   deleteRequest = key => {
//     const filteredRequest = this.state.request.filter(req => req.key !== key);
//     this.setState({
//       request: filteredRequest
//     });
//   };
//   setUpdate = (product, key) => {
//     const requests = this.state.request;
//     requests.map(req => {
//       if (req.key === key) {
//         req.product = product;
//       }
//     });
//     this.setState({
//       request: requests
//     });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <TableInput />
//         <Form.Input
//           fluid
//           label="Brand"
//           placeholder="Budweiser"
//           onChange={this.handleChange}
//           name="product"
//         />
//         <Eachrequest
//           request={this.state.request}
//           deleteRequest={this.deleteRequest}
//           setUpdate={this.setUpdate}
//         />
//         <Form.TextArea
//           label="Request"
//           placeholder="Make request..."
//           onChange={this.handleChange}
//           name="req"
//         />
//         <Form.Button id="button">Submit</Form.Button>
//         <button type="reset">Clear</button>
//       </Form>
//     );
//   }
// }

// export default Makerequest;