import React from "react";

function Anchor({ anchorText }) {
  console.log(anchorText);
  return (
    <>
      <a id={anchorText}></a>
    </>
  );
}

export default Anchor;
