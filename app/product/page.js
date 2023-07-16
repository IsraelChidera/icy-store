import Image from "next/image";
import React from "react";
import product from "../../public/images/Imageproduct.svg";
import product2 from "../../public/images/Imageproduct2.svg";
import productFive from '../../public/images/productFive.svg';
import productSix from '../../public/images/productSix.svg';
import productSeven from '../../public/images/productSeven.svg';
import productEight from '../../public/images/productEight.svg';
import productNine from '../../public/images/productNine.svg';

const page = () => {
  return (
    <section className="mx-auto max-w-6xl mt-20 pb-10">
      <div className="md:grid grid-cols-6 gap-x-6">
        <div className="col-span-4 space-y-2">
          <div>
            <Image src={product} alt="product in view" />
          </div>

          <div className="flex space-x-2 items-center">
            <div>
              <Image src={product2} alt="product in view" />
            </div>

            <div>
              <Image src={product2} alt="product in view" />
            </div>
          </div>
        </div>

        <div className="col-span-2 ">
          <div className="space-y-4">
            <h1 className="text-2xl"> Brick </h1>
            <p className="text-sm"> $385.00 CAD </p>
          </div>

          <div className="mt-6">
            <p className="text-xs">Color</p>

            <div className="mt-3 grid grid-cols-3 gap-x-2 gap-y-4">
              <button
                style={{ background: "#000000" }}
                className="border text-white rounded-2xl text-xs py-1 px-2"
              >
                Cashmere Rose
              </button>

              <button className="border rounded-2xl text-xs py-1 px-2 ">
                Chocolate
              </button>

              <button className="border rounded-2xl text-xs py-1 px-2">
                Jade
              </button>

              <button className="border rounded-2xl text-xs py-1 px-2">
                Denim
              </button>

              <button className="border rounded-2xl text-xs py-1 px-2">
                Dry Rose
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs">Quantity</p>

            <div className="mt-3">
              <button className="border py-1 px-2 flex items-center space-x-12">
                <span>-</span>

                <span className="text-sm"> 1 </span>

                <span> + </span>
              </button>
            </div>

            <div className="mt-3 space-y-2">
              <div>
                <button className="text-sm py-2 px-4 w-full border border-black">
                  Add to cart
                </button>
              </div>

              <div>
                <button className="text-sm text-white bg-black py-2 px-4 w-full border border-black">
                  Buy it now
                </button>
              </div>
            </div>

            <p className="mt-6 text-sm">
              Inspired by the structural boxy form and shape of a brick, which
              lends its name, the bag is perfectly sized for your everyday
              essentials, from a large phone to your wallet and lipstick.
            </p>

            <div className="mt-6 pt-3 border-t">
              <p className="text-xs">Materials</p>

              <p className="pt-2 text-sm">
                Hand-crafted from Italian cow leather. Ultrasuede interior.
                Comes with a detachable and adjustable shoulder strap.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t">
              <p className="text-xs">Dimensions</p>

              <p className="pt-2 text-sm">
                Hand-crafted from Italian cow leather. Ultrasuede interior.
                Comes with a detachable and adjustable shoulder strap.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t">
              <p className="text-xs">Core Instructions</p>

              <p className="pt-2 text-sm">
                Hand-crafted from Italian cow leather. Ultrasuede interior.
                Comes with a detachable and adjustable shoulder strap.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <p className="text-xl"> You may also like </p>

        <div className="mt-10 md:grid grid-cols-4 gap-x-2 gap-y-10">
          <div>
            <Image src={productFive} alt="picture of a projec" />
            <p className="text-xs pt-2" style={{ color: "#121212" }}>
              {" "}
              Hobo Small
            </p>
            <p
              className="text-xs flex items-center space-x-2"
              style={{ color: "#121212" }}
            >
              <span style={{ fontSize: "11px" }} className="line-through">
                $545.00 CAD
              </span>

              <span>$195.00 CAD</span>
            </p>
          </div>

          <div>
            <Image src={productSix} alt="picture of a projec" />
            <p className="text-xs pt-2" style={{ color: "#121212" }}>
              {" "}
              Bo Soft Strap
            </p>
            <p className="text-xs" style={{ color: "#121212" }}>
              $365.00 CAD
            </p>
          </div>

          <div>
            <Image src={productSeven} alt="picture of a projec" />
            <p className="text-xs pt-2" style={{ color: "#121212" }}>
              {" "}
              Bo Soft Strap
            </p>
            <p
              className="text-xs flex items-center space-x-2"
              style={{ color: "#121212" }}
            >
              <span style={{ fontSize: "11px" }} className="line-through">
                $545.00 CAD
              </span>

              <span>$195.00 CAD</span>
            </p>
          </div>

          <div>
            <Image src={productEight} alt="picture of a projec" />
            <p className="text-xs pt-2" style={{ color: "#121212" }}>
              {" "}
              Storml{" "}
            </p>
            <p className="text-xs " style={{ color: "#121212" }}>
              <span>$195.00 CAD</span>
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default page;
