import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Video extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="video">
        <Thumbnail video={video} />
        <a href={video.url} style={{ color: "inherit" }}>
          <div className="video__title-and-description">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }
}

export default class VideoList extends Component {
  render() {
    const { videos, emptyHeading } = this.props;
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      heading = count + " видео";
    }
    return (
      <section>
        <h2>{heading}</h2>
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </section>
    );
  }
}

class Thumbnail extends Component {
  render() {
    return (
      <img
        className="video__thumbnail"
        src={this.props.video.thumbnailUrl}
        alt="Thumbnail"
      />
    );
  }
}

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }));
  }

  render() {
    return (
      <button className="video__like-button" onClick={this.incrementLikes}>
        <FontAwesomeIcon icon={faHeart} color="red" />
        {" " + this.state.likes}
      </button>
    );
  }
}
