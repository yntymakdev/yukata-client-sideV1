import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  ...NO_INDEX_PAGE,
};
export default function StorePage() {
  return <div></div>;
}
