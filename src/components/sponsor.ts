import { base } from "@/lib/airtable";

type SponsorType = "Graab" | "Waii" | "Non-Monetary";

export const SPONSOR_TYPES: Record<SponsorType, string> = {
  Graab: "🙏 Graab Sponsorship",
  Waii: "🙏 Waii Sponsorship",
  "Non-Monetary": "📦 Non-Monetary Sponsorship",
};

export interface Sponsor {
  id: string;
  name: string;
  logo: string | null;
  link: string;
  item?: string;
}

export type SponsorData = Record<SponsorType, Sponsor[]>;

export const sponsors: SponsorData = {
  Graab: [
    {
      id: "aona",
      name: "AONA",
      logo: "/assets/sponsors/aona.png",
      link: "https://aona.co.th/",
    },
    {
      id: "kaoduen",
      name: "น้ำดื่มเข้าเดือน",
      logo: "/assets/sponsors/kaoduen.png",
      link: "https://instagram.com/kaoduean.water",
    },
    {
      id: "p'mhee",
      name: "พี่หมี (Mahasak Pijittum)",
      logo: "/assets/sponsors/p'mhee.png",
      link: "#",
    },
    {
      id: "rdcw",
      name: "RDCW",
      logo: "/assets/sponsors/rdcw.png",
      link: "https://rdcw.co.th",
    },
    {
      id: "borntodev",
      name: "borntodev",
      logo: "/assets/sponsors/borntodev.png",
      link: "https://www.facebook.com/borntodev",
    },
  ],
  Waii: [
    {
      id: "gaijin",
      name: "ไก่จินอินเจแปน",
      logo: "/assets/sponsors/gaijin.png",
      link: "https://www.facebook.com/gaijininjapan.blog",
    },
    {
      id: "wawasabii",
      name: "wawasabii",
      logo: "/assets/sponsors/wawasabii.png",
      link: "https://wawasabii.com/",
    },
  ],
  "Non-Monetary": [
    {
      id: "esc",
      name: "Engineering Student Committee",
      logo: "/assets/sponsors/esc.png",
      link: "https://www.instagram.com/escchula/",
      item: "Venue",
    },
    {
      id: "kaoduen",
      name: "น้ำดื่มเข้าเดือน",
      logo: "/assets/sponsors/kaoduen.png",
      link: "https://instagram.com/kaoduean.water",
      item: "Water Bottle",
    },
    {
      id: "iph",
      name: "Intania Production House",
      logo: "/assets/sponsors/iph.png",
      link: "https://www.instagram.com/intania_production_house/",
      item: "Photo Booth",
    },
  ],
};

export const individualSponsors = [
  {
    name: "bier.bbbb",
    amount: 69.69,
  },
  {
    name: "ChunGPT",
    amount: 888,
  },
];

function getSponsors(type: SponsorType): Sponsor[] {
  return sponsors[type];
}

const goalAmount = 100_000;

async function getSponsoredAmount() {
  let amount = 0;
  const records = await base("sponsors").select().all();

  records.forEach((record) => {
    amount += +(record.get("Amount") ?? 0);
  });

  return amount;
}

const progress = ((await getSponsoredAmount()) / goalAmount) * 100;

export { progress, getSponsors };
