/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import OnboardingLayout from "~/ui/layouts/onboarding-layout/OnboardingLayout";
import useEnrolStudentTemplate from "./useEnrolStudentTemplate";
import TextInputView from "~/ui/components/input/views/TextInputView";
import BaseButtonView from "~/ui/components/button/views/BaseButtonView";
import { Icon } from "@iconify/react";

export default function EnrolStudentTemplate() {
  const {
    formData,
    handleChange,
    handleSubmit,
    validationError,
    validationSchema,
  } = useEnrolStudentTemplate();
  return (
    <OnboardingLayout title="Student Information">
      <form onSubmit={handleSubmit}>
        <div className="mb-10 grid gap-7">
          <TextInputView
            label="National Identification Number"
            validation={validationSchema?.shape.nin}
            value={formData.nin}
            name="nin"
            autoComplete="off"
            onChange={handleChange}
            validationTrigger={validationError}
          />

          <div className="grid grid-cols-2 gap-x-4 gap-y-7">
            <TextInputView
              label="Firstname"
              name="firstName"
              value={formData.firstName}
              validation={validationSchema?.shape.firstName}
              validationTrigger={validationError}
              autoComplete="off"
              onChange={handleChange}
            />
            <TextInputView
              label="Surname"
              name="lastName"
              value={formData.lastName}
              validation={validationSchema?.shape.lastName}
              validationTrigger={validationError}
              autoComplete="off"
              onChange={handleChange}
            />

            <TextInputView
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              validation={validationSchema?.shape.dateOfBirth}
              validationTrigger={validationError}
              autoComplete="off"
              onChange={handleChange}
            />

            <TextInputView
              label="Student No."
              name="studentNumber"
              value={formData.studentNumber}
              validation={validationSchema?.shape.studentNumber}
              validationTrigger={validationError}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>
        <BaseButtonView>
          Register <Icon icon={"bi:arrow-right"} />
        </BaseButtonView>
      </form>
    </OnboardingLayout>
  );
}
