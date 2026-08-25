import CategoryGallery from '../components/CategoryGallery'
import { site } from '../content/site'

export default function Events() {
  return <CategoryGallery category={site.categories.events} />
}
