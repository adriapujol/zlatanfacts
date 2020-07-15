import React from 'react';


function Facts( { fact, loading }) {
        return (
            <div className="fact-box">
                {loading ? 
                    <div>Summoning fact...</div> :
                    <div>{fact}</div>
                }
            </div>    
        );
    
}

export default Facts;