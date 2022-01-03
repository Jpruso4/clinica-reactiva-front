import "./styles.css";
import { Provider } from "react-redux";

import { store } from "./store/store";

import Patientes from "./components/Patients";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Patientes />
      </Provider>
    </div>
  );
}
