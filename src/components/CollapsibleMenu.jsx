import React from "react";

class CollapsibleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
      height: "0px",
      myRef: null,
      display: "none",
    };
    this.toggleOpenClose = this.toggleOpenClose.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.height === "auto" && this.state.height !== "auto") {
      setTimeout(() => this.setState({ height: "0px" }), 1);
    }
  };

  setInnerRef = (ref) => this.setState({ myRef: ref });

  toggleOpenClose = () =>
    this.setState({
      showContent: !this.state.showContent,
      height: this.state.myRef.scrollHeight,
      display: !this.state.showContent ? "block" : "none",
    });

  updateAfterTransition = () => {
    if (this.state.showContent) {
      this.setState({ height: "auto" });
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className="mean-bar">
        <a
          href="#nav"
          className={`meanmenu-reveal ${ "menuclose"}`}
          style={{ right: 0, left: "auto" }}
        >
          <span
            className={this.state.showContent ? "menu-close" : "menu-bar"}
            onClick={this.toggleOpenClose}
          ></span>
        </a>
        <nav className="mean-nav" >
        <ul
          ref={this.setInnerRef}
          onTransitionEnd={() => this.updateAfterTransition()}
          style={{
            height: this.state.height,
            overflow: "hidden",
            transition: "height 250ms linear 0s",
          }}
        >
          {children}
        </ul>
        </nav>
      </div>
    );
  }
}



export default CollapsibleMenu;
