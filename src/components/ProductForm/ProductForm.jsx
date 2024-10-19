import React, { useState,useEffect } from 'react';

const ProductForm = ({ addProduct, editableProduct, updateProduct }) => {

    const productObj = {
        id: 0,
        title: '',
        description: '',
        price: '100',
        btnTitle: ''
    }
    const [product, setProduct] = useState(productObj);
    // ================
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productObj);
        if (editableProduct) {
            updateProduct(product)
        }
        else {

            addProduct(product)
        }
        setProduct(productObj) // reset after add 
    }

       // If `editableproduct` exists, update form with its data
       useEffect(() => {
        if (editableProduct) {
            setProduct(editableProduct);
        } else {
            setProduct(productObj); // Reset the form if no product is being edited
        }
    }, [editableProduct]);

    return (
        <div className='flex items-center justify-center p-10'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 bg-red-400 rounded-md p-14 shadow-md w-[100%] lg:w-[60%] md:w-[80%]">
                <input
                    type="text"
                    placeholder="Product Title"
                    className="w-full p-2 rounded-md"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Product Price"
                    className="w-full p-2 rounded-md"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Product Description"
                    className="w-full p-2  rounded-md"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Button Title"
                    className="w-full p-2 rounded-md"
                    name="btnTitle"
                    value={product.btnTitle}
                    onChange={handleChange}
                />
                <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md">
                    {editableProduct?"Edit Product":"Add Product"}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
