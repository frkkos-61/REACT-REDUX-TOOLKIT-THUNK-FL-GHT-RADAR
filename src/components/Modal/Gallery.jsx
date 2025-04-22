import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Gallery = ({ data }) => {
  console.log(data);
  return (
    <div className="slider">
      {data?.large?.length > 1 ? (
        <Splide>
          {data.large.map((item) => (
            <SplideSlide>
              <img src={item.src} alt="plane" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">
          <p>Fotoğraf içeriği bulunmuyor</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
