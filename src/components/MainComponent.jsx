import React, { useState } from "react";
import ShowCaseLayout from './ShowCaseLayout';

const MainComponent = props => {
  const [layout, setLayout] = useState([]);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  }

  const stringifyLayout = () => {
    return layout.map(function (l) {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }
  return (
    <>
      <div className="layoutJSON">
        Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">{stringifyLayout()}</div>
      </div>
      <ShowCaseLayout onLayoutChange={onLayoutChange} />
      <div className="ui link cards">
        {props.beers &&
          props.beers.map((el, i) => {
            return (
              <div className="card" key={i}>
                <div className="ui medium image">
                  <img
                    className="medium ui image"
                    src={el.image_url}
                    alt="img"
                    style={{ width: 200, height: 200 }}
                  />
                </div>
                <div className="content">
                  <i
                    id={el.id}
                    className={`right floated star icon
                  ${
                      props.className &&
                        Object.values(props.className).filter(item =>
                          item.id === el.id ? item.id : ""
                        ).length > 0
                        ? "green"
                        : ""
                      }`}
                    onClick={
                      props.className &&
                        Object.values(props.className).filter(item =>
                          item.id === el.id ? item.id : ""
                        ).length > 0
                        ? props.removeFromfavorites
                        : props.addToFavorite
                    }
                    title={`${
                      props.className &&
                        Object.values(props.className).filter(item =>
                          item.id === el.id ? item.id : ""
                        ).length > 0
                        ? "Unmark Favorite"
                        : "Mark Favorite"
                      }`}
                  />
                  <div className="header">{el.name}</div>
                  <div className="meta">
                    <label>{el.tagline}</label>
                  </div>
                  <div className="description">{el.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default MainComponent;
