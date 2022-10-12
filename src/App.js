import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics'
import Blogs from './components/Blogs/Blogs'
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Questions from './components/Questions/Questions'

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        /* {
          path: '/',
          element: <Home></Home>
        }, */
        {
          path: '/home',
          element: <Home></Home>,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>,
          loader: () => fetch('blogs.json')
        },
        {
          path: '/quiz/:quizID',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`),
          element: <Questions></Questions>
        },
        {
          path: '*',
          element: <ErrorMessage></ErrorMessage>
        }
      ]
    }
  ])
  return (
    <div className='main-container'>
      <RouterProvider router={router}></RouterProvider>
      {/* <Blogs question={"What the purpose of react router?"} answer={"ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route."}>
      </Blogs> */}
    </div >
  );
}

export default App;
