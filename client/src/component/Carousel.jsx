import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};

export function Component({ products }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div class="flex-row justify-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="heading">Trending</h2>
        </div>
      </div>
      <Carousel
        autoPlaySpeed={5000}
        responsive={responsive}
        partialVisible={true}
      >
        {products.map((product) => (
          <></>
        ))}
      </Carousel>
    </div>
  );
}
