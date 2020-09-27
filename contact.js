/*jshint esversion: 6 */
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([19.09792947, 47.55463426]),
      zoom: 15
    })
  });
