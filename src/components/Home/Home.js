import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { SiCircle } from 'react-icons/si';
import './Home.css'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

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

            {
                products.length > 0 ?

                    <>
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
                    </>
                    :
                    <div class="text-center flex justify-center items-center h-screen">
                        <svg role="status" class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
            }


        </div>
    );
};

export default Home;