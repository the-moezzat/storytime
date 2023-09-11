import { Link } from "react-router-dom";

interface RegistrationFooterProps {
  text: string;
  linkText: string;
  to: string;
}

function RegistrationFooter({ text, linkText, to }: RegistrationFooterProps) {
  return (
    <>
      <p className="mt-2 space-x-2 text-center text-gray-7">
        <span>{text}</span>
        <Link to={to} className="p-0 text-primary hover:underline">
          {linkText}
        </Link>
      </p>
    </>
  );
}

export default RegistrationFooter;
