import React from "react";
import "../styles/index.scss";
import optionData from "../data/optionData.json";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: {}, selectedOption: "", newOption: "" };
  }
  componentWillMount() {
    this.setState({
      options: optionData,
    });
  }
  HandleChangeSelected(option) {
    this.setState({ selectedOption: option });
  }
  addOption() {
    if (this.state.options.indexOf(this.state.newOption) === -1) {
      this.state.options.push(this.state.newOption);
    } else {
      alert("Ce personnage existe déjà");
    }

    this.setState({ newOption: "" });
  }
  render() {
    const { props, state } = this;
    const { options = [] } = state;
    return (
      <div className="col-12 row">
        {options.map((option, i) =>
          option.toLowerCase().indexOf(this.props.searchBar.toLowerCase()) !=
          -1 ? (
            <button
              onClick={() =>
                this.HandleChangeSelected(option) &
                this.props.clickHandler(options[i])
              }
              className={
                this.state.selectedOption === options[i]
                  ? "optionClassic mb-2 ml-2 optionSelected"
                  : "optionClassic mb-2 ml-2"
              }
            >
              {options[i]}
            </button>
          ) : null
        )}
        <div className="ml-2">
          <input
            className="optionClassic newOptionInput"
            placeholder="Nouveau personnage"
            value={this.state.newOption}
            onChange={(e) => this.setState({ newOption: e.target.value })}
          ></input>
          <button
            className="optionClassic newOptionButton"
            onClick={() => this.addOption()}
          >
            Ajouter
          </button>
        </div>
        {console.log("selectedOption: ", this.state.selectedOption)}
      </div>
    );
  }
}
export default Select;
