import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicListService } from './music-list.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css'],
})
export class AudioListComponent implements OnInit {
  music: any;
  constructor(
    private http: HttpClient,
    private musicListService: MusicListService
  ) {}

  ngOnInit(): void {}

  searchSong(value: any) {
    this.musicListService.getMusicList(value).subscribe((music) => {
      this.music = music;
    });
  }
}
