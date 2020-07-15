import React from 'react';


function Category({ categories, onSubmitCategory, handleCategory }) {
        const categoryList = categories.map(category => <option key={category} value={category}>{category}</option>);

        return (
            <>
                <label>Category:</label>
                <select className="select-category" name="category" id="category" onChange={handleCategory}>
                    {categoryList}
                </select>
                <input className="btn-category" type="submit" value="Get Fact" onClick={onSubmitCategory}></input>
            </>
        )

}

export default Category;