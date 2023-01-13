import { useSelector } from "react-redux";
import { selectAllBlogPosts } from "../features/blogPostsSlice";
import TimeSincePosted from "./TimeSincePosted";
import ReactionsButtons from "./ReactionsButtons";

import React from "react";

const BlogPostsList = () => {
  //get all blog posts in our state
  const blogPosts = useSelector(selectAllBlogPosts);

  //map over blog posts and create an article (blog post) for each one
  //shallow copy of array created
  const orderedBlogPosts = blogPosts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  //show preview of post - first 100 characters

  //logic about what to render in order to keep jsx neat
  const blogPostsRendered = orderedBlogPosts.map((blogPost) => (
    <article key={blogPost.id}>
      <h3>{blogPost.title}</h3>
      <p>{blogPost.content.substring(0, 100)}</p>
      <TimeSincePosted timestamp={blogPost.date} />
      <p>By {blogPost.author !== "" ? blogPost.author : "Author Unknown"}</p>
      <ReactionsButtons blogPost={blogPost} />
    </article>
  ));

  return (
    <section>
      <h3>The Adventures of Kaia</h3>
      {blogPostsRendered}
    </section>
  );
};

export default BlogPostsList;
