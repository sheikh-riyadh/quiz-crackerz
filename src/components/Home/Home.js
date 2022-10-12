import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
const Home = () => {

    /* console.log(data) */
    const topicsData = useLoaderData()
    const { data } = topicsData;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 p-12 gap-10 '>
            <div className="edu-img-container">
                <img src="education.jpg" alt="" />
                <h2 className='text-2xl font-bold text-center'>{`let's check out your web development knowledge. it helps to get your Web-power (-:`}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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