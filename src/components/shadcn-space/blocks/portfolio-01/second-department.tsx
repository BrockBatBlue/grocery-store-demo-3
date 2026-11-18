'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Department2 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Nuestros congelados</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Tenemos una gran variedad de alimentos congelados.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/frozen-goods.jpg"
                  alt="Pasillo de alimentos congelados en una tienda de abarrotes mexicana"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Nuestra sección de congelados ofrece opciones para todos los
                gustos: desde frutas y verduras congeladas con un procesamiento
                mínimo hasta prácticos platillos preparados. Encuentra
                ingredientes versátiles para cocinar a diario y comidas listas
                para esos días ocupados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department2 }
