package Springbootbackend.controller;

import Springbootbackend.model.Article;
import Springbootbackend.model.Commentaire;
import Springbootbackend.repository.CommentaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController

@RequestMapping("/api/v1/commentaire")
public class CommentaireControler {



    @Autowired
    private CommentaireRepository commentaireRepository;

    @GetMapping
    public List<Commentaire> getAllCommentaire(){
        return commentaireRepository.findAll();
    }

    @PostMapping
    public Commentaire createCommentaire(@RequestBody Commentaire commentaire){
        return commentaireRepository.save(commentaire);
    }
}
