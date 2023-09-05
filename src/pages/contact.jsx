import {  PageFooter } from "../components/footer";

const Contact =()=>{
    return (
        <>
        <section className='services space-y-5 pt-48 lg:pt-32 w-full mx-3 '>
        <div className="flex flex-col justify-center h-[40vh] title mx-auto w-11/12">
             <div className="top text-5xl md:text-6xl lg:text-9xl">
             <span className="rounded-full p-1 text-sm px-3 bg-black text-white font-semibold">CONTACT</span>
              <br />
              <i className=" font-semibold">Have a Project</i>
              <h1 className="font-semibold">in mind?</h1>
             </div>
          </div>
          <div className="flex pt-20 px-5">
            <div className="r flex flex-col space-y-3">
                <p className="w-11/12">We offer comprehensive design and build solutions,<br /> providing end-to-end services for all your project needs.</p>
                <p>we'r interested in</p>
                <p>working together</p>
                <h1 className="font-bold text-xl">(+91)8294373340</h1>
            </div>
            <div className="l h-full space-y-5">
                <p className="pb-5">Design, construct, transcend- beyond square footage.</p>
                <p>Have a project in mind?</p>
                <p>send a message.</p>
                <h1 className="font-bold text-xl">hello@twosqft.com</h1>
            </div>
          </div>
          <div className="w-[99%] mx-auto h-[70vh] overflow-x-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460503.85532457475!2d85.143084!3d25.615336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed596bfcf2e633%3A0x2ec2582944990235!2sTwosqft!5e0!3m2!1sen!2sus!4v1693935239174!5m2!1sen!2sus" 
          style={{border:"0"}}
           allowfullscreen=""
            loading="lazy"
            className="w-full h-full px-5"
            referrerpolicy="no-referrer-when-downgrade"
             ></iframe>  
             </div>
          </section>
            < section className="bg-gray-100 w-full">
            <div className=" max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="flex justify-center p-8 lg:col-span-3 lg:p-12 flex justify-center">
            <form action="" className="space-y-4 border mx-auto">
                    {/* First Div */}
                    <div className="grid grid-cols-1  sm:grid-cols-2">
                        <div className="h-24 w-full px-5 border flex flex-col justify-center">
                        <h1 className="text-gray-700">Nice to meet you</h1>
                        <label className="sr-only" htmlFor="name">
                            What's your name?
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-inherit text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                        />
                        </div>
                        <div className="h-24 w-full px-5 border flex flex-col justify-center">
                        <h1 className="text-gray-700">Your phone number (optional)</h1>
                        <label className="sr-only" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-inherit text-sm"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                        />
                        </div>
                        <div className="h-24 w-full px-5 border flex flex-col justify-center">
                        <h1 className="text-gray-700">Interested Service</h1>
                        <label className="sr-only text-gray-700" htmlFor="service">
                            Select a service
                        </label>
                        <select
                            className="w-full px-3 py-2 bg-inherit text-sm"
                            id="service"
                        >
                            <option value="Construction">Construction</option>
                            <option value="Design">Design</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    <div className="h-auto border-b-0 w-full px-5 border flex flex-col justify-center">
                        <h1 className="text-gray-700">Subject</h1>
                        <label className="sr-only text-gray-300" htmlFor="subject">
                        How can I help you?
                        </label>
                        <select
                        className="w-full px-3 py-2 bg-inherit text-sm"
                        id="subject"
                        >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="h-24 px-5 border flex flex-col justify-center">
                        <h1 className="text-gray-700">Email address</h1>
                        <label className="sr-only" htmlFor="email">
                        Enter your email address
                        </label>
                        <input
                        className="w-full px-3 py-2 bg-inherit text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        />
                    </div>
                    </div>

                    {/* Third Div */}

                    <div className="h-24 w-full px-5 border flex flex-col justify-center">
                        <h1 className="text-gray-700">Message</h1>
                        <label className="sr-only" htmlFor="message">
                        Message
                        </label>
                        <textarea
                        className="w-full px-3 py-2 bg-inherit text-sm"
                        placeholder="Message"
                        rows="4"
                        id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-block w-full bg-black px-5 py-3 font-medium text-white"
                        >
                        Send
                        </button>
                    </div>
                    </form>
                    </div>
                    </div>
                </div>
                </section>
            <PageFooter /> 
        </>       

    )
    }
    export default Contact ;