package Springbootbackend.repository;


import Springbootbackend.model.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


    @Repository
    public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {
        //all crud data

    }
