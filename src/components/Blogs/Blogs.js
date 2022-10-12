import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
const Blogs = () => {
    const blogs = useLoaderData()

    return (
        <div>
            {
                blogs.map((blog, indexID) => <Blog key={indexID} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;