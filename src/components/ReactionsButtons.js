import { reactionAdded } from "../features/blogPostsSlice";
import { useDispatch } from "react-redux";

const reactionEmoji = {
  thumbsUp: "👍",
  thumbsDown: "👎",
  heart: "💚",
  wow: "🤯",
  coffee: "🍵",
  laughing: "🤣",
};

const ReactionsButtons = ({ blogPost }) => {
  const dispatch = useDispatch();

  //object lookup
  const reactionButtons = Object.entries(reactionEmoji).map(([text, emoji]) => {
    const onReactionClicked = () => {
      dispatch(
        // eslint-disable-next-line no-restricted-globals
        reactionAdded({ blogPostId: blogPost.id, reaction: text })
      );
    };

    return (
      <button
        key={text}
        type="button"
        className="reactionButton"
        onClick={onReactionClicked}
      >
        {emoji} {blogPost.reactions[text]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionsButtons;
