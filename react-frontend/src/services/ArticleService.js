import axios from "axios";

const ARTICLE_BASE_REST_API_URL = "http://localhost:8080/api/v1/article";

class ArticleService {

    getAllArticle(){
        return axios.get(ARTICLE_BASE_REST_API_URL)
    }

    createArticle(article){
        return axios.post(ARTICLE_BASE_REST_API_URL, article)
    }

    getArticleById(articleId){
        return axios.get(ARTICLE_BASE_REST_API_URL + '/' + articleId);
    }

    updateArticle(articleId, article){
        return axios.put(ARTICLE_BASE_REST_API_URL+ "/" + articleId, article);
    }

    deleteArticle(articleId){
        return axios.delete(ARTICLE_BASE_REST_API_URL + '/' + articleId)
    }

}

export default new ArticleService();