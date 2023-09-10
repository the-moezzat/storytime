import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import styled from "styled-components";

// const PricingCard = styled.div<{ $type: string; $background: string }>`
//   border: ${(props) =>
//     props.$type === "outline" ? "1px solid #adb5bd" : "none"};
//   border-radius: 16px;
//   padding: 24px;
//   background-color: ${(props) => props.$background};
//   display: grid;
//   grid-template-columns: 1fr auto 1fr;
//   grid-template-rows: 1fr auto;
//   row-gap: 32px;
// `;

const FeatureText = styled.p`
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 24px;
  /* @media (max-width: 1000px) {
    font-size: 18px;
  } */
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const FeaturesBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  @media (max-width: 1000px) {
    padding: 8px;
  }
`;

export default function Pricing() {
  return (
    <div id="pricing">
      <div className="px-4 py-10 sm:px-6 sm:pt-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-medium uppercase tracking-wider text-blue-5">
            Pricing
          </h2>
          <p className="mt-1 text-2xl font-extrabold text-gray-8 sm:text-3xl sm:tracking-tight lg:text-4xl">
            Flexible Pricing Plans for Every Requirement
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-6 md:text-lg">
            Choose the Right Plan for You
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:px-16">
        <div className="grid grid-cols-[1fr,auto,1fr] grid-rows-[1fr,auto] gap-y-8 rounded-2xl border border-gray-5  p-6">
          <div className="grid-rows-[min-content, 1fr] grid">
            <p className=" self-start justify-self-start rounded-md border border-gray-5 px-2 py-1 text-sm font-medium uppercase tracking-wider text-gray-7  max-sm:text-xs">
              Free
            </p>
            <p className="self-center justify-self-start text-5xl font-bold text-gray-8 max-sm:text-4xl">
              $0
            </p>
          </div>
          <Separator orientation="vertical" />
          <FeaturesBox>
            <ul className="flex flex-col gap-4 text-gray-8">
              <li className="flex items-center gap-2">
                <FeatureIcon>
                  <CheckCircle weight="fill" />
                </FeatureIcon>
                <FeatureText>10 Questions</FeatureText>
              </li>
              <li className="flex items-center gap-2">
                <FeatureIcon>
                  <CheckCircle weight="fill" />
                </FeatureIcon>
                <FeatureText>5 PDFs</FeatureText>
              </li>
              <li className="flex items-center gap-2">
                <FeatureIcon>
                  <CheckCircle weight="fill" />
                </FeatureIcon>
                <FeatureText>100 pages</FeatureText>
              </li>
            </ul>
          </FeaturesBox>
          <Button className=" col-span-full border-gray-7" variant="outline">
            Get started
          </Button>
        </div>

        <div className="grid grid-cols-[1fr,auto,1fr] grid-rows-[1fr,auto] gap-y-8 rounded-2xl bg-[#08101D] p-6 text-white max-md:p-5  max-sm:p-3">
          <div className="grid-rows-[min-content, 1fr] grid">
            <p className=" self-start justify-self-start rounded-md border border-gray-5 px-2 py-1 text-sm font-medium uppercase tracking-wider text-gray-3 max-sm:text-xs">
              Premium
            </p>
            <p className="self-center justify-self-start text-5xl font-bold text-white max-sm:text-4xl">
              $12<span className="text-lg text-gray-6">/mo</span>
            </p>
          </div>
          <Separator orientation="vertical" className="bg-gray-7" />
          <FeaturesBox>
            <ul className="flex flex-col gap-4 text-gray-2">
              <li className="flex items-center gap-2">
                <FeatureIcon>
                  <CheckCircle weight="fill" />
                </FeatureIcon>
                <FeatureText>10,000 Questions</FeatureText>
              </li>
              <li className="flex items-center  gap-2">
                <FeatureIcon>
                  <CheckCircle weight="fill" />
                </FeatureIcon>
                <FeatureText>Unlimited PDFs</FeatureText>
              </li>
              <li className="flex items-center gap-2">
                <FeatureIcon>
                  <CheckCircle weight="fill" />
                </FeatureIcon>
                <FeatureText>50,000 pages</FeatureText>
              </li>
            </ul>
          </FeaturesBox>
          <Button className=" col-span-full border-gray-7">Get started</Button>
        </div>
      </div>
    </div>
  );
}
