import "./Profile.css";

export default function Profile({profile}) {
    return (<div>
            <div >
                <img src={profile.url} className="profile-image" alt="" />
                <div className="profile-name">
                    {profile.name}
                </div>
            </div>
        </div>);
}