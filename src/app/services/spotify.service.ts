import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio de spotify listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBVdUBKj09RW2XgZlIOMKzD4JW-LgAcWd5ZKOQgNS6reI0ImPXyrtamHOsyaFMLSc_6a3yNUsMD3OG3FiU',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBVdUBKj09RW2XgZlIOMKzD4JW-LgAcWd5ZKOQgNS6reI0ImPXyrtamHOsyaFMLSc_6a3yNUsMD3OG3FiU',
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=15`,
      {
        headers,
      }
    );
  }
}
