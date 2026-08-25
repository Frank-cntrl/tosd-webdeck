import CategoryGallery from '../components/CategoryGallery'
import { site } from '../content/site'

export default function Music() {
  return <CategoryGallery category={site.categories.music} />
}
