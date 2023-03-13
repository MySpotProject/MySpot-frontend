import {
    YMap,
    YMapDefaultMarker,
    YMapDefaultMarkersLayer,
    YMapDefaultSchemeLayer,
} from "ymaps3";

const map = new YMap(document.getElementById("root"), {
    location: {
        center: [37.77971267700195, 55.66328048706],
        zoom: 7,
    },
});

map.addChild(new YMapDefaultSchemeLayer());
map.addChild(new YMapDefaultMarkersLayer());
map.addChild(
    new YMapDefaultMarker({
        coordinates: [37.77971267700195, 55.66328048706],
    })
);
