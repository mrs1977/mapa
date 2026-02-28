ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11866155.554012, 3698941.525643, -11828229.264650, 3735063.522068]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LotesbaldosLAUT2016_1 = new ol.format.GeoJSON();
var features_LotesbaldosLAUT2016_1 = format_LotesbaldosLAUT2016_1.readFeatures(json_LotesbaldosLAUT2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesbaldosLAUT2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesbaldosLAUT2016_1.addFeatures(features_LotesbaldosLAUT2016_1);
var lyr_LotesbaldosLAUT2016_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotesbaldosLAUT2016_1, 
                style: style_LotesbaldosLAUT2016_1,
                popuplayertitle: 'Lotes baldíos (LAUT,  2016)',
                interactive: true,
                title: '<img src="styles/legend/LotesbaldosLAUT2016_1.png" /> Lotes baldíos (LAUT,  2016)'
            });
var format_PolgonosdeinterssocialLAUT20022010_2 = new ol.format.GeoJSON();
var features_PolgonosdeinterssocialLAUT20022010_2 = format_PolgonosdeinterssocialLAUT20022010_2.readFeatures(json_PolgonosdeinterssocialLAUT20022010_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolgonosdeinterssocialLAUT20022010_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolgonosdeinterssocialLAUT20022010_2.addFeatures(features_PolgonosdeinterssocialLAUT20022010_2);
var lyr_PolgonosdeinterssocialLAUT20022010_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolgonosdeinterssocialLAUT20022010_2, 
                style: style_PolgonosdeinterssocialLAUT20022010_2,
                popuplayertitle: 'Polígonos de interés social (LAUT, 2002-2010)',
                interactive: true,
                title: '<img src="styles/legend/PolgonosdeinterssocialLAUT20022010_2.png" /> Polígonos de interés social (LAUT, 2002-2010)'
            });
var format_LneasdetransportepblicoIMIP_3 = new ol.format.GeoJSON();
var features_LneasdetransportepblicoIMIP_3 = format_LneasdetransportepblicoIMIP_3.readFeatures(json_LneasdetransportepblicoIMIP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LneasdetransportepblicoIMIP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LneasdetransportepblicoIMIP_3.addFeatures(features_LneasdetransportepblicoIMIP_3);
var lyr_LneasdetransportepblicoIMIP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LneasdetransportepblicoIMIP_3, 
                style: style_LneasdetransportepblicoIMIP_3,
                popuplayertitle: 'Líneas de transporte público (IMIP)',
                interactive: true,
                title: '<img src="styles/legend/LneasdetransportepblicoIMIP_3.png" /> Líneas de transporte público (IMIP)'
            });
var format_Industriamanufacturera101empleadosDENUE2024_4 = new ol.format.GeoJSON();
var features_Industriamanufacturera101empleadosDENUE2024_4 = format_Industriamanufacturera101empleadosDENUE2024_4.readFeatures(json_Industriamanufacturera101empleadosDENUE2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industriamanufacturera101empleadosDENUE2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industriamanufacturera101empleadosDENUE2024_4.addFeatures(features_Industriamanufacturera101empleadosDENUE2024_4);
var lyr_Industriamanufacturera101empleadosDENUE2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industriamanufacturera101empleadosDENUE2024_4, 
                style: style_Industriamanufacturera101empleadosDENUE2024_4,
                popuplayertitle: 'Industria manufacturera +101 empleados (DENUE, 2024)',
                interactive: true,
                title: '<img src="styles/legend/Industriamanufacturera101empleadosDENUE2024_4.png" /> Industria manufacturera +101 empleados (DENUE, 2024)'
            });
var format_Industriamanufacturera251empleadosDENUE2024_5 = new ol.format.GeoJSON();
var features_Industriamanufacturera251empleadosDENUE2024_5 = format_Industriamanufacturera251empleadosDENUE2024_5.readFeatures(json_Industriamanufacturera251empleadosDENUE2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industriamanufacturera251empleadosDENUE2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industriamanufacturera251empleadosDENUE2024_5.addFeatures(features_Industriamanufacturera251empleadosDENUE2024_5);
var lyr_Industriamanufacturera251empleadosDENUE2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industriamanufacturera251empleadosDENUE2024_5, 
                style: style_Industriamanufacturera251empleadosDENUE2024_5,
                popuplayertitle: 'Industria manufacturera +251 empleados (DENUE, 2024)',
                interactive: true,
                title: '<img src="styles/legend/Industriamanufacturera251empleadosDENUE2024_5.png" /> Industria manufacturera +251 empleados (DENUE, 2024)'
            });
