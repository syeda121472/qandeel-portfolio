import React from "react";

const ContactUs = () => {
  return (
    <div className=" bg-black bg-opacity-80 text-white mt-1 rounded-br-[90px] rounded-tl-[90px] ">
        <h1 className="font-semibold text-4xl text-center pt-9">CONTACT US</h1>
    <form className=" pt-12 px-8 pb-6 w-full lg:w-[671px] ml-[420px]">
      <label className="font-serif italic drop-shadow-2xl text-lg">User Name :</label><br />
      <input className="border-black rounded p-2 mt-2 mb-5 w-full lg:w-[470px]  italic font-serif text-sm pl-3" placeholder ="User Name... " type="text" id="name" /><br />

      <label className="font-serif italic text-lg">E-mail  :</label><br />
      <input className="border-black rounded mt-2 p-2  mb-5 w-full lg:w-[470px] italic font-serif text-sm pl-3" placeholder ="E-mail... "  type="email" name="email" id="email" /><br />

      <label className="font-serif italic text-lg">Message :</label><br />
      <textarea className="border-black rounded mt-3 mb-5 w-full lg:w-[470px] h-40 italic font-serif text-sm p-3" placeholder ="Your Message... " name="" id=""></textarea>
      <br />
      <input className="bg-blue-600 text-white p-2  px-2 font-serif rounded italic text-md tracking-widest " type="submit" value="RESET" />
      <input className="bg-red-600 text-white p-2  px-2 font-serif rounded italic text-md tracking-widest ml-2 " type="reset" value="SUBMIT" />
    </form>



  </div>
 

  );
};

export default ContactUs;
