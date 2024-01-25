import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import {Postlist} from "../store/posts-list-store";

const Post = ({ post }) => {

  const { deletepost } = useContext(Postlist);
  return (
    <div class="card post-card" style={{ width: "30rem" }}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=> deletepost(post.id)}>
            <MdAutoDelete />
          </span>
        </h5>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};

export default Post;
