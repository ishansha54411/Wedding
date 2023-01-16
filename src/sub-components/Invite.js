import React from "react";
import ImageGroom from '../images/groom_new.JPG'
import ImageBride from '../images/bride.jpg'

const Invite=({greetings,dateplace,msg,groom,bride})=>{
    return (<div id="fh5co-couple">
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>{greetings}</h2>
                <h3>{dateplace}</h3>
                <p>{msg}</p>
            </div>
        </div>
        <div className="couple-wrap animate-box">
            <div className="couple-half">
                <div className="groom">
                    <img src={ImageGroom} alt="groom" className="img-responsive"/>
                </div>
                <div className="desc-groom">
                    <h3>{groom.Name}</h3>
                    <p>{groom.Message}</p>
                </div>
            </div>
            <p className="heart text-center"><i className="icon-heart2"></i></p>
            <div className="couple-half">
                <div className="bride">
                    <img src={ImageBride} alt="groom" className="img-responsive"/>
                </div>
                <div className="desc-bride">
                    <h3>{bride.Name}</h3>
                    <p>{bride.Message}</p>
                </div>
            </div>
        </div>
    </div>
</div>)
}

export default Invite;