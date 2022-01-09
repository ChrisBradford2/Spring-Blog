package Springbootbackend.model;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Titre")
    private String Titre;
    @Column(name = "Category")
    private String Category;
    @Column(name = "Contenu")
    private String Contenu;
    @Column(name = "Auteur")
    private String Auteur;
}
