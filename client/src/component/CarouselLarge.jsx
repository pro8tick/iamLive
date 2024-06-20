import { Carousel } from "flowbite-react";

export function Component({ products }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div class="flex-row justify-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="heading">Trending</h2>
        </div>
      </div>
      <Carousel slideInterval={5000}>
        {products.map((product) => (
          <></>
        ))}
      </Carousel>
    </div>
  );
}
