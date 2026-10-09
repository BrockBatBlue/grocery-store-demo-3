import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/frozen-foods')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/frozen-foods"!</div>
}
