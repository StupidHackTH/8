import type { Sponsor } from "../../sponsor";

export default function SponsorList({
  sponsors,
}: Readonly<{ sponsors: Sponsor[] }>) {
  return (
    <div className="flex flex-col gap-y-8">
      <h2 className="font-workbench text-2xl font-bold">
        These people are kind (&rich) AF
      </h2>
      <p className="font-arimo text-lg font-light">
        thank you for your support!
      </p>
      <div className="justify-centers grid w-full grid-cols-3 items-center gap-8">
        {sponsors.map((sponsor: Sponsor) => (
          <div
            key={sponsor.id}
            className="h-full w-full transition-all duration-500 ease-in-out hover:shadow-lg"
          >
            <a href={sponsor.link} rel="noopener noreferrer">
              <img
                src={`/8/${sponsor.logo}` ?? "/8/assets/placeholder.png"}
                alt={sponsor.name}
                className="w-full object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
