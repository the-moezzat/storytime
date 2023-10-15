import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { InstagramLogo } from "@phosphor-icons/react";

const Section = styled.footer`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 1.5rem;
  padding: 3rem 1.25rem 1rem 1.25rem;

  @media (max-width: 1180px) {
    gap: 0.5rem;
  }
`;

function Footer() {
  return (
    <Section>
      <div className="col-start-2 col-end-9 flex flex-col justify-between max-lg:col-start-1 max-md:col-end-12 max-[500px]:col-span-full">
        <div className="flex items-center gap-1">
          <img src="/logo-black.svg" alt="Logo" className="h-8" />
        </div>
        <div>
          <p className="text-gray-7">Email</p>
          <a href="mailto:team@mlxai.co.in" className="text-base text-gray-8">
            pdfchat@mlxai.co.in
          </a>
        </div>

        <div className="flex items-center gap-6 text-3xl text-gray-7 max-md:text-2xl">
          <a
            href="https://instagram.com/tarang_ai"
            target="_blank"
            rel="noopener"
          >
            {""}
            <InstagramLogo weight="fill" />
          </a>
          <a
            href="https://twitter.com/choron24111"
            target="_blank"
            rel="noopener"
          >
            {""}
            <svg
              width="18"
              height="18"
              viewBox="0 0 300 300"
              version="1.1"
              fill="#495057"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
            </svg>
          </a>
        </div>
      </div>

      <div className="col-start-[15] col-end-[24] flex flex-col justify-end gap-6 max-lg:col-end-[25] max-md:gap-7 max-[500px]:col-span-full max-[500px]:justify-start">
        <p className="mt-4 text-base text-gray-7 max-md:text-sm max-sm:mb-3">
          Welcome to our world of AI-powered storybooks for kids! Let AI and
          imagination blend seamlessly as we craft unique adventures tailored to
          your child's interests. Explore captivating stories that make reading
          an exciting and immersive experience.
        </p>
        <div className="flex flex-wrap items-center gap-4 max-md:gap-2">
          <Button>Check out our other products!</Button>
          <Button variant="outline">Contact us</Button>
        </div>
      </div>
      <div className="col-start-2 col-end-[24] space-y-4 max-lg:col-span-full">
        <div className="h-0.5 bg-gray-3"></div>
        <div className="flex items-center justify-between gap-2 max-md:flex-col-reverse">
          <span className="flex flex-col text-sm text-gray-6 max-sm:text-xs">
            <p>Copyright © {new Date().getFullYear()} Powered by MLx.</p>
          </span>
          <ul className="flex items-center gap-8 max-md:justify-between max-md:gap-2">
            <li className="text-sm text-gray-6 max-sm:text-xs">
              <a href="terms">Terms of Service</a>
            </li>
            <li className="text-sm text-gray-6 max-sm:text-xs">
              <a href="privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
