// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/json dojo/on esri/layers/FeatureLayer esri/renderers/jsonUtils esri/symbols/jsonUtils ../BaseFeatureAction jimu/dijit/Popup jimu/dijit/Search jimu/LayerInfos/LayerInfos jimu/utils".split(" "),function(l,f,g,m,h,n,k,p,q,r,t,u,v){return l(q,{name:"CreateLayer",iconClass:"icon-create-layer",isFeatureSupported:function(b,a){return 0<b.features.length&&b.features[0].geometry&&a&&a.geometryType&&a.fields&&a.objectIdField},onExecute:function(b,
a){var c;b={layerDefinition:{geometryType:a.geometryType,fields:f.clone(a.fields),objectIdField:a.objectIdField},featureSet:b.toJson()};b=new n(b);(c=a._json?m.parse(a._json):null)&&c.drawingInfo&&c.drawingInfo.renderer?(c=c.drawingInfo.renderer,c=k.fromJson(c)):c=k.fromJson(a.renderer.toJson());b.setRenderer(c);(a=a.getSelectionSymbol())&&b.setSelectionSymbol(p.fromJson(a.toJson()));this._popupAddLayer(b)},_popupAddLayer:function(b){var a,c=g.create("div",{style:"padding: 0 10px 0 10px;"}),d=(new t({placeholder:window.jimuNls.layerInfosMenu.labelLayer})).placeAt(c);
g.setStyle(d.searchBtn,"display","none");var e=new r({content:c,titleLabel:window.jimuNls.featureActions.CreateLayer,width:525,height:180,buttons:[{label:window.jimuNls.common.ok,onClick:f.hitch(this,function(){b.name=v.stripHTML(d.getValue());this._addLayerToMap(b);e.close();a&&a.remove&&a.remove()})},{label:window.jimuNls.common.cancel,classNames:["jimu-btn-vacation"],onClick:f.hitch(this,function(){e.close();a&&a.remove&&a.remove()})}]});d.inputSearch.focus();e.disableButton(0);a=h(d.inputSearch,
"keyup",function(){d.getValue()?e.enableButton(0):e.disableButton(0)})},_addLayerToMap:function(b){var a=u.getInstanceSync(),c=h(a,"layerInfosChanged",f.hitch(this,function(a){b.id===a.id&&(a.enablePopup(),c.remove())}));this.map.addLayer(b)}})});