import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fresh-produce')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fresh-produce"!</div>
}
