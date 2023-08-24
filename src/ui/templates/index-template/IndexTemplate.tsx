import Image from "next/image";
import React from "react";
import { IM_SiteLogo } from "~/assets/images";
import useIndexTemplate from "./useIndexTemplate";
import RoleListGroupView from "~/ui/components/list-group/views/RoleListGroupView";
import BaseButtonView from "~/ui/components/button/views/BaseButtonView";
import { Icon } from "@iconify/react";

export default function IndexTemplate() {
  const { options, activeOption, handleOptionChange, handleActionProceed } =
    useIndexTemplate();
  return (
    <div className="mx-auto max-w-[772px] pt-24">
      <Image src={IM_SiteLogo} alt="npm cademy" />

      <h1 className="mb-6 mt-8 max-w-[425px] text-4xl font-semibold leading-[1.1]">
        Choose how you want to proceed
      </h1>

      <div className="mb-5">
        <RoleListGroupView
          items={options}
          onItemSelect={handleOptionChange}
          selected={activeOption?.id || null}
        />
      </div>

      <div className="ml-auto max-w-[150px]">
        <BaseButtonView disabled={!activeOption} onClick={handleActionProceed}>
          Continue <Icon icon={"bi:arrow-right"} />
        </BaseButtonView>
      </div>
    </div>
  );
}
