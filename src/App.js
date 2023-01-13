import React from "react";
import BlogPostsList from "./components/BlogPostsList";
import AddBlogPostForm from "./components/AddBlogPostForm";
const App = () => {
  return (
    <main className="App">
      <AddBlogPostForm />
      <BlogPostsList />
    </main>
  );
};

export default App;
