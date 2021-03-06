import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";

class Distributorpage extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch("https://ab-inbev-requestapp.herokuapp.com/Request", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const reqs = result.filter((req) => {
          return req.distributor === this.props.user.name;
        });
        console.log(reqs);
        this.setState({
          isLoaded: true,
          items: reqs,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  goToStockLevel = () => {
    this.props.history.push("/distributor/stock-level");
  };

  generateRequest = (item) => {
    let requests = `${item.brand}, ${item.sku}, ${item.volume1}, ${item.quantity1}`;
    if (item.volume2) {
      requests += ` ,${item.volume2}, ${item.quantity2}`;
    }
    return requests;
  };

  render() {
    return (
      <Table unstackable singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Station Name</Table.HeaderCell>
            <Table.HeaderCell>Station Location</Table.HeaderCell>
            <Table.HeaderCell>Requests</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.items.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.location}</Table.Cell>
              <Table.Cell>{this.generateRequest(item)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default Distributorpage;
