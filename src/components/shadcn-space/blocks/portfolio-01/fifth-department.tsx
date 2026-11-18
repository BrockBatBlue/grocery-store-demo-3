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
              <Badge variant="outline">Our Dairy</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Discover our wide variety of dairy section favorites.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/dairy-section.png"
                  alt="Dairy section in a Mexican grocery store"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Find milk for every preference, from ultra-pasteurized organic
                varieties to pasteurized milk kept refrigerated. Explore
                different butters, ice creams, yogurts and other cultured dairy
                products, as well as a variety of dairy-based drinks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department5 }
