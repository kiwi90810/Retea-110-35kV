var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortofoto2016RM_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodata.gov.md/geoserver/orthophoto/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "orthophoto:Ortofoto_2016_RM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto 2016 RM',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto2016RM_2, 0]);
var lyr_Terenuriparcelecadastrale_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://moldova-map.md/geoserver/cadastru_data/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "terenuri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Terenuri (parcele cadastrale)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Terenuriparcelecadastrale_3, 1]);
var lyr_Sectoarecadastrale_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_hcsectoare",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sectoare cadastrale',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Sectoarecadastrale_4, 1]);
var format_SEPARATORTI_5 = new ol.format.GeoJSON();
var features_SEPARATORTI_5 = format_SEPARATORTI_5.readFeatures(json_SEPARATORTI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEPARATORTI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEPARATORTI_5.addFeatures(features_SEPARATORTI_5);
var lyr_SEPARATORTI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEPARATORTI_5, 
                style: style_SEPARATORTI_5,
                popuplayertitle: 'SEPARATOR TI',
                interactive: true,
                title: 'SEPARATOR TI'
            });
var format_Piloni_6 = new ol.format.GeoJSON();
var features_Piloni_6 = format_Piloni_6.readFeatures(json_Piloni_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piloni_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piloni_6.addFeatures(features_Piloni_6);
var lyr_Piloni_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piloni_6, 
                style: style_Piloni_6,
                popuplayertitle: 'Piloni',
                interactive: true,
                title: '<img src="styles/legend/Piloni_6.png" /> Piloni'
            });
var format_Separator_7 = new ol.format.GeoJSON();
var features_Separator_7 = format_Separator_7.readFeatures(json_Separator_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Separator_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Separator_7.addFeatures(features_Separator_7);
var lyr_Separator_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Separator_7, 
                style: style_Separator_7,
                popuplayertitle: 'Separator',
                interactive: true,
                title: '<img src="styles/legend/Separator_7.png" /> Separator'
            });
var format_LA35kV_8 = new ol.format.GeoJSON();
var features_LA35kV_8 = format_LA35kV_8.readFeatures(json_LA35kV_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA35kV_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA35kV_8.addFeatures(features_LA35kV_8);
var lyr_LA35kV_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA35kV_8, 
                style: style_LA35kV_8,
                popuplayertitle: 'LA-35kV',
                interactive: true,
                title: '<img src="styles/legend/LA35kV_8.png" /> LA-35kV'
            });
var format_LA110kV_9 = new ol.format.GeoJSON();
var features_LA110kV_9 = format_LA110kV_9.readFeatures(json_LA110kV_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA110kV_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA110kV_9.addFeatures(features_LA110kV_9);
var lyr_LA110kV_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA110kV_9, 
                style: style_LA110kV_9,
                popuplayertitle: 'LA-110kV',
                interactive: true,
                title: '<img src="styles/legend/LA110kV_9.png" /> LA-110kV'
            });
var format_PDC11035106kV_10 = new ol.format.GeoJSON();
var features_PDC11035106kV_10 = format_PDC11035106kV_10.readFeatures(json_PDC11035106kV_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDC11035106kV_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDC11035106kV_10.addFeatures(features_PDC11035106kV_10);
var lyr_PDC11035106kV_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDC11035106kV_10, 
                style: style_PDC11035106kV_10,
                popuplayertitle: 'PDC 110/35/10/6 kV',
                interactive: true,
                title: '<img src="styles/legend/PDC11035106kV_10.png" /> PDC 110/35/10/6 kV'
            });
var group_LEA35kV = new ol.layer.Group({
                                layers: [lyr_Piloni_6,lyr_Separator_7,lyr_LA35kV_8,],
                                fold: "open",
                                title: 'LEA-35 kV'});

lyr_GoogleHybrid_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Ortofoto2016RM_2.setVisible(false);lyr_Terenuriparcelecadastrale_3.setVisible(false);lyr_Sectoarecadastrale_4.setVisible(false);lyr_SEPARATORTI_5.setVisible(true);lyr_Piloni_6.setVisible(false);lyr_Separator_7.setVisible(true);lyr_LA35kV_8.setVisible(true);lyr_LA110kV_9.setVisible(true);lyr_PDC11035106kV_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_Ortofoto2016RM_2,lyr_Terenuriparcelecadastrale_3,lyr_Sectoarecadastrale_4,lyr_SEPARATORTI_5,group_LEA35kV,lyr_LA110kV_9,lyr_PDC11035106kV_10];
lyr_SEPARATORTI_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Piloni_6.set('fieldAliases', {'Name': 'Name', });
lyr_Separator_7.set('fieldAliases', {'Name': 'Name', });
lyr_LA35kV_8.set('fieldAliases', {'Name': 'Name', });
lyr_LA110kV_9.set('fieldAliases', {'Name': 'Name', });
lyr_PDC11035106kV_10.set('fieldAliases', {'Denumirea': 'Denumirea', });
lyr_SEPARATORTI_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Piloni_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_Separator_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_LA35kV_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_LA110kV_9.set('fieldImages', {'Name': 'TextEdit', });
lyr_PDC11035106kV_10.set('fieldImages', {'Denumirea': 'TextEdit', });
lyr_SEPARATORTI_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Piloni_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Separator_7.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_LA35kV_8.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_LA110kV_9.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_PDC11035106kV_10.set('fieldLabels', {'Denumirea': 'inline label - always visible', });
lyr_PDC11035106kV_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});