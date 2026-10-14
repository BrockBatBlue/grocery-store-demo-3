import Contact from '#/components/shadcn-space/blocks/contact-01'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Contact />
    </div>
  )
}
