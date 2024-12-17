import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


function MycarouselLogin() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ 
                clickable: true,
                dynamicMainBullets: false
            }}
            

            className='w-80 relative'
        >
            <SwiperSlide className='pb-16'>
                <div className='border px-2 rounded-lg text-white border-gray-400 py-2' >
                    <div>
                        <h1>Bonjour <span className="text-orange-400">Mau</span></h1>
                    </div>

                    <div>
                        <p className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga 
                            laborum veniam doloremque maxime error inventore, at in illo eius a ipsum 
                            hic labore! Aut dolore animi facilis nulla quo  
                        </p>
                    </div>
                 
                </div>
            </SwiperSlide>


            <SwiperSlide className='pb-16'>
                <div className='border px-2 rounded-lg text-white border-gray-400 py-2' >
                    <div>
                        <h1>Bonjour <span className="text-orange-400">Mau</span></h1>
                    </div>
                    
                    <div>
                        <p className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga 
                            laborum veniam doloremque maxime error inventore, at in illo eius a ipsum 
                            hic labore! Aut dolore animi facilis nulla quo  
                        </p>
                    </div>
                 </div>
            </SwiperSlide>

            <SwiperSlide className='pb-16'>
                <div className='border px-2 rounded-lg text-white border-gray-400 py-2' >
                    <div>
                        <h1>Bonjour <span className="text-orange-400">Mau</span></h1>
                    </div>
                    
                    <div>
                        <p className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga 
                            laborum veniam doloremque maxime error inventore, at in illo eius a ipsum 
                            hic labore! Aut dolore animi facilis nulla quo  
                        </p>
                    </div>
                 </div>
            </SwiperSlide>

            <SwiperSlide className='pb-16'>
                <div className='border px-2 rounded-lg text-white border-gray-400 py-2' >
                    <div>
                        <h1>Bonjour <span className="text-orange-400">Mau</span></h1>
                    </div>
                    
                    <div>
                        <p className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga 
                            laborum veniam doloremque maxime error inventore, at in illo eius a ipsum 
                            hic labore! Aut dolore animi facilis nulla quo  
                        </p>
                    </div>
                 </div>
            </SwiperSlide>      

        </Swiper>

    );
}

export default MycarouselLogin;
