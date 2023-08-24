import React from 'react'
import { OnboardingLayoutProps } from './OnboardingLayout.types'
import Image from 'next/image'
import { IM_SiteLogo } from '~/assets/images'

export default function OnboardingLayout(props: OnboardingLayoutProps) {
  return (
    <div className="mx-auto max-w-[772px] pt-24">
      <Image src={IM_SiteLogo} alt="npm cademy" />

      <h1 className="mb-6 mt-8 max-w-[425px] text-4xl font-semibold leading-[1.1]">
        { props.title }
      </h1>

      { props.children }
      
    </div>
  )
}
