import { Startup, Author } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };
