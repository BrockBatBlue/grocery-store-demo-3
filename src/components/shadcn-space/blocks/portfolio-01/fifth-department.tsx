'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Department5 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Nuestros lácteos</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Descubre nuestra gran variedad de productos lácteos.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/dairy-section.png"
                  alt="Sección de lácteos en una tienda de abarrotes mexicana"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Encuentra leche para todos los gustos, desde leche orgánica
                ultrapasteurizada hasta leche pasteurizada refrigerada. También
                ofrecemos distintas variedades de mantequilla, helado, yogur y
                otros productos lácteos fermentados, además de bebidas a base de
                leche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department5 }
