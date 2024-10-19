

import React from 'react'
import Layout from '../../components/Layout/Layout'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <ProductList />
            <Footer />
        </Layout>
    )
}

export default Home