export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        const url = 'api.giphy.com/v1/gifs/search?api_key=wW0hbhCaURiw5DNZ0R74i0n3jjoOzHGX&q=${category}';
        const resp = await fetch(url);
        console.log(resp)

    }
    getGifs()

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}