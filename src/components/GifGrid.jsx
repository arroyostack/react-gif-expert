import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <p>{category}</p>

            <h1>{isLoading && 'Loading...'}</h1>
            <div className="card-grid">
                {images.map((image) => {
                    return <GifItem
                        key={image.id}
                        {...image}
                    />
                })}
            </div>

        </>
    )
}
