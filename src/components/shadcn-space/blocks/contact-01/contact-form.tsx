'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '#/components/ui/card.tsx'

const ContactForm = () => {
  return (
    <div className="w-full">
      <Card className="ring-0 p-8 gap-6 md:gap-8 border rounded-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold text-primary">
            Our Store Location
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <img
            src="../../../../../public/images/map-with-radius-5mi.png"
            alt="placeholder"
            className="my-8  w-full h-full rounded-md object-cover flex justify-center"
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactForm
