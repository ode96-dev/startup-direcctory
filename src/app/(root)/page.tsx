import SearchForm from "@/components/search-form";
import StartupCard from "@/components/start-up-card";
import { sanityFetch, SanityLive } from "@/lib/live";
import { StartupTypeCard } from "@/lib/types";
import { STARTUPS_QUERY } from "@/sanity/schemaTypes/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className={"heading"}>
          Pitch your startup <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches anf get noticed in the Virtual
          competition
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-3-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
