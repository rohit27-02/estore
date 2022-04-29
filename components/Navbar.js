/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai';
import { GiCrossedAirFlows } from 'react-icons/gi';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';
import { useRef } from 'react';
const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {
    const toggleCart=()=>{
        if (ref.current.classList.contains("translate-x-full")){
            ref.current.classList.replace("translate-x-full","translate-x-0"); 
        }
        else if (!ref.current.classList.contains("translate-x-full")){
            ref.current.classList.remove("translate-x-0") 
            ref.current.classList.add("translate-x-full") 
        }
    }
    const ref = useRef();
    return (
        <div className='sticky top-0 z-10 bg-white opacity-95 flex justify-center items-center flex-col md:flex-row md:justify-start py-2 shadow-md'>
            <div className='logo mx-5 '>
                <Link href={"/"}><a><Image width={40} height={40} src="/logo.png" alt="" /></a></Link>

            </div>
            <div className="nav font-bold">
                <ul className='flex items-center space-x-6 md:text-md'>
                    <Link href={"/Tshirts"}><a><li>Tshirts</li></a></Link>
                    <Link href={"/Hoodies"}><a><li>Hoodies</li></a></Link>
                    <Link href={"/Mugs"}><a><li>Mugs</li></a></Link>
                    <Link href={"/Stickers"}><a><li>Stickers</li></a></Link>
                </ul>
            </div>
            <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-4 cursor-pointer">
                <AiOutlineShoppingCart className='text-xl md:text-3xl' />
            </div>
            <div ref={ref} className="sidebar fixed right-0 top-0 bg-pink-200 p-10 transform transition-transform translate-x-full z-10 shadow-xl  h-full">
                <h2 className='font-bold text-xl'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-5 right-6 text-red-700 cursor-pointer'><GiCrossedAirFlows /></span>
                <ol className='list-decimal font-semibold mx-1 my-3'>
                    {Object.keys(cart).length ==0 && <div>
                       No items in the cart 
                    </div> }
                    {Object.keys(cart).map((k)=>{return <li key={k}>
                        <div className='flex my-2'>
                        <div className='ml-2 w-2/3'>{cart[k].name}</div>
                        <div className='w-2/3 flex items-center justify-between '>< AiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='fill-pink-500 cursor-pointer'/>{cart[k].qty}<AiOutlinePlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='fill-pink-500 cursor-pointer'/></div>
                        </div>
                    </li>})}
                   
                    
                </ol>
                <button className="flex text-white bg-pink-500 border-0 py-2 px-4 my-7 mr-3 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagCheckFill className='my-auto mr-1'/>Check out</button>
                <button onClick={clearCart} className="flex text-white bg-pink-500 border-0 py-2 px-4  mr-3 focus:outline-none hover:bg-pink-600 rounded text-lg"><CgTrashEmpty className='my-auto mr-1'/>Empty cart</button>
            </div>
        </div>
    )
}

export default Navbar