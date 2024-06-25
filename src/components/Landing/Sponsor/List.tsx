import {
  individualSponsors,
  type Sponsor,
  type SponsorData,
} from "../../sponsor";

export default function SponsorList({
  sponsors,
}: Readonly<{ sponsors: SponsorData }>) {
  return (
    <div className="mx-4 flex flex-col gap-y-8">
      <h2 className="font-workbench text-2xl font-bold">
        These people are kind (&rich) AF
      </h2>
      <p className="font-arimo text-lg font-light">
        thank you for your support!
      </p>
      <div className="grid w-full grid-cols-3 items-center justify-center gap-8">
        {sponsors["Graab"].map((sponsor: Sponsor) => (
          <div
            key={sponsor.id}
            className="h-auto w-full transition-all duration-500 ease-in-out hover:shadow-lg"
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
      <div className="grid w-full grid-cols-5 items-center justify-center gap-8">
        {sponsors["Waii"].map((sponsor: Sponsor) => (
          <div
            key={sponsor.id}
            className="h-auto w-full transition-all duration-500 ease-in-out hover:shadow-lg"
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
      <h2 className="font-workbench text-2xl font-bold">
        Non-monetary sponsorship
      </h2>

      <div className="grid w-full grid-cols-5 items-center justify-center gap-8">
        {sponsors["Non-Monetary"].map((sponsor: Sponsor) => (
          <div
            key={sponsor.id}
            className="h-auto w-full transition-all duration-500 ease-in-out hover:shadow-lg"
          >
            <a href={sponsor.link} rel="noopener noreferrer">
              <img
                src={`/8/${sponsor.logo}` ?? "/8/assets/placeholder.png"}
                alt={sponsor.name}
                className="w-full object-contain"
              />
            </a>
            <p className="text-center text-sm">{sponsor.item}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 font-workbench text-2xl font-bold">
        Individual sponsors
      </h2>
      <p className="font-arimo text-lg font-light">
        Every help counts! Donate now at{" "}
        <a
          className="underline hover:no-underline"
          href="https://grtn.org/e/sht8/sponsor_form"
        >
          this form
        </a>
      </p>
      <div className="grid grid-cols-3 gap-4 font-arimo text-lg sm:grid-cols-5">
        {individualSponsors.map((sponsor) => (
          <div className="flex flex-col items-center gap-2">
            <div className="text-center">{sponsor.name}</div>
            <div className="text-center">
              💰 ฿{String(sponsor.amount).padStart(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
