const { default: Link } = require("next/link");

const notFound = () => {
  return (
    <>
      <div>
        <h2>Page not found</h2>
        <h2>Click the link to GO back to home page</h2>
      </div>
      <div>
        <Link href="/">Return Home</Link>
      </div>
    </>
  );
};
export default notFound;
