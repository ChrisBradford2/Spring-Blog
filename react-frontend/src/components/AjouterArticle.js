import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import ArticleService from "../services/ArticleService";
import $ from 'jquery';

const  AjouterArticle = () => {

    const [titre, setTitre] = useState('');
    const [image, setImage] = useState('')
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

    $('textarea').on(function() {
    
        var characterCount = $(this).val().length,
            current = $('#current'),
            maximum = $('#maximum'),
            theCount = $('#the-count');
          
        current.text(characterCount);
       
        
        /*This isn't entirely necessary, just playin around*/
        if (characterCount < 70) {
          current.css('color', '#666');
        }
        if (characterCount > 70 && characterCount < 90) {
          current.css('color', '#6d5555');
        }
        if (characterCount > 90 && characterCount < 100) {
          current.css('color', '#793535');
        }
        if (characterCount > 100 && characterCount < 120) {
          current.css('color', '#841c1c');
        }
        if (characterCount > 120 && characterCount < 139) {
          current.css('color', '#8f0001');
        }
        
        if (characterCount >= 140) {
          maximum.css('color', '#8f0001');
          current.css('color', '#8f0001');
          theCount.css('font-weight','bold');
        } else {
          maximum.css('color','#666');
          theCount.css('font-weight','normal');
        }
        
            
      });


   const title = () =>{
        if(id){
            return <h2 className="text-center">Update Article</h2>
        }else{
            return <h2 className="text-center">Add Article</h2>
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
                                            required
                                            className="form-control"
                                            value={titre}
                                            onChange={(e) => setTitre(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                    <label for="formFileMultiple" className="form-label">Image :</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        id="formFileMultiple"
                                        multiple
                                        accept=".jpg, .jpeg, .png"
                                        value={image}
                                        onChange={(e) => setImage(e.target.files[0])}/>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label for="exampleFormControlTextarea1" className="form-label">Contenu :</label>
                                        <textarea
                                            className="form-control"
                                            id="contenu" 
                                            required
                                            rows="6"
                                            maxLength="255"  
                                            value={contenu}
                                            onChange={(e) => setContenu(e.target.value)}
                                        >
                                        </textarea>
                                        <div id="the-count">
                                            <span id="current">0</span>
                                            <span id="maximum">/ 255</span>
                                        </div>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Auteur:</label>
                                        <input
                                            type="text"
                                            placeholder="Auteur"
                                            name="titre"
                                            className="form-control"
                                            required
                                            readonly
                                            value="admin"
                                            onChange={(e) => setAuteur(localStorage.username)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Category:</label>
                                        <select 
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={category}
                                            required
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option hidden defaultValue>Choose a category</option>
                                            <option value="Cortisone">Cortisone</option>
                                            <option value="Avocat">Avocat</option>
                                            <option value="Bite">Bite</option>
                                        </select>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label">Prix:</label>
                                        <input
                                            type="number"
                                            placeholder="Prix"
                                            step=".01"
                                            name="titre"
                                            className="form-control"
                                            required
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        >
                                        </input>
                                        <div class="invalid-feedback">
                                            Please choose a price for your article.
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={(e) => saveorupadeArticle(e)}>
                                        Ajouter
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