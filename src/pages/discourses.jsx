import Blogs from "../components/blog";
import { Footer } from "../components/footer";

const Discourses =()=>{
    const randomHeader = 'Example Blog Header';
  const randomType = 'Example Blog Type';
  const randomImageUrl = `https://via.placeholder.com/800x600?text=RandomImage`;

    return (
        <>
        <div className="pt-40 border-b-2 bg-gray-100">
        <div className="flex">
        <h1 className="text-start text-7xl font-semibold pt-20 p-16">Single Blog</h1>
        </div>
        </div>
        <div className="w-11/12 my-16 p-4 mx-auto grid md:grid-cols-2 lg:grid-cols-3 ">
             <Blogs />
        </div>
        <Footer />
        </>
    )
    }
    export default Discourses ;