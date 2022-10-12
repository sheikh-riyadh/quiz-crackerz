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
        {
          path: '/',
          element: <Home></Home>
        },
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
          element: <Blogs></Blogs>
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
    </div>
  );
}

export default App;
