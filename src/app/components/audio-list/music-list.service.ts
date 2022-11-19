import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MusicList, Song } from './music-list';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MusicListService {
  iTunesUrl = 'https://itunes.apple.com/search';
  musicList!: any;

  constructor(private httpClient: HttpClient) {}

  getMusicList(queryString: any): Observable<MusicList[]> {
    if (!this.musicList) {
      this.musicList = this.httpClient
        .get<MusicList[]>(`${this.iTunesUrl}?term=${queryString}`)
        .pipe(publishReplay(1, 1), refCount());
    }
    return this.musicList;
  }

  clearCache() {
    this.musicList = null;
  }
}
