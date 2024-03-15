import { HtmlHTMLAttributes, ReactNode } from "react";

type FooterCardProps = {
  children: ReactNode;
};

function FooterCard({ children }: FooterCardProps) {
  return (
    <div className="flex flex-col justify-evenly items-center  p-3 w-[200px">
      {children}
    </div>
  );
}

FooterCard.Title = FooterCardTitle;
FooterCard.Content = FooterCardContent;

export default FooterCard;

function FooterCardTitle({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={className + " text-center py-3 text-black text-2xl"}
      {...props}
    ></p>
  );
}

function FooterCardContent({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        className + "flex flex-col justify-center items-center text-center"
      }
      {...props}
    ></div>
  );
}
