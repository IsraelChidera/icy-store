import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartImage from "../../public/images/cart-image.svg";
import cartImage1 from "../../public/images/cart-image-1.svg";
import cartImage2 from "../../public/images/cart-image-2.svg";
import { AiFillDelete } from "react-icons/ai";
import productFive from "../../public/images/productFive.svg";
import productSix from "../../public/images/productSix.svg";
import productSeven from "../../public/images/productSeven.svg";
import productEight from "../../public/images/productEight.svg";

const page = () => {
  return (
    <section className="mx-auto max-w-6xl mt-20 pb-10">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl"> Your Cart </h1>

        <Link href="/product" className="text-xs underline underline-offset">
          Continue shopping
        </Link>
      </div>

      <div className="mt-10">
        <div className="grid text-sm grid-cols-5 gap-x-4 border-b pb-4">
          <div style={{ color: "#121212" }} className="col-span-3">
            <p> PRODUCT </p>
          </div>

          <div
            style={{ color: "#121212" }}
            className="col-span-2 flex justify-between items-center"
          >
            <p> QUANTITY </p>
            <p> TOTAL </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-5 gap-x-4">
            <div className="col-span-3 flex items-start space-x-2">
              <Image src={cartImage} alt="product image added to cart" />
              <div>
                <h3 className="text-sm"> Naomi Mini Wallet </h3>
                <p style={{ color: "#121212" }} className="text-xs">
                  {" "}
                  Color: Cotton Candy{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  <button className="border py-1 px-2 flex items-center space-x-12">
                    <span>-</span>

                    <span className="text-sm"> 1 </span>

                    <span> + </span>
                  </button>
                </div>

                <AiFillDelete />
              </div>

              <div>
                <p className="text-sm"> $187.00 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-5 gap-x-4">
            <div className="col-span-3 flex items-start space-x-2">
              <Image src={cartImage2} alt="product image added to cart" />
              <div>
                <h3 className="text-sm"> Naomi Mini Wallet </h3>
                <p style={{ color: "#121212" }} className="text-xs">
                  {" "}
                  Color: Cotton Candy{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  <button className="border py-1 px-2 flex items-center space-x-12">
                    <span>-</span>

                    <span className="text-sm"> 1 </span>

                    <span> + </span>
                  </button>
                </div>

                <AiFillDelete />
              </div>

              <div>
                <p className="text-sm"> $187.00 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-5 gap-x-4">
            <div className="col-span-3 flex items-start space-x-2">
              <Image src={cartImage1} alt="product image added to cart" />
              <div>
                <h3 className="text-sm"> Naomi Mini Wallet </h3>
                <p style={{ color: "#121212" }} className="text-xs">
                  {" "}
                  Color: Cotton Candy{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  <button className="border py-1 px-2 flex items-center space-x-12">
                    <span>-</span>

                    <span className="text-sm"> 1 </span>

                    <span> + </span>
                  </button>
                </div>

                <AiFillDelete />
              </div>

              <div>
                <p className="text-sm"> $187.00 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end text-right mt-20 w-full">
          <div className="space-y-2">
            <p className="text-xs"> Subtotal: $561.00 CAD </p>
            <p style={{ fontSize: "10px" }}>
              {" "}
              Taxes and shipping calculated at checkout{" "}
            </p>
            <button className="py-2 text-sm bg-black text-white w-full">
              Checkout
            </button>
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
