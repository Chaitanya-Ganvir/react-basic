import React from "react";

const Section = ({ title, children, ...props }) => {
  return (
    <>
      <section {...props}>
        <h2>{title}</h2>
        {children}
      </section>
      {/* <input type="text" /> */}
      {/* <textarea name="" id=""></textarea> */}
    </>
  );
};

export default Section;
