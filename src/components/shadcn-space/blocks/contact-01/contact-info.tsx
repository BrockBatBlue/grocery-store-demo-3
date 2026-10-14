'use client'

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <p className="text-base font-normal text-muted-foreground">
            We can help
          </p>
        </div>
        <p className="text-3xl  md:text-4xl font-medium text-foreground">
          Let’s discuss about your project and take it the next level.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Phone</p>
          <a
            href="tel:+323-25-8964"
            className="text-base font-medium text-primary"
          >
            +323-25-8964
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-normal text-muted-foreground">Email</p>
          <a
            href="mailto:me@shadcnspace.com"
            className="text-base font-medium text-primary"
          >
            me@shadcnspace.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-sm font-normal text-muted-foreground">Location</p>
        <p className="text-base font-medium text-primary">
          Mark Avenue, Dalls Road, New York
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
