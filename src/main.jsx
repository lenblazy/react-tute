import {createRoot} from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import NewsApp from "./NewsApp.jsx";
import CounterApp from "./CounterApp.jsx";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent.jsx";

createRoot(document.getElementById('root')).render(
    // <CounterApp />
    // <NewsApp />
    <FunctionalBasedComponent />
)
