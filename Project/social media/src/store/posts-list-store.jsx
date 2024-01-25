import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {},
});

const postlistReducer = (currPostlist, action) => {
  let newpostlist = currPostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currPostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  else if (action.type === "ADD_POST") {
    newpostlist  = [action.payload, ...currPostlist];
  }
  return newpostlist;
};

const PostlistProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );

  const addpost = (userid,posttitle,postbody,reaction,tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reactions: reaction,
        userid: userid,
        tags: tags,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchPostlist({
    type: 'DELETE_POST',
    payload: {
      postid,
    },
  });
  };

  return (
    <Postlist.Provider
      value={{ postlist, addpost, deletepost }}
    >
      {children}
    </Postlist.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "go to delhi",
    body: "hi friends there you go",
    reactions: 2,
    userid: "user-9",
    tags: ["vacation", "delhi", "enjoying"],
  },
  {
    id: "2",
    title: "pass ho gya",
    body: "hi friends there you go masti ki hai",
    reactions: 15,
    userid: "user-15",
    tags: ["exam", "pass", "enjoying"],
  },
];

export default PostlistProvider;
