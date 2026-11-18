import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from 'cn'

import { Button } from '#/components/ui/button.tsx'

interface Image {
  src: string
  alt: string
  srcDark?: string
}
interface Button {
  text: string
  url: string
  icon?: React.ReactNode
}
interface Buttons {
  primary?: Button
  secondary?: Button
}
interface Badge {
  text: string
  announcement?: string
  url?: string
}

interface HeroBasicProps {
  heading: string
  description: string
  buttons?: Buttons
  image: Image
  className?: string
}

interface Hero1Props extends HeroBasicProps {}
type Props = Partial<Hero1Props>

const defaultProps: Hero1Props = {
  heading: 'Nuestra tienda de abarrotes',
  description:
    'Ubicada en el corazón de la Ciudad de México, ofrecemos frutas y verduras frescas, así como deliciosos platillos preparados. También contamos con productos veganos y orgánicos.',
  buttons: {
    primary: {
      text: 'Ver catálogo',
      url: 'https://shadcnblocks.com',
    },
    secondary: {
      text: 'Contáctanos',
      url: 'https://shadcnblocks.com',
    },
  },
  image: {
    src: '../../public/images/map-with-radius-5mi.png',
    alt: 'Mapa del área de cobertura de la tienda',
  },
}

const Hero1 = (props: Props) => {
  const { heading, description, buttons, image, className } = {
    ...defaultProps,
    ...props,
  }

  return (
    <section
      className={cn(
        'py-32 bg-[url(../../public/images/dry-goods.jpg)] bg-no-repeat min-w-full bg-cover bg-center h-240',
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left bg-white/30 p-8 rounded-lg">
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty text-foreground md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>
            <p className="max-w-5xl text-balance text-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>
          {image.srcDark ? (
            <>
              <img
                src={image.src}
                alt={image.alt}
                className="h-4/5 w-full rounded-md border border-border object-cover object-top dark:hidden"
              />
              <img
                src={image.srcDark}
                alt={image.alt}
                className="hidden aspect-video w-full rounded-md border border-border object-cover object-top dark:block"
              />
            </>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="h-130 w-130 rounded-md border border-border object-cover object-top"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export { Hero1 }
