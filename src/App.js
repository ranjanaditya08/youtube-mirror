import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./utils/store";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../src/components/ErrorPage";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App px-1">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
