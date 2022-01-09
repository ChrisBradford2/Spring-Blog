import axios from "axios";

const COMMENTAIRE_BASE_REST_API_URL = "http://localhost:8080/api/v1/commentaire";

class CommentaireService {

    getAllCommentaire(){
        return axios.get(COMMENTAIRE_BASE_REST_API_URL)
    }

    createCommentaire(commentaire){
        return axios.post(COMMENTAIRE_BASE_REST_API_URL, commentaire)
    }

}

export default new CommentaireService();