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
              <Badge variant="outline">About Our Store</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                We were established in 1963, and have been serving our customers
                with quality groceries ever since.
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Our store is a family-owned business that has been serving the
                community for over 50 years. We pride ourselves on providing
                high-quality products and exceptional customer service. Our
                knowledgeable staff is always ready to assist you in finding the
                best products for your needs.
              </p>
              <figure className="my-8">
                <img
                  src="/images/frozen-goods.jpg"
                  alt="Frozen foods aisle in a Mexican grocery store"
                  className="mx-auto aspect-video w-[calc(100%-20px)] rounded-md object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Department2 }
