import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import ArticleService from "../services/ArticleService";

const  AjouterArticle = () => {

    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [auteur, setAuteur] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();



    const saveorupadeArticle = (e) => {

        e.preventDefault();
        const article = {titre, contenu, auteur, category}

        if(id){
            ArticleService.updateArticle(id, article).then((response) => {
                navigate('/article')
            }).catch((error) => {
                console.log(error);
            })
        }

        else{

            ArticleService.createArticle(article).then((response) => {

                console.log(response.data)

                navigate('/article');

            }).catch(error => {
                console.log(error)
            })

            console.log(article) // test console
            }

        }





    useEffect(() => {
        ArticleService.getArticleById(id).then((response) =>{
            setTitre(response.data.titre)
            setContenu(response.data.contenu)
            setAuteur(response.data.auteur)
            setCategory(response.data.category)
        }).catch(error => {
            console.log(error)
        })
    }, []);


   const title = () =>{
        if(id){
            return <h2 className="text-center">Update Article</h2>
        }else{
            return <h2 className="text-center">Ajout Article</h2>
        }
    }
    if(localStorage.getItem("token") == "login") {
        return (

            <div>
                <br/> <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                title()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Titre:</label>
                                        <input
                                            type="text"
                                            placeholder="Titre de L'article"
                                            name="titre"
                                            className="form-control"
                                            value={titre}
                                            onChange={(e) => setTitre(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Contenu:</label>
                                        <input
                                            type="text"
                                            placeholder="Contenu L'article"
                                            name="titre"
                                            className="form-control"
                                            value={contenu}
                                            onChange={(e) => setContenu(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Auteur:</label>
                                        <input
                                            type="text"
                                            placeholder="Auteur"
                                            name="titre"
                                            className="form-control"
                                            value={auteur}
                                            onChange={(e) => setAuteur(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Category:</label>
                                        <input
                                            type="text"
                                            placeholder="Category"
                                            name="titre"
                                            className="form-control"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <button className="btn btn-success" onClick={(e) => saveorupadeArticle(e)}>Ajouter
                                    </button>
                                    <Link to="/article" className="btn btn-danger">Annuler</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <Navigate to="/"/>
    }
}
export default AjouterArticle