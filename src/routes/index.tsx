import { Content1 } from '#/components/content1'
import { Hero1 } from '#/components/hero1'
import ProductCategory from '#/components/shadcn-space/blocks/product-category-02/product-category'
import Testimonial01 from '#/components/shadcn-space/blocks/testimonial-02'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero1 />
      <Content1 />
      <ProductCategory />
      <Testimonial01 />
    </>
  )
}
