'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Department4 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Nuestros abarrotes</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Tenemos una gran variedad de productos para tu despensa.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/dry-goods.jpg"
                  alt="Sección de abarrotes en una tienda de México"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Explora productos que van desde opciones mínimamente procesadas,
                como miel y condimentos, hasta platillos preparados que puedes
                guardar en la alacena. Abastece tu despensa con ingredientes
                versátiles y opciones prácticas para cocinar todos los días.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department4 }
