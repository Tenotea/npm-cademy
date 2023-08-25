/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { type OnboardingLayoutProps } from "./OnboardingLayout.types";
import Image from "next/image";
import { IM_SiteLogo } from "~/assets/images";
import Link from "next/link";

export default function OnboardingLayout(props: OnboardingLayoutProps) {
  return (
    <div className="mx-auto max-w-[772px] px-5 pb-8 pt-14 sm:pt-24">
      <Link className="block max-w-max" href={"/"}>
        <Image src={IM_SiteLogo} alt="npm cademy" />
      </Link>

      <h1 className="mb-6 mt-8 max-w-[425px] text-4xl font-semibold leading-[1.1]">
        {props.title}
      </h1>

      {props.children}
    </div>
  );
}
