import { Provider } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Sidebar />
      </div>
    </Provider>
  );
}

export default App;
