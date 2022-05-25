import React from 'react';
import { FavoriteInterface } from '../../contexts/favorites';

interface SendFavoritesInterface {
    favorites: FavoriteInterface[]
}

const SendFavoritesTemplate: React.FC<SendFavoritesInterface> = ({ favorites }) => {
  return (
      <table>
          <thead>
              <tr>
                  <th>Capa</th>
                  <th>Titulo</th>
                  <th>Descrição</th>
              </tr>
          </thead>
          <tbody>
                {favorites.map(item => (
                    <tr key={item.id}>
                        <td> <img width="50px" src={item.image} alt={item.title} /> </td>
                        <td>{item.title}</td>
                        <td>{item.details}</td>
                    </tr>
                ))}
          </tbody>
      </table>
  );
}

export default SendFavoritesTemplate;