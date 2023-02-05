import React from "react";
import "./TestimonialsCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestimonialsCard({ name, stars, comment, photo }) {
  return (
    <div className="testimonials-card">
      <div>
        {Array.from({ length: stars }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} color="#f4ce14" />
        ))}
      </div>
      <div>
        <p>{comment}</p>
      </div>
      <div className="testimonials-name">
        <img src={photo} alt="Testimonial person" />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default TestimonialsCard;
