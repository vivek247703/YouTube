import { Provider } from 'react-redux';
import './App.css';
import { Body } from './Body';
import { Header } from './Header';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Maincontainer } from './Maincontainer';
import WatchPage from './WatchPage'


const appRouter = createBrowserRouter([{
  path : "/",
  element :<Body/>,
  children : [
    {
      path: "/",
      element: <Maincontainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
  ],
},])
function App() {
  return (
    <Provider store={store}>
        <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
    
  );
}

export default App;
