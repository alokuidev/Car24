import VehiclePLP from "./component/VehiclePLP.jsx";
import {store} from "./Redux/Store.js";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <VehiclePLP/>
    </Provider>
  );
}

export default App;
