import React, { useEffect, useState } from 'react';
import {FaUser, FaCalendar} from 'react-icons/fa'
import moment from 'moment';

function Blog() {
  const mediumUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@allanmuturi';
  const [blogs, setBlogs] = useState([]);

  async function getBlog() {
    let request = await fetch(mediumUrl);
    let response = await request.json();
    setBlogs(response.items);
  }

  useEffect(() => {
    getBlog();
  }, []);

  return <div className='blogs'>
      {blogs.map(blog => (
        <a href={blog.link}>
            <div className='container'>
              <div className="image-conatiner">
                  <img src={blog.thumbnail} alt={blog.title} />
              </div>
              <div className="text-container">
                    <div className="title">
                        {blog.title}
                    </div>
                    <p className='desc'>{`${blog.description.substring(4, 120)} ....`}</p>
                    <div className='autcal'>
                        <p><FaUser/> {blog.author}</p>
                    </div>
                    <div className='autcal'>
                        <FaCalendar/> {moment(blog.pubDate).format('Do MMM YYYY')}
                    </div>
              </div>
          </div>
        </a>
      ))}
  </div>;
}

export default Blog;
