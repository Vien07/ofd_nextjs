"use client";
import React from "react";
import dynamic from "next/dynamic";
import { CardResources } from "./card-resources";
import { CardTransactions } from "./card-latest-transfer-resource";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { AccountTableWrapper } from "../accounts/account-table/account-table";
import { LoaderTable } from "../loader/loader-table";
import useSWR from "swr";
import { Category } from "../category/category-table/data";
import { CardCategory } from "./card-category";
import { accountsFetcher } from "@/utils/fetchers/account-fetchers.ts/accountsFetcher";
import { categoriesFetcher } from "@/utils/fetchers/category-fetchers.ts/categories-fetcher";
import { CategoryStatus } from "@/enums/category-status";

const colors = ["bg-default-50", "bg-success", "bg-primary"];

const Chart = dynamic(() => import("../charts/steam").then((mod) => mod.Steam), {
  ssr: false,
});

export const Content = () => {
  // const { data: accounts, isLoading: isLoadingFetchAccountData } = useSWR(
  //   ["/users/get", { take: 5 }],
  //   ([url, queryParams]) => accountsFetcher(url, queryParams)
  // );

  // const {
  //   data: categories,
  //   isLoading: isFetchingCategories,
  // } = useSWR(["/categories", {}], ([url, queryParams]) => categoriesFetcher(url, queryParams));

  return (
    <div className="h-full lg:px-6">
      <p>Hello world!</p>
    </div>
  );
};
