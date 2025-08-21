import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay, EffectCreative } from "swiper/modules";

interface IImgVideo {
 type: string
 image: any
}

export default function ImgVideo({ type, image }: IImgVideo) {
  console.log(type);
  console.log(image);
  
  const preView = useMemo(() => {
      switch (type) {
        case 'image':
            return (
              <img
                className="object-cover rounded-xl h-full hover:"
                src={image}
                alt=""
              />
            );
        break;
        case 'video':
            return (
              <video
                className="object-cover rounded-xl h-full"
                src={image}
                autoPlay
                loop
                muted
              />
            );
        break
        case 'carousel':
            return (
              <div className="h-full">
                <Swiper
                  className="mySwiper h-full"
                  effect={"cards"}
                  grabCursor={true}
                  loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  modules={[EffectCards, Autoplay]}
                >
                  {image?.map((item: string, index: number) => (
                    <SwiperSlide>
                      <div className="relative h-full bg-slate-50 dark:bg-slate-700 rounded-xl">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                          <img
                            key={index}
                            className="object-contain rounded-xl shadow-2xl"
                            src={item}
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
        break;
        default:
        break;
      }
  },[type, image])

  
  const preViewV2 = ()  => {
    switch (type) {
      case "image":
        return (
          <img
            className="object-cover rounded-xl h-full hover:"
            src={image}
            alt=""
          />
        );
        break;
      case "video":
        return (
          <div className="flex items-center justify-center w-full h-full">
            <video
              className="object-cover rounded-xl h-full"
              src={image}
              autoPlay
              loop
              muted
            />
          </div>
        );
        break;
      case "carousel":
        return (
          // <div className="h-full">
            <Swiper
              className="mySwiper h-full"
              // effect={""}
              // grabCursor={true}
              // // loop={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              // modules={[Autoplay]}
              effect={"creative"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Autoplay]}
            >
              {image?.map((item: string, index: number) => (
                <SwiperSlide>
                  <div className="relative h-full bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                      <img
                        key={index}
                        className="object-contain rounded-xl shadow-2xl"
                        src={item}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          // {/* </div> */}
        );
        break;
      default:
        break;
    }
  };

  return <>{preViewV2()}</>;
}
