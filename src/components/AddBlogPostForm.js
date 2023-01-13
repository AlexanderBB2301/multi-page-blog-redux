import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { blogPostAdded } from "../features/blogPostsSlice";

const AddBlogPostForm = () => {
  const dispatch = useDispatch();
  //temporary state, controlled form input, only for this component, do not need to be global state

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [author, setAuthor] = useState("");

  const onTitleEdited = (e) => setTitle(e.target.value);
  const onContentEdited = (e) => setContent(e.target.value);
  const onAuthorEdited = (e) => setAuthor(e.target.value);

  const canSavePost = Boolean(title) && Boolean(content);

  const onAddBlogPost = () => {
    if (canSavePost) {
      dispatch(blogPostAdded(title, content, author));

      setTitle("");
      setContent("");
      setAuthor("");
    }
  };
  return (
    <section>
      <h3>Add a Post About Your Adventures With Your Four Legged Friends!</h3>

      <form>
        <label htmlFor="blogPostTitle">Title: </label>
        <input
          type="text"
          id="blogPostTitle"
          name="blogPostTitle"
          value={title}
          onChange={onTitleEdited}
        />
        <label htmlFor="blogPostContent"></label>
        <textarea
          id="blogPostContent"
          name="blogPostContent"
          value={content}
          onChange={onContentEdited}
        />
        <label htmlFor="blogPostAuthor"></label>
        <textarea
          id="blogPostAuthor"
          name="blogPostAuthor"
          value={author}
          onChange={onAuthorEdited}
        />
        <button disabled={!canSavePost} type="button" onClick={onAddBlogPost}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddBlogPostForm;
