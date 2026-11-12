export default function Map() {
  return (
    <>
      <section className="pb-[60px] sm:pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]">
        {/* Section 2 */}
        <div className="w-[90%] m-[auto] max-w-[130rem]">
          <h3
            className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center">
            Locate us on
          </h3>
          <div className="relative w-[80%] max-lg:w-[90%] max-md:w-full h-auto  max-h-[400px] m-auto aspect-video mt-[30px] md:mt-[40px] rounded-[30px] overflow-hidden">
            <iframe
              className="absolute inset-0 max-h-[500px] h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4872.9416146761605!2d76.49483327586456!3d10.181663869880765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07fd480c21a7ad%3A0xa232eb240f3b6ec9!2sSamwarthika%20Rivera%20Ayurveda%20Retreat!5e1!3m2!1sen!2sin!4v1778156135450!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Samwarthika Rivera Ayurveda Hospital - Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
