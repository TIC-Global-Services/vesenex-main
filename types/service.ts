import { StaticImageData } from "next/image";

export interface GridItem {
  name: string;
  desc: string;
  img: StaticImageData | string;
}

export interface WhyItem {
  title: string;
  desc: string;
}

export interface FaqItem {
  ques: string;
  ans: string;
}

export interface ServiceInfo {
  slug: string;
  bannerVideoWeb: StaticImageData | string;
  bannerVideoMobile: StaticImageData | string;
  AnimatedText: string;
  gridTitle: string | React.ReactNode;
  grid: GridItem[];
  totalFrames?: number;
  imgSeq?: string;
  videoSeq?: string;
  videoSeqMobile?: string;
  why: WhyItem[];
  faq: FaqItem[];
}

export interface CategoryData {
  [key: string]: ServiceInfo;
}

export interface ServiceData {
  [key: string]: CategoryData;
}
