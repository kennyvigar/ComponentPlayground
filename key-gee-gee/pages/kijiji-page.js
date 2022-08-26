import React from "react";
import useSWR from "swr";
import { KijijiAd } from "./kijij-ad";

// Kenny, I used these docs to figure out what to add
// https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const KijijiPage = () => {
  const { data, error } = useSWR("/api/kijiji", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((ad) => (
        <KijijiAd key={ad.id} {...ad} />
      ))}
    </div>
  );
};
