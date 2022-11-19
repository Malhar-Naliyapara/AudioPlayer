import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MusicListService } from '../audio-list/music-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  constructor(private musicListService: MusicListService) {}

  ngOnInit(): void {}

  passQueryString(value: any) {
    this.searchQuery.emit(value);
    this.musicListService.clearCache();
  }
}
