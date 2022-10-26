import style from './OurDoctors.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Lazy, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {useGetDoctorsQuery} from "redux/hospitalApi";
import Doctor from "./Doctor/Doctor";
import BlockTitle from "components/shared/BlockTitle/BlockTitle";
import Loader from "components/shared/Loader/Loader";

const OurDoctors = () => {
    const {data: doctors, isError, isLoading} = useGetDoctorsQuery('')

    if (isLoading) return <Loader/>
    if (isError) return <div>Error</div>
    if (!doctors) return <div>Cant load</div>

    const doctorsLine = doctors?.map((doctor) => (
        <SwiperSlide key={doctor.serialNumber}>
            <Doctor {...doctor}/>
        </SwiperSlide>
    ))

    return (
        <div className={style.slider}>
            <BlockTitle title={'Our Doctors'}/>
            <Swiper slidesPerView={3} slidesPerGroup={3} spaceBetween={20} lazy={true}
                    loop={true} navigation={true} modules={[Navigation,Lazy]}>
                {doctorsLine}
            </Swiper>
        </div>
    );
}

export default OurDoctors;
