import React, { useState, useEffect } from "react";
import SpecialCard from "./Card/SpecialCard";
import { menuAPI } from "../../API";
import "./Specials.css";

function Specials() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadFeaturedItems = async () => {
      try {
        setLoading(true);
        setError(false);

        const items = await menuAPI.getFeaturedItems();

        if (Array.isArray(items) && items.length > 0) {
          setFeaturedItems(items);
        } else {
          // If no featured items or API fails, use fallback
          setError(true);
        }
      } catch (err) {
        console.error('Error loading featured items:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Delay loading to prevent blocking initial render
    const timer = setTimeout(loadFeaturedItems, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="specials-bg">
        <div className="container">
          <div className="specials">
            <h1>This weeks specials</h1>
            <p style={{ textAlign: 'center', color: '#666' }}>Loading fresh specials from our kitchen...</p>
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
          {!error && featuredItems.length > 0 && (
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '2em' }}>
              Fresh from our Django kitchen! 🍋
            </p>
          )}
          <div className="specials-grid">
            {!error && featuredItems.length > 0 ? (
              featuredItems.slice(0, 3).map((item) => (
                <SpecialCard
                  key={item.id}
                  item={item}
                />
              ))
            ) : (
              // Fallback to default cards if API fails or no featured items
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
