import './WorkDetails.css'
const WorkDetails = (props) => {
    const id = props.isActive;
    const workHistory = [
        {
            id :1,
            company:'ubuy',
            position:'PhP Developer',
            location:'Jaipur',
            duration:'Jan 01 2020 to Sep 2020',
            skills:'HTML ,CSS, JS',
            description:["Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
            ] 

            
        },
        {
            id :2,
            company:'Wipro',
            position:'RPA Developer',
            location:'Pune',
            duration:'April 21 to Present',
            skills:'HTML ,CSS, JS',
            description:["Developed and shipped highly interactive web applications for Apple Music using Ember.js",
                 "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
                 "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
                 "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
            ] 
        },
    ]

    return (
        <div className="work-history-section">
            <div>
                <div className="work-history-position">{workHistory[id].position}<span className="work-history-company">@{workHistory[id].company}</span></div>
                
            </div>
            <div className="work-history-timeline">{workHistory[id].duration}</div>
            <div className="work-history-description">
                <ul>
                {workHistory[id].description.map((eachLine)=>
                    <li>{eachLine}</li>)
                }
                </ul>
            </div>
        </div>
    )
}

export default WorkDetails;