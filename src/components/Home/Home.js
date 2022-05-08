import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
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
        <div className='mt-16 container mx-auto mb-64'>
            <div>
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
                    className="mySwiper"
                >
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGdhZGdldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdebq1ghhpWNavKN_CgfYxMqS8CpJ-kFkSpw&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnlReopewp5ihlK5Dh9_p2xnvEZzXMyR4pw&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9VHK64YBQByBbGCcW3utDxHFh1pRAuY8_Q&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxH0_7HUI8S6lPSdayERkq1QlsFW4C4fCag&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCrBYGwWw56lfnzmX1C0HCkIEy43RyTpnzw&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrM9nzKG3xQjuPCEhKl8UkzVqfV-OOk_pIiA&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbyuWSmw4QLD_Sf0aAyfGR09wRS-JKR_NyA&usqp=CAU" alt="" /></SwiperSlide>
                    <SwiperSlide className='h-42 w-full'><img className='w-fit mx-auto my-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzee1BVA9wAP53UtS4A2YCyKbw4UML2JYVw&usqp=CAU" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='grid md:grid-cols-6  gap-4 mt-0'>
                {
                    products.slice(0, 10).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to='/manage' className='bg-green-500 px-1 font-semibold rounded mb-0'>Manage Inventories</Link>
        </div>
    );
};

export default Home;