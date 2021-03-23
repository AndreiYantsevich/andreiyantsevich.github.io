import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/1b6c1ffb3f1a1a0b182e1b31a6261b49.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>like count:</span>
                {props.like}
            </div>
        </div>
    );
};

export default Post;
