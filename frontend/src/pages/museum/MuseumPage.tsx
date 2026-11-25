import MuseumHero from './MuseumHero'
import SymbolsMotifs from './SymbolsMotifs'
import CuratedCollections from './CuratedCollections'
import JourneyThroughTime from './JourneyThroughTime'
import ArtistryTechniques from './ArtistryTechniques'

export default function MuseumPage() {
  return (
    <main>
      <MuseumHero />
      <CuratedCollections />
      <JourneyThroughTime />
      <ArtistryTechniques />
          <SymbolsMotifs />
    </main>
  )
}
