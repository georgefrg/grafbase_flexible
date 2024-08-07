import { Categories, Posts, LoadMore } from "@/components";

const Home = () => {
  return (
    <section className="flex flex-col paddings mb-16">
      <Categories />
      <Posts />
      <LoadMore />
    </section>
  );
};

export default Home;
