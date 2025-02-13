import { twMerge } from "tailwind-merge";

type Props = React.PropsWithChildren & {
  bannerClassName?: string;
};
export default function TitleBanner({ children, bannerClassName }: Props) {
  return (
    <div
      className={twMerge(
        "ml-8 w-fit rounded-lg bg-red-300/70 px-4 py-3",
        bannerClassName,
      )}
    >
      <h1 className="text-4xl font-semibold text-green-900">{children}</h1>
    </div>
  );
}
