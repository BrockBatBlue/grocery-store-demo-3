'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Content1 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">Acerca de nuestra tienda</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Desde 1963, ofrecemos abarrotes de calidad y atendemos a nuestra
                comunidad.
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Somos un negocio familiar que ha atendido a la comunidad por más
                de 50 años. Nos enorgullece ofrecer productos de calidad y un
                servicio excepcional. Nuestro personal conoce bien los productos
                y está listo para ayudarte a encontrar lo que necesitas.
              </p>
              <figure className="my-8">
                <img
                  src="/images/grocery-store.jpg"
                  alt="Abarrotes y productos para el hogar en una tienda de México"
                  className="aspect-video w-full rounded-md object-cover"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  Photo by{' '}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Abarrotes,_mercado_Michoac%C3%A1n.jpg"
                    className="underline"
                  >
                    Xanyssel
                  </a>{' '}
                  en Wikimedia Commons, con licencia{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    className="underline"
                  >
                    CC BY-SA 4.0
                  </a>
                  .
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Content1 }
