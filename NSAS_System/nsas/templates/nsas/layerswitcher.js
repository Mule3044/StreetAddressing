                    var waterColor= new ol.layer.Tile({
                        title: 'Water color',
                        type: 'base',
                        visible: false,
                        source: new ol.source.Stamen({
                            layer: 'watercolor'
                        })
                    });
                    var osm= new ol.layer.Tile({
                        title: 'OSM',
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    });

                    var bing= new ol.layer.Tile({
						title: 'Aerial',
						visible: false,
                        source: new ol.source.BingMaps({
                        // Get your own key at https://www.bingmapsportal.com/
                        key: 'Ahd_32h3fT3C7xFHrqhpKzoixGJGHvOlcvXWy6k2RRYARRsrfu7KDctzDT2ei9xB',
                        imagerySet: 'Aerial'
                        })
                    });
                    var stamen= new ol.layer.Tile({
						title: 'Terrain',
						visible: false,
                        source: new ol.source.Stamen({
                        layer: 'terrain-labels'
                        })
                    });
				    var wms= new ol.layer.Tile({
                        title: 'Countries',
                        source: new ol.source.TileWMS({
                            url: 'http://localhost:8080/geoserver/nsas/wms',
                            params: {'LAYERS': 'nsas:nfs_boundary'},
                            serverType: 'geoserver'
                        })
                    });
    var map = new ol.Map({
        target: 'map',
        layers: [waterColor,osm,bing,stamen,wms],
        view: new ol.View({
            center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
            zoom: 6
        })
    });

	var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende' // Optional label for button
    });
    map.addControl(layerSwitcher);
    // Popup

    var popup = new ol.Overlay.Popup();
    map.addOverlay(popup);

    map.on('singleclick', function(evt) {
        var prettyCoord = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
        popup.show(evt.coordinate, '<div><h2>Coordinates</h2><p>' + prettyCoord + '</p></div>');
    });
