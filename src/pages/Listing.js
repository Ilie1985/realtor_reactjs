import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { db } from "../firebase";
import { Spinner } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";

const Listing = () => {
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <main>
      <Swiper
        slidesPreview={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="relative w-full overflow-hidden h-[300px]"
                style={{
                  background: `url(${listing.imgUrls[index]}) center no-repeat`,
                  backgroundSize:"cover"
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default Listing;
