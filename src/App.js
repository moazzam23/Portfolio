import "./App.scss"
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import Parent from "./Components/Parent";
import Project from "./Components/project"
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Netflix from "./Components/Pages/Netflix";
import Chat from "./Components/Pages/Chat";
import Chaiwala from "./Components/Pages/Chaiwala";
import LoadingPage from "./Components/Pages/Loading";
import Corona from "./Components/Pages/Corona";
import Food from "./Components/Pages/Food";
import About2 from "./Main Page/About2";
import Find2 from "./Main Page/Find2";
import Skills2 from "./Main Page/Skills2";
import Certificate from "./Main Page/Certificate";
import Education from "./Main Page/Education";
import Exprience from "./Main Page/Exprience";
import CustomCursor from "./Components/Customcursor";
import Socialmedia from "./Components/Pages/Socialmedia";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };
  return (
<>
{loading ? (
        <LoadingPage onLoadComplete={handleLoadComplete} />
      ) : (
<BrowserRouter>
<CustomCursor/>
<Routes>
<Route path="/" element={<Parent/>} />
<Route path="/education" element={<Education/>} />
<Route path="/exprience" element={<Exprience/>} />
<Route path="/project" element={<Project/>}/>
<Route path="/about" element={<About2/>}/>
<Route path="/join" element={<Find2/>}/>
<Route path="/netflix" element={<Netflix/>}/>
<Route path="/chatapp" element={<Chat/>}/>
<Route path="/chaiwala" element={<Chaiwala/>}/>
<Route path="/corona" element={<Corona/>}/>
<Route path="/foodapp" element={<Food/>}/>
<Route path="/skills" element={<Skills2/>}/>
<Route path="/certificate" element={<Certificate/>}/>
<Route path="/socialapp" element={<Socialmedia/>}/>

</Routes>
</BrowserRouter>
      )}
</>
  );
}

export default App;
