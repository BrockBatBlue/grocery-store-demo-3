import Department02 from '#/components/shadcn-space/blocks/portfolio-01/department-02'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/frozen-foods')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Department02 />
    </div>
  )
}
