interface RegistrationHeaderProps {
  title: string;
  description: string;
}

function RegistrationHeader({ title, description }: RegistrationHeaderProps) {
  return (
    <>
      <h1 className="mb-1 scroll-m-20 text-4xl font-bold tracking-tight text-gray-9 sm:mb-2 lg:text-5xl">
        {title}
      </h1>

      <p className="mb-4 text-lg leading-6 text-gray-7 sm:mb-6 md:leading-7 [&:not(:first-child)]:mt-4 md:[&:not(:first-child)]:mt-4">
        {description}
      </p>
    </>
  );
}

export default RegistrationHeader;
