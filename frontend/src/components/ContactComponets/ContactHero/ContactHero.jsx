import React from 'react';
import './Contact.css';
import { assets } from '../../../assets/assets';
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  MapIcon,
  Building,
  User,
} from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative bg-black">
        <img
          src={assets.HeroBanner} // use fallback if contactHero not available
          alt="Contact Banner"
          className="w-full h-[400px] border-none outline-none shadow-none"
        />

        {/* Overlay Heading */}
        <div className="absolute inset-x-0 top-[150px] flex flex-col items-center text-black px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold ">Contact</h2>
          <h3 className="text-xl md:text-2xl mt-2 font-semibold inter">
            Make a call request for more information
          </h3>
     
              <div className="mt-6 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-10">

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.conatct}
            alt="Contact"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Info */}
        <div className="w-full md:w-1/2 text-center space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold underline underline-offset-4">
            <Building className="inline w-7 h-7 text-red-700" /> Our Address
          </h2>
          <p className="inter">
            Need assistance or have a question about our services? Fill out the contact form and our support team will be in touch shortly.
          </p>
          <p className="font-bold inter">
            <Building2 className="inline w-5 h-5 text-red-700" /> Sri Jaya Durga Enterprises
          </p>
          <p className="inter">
            <MapPin className="inline w-5 h-5 text-red-700" /> D. No. 22-12-138, Revenue Ward - 31,
            BESIDE Nukalamma Temple, Lalapet, Brodipet, Guntur – 522003, Andhra Pradesh, India.
            <MapIcon className="inline w-5 h-5 text-red-700 ml-1" />
          </p>
          <p className="inter text-xl font-medium">
            <User className="inline w-6 h-6 text-red-700" /> M. Suresh Madisetty
          </p>
          <p className="inter text-lg font-bold">
            <Phone className="inline w-5 h-5 text-red-700" /> +91-9849186401
          </p>
          <p className="inter text-lg font-bold">
            <Mail className="inline w-5 h-5 text-red-700" />{' '}
            <a href="mailto:srijayadurgaenterprises2000@gmail.com" className="hover:underline">
              srijayadurgaenterprises2000@gmail.com
            </a>
          </p>

            <p>
              <User className='inline w-6 h-6 text-red-700' />
              Manger:<b> Vijaya Lakshmi</b>
            </p>
            <p className="inter text-lg font-bold">
            <Phone className="inline w-5 h-5 text-red-700" /> +91-8179537673
          </p>
            
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
