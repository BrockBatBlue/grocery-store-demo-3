'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Department3 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Nuestras carnes y pescados</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Ofrecemos una gran variedad de carnes y pescados frescos y
                congelados.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/meat-poultry-section.png"
                  alt="Sección de carnes y aves en una tienda de abarrotes mexicana"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Nuestra sección de carnes y pescados ofrece distintas opciones
                frescas que se surten a diario, además de productos congelados
                para guardar y planear tus comidas. Elige entre diversos cortes
                y variedades para todo tipo de recetas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department3 }
