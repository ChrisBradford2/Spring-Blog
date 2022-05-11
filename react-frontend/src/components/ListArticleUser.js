import React, {useEffect, useState} from 'react'
import ArticleService from "../services/ArticleService";
import {Link} from "react-router-dom";

const ListArticleComponent = () =>{

    const [article, setArticle] = useState([])

    useEffect(() => {

        getAllArticle()

    }, []);

    const getAllArticle = () =>{
        ArticleService.getAllArticle().then((response) => {
            setArticle(response.data)
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
    return (
        <div className="container">
            <h2 className="text-center">List Article</h2>
            <Link to="/List" className="btn btn-info mb-2" style={{marginLeft:"10px"}}> List Catégorie</Link>
            <Link to="/login" className="btn btn-info mb-2" style={{marginLeft:"10px"}}> login</Link>
            <table className="table table-bordered table-striped">
                <thead>
                <th>Article ID</th>
                <th>Article Auteur</th>
                <th>Article Titre</th>
                <th>Article Contenu</th>
                <th>Article Categorie</th>
                <th>Action</th>
                </thead>
                <tbody>
                {
                    article.map(
                        article =>
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.titre}</td>
                                <td>{article.auteur}</td>
                                <td>{article.category}</td>
                                <td>{article.contenu}</td>
                                <td><Link className="btn btn-info" to={`/view/${article.id}`}>View</Link></td>
                            </tr>
                    )
                }
                </tbody>

            </table>
        </div>
    )
}

export default ListArticleComponent