var format_EstacionesdebomberosIMIP_6 = new ol.format.GeoJSON();
var features_EstacionesdebomberosIMIP_6 = format_EstacionesdebomberosIMIP_6.readFeatures(json_EstacionesdebomberosIMIP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesdebomberosIMIP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesdebomberosIMIP_6.addFeatures(features_EstacionesdebomberosIMIP_6);
var lyr_EstacionesdebomberosIMIP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesdebomberosIMIP_6, 
                style: style_EstacionesdebomberosIMIP_6,
                popuplayertitle: 'Estaciones de bomberos (IMIP)',
                interactive: true,
                title: '<img src="styles/legend/EstacionesdebomberosIMIP_6.png" /> Estaciones de bomberos (IMIP)'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_LotesbaldosLAUT2016_1.setVisible(true);lyr_PolgonosdeinterssocialLAUT20022010_2.setVisible(true);lyr_LneasdetransportepblicoIMIP_3.setVisible(true);lyr_Industriamanufacturera101empleadosDENUE2024_4.setVisible(true);lyr_Industriamanufacturera251empleadosDENUE2024_5.setVisible(true);lyr_EstacionesdebomberosIMIP_6.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_LotesbaldosLAUT2016_1,lyr_PolgonosdeinterssocialLAUT20022010_2,lyr_LneasdetransportepblicoIMIP_3,lyr_Industriamanufacturera101empleadosDENUE2024_4,lyr_Industriamanufacturera251empleadosDENUE2024_5,lyr_EstacionesdebomberosIMIP_6];
