"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) return "You liked comment #" + this.props.commentId;

    return e(
      "button",
      {
        onClick: () => this.setState({ liked: true }),
        className: "like-button",
      },
      "Like",
    );
  }
}

document.querySelectorAll(".like-button-container").forEach((domContainer) => {
  const commentId = parseInt(domContainer.dataset.commentid, 10);
  ReactDOM.render(e(LikeButton, { commentId }), domContainer);
});

ReactDOM.render(
  e("div", {}, e("h3", {}, "Hey")),
  document.getElementById("hey"),
);
