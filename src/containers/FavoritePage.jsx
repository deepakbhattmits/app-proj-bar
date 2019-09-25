import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteComponent from "../components/FavoriteComponent";
import { removeFromfavorites } from "../actions";
class FavoritePage extends Component {
  render() {
    return (
      <div className="ui row">
        <FavoriteComponent
          fBeers={this.props.favoriteBeer}
          umarkFav={this.props.removeFromfavorites}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeFromfavorites: data => dispatch(removeFromfavorites(data))
});
const mapStateToProps = state => {
  return {
    favoriteBeer: state.beerData.addFbeers
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritePage);
