import React from 'react'
import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HomeCarousel() {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        <SwiperSlide><IonImg src='https://www.w3schools.com/howto/img_woods_wide.jpg' /></SwiperSlide>
                        <SwiperSlide><IonImg src='https://www.w3schools.com/howto/img_nature_wide.jpg' /></SwiperSlide>
                        <SwiperSlide><IonImg src='https://www.w3schools.com/howto/img_mountains_wide.jpg' /></SwiperSlide>
                        <SwiperSlide><IonImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1x6B6jQs119paou7zMMCVMigMrlINp6zXXIEZC7mGdEtNj8wOPbBaK_d8VcXRbYEUBS0&usqp=CAU' /></SwiperSlide>
                    </Swiper>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}
