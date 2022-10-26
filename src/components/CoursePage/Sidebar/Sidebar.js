import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("https://learning-bytecode-clouds-server.vercel.app/categories")
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    return (
      <div className="sidebar">
        <div className='sidebar-link'>
          <h4 className='text-decoration-underline'>Our Course Topic</h4>
          {categories.map((singleCategory) => (
            <p key={singleCategory.id}>
              <Link to={`/course/${singleCategory.id}`}>
                {singleCategory.category}
              </Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default Sidebar;