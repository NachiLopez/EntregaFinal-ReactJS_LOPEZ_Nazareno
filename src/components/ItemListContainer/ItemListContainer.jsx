import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f2f2f2',
        border: '1px solid #ddd',
        borderRadius: '8px',
      };
    
    return (
        <div style={containerStyle} className="item-list-container">
            <h2>{greeting}</h2>
            <img id='algomas' src="../../../public/crysys_logo.png" alt="" />
        </div>
    )
}

export default ItemListContainer