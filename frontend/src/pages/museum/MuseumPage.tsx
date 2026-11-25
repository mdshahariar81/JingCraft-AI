import MuseumHero from './MuseumHero'
import CuratedCollections from './CuratedCollections'
import JourneyThroughTime from './JourneyThroughTime'
import ArtistryTechniques from './ArtistryTechniques'
import SymbolsMotifs from './SymbolsMotifs'
import FeaturedArtifacts from './FeaturedArtifacts'

export default function MuseumPage() {
  return (
    <main>
      <MuseumHero />
      <CuratedCollections />
      <JourneyThroughTime />
      <ArtistryTechniques />
      <SymbolsMotifs />
      <FeaturedArtifacts />
    </main>
  )
}
