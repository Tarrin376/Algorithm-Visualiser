import React from "react";
import profile1 from '../../../Images/profile1.jpg';
import profile2 from '../../../Images/profile2.jpg';
import profile3 from '../../../Images/profile3.jpeg';
import rating from '../../../Images/fiveStars.png';
import leftArrow from '../../../Images/leftArrow.png';
import '../Styles/Reviews.css';

function Reviews() {
    return (
        <div className="reviewsComponent">
            <div className="reviewDesc">
                <h1 className="center" id="reviewTitle">Reviews</h1>
                <img id="rating" src={rating} alt="Our ratings"/>
                <p className="center" id="allReviews">All reviews: 953</p>
                <p id="reviewInfo">All of our reviews have came directly from our customers, expressing how they feel about our service. Our aim 
                is to improve the user experience as much as possible to make our software user-friendly, easy to use, and accessible. We are also rated 
                4.5 stars on trust pilot which highlights our dedication and passion for helping others learn!
                </p>
            </div>
            <article>
                <div className="review">
                    <img id="profilePic" src={profile1} alt="Profile"/>
                    <img className="leftArrow" src={leftArrow} alt="Left arrow"/>
                    <p>I have really enjoyed using this service. It has allowed me to build up my data structure and algorithm skills to the 
                    point where i can confidently solve various types of problems on websites such as leetcode, hackerrank and codewars.
                    </p>
                </div>
                <div className="line"></div>
                <div className="review">
                    <img id="profilePic" src={profile2} alt="Profile"/>
                    <img className="leftArrow" src={leftArrow} alt="Left arrow"/>
                    <p>Before i came across this platform, i was really struggling with the more technical and complex topics such as graphs and trees. 
                    This platform has really helped me develop my skills in these areas by having very useful diagrams of algorithms and data structures which 
                    most companies seem to lack on.
                    </p>
                </div>
                <div className="line"></div>
                <div className="review">
                    <img id="profilePic" src={profile3} alt="Profile"/>
                    <img className="leftArrow" src={leftArrow} alt="Left arrow"/>
                    <p>My dream is to land a front-end developer position at Google and this service is really helping me get there. The difference in my 
                    coding skills before and now is night and day and i owe it all to the team at Algorithmic. Recommend!
                    </p>
                </div>
            </article>
        </div>
    );
}

export default Reviews;