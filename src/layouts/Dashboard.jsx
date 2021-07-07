import React from 'react'
import ProductList from '../pages/ProductList'
import Navi from './Navi'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <Categories/>
            <ProductList/>
        </div>
    )
}
