/// <reference types="@types/google.maps" />
import Mappable from "../interfaces/Mappable";

export class CustomMap {
  private map: google.maps.Map;
  constructor() {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 3,
      }
    );
  }

  addMarker(property: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: property.location.lat,
        lng: property.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: property.markerContent(),
      });
      infoWindow.open(this.map, marker);
    });
  }
}
