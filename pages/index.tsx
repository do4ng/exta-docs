/* eslint-disable react/no-unescaped-entities */

import { Link } from "exta/components";
import docs from "@/docs";
import { compileMdx } from "@/mdx/compile";
import { Content } from "@/mdx/content";

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/do4ng/exta/refs/heads/main/README.md"
  );
  const raw = await res.text();

  const compiled = await compileMdx(raw);

  return { compiled };
}

export default function Product({
  props: { compiled },
}: {
  props: {
    compiled: any;
  };
}) {
  return (
    <>
      <div className="product-container">
        <div className="title">
          <h1 dangerouslySetInnerHTML={{ __html: docs.description }}></h1>

          <div className="actions">
            <Link href="/docs/installation">
              <button className="btn text">Getting Started</button>
            </Link>
            <Link href="/docs/why-exta">
              <button className="btn text">Why Exta</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="info-v3">
        <div className="info-v3-content">
          <div className="content-container post">
            <Content content={compiled}></Content>
          </div>
        </div>
      </div>
    </>
  );
}
