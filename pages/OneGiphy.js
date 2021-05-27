import React from "react";

const OneGiphy = (image) => {
  return (
    <div>
      <h3>{image.id}</h3>
      <h3>{image.url}</h3>
    </div>
  );
};

export default OneGiphy;