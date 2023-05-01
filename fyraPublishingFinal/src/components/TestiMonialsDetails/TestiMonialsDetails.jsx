import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} alt={img} />
                
            </div>
            <div class="testimonial-name">
           
            </div>
        </div>
    );
};

export default TestiMonialsDetails;