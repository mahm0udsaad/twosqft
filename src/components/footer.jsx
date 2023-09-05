import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronRight,faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer =()=>{
    return(
        <div style={{background:'rgb(28 28 28)'}} className="text-white mt-5 p-3 sm:p-10 App">
           <div className="flex">
            <div className="w-full">
               <div className="title">
               <h1 className="text-4xl">Have a project in mind? <br /><span className="font-bold">Let’s talk.</span></h1>
               <div className="info flex flex-col items-end pt-10 space-y-3">
                <h1 className="text-2xl">B-19, Twin Tower,<br />South Gandhi Maidan Patna, 800001</h1>
                <p className="text-gray-500">EMAIL US DIRECTLY</p>
                <h1 className="text-xl">hello@twosqft.com</h1>
                <p className="text-gray-500">CALL US DIRECTLY</p>
                <h1 className="text-xl">(+91)8294373340</h1>
               </div>
               </div>
            </div>
           </div>
           <footer className="text-white">
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex justify-between items-center">
            <div className="flex sm:pr-0 pr-5 sm:space-x-4">
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
              <div>
             • Available for new projects.
            </div>
        </div>
        </footer>
        </div>
    )
}
const PageFooter = () =>{
    return(
        <div style={{background:'rgb(28 28 28)'}} className="text-white mt-5 p-3 sm:p-10 App">
           <div className="flex">
            <div className="w-full">
               <div className="title">
               <h1 className="text-4xl">Have a project in mind? <br /><span className="font-bold">Let’s talk.</span></h1>
               <div className="info flex flex-col items-end pt-10 space-y-3">
                <h1 className="text-2xl">B-19, Twin Tower,<br />South Gandhi Maidan Patna, 800001</h1>
                <p className="text-gray-500">EMAIL US DIRECTLY</p>
                <h1 className="text-xl">hello@twosqft.com</h1>
                <p className="text-gray-500">CALL US DIRECTLY</p>
                <h1 className="text-xl">(+91)8294373340</h1>
               </div>
               </div>
            </div>
           </div>
           <footer className="sm:p-4 text-white">
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex justify-between items-center">
            <div className="flex sm:pr-0 pr-5 sm:space-x-4">
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
              <div>
             • Available for new projects.
            </div>
        </div>
        </footer>
        </div>
    )
}
export{ Footer , PageFooter};