import React, { useState, useEffect } from "react";
import SpecialCard from "./Card/SpecialCard";
import { menuAPI } from "../../API";
import "./Specials.css";

function Specials() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedItems = async () => {
      try {
        setLoading(true);
        const items = await menuAPI.getFeaturedItems();
        setFeaturedItems(items);
      } catch (error) {
        console.error('Error loading featured items:', error);
        // Fallback to empty array if API fails
        setFeaturedItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedItems();
  }, []);

  if (loading) {
    return (
      <div className="specials-bg">
        <div className="container">
          <div className="specials">
            <h1>This weeks specials</h1>
            <p>Loading specials...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="specials-bg">
      <div className="container">
        <div className="specials">
          <h1>This weeks specials</h1>
          <div className="specials-grid">
            {featuredItems.length > 0 ? (
              featuredItems.slice(0, 3).map((item) => (
                <SpecialCard
                  key={item.id}
                  item={item}
                />
              ))
            ) : (
              // Fallback content if no featured items
              <>
                <SpecialCard />
                <SpecialCard />
                <SpecialCard />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
