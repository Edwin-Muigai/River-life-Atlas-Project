ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([4099672.820233, -143171.220609, 4108582.752042, -138064.526225]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Coolwatersmapping_1 = new ol.format.GeoJSON();
var features_Coolwatersmapping_1 = format_Coolwatersmapping_1.readFeatures(json_Coolwatersmapping_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coolwatersmapping_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coolwatersmapping_1.addFeatures(features_Coolwatersmapping_1);
var lyr_Coolwatersmapping_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coolwatersmapping_1, 
                style: style_Coolwatersmapping_1,
                popuplayertitle: "Cool-waters-mapping",
                interactive: true,
    title: 'Cool-waters-mapping<br />\
    <img src="styles/legend/Coolwatersmapping_1_0.png" /> Bridge<br />\
    <img src="styles/legend/Coolwatersmapping_1_1.png" /> Waste pile<br />\
    <img src="styles/legend/Coolwatersmapping_1_2.png" /> Sewer discharge<br />\
    <img src="styles/legend/Coolwatersmapping_1_3.png" /> Toilet discharge<br />\
    <img src="styles/legend/Coolwatersmapping_1_4.png" /> Waste Island<br />\
    <img src="styles/legend/Coolwatersmapping_1_5.png" /> Chemical waste<br />\
    <img src="styles/legend/Coolwatersmapping_1_6.png" /> Photopoints<br />\
    <img src="styles/legend/Coolwatersmapping_1_7.png" /> Designated collection point<br />\
    <img src="styles/legend/Coolwatersmapping_1_8.png" /> Inaccessible section<br />\
    <img src="styles/legend/Coolwatersmapping_1_9.png" /> Encroachment<br />\
    <img src="styles/legend/Coolwatersmapping_1_10.png" /> Kombgreen<br />\
    <img src="styles/legend/Coolwatersmapping_1_11.png" /> Dissappear/reappear<br />\
    <img src="styles/legend/Coolwatersmapping_1_12.png" /> Confluence<br />\
    <img src="styles/legend/Coolwatersmapping_1_13.png" />  Area boundary<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Coolwatersmapping_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Coolwatersmapping_1];
lyr_Coolwatersmapping_1.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'numbers': 'numbers', 'Photos': 'Photos', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_Coolwatersmapping_1.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'numbers': 'TextEdit', 'Photos': 'ExternalResource', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_Coolwatersmapping_1.set('fieldLabels', {'name': 'inline label - always visible', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'inline label - always visible', 'alt_mode': 'no label', 'time_begin': 'hidden field', 'time_end': 'no label', 'time_when': 'inline label - always visible', 'numbers': 'inline label - always visible', 'Photos': 'inline label - always visible', });
lyr_Coolwatersmapping_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});