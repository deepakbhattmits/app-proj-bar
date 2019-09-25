import React, { Component } from "react";
import { connect } from "react-redux";
import { getBeerByName, getBeers } from "../actions";
import SearchComponent from "../components/SearchComoponent";
class SearchPage extends Component {
  state = {
    beerName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.beerName.length > 0) {
        this.props.getBeerByName(this.state.beerName);
      } else {
        this.props.getBeers();
      }
    });
  };
  onKeyUp = e => {
    if (e.keyCode === 13) {
      this.buttonClick();
    }
  };
  buttonClick = () => {
    if (this.state.beerName.length > 0) {
      this.props.getBeerByName(this.state.beerName);
    } else {
      alert("Please Enter Search Term");
      this.props.getBeers();
    }
  };
  render() {
    return (
      <div className="ui row">
        <SearchComponent
          classNameButton="ui primary button"
          classNameSearch="custom-search"
          buttonClick={this.buttonClick}
          handleChange={this.handleChange}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getBeerByName: data => dispatch(getBeerByName(data)),
  getBeers: () => dispatch(getBeers())
});
// const mapStateToProps = ( state ) => {
//     return {
//         searchBeer: state.searchBeer,

//     }
// }
export default connect(
  null,
  mapDispatchToProps
)(SearchPage);
