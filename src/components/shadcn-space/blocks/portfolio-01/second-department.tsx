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
              <Badge variant="outline">Our Frozen Foods</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                We have an extensive variety of frozen foods.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/frozen-goods.jpg"
                  alt="Frozen foods aisle in a Mexican grocery store"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Our frozen foods section offers a range of choices, from
                minimally processed frozen fruits and vegetables to convenient
                ready-made frozen meals. Find versatile ingredients for everyday
                cooking alongside quick options for busy days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department2 }