lyr_LotesbaldosLAUT2016_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Area_ha': 'Area_ha', });
lyr_PolgonosdeinterssocialLAUT20022010_2.set('fieldAliases', {'OID_': 'OID_', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'ID_COLO': 'ID_COLO', 'NOMBRE': 'Polígonos de Vivienda de Interés Social', 'Clave': 'Clave', 'NOMBRE_1': 'NOMBRE_1', 'Ano': 'Ano', 'Fracc_Cond': 'Fracc_Cond', 'No_Cond': 'No_Cond', 'Viv_fracc': 'Viv_fracc', 'Viv_cond': 'Viv_cond', 'Tot_viv': 'Tot_viv', 'Area_fracc': 'Area_fracc', 'Area_cond': 'Area_cond', 'Area_don': 'Area_don', 'Area_total': 'Area_total', 'Promotor': 'Promotor', 'Sector': 'Sector', 'Tipo': 'Tipo', 'Shape_Le_1': 'Shape_Le_1', 'FRACCIONAM': 'FRACCIONAM', });
lyr_LneasdetransportepblicoIMIP_3.set('fieldAliases', {'fid': 'fid', 'R_NOMBRE': 'Nombre de la ruta', 'ID': 'ID', 'Disolve': 'Disolve', });
lyr_Industriamanufacturera101empleadosDENUE2024_4.set('fieldAliases', {'id': 'id', 'clee': 'clee', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_Industriamanufacturera251empleadosDENUE2024_5.set('fieldAliases', {'id': 'id', 'clee': 'clee', 'nom_estab': 'nom_estab', 'raz_social': 'raz_social', 'codigo_act': 'codigo_act', 'nombre_act': 'nombre_act', 'per_ocu': 'per_ocu', 'tipo_vial': 'tipo_vial', 'nom_vial': 'nom_vial', 'tipo_v_e_1': 'tipo_v_e_1', 'nom_v_e_1': 'nom_v_e_1', 'tipo_v_e_2': 'tipo_v_e_2', 'nom_v_e_2': 'nom_v_e_2', 'tipo_v_e_3': 'tipo_v_e_3', 'nom_v_e_3': 'nom_v_e_3', 'numero_ext': 'numero_ext', 'letra_ext': 'letra_ext', 'edificio': 'edificio', 'edificio_e': 'edificio_e', 'numero_int': 'numero_int', 'letra_int': 'letra_int', 'tipo_asent': 'tipo_asent', 'nomb_asent': 'nomb_asent', 'tipoCenCom': 'tipoCenCom', 'nom_CenCom': 'nom_CenCom', 'num_local': 'num_local', 'cod_postal': 'cod_postal', 'cve_ent': 'cve_ent', 'entidad': 'entidad', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'cve_loc': 'cve_loc', 'localidad': 'localidad', 'ageb': 'ageb', 'manzana': 'manzana', 'telefono': 'telefono', 'correoelec': 'correoelec', 'www': 'www', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_EstacionesdebomberosIMIP_6.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'Nombre de estación', 'DIRECCION': 'DIRECCION', 'LINK': 'LINK', });
lyr_LotesbaldosLAUT2016_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_PolgonosdeinterssocialLAUT20022010_2.set('fieldImages', {'OID_': 'Range', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'ID_COLO': 'Range', 'NOMBRE': 'TextEdit', 'Clave': 'TextEdit', 'NOMBRE_1': 'TextEdit', 'Ano': 'TextEdit', 'Fracc_Cond': 'TextEdit', 'No_Cond': 'TextEdit', 'Viv_fracc': 'TextEdit', 'Viv_cond': 'TextEdit', 'Tot_viv': 'TextEdit', 'Area_fracc': 'TextEdit', 'Area_cond': 'TextEdit', 'Area_don': 'TextEdit', 'Area_total': 'TextEdit', 'Promotor': 'TextEdit', 'Sector': 'TextEdit', 'Tipo': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FRACCIONAM': 'TextEdit', });
lyr_LneasdetransportepblicoIMIP_3.set('fieldImages', {'fid': 'TextEdit', 'R_NOMBRE': 'TextEdit', 'ID': 'Range', 'Disolve': 'Range', });
lyr_Industriamanufacturera101empleadosDENUE2024_4.set('fieldImages', {'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'raz_social': 'TextEdit', 'codigo_act': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'nom_vial': 'TextEdit', 'tipo_v_e_1': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'tipo_v_e_2': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'tipo_v_e_3': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'TextEdit', 'letra_ext': 'TextEdit', 'edificio': 'TextEdit', 'edificio_e': 'TextEdit', 'numero_int': 'TextEdit', 'letra_int': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'tipoCenCom': 'TextEdit', 'nom_CenCom': 'TextEdit', 'num_local': 'TextEdit', 'cod_postal': 'TextEdit', 'cve_ent': 'TextEdit', 'entidad': 'TextEdit', 'cve_mun': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'telefono': 'TextEdit', 'correoelec': 'TextEdit', 'www': 'TextEdit', 'tipoUniEco': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_Industriamanufacturera251empleadosDENUE2024_5.set('fieldImages', {'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'raz_social': 'TextEdit', 'codigo_act': 'TextEdit', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'tipo_vial': 'TextEdit', 'nom_vial': 'TextEdit', 'tipo_v_e_1': 'TextEdit', 'nom_v_e_1': 'TextEdit', 'tipo_v_e_2': 'TextEdit', 'nom_v_e_2': 'TextEdit', 'tipo_v_e_3': 'TextEdit', 'nom_v_e_3': 'TextEdit', 'numero_ext': 'TextEdit', 'letra_ext': 'TextEdit', 'edificio': 'TextEdit', 'edificio_e': 'TextEdit', 'numero_int': 'TextEdit', 'letra_int': 'TextEdit', 'tipo_asent': 'TextEdit', 'nomb_asent': 'TextEdit', 'tipoCenCom': 'TextEdit', 'nom_CenCom': 'TextEdit', 'num_local': 'TextEdit', 'cod_postal': 'TextEdit', 'cve_ent': 'TextEdit', 'entidad': 'TextEdit', 'cve_mun': 'TextEdit', 'municipio': 'TextEdit', 'cve_loc': 'TextEdit', 'localidad': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'telefono': 'TextEdit', 'correoelec': 'TextEdit', 'www': 'TextEdit', 'tipoUniEco': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_EstacionesdebomberosIMIP_6.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'LINK': 'TextEdit', });
lyr_LotesbaldosLAUT2016_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Area_ha': 'inline label - visible with data', });
lyr_PolgonosdeinterssocialLAUT20022010_2.set('fieldLabels', {'OID_': 'hidden field', 'SHAPE_LENG': 'hidden field', 'SHAPE_AREA': 'hidden field', 'ID_COLO': 'hidden field', 'NOMBRE': 'inline label - visible with data', 'Clave': 'hidden field', 'NOMBRE_1': 'hidden field', 'Ano': 'hidden field', 'Fracc_Cond': 'hidden field', 'No_Cond': 'hidden field', 'Viv_fracc': 'hidden field', 'Viv_cond': 'hidden field', 'Tot_viv': 'hidden field', 'Area_fracc': 'hidden field', 'Area_cond': 'hidden field', 'Area_don': 'hidden field', 'Area_total': 'hidden field', 'Promotor': 'hidden field', 'Sector': 'hidden field', 'Tipo': 'hidden field', 'Shape_Le_1': 'hidden field', 'FRACCIONAM': 'hidden field', });
lyr_LneasdetransportepblicoIMIP_3.set('fieldLabels', {'fid': 'hidden field', 'R_NOMBRE': 'inline label - visible with data', 'ID': 'hidden field', 'Disolve': 'hidden field', });
lyr_Industriamanufacturera101empleadosDENUE2024_4.set('fieldLabels', {'id': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - visible with data', 'raz_social': 'hidden field', 'codigo_act': 'hidden field', 'nombre_act': 'hidden field', 'per_ocu': 'inline label - visible with data', 'tipo_vial': 'hidden field', 'nom_vial': 'hidden field', 'tipo_v_e_1': 'hidden field', 'nom_v_e_1': 'hidden field', 'tipo_v_e_2': 'hidden field', 'nom_v_e_2': 'hidden field', 'tipo_v_e_3': 'hidden field', 'nom_v_e_3': 'hidden field', 'numero_ext': 'hidden field', 'letra_ext': 'hidden field', 'edificio': 'hidden field', 'edificio_e': 'hidden field', 'numero_int': 'hidden field', 'letra_int': 'hidden field', 'tipo_asent': 'hidden field', 'nomb_asent': 'hidden field', 'tipoCenCom': 'hidden field', 'nom_CenCom': 'hidden field', 'num_local': 'hidden field', 'cod_postal': 'hidden field', 'cve_ent': 'hidden field', 'entidad': 'hidden field', 'cve_mun': 'hidden field', 'municipio': 'hidden field', 'cve_loc': 'hidden field', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'telefono': 'hidden field', 'correoelec': 'hidden field', 'www': 'hidden field', 'tipoUniEco': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_Industriamanufacturera251empleadosDENUE2024_5.set('fieldLabels', {'id': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'inline label - visible with data', 'raz_social': 'hidden field', 'codigo_act': 'hidden field', 'nombre_act': 'hidden field', 'per_ocu': 'inline label - visible with data', 'tipo_vial': 'hidden field', 'nom_vial': 'hidden field', 'tipo_v_e_1': 'hidden field', 'nom_v_e_1': 'hidden field', 'tipo_v_e_2': 'hidden field', 'nom_v_e_2': 'hidden field', 'tipo_v_e_3': 'hidden field', 'nom_v_e_3': 'hidden field', 'numero_ext': 'hidden field', 'letra_ext': 'hidden field', 'edificio': 'hidden field', 'edificio_e': 'hidden field', 'numero_int': 'hidden field', 'letra_int': 'hidden field', 'tipo_asent': 'hidden field', 'nomb_asent': 'hidden field', 'tipoCenCom': 'hidden field', 'nom_CenCom': 'hidden field', 'num_local': 'hidden field', 'cod_postal': 'hidden field', 'cve_ent': 'hidden field', 'entidad': 'hidden field', 'cve_mun': 'hidden field', 'municipio': 'hidden field', 'cve_loc': 'hidden field', 'localidad': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'telefono': 'hidden field', 'correoelec': 'hidden field', 'www': 'hidden field', 'tipoUniEco': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_EstacionesdebomberosIMIP_6.set('fieldLabels', {'ID': 'hidden field', 'NOMBRE': 'inline label - visible with data', 'DIRECCION': 'hidden field', 'LINK': 'hidden field', });
lyr_EstacionesdebomberosIMIP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});