import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() music: any;
  player = new Audio();

  constructor() {}

  ngOnInit(): void {}

  playSong(audio: any) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio: any) {
    this.player.pause();
  }
}
