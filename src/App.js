import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./utils/store";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={store}>
      <div className="App px-1">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
