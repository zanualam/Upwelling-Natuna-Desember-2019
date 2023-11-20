var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIOcean_1 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Upwelling_Natuna_Desember_2019_2 = new ol.format.GeoJSON();
var features_Upwelling_Natuna_Desember_2019_2 = format_Upwelling_Natuna_Desember_2019_2.readFeatures(json_Upwelling_Natuna_Desember_2019_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Upwelling_Natuna_Desember_2019_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Upwelling_Natuna_Desember_2019_2.addFeatures(features_Upwelling_Natuna_Desember_2019_2);
var lyr_Upwelling_Natuna_Desember_2019_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Upwelling_Natuna_Desember_2019_2, 
                style: style_Upwelling_Natuna_Desember_2019_2,
                interactive: true,
    title: 'Upwelling_Natuna_Desember_2019<br />\
    <img src="styles/legend/Upwelling_Natuna_Desember_2019_2_0.png" /> Upwelling Sangat Kuat<br />\
    <img src="styles/legend/Upwelling_Natuna_Desember_2019_2_1.png" /> Upwelling Kuat<br />\
    <img src="styles/legend/Upwelling_Natuna_Desember_2019_2_2.png" /> Upwelling Lemah<br />\
    <img src="styles/legend/Upwelling_Natuna_Desember_2019_2_3.png" /> Upwelling Sangat Lemah<br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_ESRIOcean_1.setVisible(true);lyr_Upwelling_Natuna_Desember_2019_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_ESRIOcean_1,lyr_Upwelling_Natuna_Desember_2019_2];
lyr_Upwelling_Natuna_Desember_2019_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Keterangan': 'Keterangan', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Upwelling_Natuna_Desember_2019_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Keterangan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Upwelling_Natuna_Desember_2019_2.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'Keterangan': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Upwelling_Natuna_Desember_2019_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});