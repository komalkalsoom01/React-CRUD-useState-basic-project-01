import React, { useState } from 'react';
import { productData } from '../../Data/db';
import ProductForm from '../ProductForm/ProductForm';
import ProductCart from '../ProductCart/ProductCart';
import PlayButton from '../PlayButton/PlayButton';



const ProductList = () => {

    const [products, setProducts] = useState(productData);
    const [editableProduct, setEditableProduct] = useState(null);

    const addProduct = (NewProduct) => {
        setProducts([...products, { ...NewProduct, id: products.length + 1 }]);

    }
    const deleteProduct = (id) => {
        const newArray = products.filter(data => data.id !== id);
        setProducts(newArray)
    }

    const editProduct = (id) => {
        const findProduct = products.find(data => data.id === id);
        setEditableProduct(findProduct);
        console.log(editableProduct);
    }

    const updateProduct = (product) => {
        const INDEX = products.findIndex(data => data.id === product.id);
        const NewProductData = [...products];
        NewProductData.splice(INDEX, 1, product);
        setProducts(NewProductData);
        setEditableProduct(null);  // Reset editable product after update
    }
    return (
        <div>
            <ProductForm
                addProduct={addProduct}
                editableProduct={editableProduct}
                updateProduct={updateProduct}
            />
            <div className="container mx-auto mt-6">

                <div className="flex flex-wrap justify-center gap-6">

                    {
                        products.map((data) => {
                            return (
                                <ProductCart
                                    key={data.id}
                                    id={data.id}
                                    title={data.title}
                                    price={data.price}
                                    description={data.description}
                                    btnTitle={data.btnTitle}
                                    deleteProduct={deleteProduct}
                                    editProduct={editProduct}
                                >
                                    <PlayButton
                                        onPlay={() => { console.log("onPlay") }}
                                        onPause={() => { console.log("onPause") }}
                                    />
                                </ProductCart>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductList;
