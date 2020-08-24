import React from "react";
import "./styles/index.scss";
import Select from "./components/Select";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      newOption: "",
      selectedOption: undefined,
    };
    this.outputEvent = this.outputEvent.bind(this);
  }
  outputEvent(option) {
    this.setState({ selectedOption: option });
  }

  render() {
    return (
      <div className="App col-12 row m-0 p-0">
        <input
          className="col-4 offset-4 searchbar"
          type="text"
          placeholder="Rechercher un personnage"
          value={this.state.searchBar}
          onChange={(e) => this.setState({ searchBar: e.target.value })}
        />

        <Select
          searchBar={this.state.searchBar}
          clickHandler={this.outputEvent}
        />

        <div className="col-12">
          <p className="optionDisplayed">
            Personnage selectionné:{" "}
            {this.state.selectedOption ? this.state.selectedOption : "Aucun"}
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
