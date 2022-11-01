import style from './OurDoctors.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Lazy, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {useGetDoctorsQuery} from "redux/hospitalApi";
import BlockTitle from "components/shared/BlockTitle/BlockTitle";
import Loader from "components/shared/Loader/Loader";
import useMatchMedia from "hooks/useMatchMedia";
import ShowUserProfile from "components/shared/ShowUserProfile/ShowUserProfile";

const OurDoctors = () => {
    const {data: doctors, isError, isLoading} = useGetDoctorsQuery()
    const {isPC, isTablet, isMobile, isLaptop} = useMatchMedia()
    const usersPerView = () => {
        if (isPC) return 4
        if (isLaptop) return 3
        if (isTablet) return 2
        if (isMobile) return 1
    }

    if (isLoading) return <Loader/>
    if (isError) return <div>Error</div>
    if (!doctors) return <div>Cant load</div>

    const doctorsLine = doctors.map(doctor => (
        <SwiperSlide key={doctor.serialNumber}>
            <ShowUserProfile {...doctor}/>
        </SwiperSlide>
    ))

    return (
        <div className={style.slider}>
            <BlockTitle title={'Our Doctors'}/>
            <Swiper slidesPerView={usersPerView()} slidesPerGroup={usersPerView()} spaceBetween={20} lazy={true}
                    loop={true} navigation={true} modules={[Navigation, Lazy]}>
                {doctorsLine}
            </Swiper>
        </div>
    );
}

export default OurDoctors;
