CREATE TABLE basic
(
    id             INT PRIMARY KEY,
    storage        VARCHAR(5),
    website_number INT(3),
    domains        INT(3),
    support        VARCHAR(8),
    price          INT(3)
);

CREATE TABLE pro
(
    id             INT PRIMARY KEY,
    storage        VARCHAR(5),
    website_number INT(3),
    domains        INT(3),
    support        VARCHAR(8),
    price          INT(3)
);

CREATE TABLE prenium
(
    id             INT PRIMARY KEY,
    storage        VARCHAR(5),
    website_number INT(3),
    domains        INT(3),
    support        VARCHAR(8),
    price          INT(3)
);

INSERT INTO basic (storage, website_number, domains, support, price)
VALUES ('10GB', 10, 10, 'Endless', 10);

INSERT INTO pro (storage, website_number, domains, support, price)
VALUES ('25GB', 25, 25, 'Endless', 25);

INSERT INTO prenium (storage, website_number, domains, support, price)
VALUES ('50GB', 50, 50, 'Endless', 50);
