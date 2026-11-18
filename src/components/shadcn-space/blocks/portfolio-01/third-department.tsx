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
              <Badge variant="outline">Our Meat and Fish</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                We offer a wide variety of fresh and frozen meats and fish.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/meat-poultry-section.png"
                  alt="Meat and poultry section in a Mexican grocery store"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Our meat and fish section features a variety of fresh selections
                replenished daily, along with frozen options for convenient
                storage and meal planning. Choose from cuts and varieties for
                all kinds of recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department3 }
