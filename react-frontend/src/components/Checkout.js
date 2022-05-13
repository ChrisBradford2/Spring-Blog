import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import ArticleService from "../services/ArticleService";

const Checkout = () => {

    const [titre, setTitre] = useState('');
    const [contenu, setContenu] = useState('');
    const [auteur, setAuteur] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();



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
            <br/><br/>
            <div className="container">
                <div className="row">
                    <h2>Informations du contact</h2>
                    <div className="checkout-names row">
                        <div class="col">
                            <label for="fistName" class="form-label">Prénom</label>
                            <input type="text" class="form-control" id="fistName" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col">
                        <label for="lastName" class="form-label">Nom</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>   
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="telephone" class="form-label">Telephone</label>
                        <input type="telephone" class="form-control" id="telephone" placeholder="06.12.34.56.78" />
                    </div>
                    <div class="mb-3">
                        <label for="adress" class="form-label">Adresse</label>
                        <input type="text" class="form-control" id="adress" placeholder="12 rue Anatole France" />
                    </div>
                    <div className="checkout-names row">
                        <div class="col">
                            <label for="postalCode" class="form-label">Code Postal</label>
                            <input pattern="[0-9]*" max="99999" type="number" class="form-control" id="postalCode" placeholder="92000" aria-label="Postal Code" />
                        </div>
                        <div class="col">
                        <label for="city" class="form-label">Ville</label>
                            <input type="text" class="form-control" id="city" placeholder="Nanterre" aria-label="City" />
                        </div>
                    </div>
                </div>
                <div className="delivery">
                    <h2>Livraison</h2>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Point relais (2,99 €) </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Colissimo (3,99 €)</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                      <label class="form-check-label" for="inlineRadio3">Chronopost (8,99 €)</label>
                    </div>
                </div>
                <div className="confimation row">
                    <h2>Confirmation</h2>
                    <div class="form-check form-switch">
                        <input class="form-check-input" required type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">En cochant cette case, j'accepte et je reconnais avoir pris connaissance des conditions générales de vente</label>
                    </div>
                </div>
                <Link to={`/checkout-completed/${article.id}`} className="btn btn-success">Valider la commande</Link>
                <Link to={`/view/${article.id}`} className="btn btn-danger">Retour</Link>
            </div>
        </div>
    )
}

export default Checkout