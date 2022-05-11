import React, {useEffect, useState} from 'react'
import ArticleService from "../services/ArticleService";
import CommentaireService from "../services/CommentaireService";
import {Link, Navigate} from "react-router-dom";

const ListArticleComponent = () =>{

    const [article, setArticle] = useState([])
    const [comment, setCommentaire] = useState([])

    useEffect(() => {

        getAllArticle()
        getAllComments()

    }, []);

    const getAllArticle = () =>{
        ArticleService.getAllArticle().then((response) => {
            setArticle(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const getAllComments = () =>{
        CommentaireService.getAllCommentaire().then((response) => {
            setCommentaire(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    const deleteArticle = (articleId) => {
        console.log(articleId);
        ArticleService.deleteArticle(articleId).then((response) => {
            getAllArticle();
        }).catch(error =>{
            console.log(error);
        })
    }

    //Log()
   if(localStorage.getItem("token") == "login"){
       return (
           <div className="container">
               <h2 className="text-center">List Article</h2>
               <Link to="/Ajout-Article" className="btn btn-primary mb-2"> Add Article</Link>
               <Link to="/List" className="btn btn-info mb-2" style={{marginLeft: "10px"}}> List Catégorie</Link>
               <Link to="/logout" className="btn btn-info mb-2" style={{marginLeft: "10px"}}> Logout</Link>
               <table className="table table-bordered table-striped">
                   <thead>
                   <th>Article ID</th>
                   <th>Article Titre</th>
                   <th>Article Image</th>
                   <th>Article Auteur</th>
                   <th>Article Categorie</th>
                   <th>Article Contenu</th>
                   <th>Article Prix</th>
                   <th>Action</th>
                   </thead>
                   <tbody>
                   {
                       article.map(
                           article =>
                               <tr key={article.id}>
                                   <td>{article.id}</td>
                                   <td>{article.titre}</td>
                                   <td>{article.image}</td>
                                   <td>{localStorage.getItem("token")}</td>
                                   <td>{article.category}</td>
                                   <td className="text-truncate" style={{maxWidth: "9rem"}}>{article.contenu}</td>
                                   <td>{article.price} €</td>
                                   <td><Link className="btn btn-info" to={`/edit-article/${article.id}`}>Update</Link>
                                       <button className="btn btn-danger" onClick={() => deleteArticle(article.id)}
                                               style={{marginLeft: "10px"}}>Delete
                                       </button>
                                   </td>
                               </tr>
                       )
                   }
                   </tbody>

               </table>


               <h2 className="text-center">List Commentaire</h2>
               <Link to="/Ajout-Commentaire" className="btn btn-primary mb-2"> Ajout Commentaire</Link>
               <table className="table table-bordered table-striped">
                   <thead>
                   <th>Commentaire ID</th>
                   <th>Commentaire Type</th>
                   <th>Commentaire</th>
                   </thead>
                   <tbody>
                   {
                       comment.map(
                           comment =>
                               <tr key={comment.id}>
                                   <td>{comment.id}</td>
                                   <td>{comment.type}</td>
                                   <td>{comment.commentaire}</td>
                               </tr>
                       )
                   }
                   </tbody>

               </table>
           </div>

       )

    }
    else {
       return <Navigate to="/"/>
   }
}

export default ListArticleComponent