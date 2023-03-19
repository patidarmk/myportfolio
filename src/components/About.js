const About = () => {
    return (
        <section className="about-me-section">
            <h1>About me</h1>
            <p className="heading-text">You will find a little intro about me</p>
            <div className="about-me-content">
                <div className="about-me-text-container">
                    <h2>Wants to know me?</h2>

                    <p>I am a frontend developer, 
                        whose whole interest in building interactive, accessible, and responsive websites. My project Section contains some beautiful things i'he built.     
                    </p>
                    <p>i'm currently open to job opportunities where i can contibute to your business. contact me if you're interested in having a taste of my skills</p>
                    <button className="profile-btn see-my-work--btn ">Contact Me</button>
                </div>
                
                <div className="about-me-skills-container">
                    <h2>Skills and Technologies</h2>
                    <ul className="about-me-skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React JS</li>
                        <li>github</li>
                        <li>php</li>
                        <li>GraphQL</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;
