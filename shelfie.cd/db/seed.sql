drop table if exists products;

create table products (
    product_id serial,
    name varchAR(350),
    price integer
);

insert into products (name)
    values
    ('Soap');