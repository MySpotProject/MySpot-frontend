"use client";
import React, { useEffect } from "react";
import images from "../../app/constants/images";

export default function index() {
    useEffect(() => {
        window.map = null;
        ymaps3.ready.then(init);
        const {
            YMap,
            YMapDefaultSchemeLayer,
            YMapControls,
            YMapDefaultFeaturesLayer,
            YMapMarker,
        } = ymaps3;
        async function init() {
            const { YMapZoomControl } = await ymaps3.import(
                "@yandex/ymaps3-controls@0.0.1"
            );

            map = new YMap(document.getElementById("map"), {
                location: {
                    center: [37.64, 55.76],
                    zoom: 14,
                },
            });
            map.addChild(new YMapDefaultSchemeLayer());
            map.addChild(new YMapDefaultFeaturesLayer());
            map.addChild(
                new YMapControls({ position: "right" }).addChild(
                    new YMapZoomControl({})
                )
            );
            map.addChild(new YMapZoomControl());
            const el = document.createElement("img");
            el.className = "my-marker";
            el.src = "./images/pin.svg";
            map.addChild(new YMapMarker({ coordinates: [37.64, 55.76] }, el));
        }
    }, []);

    return (
        <>
            <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
        </>
    );
}
