/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { IM_SiteLogo } from "~/assets/images";
import { type RecordsLayoutProps } from "./RecordsLayout.types";
import Link from "next/link";

export default function RecordsLayout(props: RecordsLayoutProps) {
  return (
    <main>
      <header className="border-b border-app-gray-accent-5">
        <div className="mx-auto flex w-11/12 max-w-screen-2xl items-center gap-1.5">
          <Link href={"/"} className="block max-w-max">
            <Image src={IM_SiteLogo} alt="npm cademy" />
          </Link>
          <h2 className="mt-2.5 text-lg font-bold"> / {props.title} </h2>
        </div>
      </header>

      <section className="mx-auto mt-10 w-11/12 max-w-screen-2xl rounded-lg border border-app-gray-accent-5">
        <div className="relative mx-5 max-w-[350px] py-5">
          <Icon
            icon={"iconamoon:search"}
            width={20}
            className="absolute bottom-0 left-3 top-0 my-auto text-[#868686]"
          />
          <input
            type="search"
            className="block w-full rounded-lg border border-app-gray-accent-5 bg-app-gray-accent-6 py-2.5 pl-10 pr-4 text-sm outline-none"
            placeholder="Search Teachers"
          />
        </div>

        <div className="w-full overflow-auto">
          <table className="w-full min-w-[1100px] rounded-xl">
            <thead>
              <tr className="rounded-t-xl border-y border-app-gray-accent-5 bg-[#FBFBFB] px-2 text-left">
                {props.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border-r py-3 pl-5 text-sm font-normal uppercase first:w-[65px] last:pr-5"
                  >
                    {header.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.data.map((row) => (
                <tr
                  className="border-b bg-white font-medium last:rounded-b-lg last:border-b-0"
                  key={row.id?.toString()}
                >
                  {props.headers.map((header) => (
                    <td key={header.id} className="py-4 pl-5 last:pr-5">
                      {row[header.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="">
          <div className="flex border-y bg-[#FBFBFB]">
            <h6 className="border-r border-app-gray-accent-5 px-4 py-3 text-sm uppercase">
              S/N
            </h6>
            <h6 className="flex-grow-[2] border-r border-app-gray-accent-5 px-4 py-3 text-sm uppercase">
              Teacher Name
            </h6>
            <h6 className="flex-grow border-r border-app-gray-accent-5 px-4 py-3 text-sm uppercase">
              Identification Number
            </h6>
            <h6 className="flex-grow border-r border-app-gray-accent-5 px-4 py-3 text-sm uppercase">
              Teacher Number
            </h6>
            <h6 className="flex-grow border-app-gray-accent-5 px-4 py-3 text-sm uppercase">
              Salary
            </h6>
          </div>
          <div className="flex items-center py-2">
            <h6 className="border-app-gray-accent-5 px-4 py-3 text-sm font-semibold">
              #1
            </h6>
            <div className="flex flex-grow-[2] items-start gap-2 border-app-gray-accent-5 py-3 pl-4">
              <img
                src="https://ui-avatars.com/api/?format=svg&rounded=true&background=random&name=Teacher+Name"
                alt="teacher's name"
                className="h-[30px]"
              />
              <div className="font-semibold">
                <p className="text-base font-semibold">Teacher Name</p>
                <span className="block text-xs font-light"> 21 Years Old</span>
              </div>
            </div>
            <h6 className="flex-grow border-app-gray-accent-5 py-3 pr-4 text-sm font-medium">
              10933943930
            </h6>
            <h6 className="flex-grow border-app-gray-accent-5 px-4 py-3">
              TNN 22930
            </h6>
            <h6 className="flex-grow border-app-gray-accent-5 px-4 py-3">
              $20,000
            </h6>
          </div>
        </div> */}
      </section>
    </main>
  );
}
