ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-21966.430922, 621024.296578, -21737.805371, 621186.944566]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BOUNDARY_2 = new ol.format.GeoJSON();
var features_BOUNDARY_2 = format_BOUNDARY_2.readFeatures(json_BOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_2.addFeatures(features_BOUNDARY_2);
var lyr_BOUNDARY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUNDARY_2, 
                style: style_BOUNDARY_2,
                popuplayertitle: 'BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_2.png" /> BOUNDARY'
            });
var format_Beacons_3 = new ol.format.GeoJSON();
var features_Beacons_3 = format_Beacons_3.readFeatures(json_Beacons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beacons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beacons_3.addFeatures(features_Beacons_3);
var lyr_Beacons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beacons_3, 
                style: style_Beacons_3,
                popuplayertitle: 'Beacons',
                interactive: true,
                title: '<img src="styles/legend/Beacons_3.png" /> Beacons'
            });
var format_VENUE_4 = new ol.format.GeoJSON();
var features_VENUE_4 = format_VENUE_4.readFeatures(json_VENUE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VENUE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VENUE_4.addFeatures(features_VENUE_4);
var lyr_VENUE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VENUE_4, 
                style: style_VENUE_4,
                popuplayertitle: 'VENUE',
                interactive: true,
                title: '<img src="styles/legend/VENUE_4.png" /> VENUE'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BOUNDARY_2.setVisible(true);lyr_Beacons_3.setVisible(true);lyr_VENUE_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,lyr_BOUNDARY_2,lyr_Beacons_3,lyr_VENUE_4];
lyr_BOUNDARY_2.set('fieldAliases', {'id': 'id', });
lyr_Beacons_3.set('fieldAliases', {'id': 'id', });
lyr_VENUE_4.set('fieldAliases', {'DIRECTION': 'DIRECTION', });
lyr_BOUNDARY_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Beacons_3.set('fieldImages', {'id': 'TextEdit', });
lyr_VENUE_4.set('fieldImages', {'DIRECTION': '', });
lyr_BOUNDARY_2.set('fieldLabels', {'id': 'no label', });
lyr_Beacons_3.set('fieldLabels', {'id': 'no label', });
lyr_VENUE_4.set('fieldLabels', {'DIRECTION': 'header label - visible with data', });
lyr_VENUE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});