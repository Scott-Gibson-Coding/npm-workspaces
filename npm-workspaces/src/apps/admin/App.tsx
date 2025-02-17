import TitleBanner from "../../library/components/ui/TitleBanner";

const LOCATION = import.meta.env.VITE_LOCATION;

export default function AdminApp() {
  return (
    <>
      <TitleBanner bannerClassName="inline-block">
        Admin Application
      </TitleBanner>
      <p className="ml-6 inline text-2xl italic">
        Location read from env:{" "}
        <span className="font-semibold">{LOCATION}</span>
      </p>
    </>
  );
}
