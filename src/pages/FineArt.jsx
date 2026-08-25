import CategoryGallery from '../components/CategoryGallery'
import { site } from '../content/site'

export default function FineArt() {
  return <CategoryGallery category={site.categories.fineArt} />
}
