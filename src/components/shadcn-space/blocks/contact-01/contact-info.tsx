'use client'

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <p className="text-base font-normal text-muted-foreground">
            We are open 9am - 9pm!
          </p>
        </div>
        <p className="text-3xl  md:text-4xl font-medium text-foreground">
          Call us to see if we have your products in stock!
        </p>
        <p className="text-2xl font-medium text-foreground italic">
          Email us at info@grocerystore.com.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">
            Want us to hold something at the store for you?
          </p>
          <a
            href="tel:+323-25-8964"
            className="text-base font-medium text-primary"
          >
            +323-25-8964
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-sm font-normal text-muted-foreground">Location</p>
        <p className="text-base font-medium text-primary">
          Mark Avenue, Dalls Road, New York
        </p>
      </div>
      {/* <Separator orientation="horizontal" /> */}
      {/* <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-base font-normal text-muted-foreground ">
          Trusted by
        </p>
        <Marquee pauseOnHover className="[--duration:20s] p-0">
          {brandList.map((brand, index) => (
            <div key={index}>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
              />
              <img
                src={brand.lightimg}
                alt={brand.name}
                className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
              />
            </div>
          ))}
        </Marquee>
      </div> */}
    </div>
  )
}

export default ContactInfo
