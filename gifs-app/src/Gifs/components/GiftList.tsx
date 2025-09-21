import type { Gif } from "../actions/gift.interface";

interface Props {
    mockGifs: Gif[];
}

export const GiftList = ({ mockGifs }: Props) => {
    return (
        <div className="gift-container">
            {
                mockGifs.map((gif) => (
                    <div key={gif.id} className='gift-card'>
                        <img src={gif.url} alt={gif.title} />
                        <h3>gif.title</h3>
                        <p>{gif.width} X {gif.height} (1.5MB)</p>
                    </div>
                ))
            }
        </div>
    )
}
