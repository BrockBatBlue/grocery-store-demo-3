import Department04 from '#/components/shadcn-space/blocks/portfolio-01/department-04'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dry-goods')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department04 />
    </div>
  )
}
