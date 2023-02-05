import React from "react";
import person from "../../assets/person1.jpeg";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials-bg">
      <div className="container">
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonials-card">
              <div>5*</div>
              <div>
                "The food at Little Lemon is always delicious and fresh"
              </div>
              <div className="testimonials-name">
                <img src={person} />
                <span>Carolina</span>
              </div>
            </div>
            <div className="testimonials-card">
              <div>5*</div>
              <div>
                "The food at Little Lemon is always delicious and fresh"
              </div>
              <div className="testimonials-name">
                <img src={person} />
                <span>Xano Mangas</span>
              </div>
            </div>
            <div className="testimonials-card">
              <div>5*</div>
              <div>
                "The food at Little Lemon is always delicious and fresh"
              </div>
              <div className="testimonials-name">
                <img src={person} />
                <span>Quim Fogueteiro</span>
              </div>
            </div>
            <div className="testimonials-card">
              <div>5*</div>
              <div>
                "The food at Little Lemon is always delicious and fresh"
              </div>
              <div className="testimonials-name">
                <img src={person} />
                <span>Mariana Caneco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
