import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ price, setPrice] = useState('');
  const [category, setCategory] = useState('Apple');
  const [subCategory, setSubCategory] = useState('Phone');
  const [bestseller, setBestSeller] = useState(false);
  const [storage, setStorage] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('storage', JSON.stringify(storage));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers: {token}})
      
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message);
      
    }
  }
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4 p-4'>
       <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
        <label htmlFor="image1">
          <img className='w-20' src={!image1 ?  assets.upload_area : URL.createObjectURL(image1)} alt="" />
          <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
        </label>
        <label htmlFor="image2">
          <img className='w-20' src={!image2 ?  assets.upload_area : URL.createObjectURL(image2)} alt="" />
          <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
        </label>
        <label htmlFor="image3">
          <img className='w-20' src={!image3 ?  assets.upload_area : URL.createObjectURL(image3)} alt="" />
          <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
        </label>
        <label htmlFor="image4">
          <img className='w-20' src={!image4 ?  assets.upload_area : URL.createObjectURL(image4)} alt="" />
          <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
        </label>
      </div>
    </div>

    <div className='w-full'>
      <p className='mb-2'>Product name</p>
      <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 text-gray-600' type="text" placeholder='Type here' required />
    </div>

    <div className='w-full'>
      <p className='mb-2'>Product description</p>
      <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 text-gray-600' type="text" placeholder='Write content here' required />
    </div>

    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

      <div>
        <p className='mb-2'>Product category</p>
        <select onChange={(e)=>setCategory(e.target.value)} className='w-full max-w-[500px] px-3 py-2 text-gray-600'>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Other">Others</option>
        </select>
      </div>

      <div>
        <p className='mb-2'>Sub category</p>
        <select onChange={(e) => setSubCategory(e.target.value)} className='w-full max-w-[500px] px-3 py-2 text-gray-600'>
          <option value="Phone">Mobile Phone</option>
          <option value="Latop">Laptop</option>
          <option value="Other">Others</option>
        </select>
      </div>

      <div>
        <p className='mb-2'>Product Price</p>
        <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] text-gray-600' type="number" placeholder='25' />
      </div>

    </div>

    <div>
      <p className='mb-2'>Product Storage</p>
      <div className='flex flex-wrap gap-3'>
      <div onClick={()=>setStorage(prev => prev.includes('32GB') ? prev.filter(item => item !== '32GB') : [...prev, '32GB'])}>
          <p className={`${storage.includes("32GB") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>32GB</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('64GB') ? prev.filter(item => item !== '64GB') : [...prev, '64GB'])}>
          <p className={`${storage.includes("64GB") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>64GB</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('128GB') ? prev.filter(item => item !== '128GB') : [...prev, '128GB'])}>
          <p className={`${storage.includes("128GB") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>128GB</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('256GB') ? prev.filter(item => item !== '256GB') : [...prev, '256GB'])}>
          <p className={`${storage.includes("256GB") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>256GB</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('512GB') ? prev.filter(item => item !== '512GB') : [...prev, '512GB'])}>
          <p className={`${storage.includes("512GB") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>512GB</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('1TB') ? prev.filter(item => item !== '1TB') : [...prev, '1TB'])}>
          <p className={`${storage.includes("1TB") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>1TB</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('GEN 1') ? prev.filter(item => item !== 'GEN 1') : [...prev, 'GEN 1'])}>
          <p className={`${storage.includes("GEN 1") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>GEN 1</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('GEN 2') ? prev.filter(item => item !== '1TB') : [...prev, 'GEN 2'])}>
          <p className={`${storage.includes("GEN 2") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>GEN 2</p>
        </div>

        <div onClick={()=>setStorage(prev => prev.includes('GEN 3') ? prev.filter(item => item !== 'GEN 3') : [...prev, 'GEN 3'])}>
          <p className={`${storage.includes("GEN 3") ? "bg-gray-600" : "bg-red-600" } hover:bg-gray-600 transition-[0.5s] text-white px-3 py-1 cursor-pointer`}>GEN 3</p>
        </div>

      </div>
    </div>

    <div className='flex gap-2 mt-2'>
      <input  className='cursor-pointer' onChange={() => setBestSeller(prev => !prev) } checked={bestseller} type="checkbox" id='bestseller' />
      <label htmlFor="bestseller">Add to Best seller</label>
    </div>

    <button type='submit' className='w-28 bg-red-600 hover:bg-gray-600 active:bg-red-600 transition-[0.5s] text-white font-medium py-3 px-6 rounded-lg cursor-pointer' >ADD</button>

   </form>
  )
}

export default Add
