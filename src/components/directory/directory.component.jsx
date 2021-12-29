import React from "react";
import "./directory.styles.scss";
import MenuItem from "./../menu-item/menu-item.component";
import data from "./../../resources/data/directory.data.json";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: data,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;