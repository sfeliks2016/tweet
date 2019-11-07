import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// const Time = function() {
//   return <span className="time">3h ago</span>;
// };

//OR

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://www.gravatar.com/avatar/nothing"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less then 140 characters</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tweet />, rootElement);
