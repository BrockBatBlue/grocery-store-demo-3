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
              <Badge variant="outline">Our Fresh Produce</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                We have an extensive variety of fresh produce.
              </h1>
              <figure className="my-8">
                <img
                  src="/images/fresh-produce-aisle.png"
                  alt="Fresh produce section in a Mexican grocery store"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
              <p className="mt-2 text-lg text-muted-foreground">
                Our fresh produce section is stock with a wide variety of
                fruits, greens, vegetables, herbs, and tubers locally sourced
                and imported. We keep our produce Latin American. You can find
                mangoes, papayas, avocados, and many types of berries. We also
                have a wide variety of greens, including kale, spinach, and
                arugula. Our herbs include cilantro, parsley, and basil. We also
                have a wide variety of tubers, including potatoes, yams, and
                sweet potatoes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department1 }
