import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeHolder?: string;
    onSearchQuery: (query: string) => void; //Se usa on... por que son eventos
}

export const SearchBar = ({ placeHolder = 'Buscar', onSearchQuery }: Props) => {
    const [query, setQuery] = useState<string>('');

    //Se ejecuta cuando el componente se monta (cuando se renderiza)
    useEffect(() => {
        const timeOutID = setTimeout(() => {
            onSearchQuery(query);
        }, 700);

        //Se ejecuta cuando el componente se va a desmontar o cuando se dispara el efecto de nuevo con base en las dependencias
        return () => {
            clearTimeout(timeOutID); //Limpia el timeour para que no se vuelva a ejecutar
        }

        //Las dependencias [query, onSearchQuery] dicen que el efecto se corre cuando cambia el valor del query o el elemento padre se renderizo de nuevo por que manda una refenencia nueva de onSearchQuery
    }, [query, onSearchQuery]);

    const handleSearch = () => {
        onSearchQuery(query);
        setQuery('');
    }
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <h1>{query}</h1>
            <input
                type="text"
                placeholder={placeHolder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
