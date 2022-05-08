import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { SiCircle } from 'react-icons/si';
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {

    const [products] = useProducts();

    return (
        <div className='pt-14 container mx-auto mb-64'>
            {/* <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-screen h-64"
                >
                    <SwiperSlide className='h-42 w-full'><img className='w-fit h-auto mx-auto my-auto' src="https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGdhZGdldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://i.ibb.co/kXNQ7CT/daniel-romero-Ag-LMrojqj-AM-unsplash.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnlReopewp5ihlK5Dh9_p2xnvEZzXMyR4pw&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9VHK64YBQByBbGCcW3utDxHFh1pRAuY8_Q&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxH0_7HUI8S6lPSdayERkq1QlsFW4C4fCag&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCrBYGwWw56lfnzmX1C0HCkIEy43RyTpnzw&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrM9nzKG3xQjuPCEhKl8UkzVqfV-OOk_pIiA&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbyuWSmw4QLD_Sf0aAyfGR09wRS-JKR_NyA&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzee1BVA9wAP53UtS4A2YCyKbw4UML2JYVw&usqp=CAU" alt="" /></SwiperSlide>
                </Swiper>
            </div> */}

            <div className="hero flex items-center">
                <div className="content text-white">
                    <h1 className='text-3xl '>Welcome to</h1>
                    <p className='text-7xl font-extrabold'>Smart Valley</p>
                </div>
            </div>

            <div className='flex justify-start border-b-4 border-sky-600'>
                <span className='font-bold text-xl italic inline p-2 bg-sky-600 text-white m-0'>Popular Items</span>
            </div>
            <div className='grid md:grid-cols-6  gap-4 mt-2'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to='/manage' className='bg-violet-500 px-1 font-semibold rounded mb-0'>Manage Inventories</Link>

            <div className='flex justify-start border-b-4 border-sky-600 mt-10 mb-2'>
                <span className='font-bold text-xl italic inline p-2 bg-sky-600 text-white m-0'>Monthly Analysis</span>
            </div>
            <div className='md:flex w-full justify-around gap-x-8'>

                <div class="block-flex p-6 w-full bg-pink-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 hover:scale-110 duration-500">
                    <div className='inline-block justify-center bg-violet-500 rounded-full p-4 text-2xl text-white'>
                        <FaShoppingCart />
                    </div>
                    <div>
                        <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">Total Sell</h5>
                        <p class="font-bold text-3xl">$ 354262</p>
                    </div>
                </div>
                <div class="block-flex p-6 w-full bg-green-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 hover:scale-110 duration-500">
                    <div className='inline-block justify-center bg-green-500 rounded-full p-4 text-2xl text-white'>
                        <FaWallet />
                    </div>
                    <div>
                        <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">Revenue</h5>
                        <p class="font-bold text-3xl">$ 21365</p>
                    </div>
                </div>
                <div class="block-flex p-6 w-full bg-blue-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 hover:scale-110 duration-500">
                    <div className='inline-block justify-center bg-red-500 rounded-full p-4 text-2xl text-white'>
                        <SiCircle />
                    </div>
                    <div>
                        <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">Expense</h5>
                        <p class="font-bold text-3xl">$ 12455</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;