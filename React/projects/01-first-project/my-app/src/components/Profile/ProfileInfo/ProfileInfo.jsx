import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://demo.joomlashine.com/joomla-templates/jsn_ultranet/pro/images/joomlashine/sample/slide/slider-1.jpeg"></img>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;
