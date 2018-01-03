import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {
    console.log(props);
    const locale = props.location.pathmame; 
    return (
        <div>
            Category
            <Link to={locale+"/1"}>Go to ViewPost</Link>
            <Link to="/new">Go to NewPost</Link>
        </div>    
    )
}

export default Category;