package com.ynov.blog.model;

import javax.persistence.*;

@Entity
@Table(name = "prenium")
public class Prenium {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String storage;
    private Integer website_number;
    private Integer domains;
    private String support;
    private Integer price;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public Integer getWebsite_number() {
        return website_number;
    }

    public void setWebsite_number (Integer website_number) {
        this.website_number = website_number;
    }

    public Integer getDomains() {
        return domains;
    }

    public void setDomains(Integer domains) {
        this.domains = domains;
    }

    public String getSupport() {
        return support;
    }

    public void setSupport(String support) {
        this.support = support;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
