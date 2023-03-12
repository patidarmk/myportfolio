import Tab from './Tabs'
import './Experience.css'
import { useState } from 'react';
import WorkDetails from './WorkDetails';
export const Experience = () => {

    const clickHandler = (id) =>{
        console.log(id)
        setIsActive(id);
    }
    const[tabs,setTab]=useState(['uBuy','Wipro']);
    const[isActive,setIsActive] = useState(0);
    return (
        <div className = "experience-section">
            <div className='experience-section-heading'>
                <h1>Work Experience</h1>
            </div >
            <div className='experience-section-content'>
                <Tab tabList= {tabs} clickHandler ={clickHandler} isActive ={isActive} />
                <div className ="content">
                    <WorkDetails isActive={isActive}/>
                </div>
            </div>
        </div>
    )
}