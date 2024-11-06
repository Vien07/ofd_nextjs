"use client";
import React from "react";
import dynamic from "next/dynamic";
import BestSellingSwiper from "@/components/bestsellingswiper";
import HomeSwiper from "../homeswiper";
import NextLink from "next/link";

export const Content = () => {
  return (
    <section className="h-full lg:px-6">
      <HomeSwiper />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Sản phẩm mới</h2>
        <NextLink href="#" className="text-red-600 hover:underline flex items-center space-x-1">
          <span>XEM THÊM</span>
          <i className="fa-solid fa-angle-right"></i>
        </NextLink>
      </div>

      <BestSellingSwiper />
    </section>
  );
};
