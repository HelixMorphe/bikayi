import { Navbar, Filter, List } from "../containers/index";
const All = ({ data }) => {
  return (
    <div className="section__padding">
      {/* <Navbar /> */}
      {/* <Filter /> */}
      <List data={data} />
    </div>
  );
};

export default All;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.nobelprize.org/v1/prize.json");
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: data.prizes,
    },
  };
}
