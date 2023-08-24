import React from "react";
import useIndexTemplate from "./useIndexTemplate";
import RoleListGroupView from "~/ui/components/list-group/views/RoleListGroupView";
import BaseButtonView from "~/ui/components/button/views/BaseButtonView";
import { Icon } from "@iconify/react";
import OnboardingLayout from "~/ui/layouts/onboarding-layout/OnboardingLayout";

export default function IndexTemplate() {
  const { options, activeOption, handleOptionChange, handleActionProceed } =
    useIndexTemplate();

  return (
    <OnboardingLayout title="Choose how you want to proceed">
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
    </OnboardingLayout>
  );
}
