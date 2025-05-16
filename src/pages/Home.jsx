import Layout from "../components/Layout";

const Home = () => {

    return (
        <Layout>
      <div className="flex-1 bg-[#181818] text-[#F0F0F0] min-h-screen relative p-0 w-ful">
        <div
          className="absolute inset-0 opacity-10 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url('major-world.png')` }}
        />
      </div>
        </Layout>

    )


}

export default Home;