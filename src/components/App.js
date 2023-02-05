import React from "react";
import Footer from "./sub-components/Footer";
import Invite from "./sub-components/Invite";
import Jumbotron from "./sub-components/Jumbotron";
import TimeLine from "./sub-components/Timeline";
import FirstMeet from '../images/J51A2354.JPG'
import FirstDate from '../images/FirstDate.jpeg'
import Engagement from '../images/BG-Img.jpeg'
import SecondDate from '../images/3B1A82E4-1C9D-461D-94A1-B1BC1505CB42.jpeg'
import MainBackgroundImage from '../images/BG-Img.jpeg'
import GroomImage from '../images/groom_new.JPG'
import BrideImage from '../images/bride.jpg'
const App=()=>{
    return (<div>
        <Jumbotron 
            title="Ishan & Urvashi" 
            desc="We Are Getting Married!" 
            date={new Date("2023-05-11").setHours(0,0,0,0)}
            bgImage={MainBackgroundImage}/>
        <Invite 
            greetings="Hello!" 
            dateplace="11 May, 2023 Una, Himachal Pradesh" 
            msg="We invited you to celebrate our wedding"
            bride={{Name:'Urvashi Vashisht',Message:"",Image:BrideImage}}
            groom={{Name:'Ishan Sharma',Message:"All along, i thought i was lost, but now i know that was just the feeling of heart searching for you.",Image:GroomImage}}/>
        <TimeLine
            title="Our Story!"
            message="Together Forever"
            desc="Time passes but memories are forever."
            timeline={[
                    {image:FirstMeet,title:'First Meet',date:'September 28, 2022',desc:''},
                    {image:FirstDate,title:'First Date',date:'October 21, 2022',desc:''},
                    {image:Engagement,title:'Engagement',date:'December 11, 2022',desc:''},
                    {image:SecondDate,title:'Second Date',date:'December 18, 2022',desc:''}
                ]}/>
        <Footer/>
    </div>)
}

export default App;