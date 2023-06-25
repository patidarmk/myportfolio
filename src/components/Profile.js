import "./Profile.css"
import imageIcon from '../assets/developer-dark.svg'
import resume from '../assets/resume.pdf'
function Profile(){
    return (
/*         <div className="profile">
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
            <div className="aboutme">
                <div className="aboutme-heading">I'm a Software Developer. </div>
                <div className="aboutme-sub-heading" >Currently, I'm a Software Engineer at Wipro,</div>

                <p className="aboutme-text">A self-taught web developer, functioning in the industry for 2+ years now.
                    I make meaningful and delightful digital products that create an equilibrium
                    between user needs and business goals.</p>

            </div>
            <div className="profile-action">
                <a className="profile-btn see-my-work--btn" href="#">See My Work</a>
                <a className="profile-btn view-resume--btn" href={resume} target="_blank" rel="noreferrer">View Resume</a>
            </div>
			
        </div> */
		<div className="profile-container">
			<div className="profile-title-left">
				<span className="profile-title">HI, I AM MUKESH</span>
				<span className="profile-sub-title">A Front-End Developer & Design Enthusiast</span>
				<a className="profile-btn view-resume--btn" href={resume} target="_blank" rel="noreferrer">View Resume</a>
			</div>
			<div className="profile-svg-right">
				<img className = "profile-image-svg" src={imageIcon} alt="profile-cover"/>
			</div>
		</div>
		
		
    )
}

export default Profile;