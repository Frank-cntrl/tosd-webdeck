import CategoryGallery from '../components/CategoryGallery'
import { site } from '../content/site'

export default function Comedy() {
  return <CategoryGallery category={site.categories.comedy} />
}
