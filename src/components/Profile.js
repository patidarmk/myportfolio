import "./Profile.css"
import pic from '../assets/pic.jpg'
function Profile(){
    return (
        <div className="profile">
            <div className="profile-name">Hello! I Am <span>Mukesh Patidar</span></div>
            <div className="profile-descrption">
                <div className="profile-pic-container">
                    <img className="profile-pic"  alt="pic" src={pic} ></img>
                </div>
                <div className="profile-tag">
                    <div className="profile-tag-initial">A Developer who  </div>
                    <div className="profile-tag-main">Judge the book by its <span>cover</span>...</div>
                    <div className="profile-tag-line">Because if the cover does not impress you what else can?</div>
                </div>
            </div>
            <div>
                <div className="aboutme-heading">I'm a Software Developer. </div>
                <div className="aboutme-sub-heading" >Currently, I'm a Software Engineer at Facebook,</div>
                <p className="aboutme-text">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                    I make meaningful and delightful digital products that create an equilibrium
                    between user needs and business goals.</p>
            </div>
        </div>
    )
}

export default Profile;