import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_mountains.jpg"></img>
            </div>
            <div>avatar + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
