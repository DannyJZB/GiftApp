import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './Gifs/components/PreviousSearches';
import { GiftList } from './Gifs/components/GiftList';

import './index.css'
import { useGifs } from './Gifs/hooks/useGifs';

export const GifsApp = () => {
    const { gifs, previousTerms, handleTermnClicked, handleSearch } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Search */}
            <SearchBar placeHolder="Buscar Gifs" onSearchQuery={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches previousSearches={previousTerms} onTermnClicked={handleTermnClicked} />

            {/* Gifts */}
            <GiftList mockGifs={gifs} />
        </>
    )
}
