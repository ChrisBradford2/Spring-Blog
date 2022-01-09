
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListArticleComponent from "./components/ListArticleComponent";
import HeadersComponent from "./components/HeadersComponent";
import FootersComponent from "./components/FootersComponent";
import AjouterArticle from "./components/AjouterArticle";
import ListComponent from "./components/ListComponent";
import ListArticleUser from "./components/ListArticleUser";
import ViewComponent from "./components/ViewComponent";
import AjouterCommentaire from "./components/AjouterCommentaire";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
        <Router>
            <HeadersComponent />
            <div className="container">
                <Routes>
                    <Route path= "/" element = {<ListArticleUser />} />
                    <Route path= "/Article" element = {<ListArticleComponent />} />
                    <Route path="/Ajout-Article" element = {<AjouterArticle />} />
                    <Route path="/edit-article/:id" element = {<AjouterArticle />} />
                    <Route path="/list" element = {<ListComponent />} />
                    <Route path="/view/:id" element = {<ViewComponent />} />
                    <Route path="/Ajout-Commentaire" element = {<AjouterCommentaire />} />
                    <Route path="/login" element = {<Login />} />
                    <Route path="/logout" element = {<Logout />} />
                </Routes>
            </div>
            <FootersComponent />
        </Router>
    </div>
  );
}

export default App;
