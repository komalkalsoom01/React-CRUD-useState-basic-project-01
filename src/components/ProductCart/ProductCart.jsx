import React from 'react';

const ProductCart = ({id,title,price,description,btnTitle,deleteProduct,editProduct,children}) => {
    return (
        <div className="bg-red-400 p-6 rounded-md shadow-md lg:w-[300px] w-[400px]">
            <h3 className="text-lg font-bold">ID: {id}</h3>
            <h4 className="text-lg">Product Title : {title}</h4>
            <p>Product Price : {price}</p>
            <p>Product Description : {description}</p>
            <div className="mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">{btnTitle}</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md mr-2" onClick={()=>deleteProduct(id)}>Delete</button>
                <button  className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={()=>editProduct(id)}>Edit</button>
                <div className='w-full'>{children}</div>
            </div>
        </div>
    );
};

export default ProductCart;
