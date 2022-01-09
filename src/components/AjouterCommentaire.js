import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import CommentaireService from "../services/CommentaireService";

const  AjouterCommentaire = () => {

    const [type, settype] = useState('');
    const [commentaire, setcommentaire] = useState('');
    const navigate = useNavigate();



    const saveorupadeCommentaire = (e) => {

        e.preventDefault();
        const comment = {type, commentaire}

            CommentaireService.createCommentaire(comment).then((response) => {

                console.log(response.data)

                navigate('/article');

            }).catch(error => {
                console.log(error)
            })

            console.log(commentaire) // test console
        }

    if(localStorage.getItem("token") == "login") {
        return (

            <div>
                <br/> <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Ajout Commentaire</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Titre:</label>
                                        <input
                                            type="text"
                                            placeholder="Titre de L'article"
                                            name="titre"
                                            className="form-control"
                                            value={type}
                                            onChange={(e) => settype(e.target.value)}
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
                                            value={commentaire}
                                            onChange={(e) => setcommentaire(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <button className="btn btn-success"
                                            onClick={(e) => saveorupadeCommentaire(e)}>Ajouter
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
export default AjouterCommentaire