import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import ArticleService from "../services/ArticleService";

const  ViewComponent = () => {

    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [auteur, setAuteur] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

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

    const saveorupadeArticle = (e) => {

        e.preventDefault();
        const article = {titre, contenu, auteur, category, price}

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
            setPrice(response.data.price)
        }).catch(error => {
            console.log(error)
        })
    }, []);


    const title = () =>{
        if(id){
            return <h2 className="text-center">Update Article</h2>
        }else{
            return <h2 className="text-center">Add Article</h2>
        }
    }

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
                                    <label className="form-label">Nom :</label>
                                    <p>{titre}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Description :</label>
                                    <p>{contenu}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Vendeur :</label>
                                    <p>{auteur}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Catégorie :</label>
                                    <p>{category}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Prix :</label>
                                    <p>{price} €</p>
                                </div>

                                <Link to = {`/checkout/${article.id}`} className="btn btn-success">Ajouter au panier</Link>
                                <Link to = "/" className="btn btn-danger">Retour</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewComponent