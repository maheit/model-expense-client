import React from "react";
import { connect } from "react-redux";

const GifLoadingPage = () => {
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <div style={style}>
      <img src="/images/loader.gif" />
    </div>
  );
};

// const mapStateToprops = state => ({
//   isUserLogin: state.auth.isUserLogin
// });

// export default connect(mapStateToprops)(GifLoadingPage);

export default GifLoadingPage;
