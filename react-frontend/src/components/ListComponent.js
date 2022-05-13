import React, {useEffect, useState} from 'react'
import ArticleService from "../services/ArticleService";
import {Link} from "react-router-dom";

const ListComponent = () =>{

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
    return (
        <div className="container">
            <h2 className="text-center">List Catégorie</h2>
            <Link to="/article" className="btn btn-primary mb-2"> Retour</Link>
            <table className="table table-bordered table-striped">
                <thead>

                <th>Article Categorie</th>

                </thead>
                <tbody>
                {
                    article.map(
                        article =>
                            <tr key={article.id}>
                                <td>{article.category}</td>
                            </tr>
                    )
                }
                </tbody>

            </table>
        </div>
    )
}

export default ListComponent