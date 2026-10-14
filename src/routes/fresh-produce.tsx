import Department01 from '#/components/shadcn-space/blocks/portfolio-01/department-01'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fresh-produce')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department01 />
    </div>
  )
}
