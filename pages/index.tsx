/* eslint-disable react/no-unescaped-entities */

import { Link } from "exta/components";
import docs from "@/docs";

export default function Product() {
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
    </>
  );
}
