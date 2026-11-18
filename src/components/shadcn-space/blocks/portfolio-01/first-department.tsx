'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Department1 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Nuestras frutas y verduras</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Tenemos una gran variedad de frutas y verduras frescas.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/fresh-produce-aisle.png"
                  alt="Sección de frutas y verduras frescas en una tienda de abarrotes mexicana"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Nuestra sección de frutas y verduras ofrece una gran variedad de
                frutas, verduras, hierbas y tubérculos de productores locales y
                de Latinoamérica. Encuentra mangos, papayas, aguacates y
                distintos tipos de frutos rojos. También tenemos hojas verdes
                como kale, espinaca y arúgula; hierbas como cilantro, perejil y
                albahaca; y tubérculos como papa, ñame y camote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department1 }
