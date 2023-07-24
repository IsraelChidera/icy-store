"use client";

import React from "react";
import { useGetSingleProductQuery } from "@/store/productApi";

export default function Page({params}) {
  const { data: singleProduct } = useGetSingleProductQuery(
    `${params.id}`
  );
  console.log("single: ", singleProduct);

  return (
    <>
      <div>product id page {params.id} </div>
    </>
  );
}
