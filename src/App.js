import './styles/tailwind.css'
import SidebarPanel from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
    return (
        <div className="flex">
            <SidebarPanel />

            <Topbar />

        </div>

    )
}
export default App;