import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [storage,setStorage] = useState('')

  const fetchProductData = async () => {

    products.map((item)=>{
      if (item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ------------- Product Data ------------ */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ------------ Product Images ------------ */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto mb-5' src={image} alt="" />
          </div>
        </div>

        {/* ----------- Product Info---------------------- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p className='text-red-400'>Select Storage Size:</p>
              <div className='flex gap-2'>
                {productData.storage.map((item,index)=>(
                  <button onClick={()=>setStorage(item)} className={`border cursor-pointer py-2  px-4 bg-gray-100 ${item === storage ? 'border-red-600 bg-red-600 text-white' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,storage)} className='bg-red-600 hover:bg-gray-600 active:bg-red-600 transition-[0.5s] text-white font-medium py-3 px-6 rounded-lg cursor-pointer'>ADD TO CART</button>
            <hr className='mt-8 sm:w4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>

      </div>

      {/* ------------ Description & Review Section ------------ */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border mb-5 text-red-400 px-5 py-3 text-sm'>Description</b>
          <p className='border mb-5 text-red-400 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum earum recusandae? Porro autem nostrum adipisci maxime facilis fugit, odio repellat recusandae reiciendis doloribus mollitia provident temporibus ex minima cumque.</p>
          <p>E-commerce website typically display product or services along with details Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad sunt expedita adipisci suscipit consequatur impedit, molestiae iure similique laboriosam quos saepe aspernatur alias enim ab laudantium aliquid pariatur consectetur.</p>
        </div>
      </div>
        
         {/* ------------ display related products ----------- */}

         <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div> 
  ) : <div className='opacity-0'></div>
}

export default Product
