import React from "react";
import { useInView } from "react-intersection-observer";

const Slider = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.4,
    rootMargin: "1200px",
  });
  const { ref: textRef, inView: textInView } = useInView();
  const { ref: textRef2, inView: textInView2 } = useInView();
  const { ref: textRef3, inView: textInView3 } = useInView();

  const { ref: imageRef2, inView: imageInView2 } = useInView({
    threshold: 0.4,
    rootMargin: "1200px",
  });
  const { ref: imageRef3, inView: imageInView3 } = useInView({
    threshold: 0.4,
    rootMargin: "1200px",
  });

  return (
    <div className="h-auto flex flex-col relative bg-white z-10">
      <div className="h-[70vh] flex  ">
        <div
          className={`w-1/2 p-4 flex flex-col  justify-between gap-1 ${
            textInView ? "text-slide" : ""
          }`}
          ref={textRef}
        >
          <span>
            <h1 className="text-sm md:text-3xl text-black font-semibold line-clamp-3">
              Dahi Bara Aloo Dum - The Quintessential Street Food of Odisha
            </h1>
            <span className="text-m text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
              Food
            </span>
          </span>
          <p className="mt-4 dark:text-green-100 line-clamp-4">
            The millennium city of Cuttack is famous for various reasons –
            silver filigree work, Historical Barabati fort, Famous Barabati
            stadium among others. Besides this, Cuttack is famous for one more
            thing and that is the ‘Dahibara-aloodum’.The name itself conjures up
            thousands of memories and for anyone who’s ever been to Cuttack or
            hails from the same, needs no intro to this legendary street food –
            Dahi Bara Aloo Dum and Guguni, mostly known as “Dahi Bara Aloo Dum”.
            “Aloo dum Dahi bara”, A wholesome meal in itself is said to be the
            staple food of Cutkis.
          </p>
        </div>
        <div
          className={`w-1/2 bg-[url('/food.webp')] bg-cover bg-center ${
            imageInView ? "slide-up" : ""
          }`}
          ref={imageRef}
        ></div>
      </div>

      <div className="h-[70vh] flex">
        <div
          className={`w-1/2 bg-[url('/artculture.jpeg')] bg-cover bg-center ${
            imageInView2 ? "slide-up2" : ""
          }`}
          ref={imageRef2}
        ></div>

        <div
          className={`w-1/2 p-4 flex flex-col  justify-between gap-1 ${
            textInView2 ? "text-slide" : ""
          }`}
          ref={textRef2}
        >
          <span>
            <h1 className="text-sm md:text-3xl text-black font-semibold line-clamp-3">
              A Look Into Odisha’s Tribal And Ethnic Jewellery
            </h1>
            <span className="text-m text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
              Art & Culture
            </span>
          </span>
          <p className="mt-4 dark:text-green-100 line-clamp-4">
            According to the official Census held in 2011, Adivasis constitute
            8.6 per cent of the nation’s total population – some 104. 3 million
            people. Unofficial figures vary significantly but represent a much
            higher proportion of India’s population. The tribal peoples are
            often referred to as “Adivasis,” which means “original inhabitants
            of a particular area.” Indigenous tribes constitute India’s poorest
            still relying on agriculture, fishing, or manual labour for
            survival. Each tribe has its own traditions, clothing, language, and
            jewellery.
          </p>
        </div>
      </div>
      <div className="h-[70vh] flex">
        <div
          className={`w-1/2 p-4 flex flex-col  justify-between gap-1 ${
            textInView3 ? "text-slide" : ""
          }`}
          ref={textRef3}
        >
          <span>
            <h1 className="text-sm md:text-3xl text-black font-semibold line-clamp-3">
              A Look Into Odisha’s Tribal And Ethnic Jewellery
            </h1>
            <span className="text-m text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
              Art & Culture
            </span>
          </span>
          <p className="mt-4 dark:text-green-100 line-clamp-4">
            According to the official Census held in 2011, Adivasis constitute
            8.6 per cent of the nation’s total population – some 104. 3 million
            people. Unofficial figures vary significantly but represent a much
            higher proportion of India’s population. The tribal peoples are
            often referred to as “Adivasis,” which means “original inhabitants
            of a particular area.” Indigenous tribes constitute India’s poorest
            still relying on agriculture, fishing, or manual labour for
            survival. Each tribe has its own traditions, clothing, language, and
            jewellery.
          </p>
        </div>

        <div
          className={`w-1/2 bg-[url('/history.webp')] bg-cover bg-center  ${
            imageInView3 ? "slide-up3" : ""
          }`}
          ref={imageRef3}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
