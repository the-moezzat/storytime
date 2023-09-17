import { cn } from "@/utils/helpers";
import React from "react";

export default function InfoScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      {children}
    </div>
  );
}

function InfoImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} />;
}

function InfoTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mb-5 text-center text-2xl font-bold leading-tight text-gray-8 max-lg:text-xl max-md:mb-3 max-md:text-lg",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function InfoDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mb-8 text-center text-sm text-gray-6 ", className)}>
      {children}
    </p>
  );
}

function InfoAction({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

InfoScreen.Image = InfoImage;
InfoScreen.Title = InfoTitle;
InfoScreen.Description = InfoDescription;
InfoScreen.actions = InfoAction;
