import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JJ Haircare",
    short_name: "JJ Haircare",
    description: "Natural hair care made in Nairobi, Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F2EC",
    theme_color: "#0A0A0A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
