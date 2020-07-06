drop table if exists Products;

create table Products (
    product_id serial,
    name varchAR(350),
    price integer,
    image_url text
);
