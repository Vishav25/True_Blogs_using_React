import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'vishu', id: 1 },
    { title: 'Using react', body: 'lorem ipsum...', author: 'abhi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'vis', id: 3 }
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!"/>
    </div>
  );
}
 
export default Home;
