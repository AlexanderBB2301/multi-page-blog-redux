import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "0",
    title: "Welcome to the 'Adventures of Kaia' Blog Page",
    content:
      "We will document our adventures near and far with our puppy, Kaia.",
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    author: "Alexander Blanchard.",
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
      wow: 0,
      coffee: 0,
      laughing: 0,
    },
  },
  {
    id: "1",
    title: "Kaia",
    content:
      "Kaia is an eight month old Goldendoodle puppy. She is crazy, energetic, intelligent, affectionate, curios and loved.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    author: "Alexander Blanchard.",
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
      heart: 0,
      wow: 0,
      coffee: 0,
      laughing: 0,
    },
  },
];

const blogPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  reducers: {
    //ability to add a new post
    //array not mutated by .push due to immer being used in the slice
    blogPostAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(title, content, author, date) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            author,
            reactions: {
              thumbsUp: 0,
              thumbsDown: 0,
              heart: 0,
              wow: 0,
              coffee: 0,
              laughing: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { blogPostId, reaction } = action.payload;
      const ifExistingBlogPost = state.find(
        (blogPost) => blogPost.id === blogPostId
      );
      if (ifExistingBlogPost) {
        ifExistingBlogPost.reactions[reaction]++;
      }
    },
  },
});
//if data structure changes, it will only need to be updated here in the slice, not in each component
export const selectAllBlogPosts = (state) => state.blogPosts;

//an action creator function with the same name will be generated
export const { blogPostAdded, reactionAdded } = blogPostsSlice.actions;
export default blogPostsSlice.reducer;
