'use client'

import { useRef } from 'react'
import { Badge } from '#/components/ui/badge.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '#/components/ui/carousel.tsx'
import { motion, useInView } from 'motion/react'

export interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

export interface Testimonial01Props {
  badge?: string
  title?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      'Me encanta encontrar frutas y verduras frescas aquí. El personal siempre es amable y sé que puedo confiar en la calidad cada vez que vengo.',
    author: 'María González',
    role: 'Cliente frecuente',
    image:
      'https://images.pexels.com/photos/8422701/pexels-photo-8422701.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'La variedad de carnes y aves es excelente y los precios son justos. Esta ya es mi tienda de confianza para toda la familia.',
    author: 'Carlos Rodríguez',
    role: 'Cliente de la zona',
    image:
      'https://images.pexels.com/photos/14349176/pexels-photo-14349176.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'Aquí encuentro todo lo que necesito, desde frutas y verduras frescas hasta pan recién hecho. Comprar aquí es práctico y agradable.',
    author: 'Ana Martínez',
    role: 'Cliente frecuente',
    image:
      'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'La tienda está limpia, bien surtida y tiene una gran variedad de lácteos y congelados. Siempre me da gusto venir.',
    author: 'José Hernández',
    role: 'Cliente de la zona',
    image:
      'https://images.pexels.com/photos/8422670/pexels-photo-8422670.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    quote:
      'El pan recién hecho y el servicio atento hacen especial a esta tienda. Da gusto venir de compras cada semana.',
    author: 'Lucía Fernández',
    role: 'Cliente frecuente',
    image:
      'https://images.unsplash.com/photo-1770739318724-f7b285d8620b?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function Testimonial01({
  testimonials = defaultTestimonials,
}: Testimonial01Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4 pt-12">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
            className="flex flex-col gap-3"
          >
            <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit">
              Opiniones
            </Badge>
            <h2 className="sm:text-5xl text-xl leading-none font-medium tracking">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
            className="pt-12 pb-8"
          >
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-8 col-span-12 flex sm:flex-row flex-col sm:gap-10 gap-6 lg:pe-12">
                        <div className="shrink-0 flex items-start">
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-quote.svg"
                            alt="Comillas"
                            className="dark:hidden"
                          />
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-quote-white.svg"
                            alt="Comillas"
                            className="hidden dark:block"
                          />
                        </div>
                        <div className="flex flex-col gap-12">
                          <p className="sm:text-4xl text-xl text-muted-foreground">
                            {testimonial.quote}
                          </p>
                          <div>
                            <p className="text-base font-medium ">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12">
                        <div className="aspect-square overflow-hidden rounded-xl">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="block h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={'-top-20 left-auto right-12 size-8 cursor-pointer'}
              />
              <CarouselNext
                className={'-top-20 right-0 size-8 cursor-pointer'}
              />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
