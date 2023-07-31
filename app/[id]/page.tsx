import { Header, SingleNews } from "@/components";
import { Metadata } from "next";

type Props = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `News ${id}`,
  };
}

export default function Post({ params: { id } }: Props) {
  return (
    <>
      <Header />
      <SingleNews id={id} />
    </>
  );
}
