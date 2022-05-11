import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import ArticleService from "../services/ArticleService";

const  ViewComponent = () => {

    const [titre, setTitre] = useState('');
    const [image, setImage] = useState('');
    const [contenu, setContenu] = useState('');
    const [auteur, setAuteur] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();



    const saveorupadeArticle = (e) => {

        e.preventDefault();
        const article = {titre, image, contenu, auteur, category, price}

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
            setImage(response.data.image)
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
                                    <label className="form-label">Titre:</label>
                                    <p>{titre}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Image:</label>
                                    <p>{image}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Contenu:</label>
                                    <p>{contenu}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Auteur:</label>
                                    <p>{auteur}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Category:</label>
                                    <p>{category}</p>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Prix:</label>
                                    <p>{price} €</p>
                                </div>

                                <Link to = "/" className="btn btn-danger">retour</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewComponent