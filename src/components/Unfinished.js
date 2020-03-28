import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <div
    style={{
      color: "#000",
      background: "#fff",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <div>
      <style dangerouslySetInnerHTML={{ __html: "body { margin: 0 }" }} />
      <h1
        style={{
          display: "inline-block",
          borderRight: "1px solid rgba(0, 0, 0,.3)",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontSize: "24px",
          fontWeight: 500,
          verticalAlign: "top"
        }}
      >
        {(props.soon && "coming soon") || "oops"}
      </h1>
      <div
        style={{
          display: "inline-block",
          textAlign: "left",
          lineHeight: "49px",
          height: "49px",
          verticalAlign: "middle"
        }}
      >
        <h2
          style={{
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "inherit",
            margin: 0,
            padding: 0
          }}
        >
          {(props.soon && "We're working on this page, stay tuned! ⚡️‍") ||
            "This page is unfinished, sorry!"}{" "}
          Go{" "}
          <Link to="/" style={{ textDecoration: "underline", color: "#000" }}>
            Home
          </Link>
          .
        </h2>
      </div>
    </div>
  </div>
);
