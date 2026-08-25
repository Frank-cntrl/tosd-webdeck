import CategoryGallery from '../components/CategoryGallery'
import { site } from '../content/site'

export default function Cannabis() {
  return <CategoryGallery category={site.categories.cannabis} />
}
