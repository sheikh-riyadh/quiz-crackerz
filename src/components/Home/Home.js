import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
const Home = () => {

    /* console.log(data) */
    const topicsData = useLoaderData()
    const { data } = topicsData;

    return (
        <div className='grid grid-cols-2 p-12 gap-10'>
            <div className="edu-img-container">
                <img src="education.jpg" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    data.map((topic) => <Topics key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;