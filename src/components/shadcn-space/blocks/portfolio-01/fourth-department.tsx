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
              <Badge variant="outline">Our Dry Goods</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                We have an extensive variety of dry goods and pantry staples.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/dry-goods.jpg"
                  alt="Dry goods section in a Mexican grocery store"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Explore dry goods ranging from minimally processed favorites
                like honey and seasonings to ready-made, shelf-stable meals.
                Stock your pantry with versatile ingredients and convenient
                options for everyday cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department4 }
