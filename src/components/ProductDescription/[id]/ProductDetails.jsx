import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import productDetails from '../../ProductList/ProductListItemData';
import productData from '../productData'
import QuantitySelector from '../QuantitySelector';
import SizeSelector from '../SizeSelector';
import RelatedProducts from '../RelatedProducts';
import StarRating from '../StarRating'

const ProductDetails = () => {
    const { id } = useParams();
    const products = productDetails
    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        const filterData = products.filter(p => p.id == id)
        setProductDetail(filterData[0])
    }, [id])

    console.log(productDetail);

    const [selectedSize, setSelectedSize] = useState('106 cm (42)');
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(productData[0]);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (newQuantity) => {
        if (selectedProduct.availability === 'Out of Stock') {
            alert('Out of Stock');
            return;
        }
        setQuantity(newQuantity);
    };

    // const handleThumbnailChange = (product) => {
    //     setSelectedProduct(product);
    // };

    const [activeTab, setActiveTab] = useState('description');
    const [view, changeview] = useState(false);

    useEffect(() => changeview(false), [activeTab]);

    const RenderContent = ({ val }) => {
        return (
            <div>
                <div className="text-center text-sm lg:text-lg">
                    {view ? selectedProduct[val] : selectedProduct[val].slice(0, 300) + " ..."}
                    <button
                        className="text-rose-600 text-center"
                        onClick={() => changeview(!view)}
                    >
                        {view ? 'Less' : 'More'}
                    </button>
                </div>
            </div>
        );
    };

    // console.log(selectedProduct);

    return (
        <div>
            {productDetail && (
                <div className="flex flex-col items-center p-8 overflow-hidden mx-auto">
                    <div className="flex flex-col lg:flex-row w-full justify-center">
                        {/* Product Image and Thumbnails */}
                        <div className="flex flex-col gap-2 w-full lg:w-[60%] items-center lg:items-start">
                            <div className="border-2 mb-4 w-full overflow-hidden rounded-xl ">
                                <img
                                    src={productDetail.image}
                                    alt="Product"
                                    className="w-[300px] mx-auto"
                                />
                            </div>
                            <div className="flex justify-center gap-2 w-full items-center mb-4">
                                {/* {productData.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.src}
                                        alt={product.alt}
                                        className={`sm:w-[114px] w-[70px] cursor-pointer hover:border-rose-500 border-2 ${selectedProduct.src === product.src ? 'border-rose-500' : 'border-gray-300'}`}
                                        onClick={() => handleThumbnailChange(product)}
                                    />
                                ))} */}
                                <img
                                    key={productDetail.id}
                                    src={productDetail.image}
                                    alt={productDetail.alt}
                                    className={`sm:w-[114px] w-[70px] cursor-pointer hover:border-rose-500 border-2 $`}

                                />
                            </div>
                        </div>
                        {/* Product Details */}
                        <div className="flex-grow w-full lg:w-1/2 text-sm text-center lg:text-left flex flex-col justify-between lg:pl-8">
                            <div className="text-gray-600">
                                <p>Brand: {productDetail.brands}</p>
                                <p>Model: {productDetail.model}</p>
                                <p>Availability: {productDetail.availability}</p>
                            </div>
                            <h2 className="text-2xl font-semibold my-1">{productDetail.name}</h2>
                            <div className="flex ml-[90px] 1xs:ml-[110px] xs:ml-[140px] sm:ml-0">
                                <StarRating rating={productDetail.rating} />
                            </div>
                            <ul className="list-disc list-inside text-left text-sm">
                                {selectedProduct.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                            <SizeSelector selectedSize={selectedSize} onSizeChange={handleSizeChange} />
                            <div className="flex flex-col-reverse mt-4 text-red-500 ">
                                <p className='text-base text-slate-500'><del> ${productDetail.price}</del></p>
    
                                {/* Added a value to the price to show the discount / offer */}
                                <p className="font-semibold text-xl">${productDetail.price - 50}</p>
                            </div>
                            <div className="flex flex-col items-center lg:items-start justify-start gap-4 mt-4">
                                <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
                                <div className='flex gap-x-5 lg:text-lg'>
                                    <Link to={`/order-now/${productDetail.id}`} className="bg-rose-700 text-white px-5 py-2 hover:bg-rose-500 rounded-xl">
                                        Buy Now
                                    </Link>
                                    <button className="bg-rose-700 text-white px-5 py-2 hover:bg-rose-500 rounded-xl flex-shrink-0">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="w-full max-w-5xl">
                        <div className="flex justify-center items-center mt-24 flex-row gap-x-3 lg:gap-x-10">
                            <button
                                className={`lg:text-xl text-sm font-bold ${activeTab === 'description' ? 'text-rose-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('description')}
                            >Description</button>
                            <button
                                className={`lg:text-xl text-sm font-bold ${activeTab === 'specification' ? 'text-rose-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('specification')}
                            >Specification</button>
                            <button
                                className={`lg:text-xl text-sm font-bold ${activeTab === 'reviews' ? 'text-rose-600' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('reviews')}
                            >Reviews</button>
                        </div>
                        <div className="mt-4">
                            <RenderContent val={activeTab} />
                        </div>
                    </div>
                    <RelatedProducts />
                </div>
            )}
        </div>
    );
}

export default ProductDetails