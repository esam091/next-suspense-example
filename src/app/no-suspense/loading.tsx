export default function Loading() {
  return (
    <div className="container px-8">
      <h2 className="text-lg font-semibold">Loading page contents...</h2>
      <p>
        The main contents of this page will only show up after all server
        components finished loading.
      </p>
    </div>
  );
}
