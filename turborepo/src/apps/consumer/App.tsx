import TitleBanner from "../../library/components/ui/TitleBanner";

const LOCATION = import.meta.env.VITE_LOCATION;

export default function ConsumerApp() {
  return (
    <>
      <TitleBanner bannerClassName="bg-blue-300/70 inline-block">
        Consumer Application
      </TitleBanner>
      <p className="ml-6 inline text-2xl italic">
        Location read from env:{" "}
        <span className="font-semibold">{LOCATION}</span>
      </p>
    </>
  );
}
