import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className = "bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10  ">
      <div className = "wrapper grid gird-cols-1 gap-5 md:grid-cols-2 2x1:gap-0 ">
        <div className ="flex flex-col justify-center gap-8 ml-5">
          <h1 className = "h1-bold">
           Welcome to PICT EVENTS.
          </h1>
          <p className = "p-regular-20 md:p-regular-24">
            Be a part of the delightful events that are going to take place in PICT.
          </p>
          <button className = "black_btn w-full sm:w-fit  md:px-6">
            <Link href = "#events">
            Explore now
            </Link>
          </button>
        </div>
        {/* <Image
        src = "/assets/images/"></Image> */}
      </div>
      

    </section>
    <section id = "events" className = "wrapper my-8 flex flex-col gap-8 md:gap-12 ">
      <h2 className = "h2-bold ">Trusted by <br/> all</h2>
      <div className = "flex w-full flex-col gap-5 md:flex-row">
        Search 
        Category filter
      </div>
    </section>
    
    </>
  );
}
