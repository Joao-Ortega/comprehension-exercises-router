import React from "react";

class StrictAccess extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <p>Welcome { username }!</p>
      </div>
    )
  }
}

export default StrictAccess;