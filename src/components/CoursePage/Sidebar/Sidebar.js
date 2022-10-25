import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("https://learning-bytecode-clouds-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    return (
      <div>
        <h3>It is Sidebar</h3>
        {categories.map((singleCategory) => (
          <p>
            <Link>{singleCategory.category}</Link>
          </p>
        ))}
      </div>
    );
};

export default Sidebar;