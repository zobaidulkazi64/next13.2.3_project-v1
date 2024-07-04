import { getApiDocs } from "@/docs/swagger";
import ReactSwagger from "@/lib/ReactSwagger";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactSwagger to ensure it is treated as a client-side component
const ReactSwaggerWithNoSSR = dynamic(() => import("@/lib/ReactSwagger"), {
  ssr: false,
});

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <ReactSwaggerWithNoSSR spec={spec} />
      </Suspense>
    </section>
  );
}
