package Springbootbackend.controller;

import Springbootbackend.exeption.ResourceNotFoundException;
import Springbootbackend.model.Article;
import Springbootbackend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/article")
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping
    public List<Article> getAllArticle(){
        return articleRepository.findAll();
    }

    //creation article Rest api
    @PostMapping
    public Article createArticle(@RequestBody Article article){
        return articleRepository.save(article);
    }

    //creation de Get by Id Rest api
    @GetMapping("{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable long id){
        Article article = articleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Article non trouver" + id));
        return ResponseEntity.ok(article);
    }

    @PutMapping("{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable long id, @RequestBody Article articleDetails){
        Article updateArticle = articleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Article non trouver" + id));

        updateArticle.setTitre(articleDetails.getTitre());
        updateArticle.setContenu(articleDetails.getContenu());
        updateArticle.setAuteur(articleDetails.getAuteur());
        updateArticle.setCategory(articleDetails.getCategory());

        articleRepository.save(updateArticle);
        return  ResponseEntity.ok(updateArticle);
    }

    // creation delete Rest api
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteArticle(@PathVariable long id){

        Article article = articleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Article non trouver" + id));
        articleRepository.delete(article);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
