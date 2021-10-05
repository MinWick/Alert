import { ShowAlert } from "./components/Alerts";
import { Avatar } from "./components/Imagen"

function App() {
  return (
    <div className="App">

        <Avatar img="user.jpg"/>
        <br />
        <ShowAlert height="50px" width="1200px" colorFond='linear-gradient(70deg, rgba(2,0,36,1) 0%, rgba(69,193,196,1) 0%, rgba(66,199,197,0.10437678489364499) 0%, rgba(64,198,199,0.09037118265274857) 0%, rgba(0,168,255,0.4433123591233369) 0%)' textColor="linear-gradient(70deg, rgba(2,0,36,1) 0%, rgba(69,193,196,1) 0%, rgba(66,199,197,0.10437678489364499) 0%, rgba(64,198,199,0.09037118265274857) 0%, rgba(0,250,255,0.7262255243894433) 0%)" texto="Default Alert" ></ShowAlert>
        <ShowAlert height="50px" width="1200px" colorFond='linear-gradient(70deg, rgba(2,0,36,1) 0%, rgba(69,193,196,1) 0%, rgba(66,199,197,0.10437678489364499) 0%, rgba(64,198,199,0.09037118265274857) 0%, rgba(0,255,162,0.5021358885351015) 0%)' textColor="linear-gradient(70deg, rgba(2,0,36,1) 0%, rgba(69,193,196,1) 0%, rgba(66,199,197,0.10437678489364499) 0%, rgba(64,198,199,0.09037118265274857) 0%, rgba(0,250,255,0.7262255243894433) 0%)" texto="Success Alert" ></ShowAlert>
    </div>
  );
}

export default App;
