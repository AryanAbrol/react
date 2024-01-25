import { useContext } from "react";
import { useRef } from "react";
import { Postlist } from "../store/posts-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addpost } = useContext(Postlist);
  const navigate = useNavigate();

  const useridelement = useRef();
  const posttitleelement = useRef();
  const postbodyelement = useRef();
  const reactionselement = useRef();
  const tagselement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userid = useridelement.current.value;
    const posttitle = posttitleelement.current.value;
    const postbody = postbodyelement.current.value;
    const reaction = reactionselement.current.value;
    const tags = tagselement.current.value.split(" ");

    useridelement.current.value = "";
    posttitleelement.current.value = "";
    postbodyelement.current.value = "";
    reactionselement.current.value = "";
    tagselement.current.value = "";

    addpost(userid, posttitle, postbody, reaction, tags);

    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div class="mb-3">
        <label for="userid" class="form-label">
          Enter your user id
        </label>
        <input
          type="text"
          ref={useridelement}
          class="form-control"
          id="title"
          placeholder="your user id"
        />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label">
          Post title
        </label>
        <input
          type="text"
          ref={posttitleelement}
          class="form-control"
          id="title"
          placeholder="how are you today"
        />
      </div>

      <div class="mb-3">
        <label for="body" class="form-label">
          Post content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postbodyelement}
          class="form-control"
          id="body"
          placeholder="tell us more"
        />
      </div>

      <div class="mb-3">
        <label for="reactions" class="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionselement}
          class="form-control"
          id="reactions"
          placeholder="how many people reacted to app"
        />
      </div>

      <div class="mb-3">
        <label for="tags" class="form-label">
          enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagselement}
          class="form-control"
          id="reactions"
          placeholder="please enter tags using space"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
