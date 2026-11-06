var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Waterbody_1 = new ol.format.GeoJSON();
var features_Waterbody_1 = format_Waterbody_1.readFeatures(json_Waterbody_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_1.addFeatures(features_Waterbody_1);
var lyr_Waterbody_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_1, 
                style: style_Waterbody_1,
                popuplayertitle: 'Waterbody',
                interactive: false,
                title: '<img src="styles/legend/Waterbody_1.png" /> Waterbody'
            });
var format_GEOMORPHOLOGY_2 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_2 = format_GEOMORPHOLOGY_2.readFeatures(json_GEOMORPHOLOGY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_2.addFeatures(features_GEOMORPHOLOGY_2);
var lyr_GEOMORPHOLOGY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_2, 
                style: style_GEOMORPHOLOGY_2,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
                title: '<img src="styles/legend/GEOMORPHOLOGY_2.png" /> GEOMORPHOLOGY'
            });
var format_Bharathapuzha_3 = new ol.format.GeoJSON();
var features_Bharathapuzha_3 = format_Bharathapuzha_3.readFeatures(json_Bharathapuzha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_3.addFeatures(features_Bharathapuzha_3);
var lyr_Bharathapuzha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_3, 
                style: style_Bharathapuzha_3,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_3.png" /> Bharathapuzha'
            });
var format_CheckDam_4 = new ol.format.GeoJSON();
var features_CheckDam_4 = format_CheckDam_4.readFeatures(json_CheckDam_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckDam_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckDam_4.addFeatures(features_CheckDam_4);
var lyr_CheckDam_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CheckDam_4, 
                style: style_CheckDam_4,
                popuplayertitle: 'CheckDam',
                interactive: false,
                title: '<img src="styles/legend/CheckDam_4.png" /> CheckDam'
            });
var format_Geology_5 = new ol.format.GeoJSON();
var features_Geology_5 = format_Geology_5.readFeatures(json_Geology_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_5.addFeatures(features_Geology_5);
var lyr_Geology_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_5, 
                style: style_Geology_5,
                popuplayertitle: 'Geology',
                interactive: false,
                title: '<img src="styles/legend/Geology_5.png" /> Geology'
            });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                popuplayertitle: 'Road',
                interactive: false,
                title: '<img src="styles/legend/Road_6.png" /> Road'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Waterbody_1.setVisible(true);lyr_GEOMORPHOLOGY_2.setVisible(true);lyr_Bharathapuzha_3.setVisible(true);lyr_CheckDam_4.setVisible(true);lyr_Geology_5.setVisible(true);lyr_Road_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Waterbody_1,lyr_GEOMORPHOLOGY_2,lyr_Bharathapuzha_3,lyr_CheckDam_4,lyr_Geology_5,lyr_Road_6];
lyr_Waterbody_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GEOMORPHOLOGY_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Bharathapuzha_3.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_CheckDam_4.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_Geology_5.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Road_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Waterbody_1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_GEOMORPHOLOGY_2.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_Bharathapuzha_3.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_CheckDam_4.set('fieldImages', {'Name': '', 'name1': '', 'Photo': '', });
lyr_Geology_5.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_Road_6.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_Waterbody_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_GEOMORPHOLOGY_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Bharathapuzha_3.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_CheckDam_4.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_Geology_5.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Road_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_Road_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});