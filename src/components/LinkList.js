import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import './Profile.scss';

const LinkList = () => {
   
    return <ListGroup>
        <div id ="profile_section" className="mx-lg-5 mr-3 ml-3 mt-5 d-flex flex-column align-items-center">
            <Image alt="Taiwo Akerele Image" width="150px" height="150px" src={process.env.PUBLIC_URL + "/taiwoak.jpg" } id="profile__img" />
            <p className="mb-1">Taiwo Akerele</p>
            <p id="slack">@taiwoak</p>
            <img alt="Share Icon" width="40px" height="40px" src= {process.env.PUBLIC_URL + "/_Avatar share button.png" } id="web-share" />
            <img alt="Share Icon" width="40px" height="40px" src= {process.env.PUBLIC_URL + "/_Avatar share button mobile.png" } id="mobile-share" />
        </div>
        <div id="links_section" className="d-flex flex-column align-items-center">
            <a href="https://twitter.com/td_akerele" id="twitter" target="_blank" rel="noreferrer"> 
              <h5> Follow me on twitter: @td_akerele </h5>
            </a>
            <a href="https://training.zuri.team" id="btn__zuri" className="mt-4" target="_blank" rel="noreferrer"> 
              <h5> Zuri Team </h5> 
              <p>Click here to register for free design and coding training organized by Zuri and I4G</p>
            </a>
            <a href="https://books.zuri.team" id="books" className="mt-4" target="_blank" rel="noreferrer"> 
              <h5> Zuri Books </h5>
              <p>Click here to get seasoned books on Design and Coding here!</p>
            </a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=<taiwoak>" id="book__python" className="mt-4" target="_blank" rel="noreferrer">
              <h5> Python Books </h5>
              <p>Click here to get your beginner-friendly books on Python </p>
            </a>
            <a href="https://background.zuri.team" id="pitch" className="mt-4" target="_blank" rel="noreferrer"> 
              <h5>  Background Check for Coders </h5>
              <p>Click here for background check on your codes</p>
            </a>
            <a href="https://books.zuri.team/design-rules" id="book__design" className="mt-4 mb-4" target="_blank" rel="noreferrer">
              <h5> Design Books </h5>
              <p>Click here to get free design book by Zuri to kickstart your career in Design</p>
            </a>
        </div>
        <span id="social-icons" className="d-flex flex-row align-items-center justify-content-center mb-4">
            <img alt="Slack" width="24px" height="24px" src= {process.env.PUBLIC_URL + "/slack.png" } className="mx-4" />  
            <a href="https://github.com/taiwoak" target="_blank" rel="noreferrer"><img alt="Github" width="24px" height="24px" src= {process.env.PUBLIC_URL + "/Social icon.png" }/></a> 
        </span>
        <div id="line"></div>
        <div className="d-flex flex-sm-row align-items-sm-center mt-3 mb-4 justify-content-sm-around" id="footer">
            <img alt="Zuri Internship Logo" width="187.59px" height="32px" src= {process.env.PUBLIC_URL + "/Zuri.Internship_Logo.png" } id="zuri-logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img alt="I4G Logo" width="132.13px" height="32px" src= {process.env.PUBLIC_URL + "/I4G.png" } id="i4g-logo" />
        </div>
    </ListGroup>;
};

export default LinkList;