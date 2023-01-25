var wms_layers = [];

var format_sone_ld_0 = new ol.format.GeoJSON();
var features_sone_ld_0 = format_sone_ld_0.readFeatures(json_sone_ld_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sone_ld_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sone_ld_0.addFeatures(features_sone_ld_0);
var lyr_sone_ld_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sone_ld_0, 
                style: style_sone_ld_0,
                interactive: true,
                title: '<img src="styles/legend/sone_ld_0.png" /> sone_ld'
            });
var format_sone_dd_1 = new ol.format.GeoJSON();
var features_sone_dd_1 = format_sone_dd_1.readFeatures(json_sone_dd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sone_dd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sone_dd_1.addFeatures(features_sone_dd_1);
var lyr_sone_dd_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sone_dd_1, 
                style: style_sone_dd_1,
                interactive: true,
                title: '<img src="styles/legend/sone_dd_1.png" /> sone_dd'
            });

lyr_sone_ld_0.setVisible(true);lyr_sone_dd_1.setVisible(true);
var layersList = [lyr_sone_ld_0,lyr_sone_dd_1];
lyr_sone_ld_0.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'LD': 'LD', });
lyr_sone_dd_1.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'DD': 'DD', });
lyr_sone_ld_0.set('fieldImages', {'ID': '', 'GRIDCODE': '', 'LD': '', });
lyr_sone_dd_1.set('fieldImages', {'ID': '', 'GRIDCODE': '', 'DD': '', });
lyr_sone_ld_0.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'inline label', 'LD': 'header label', });
lyr_sone_dd_1.set('fieldLabels', {'ID': 'inline label', 'GRIDCODE': 'inline label', 'DD': 'inline label', });
lyr_sone_dd_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});