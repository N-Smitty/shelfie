import React from 'react';

const Product =  ({
    product,
    product: {name, price, image_url},
    deleteProduct,
    selectedHandler
}) => {
    return (
        <div>
                    <div className="imageHolder">
                    {!image_url ?
                    <img className="imageH" alt="product" src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750"/>
                    : <img className="imageH" alt="prod" src={`${image_url}`}/>
                    }
                </div>

            <div>Product</div>
            {`${name}
            ${price}
            ${image_url}`}
            <button onClick={() => selectedHandler(product.id)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
    )
}

export default Product;