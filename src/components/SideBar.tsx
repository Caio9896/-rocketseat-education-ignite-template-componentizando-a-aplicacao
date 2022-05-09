import { useState } from "react";
import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface Props {
  genresData: GenreResponseProps[];
  onHandleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genresData, onHandleClickButton, selectedGenreId }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genresData.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onHandleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </div>
)}