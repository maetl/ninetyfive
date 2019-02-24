import React from 'react';

export default function Button(props) {
  return (
    <button className="W95__Button" {...props}>
      <div className="W95__ButtonBG" />
      <div className="W95__ButtonFocusBG" />
      <span className="W95__Button__Text">{props.children}</span>
    </button>
  );
}