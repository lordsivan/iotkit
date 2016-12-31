import { Component, Input } from '@angular/core';
import {mqttServer} from "./mqttServer.model"

@Component({
  selector: 'mqtt-client',
  templateUrl: 'mqttClient.template.html'
  })
  export class mqttClientComponent {
    @Input
    mqttSer:mqttServer;
  }
