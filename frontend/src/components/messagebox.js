import React from "react";

export default function MessageBox(props) {
  //children = inside <MessageBox> hence {error}
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
