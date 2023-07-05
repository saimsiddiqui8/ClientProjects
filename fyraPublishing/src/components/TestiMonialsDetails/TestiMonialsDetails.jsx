import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {img} = testiMonialDetail;
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt={img} />
                
            </div>
            <div className="testimonial-name">
           
            </div>
        </div>
    );
};

export default TestiMonialsDetails;