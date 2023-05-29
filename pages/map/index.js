import Head from "next/head";
import React, { useEffect, useState, useRef, useMemo } from "react";
import ReactDOM from "react-dom";
import styles from "./map.module.scss";
import MarkPopup from "@/components/MarkPopup/markPopup";

const mockData = [
    {
        title: "ЯЙЦА",
        score: "1 .48",
        coords: [39.719349, 47.221078],
        descr: "Ну есть где покушаьт меня звоут паша сопли я пережил свои роды могу сказать что это тотальный треш меня воротит до сих пор и рядом есть кфсишка тошнит с неё не менее пиздец просто гайс у меня понос помогите",
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        street: "7th Street",
        user: "Govnoeshka",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [{ pool: false }, { ramp: true }, { rail: false }],
        comments: [
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "покушать негде, берите с собой",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "EoneGuy",
                message: "TRASH!!! TRASH!!! TRASH!!! TRASH!!! TRASH!!!",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "Potolok",
                message: "прикольно, хз",
                score: false,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "Jabri",
                message: "ХУЙНЯ",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "ХУЙНЯ",
                score: false,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "луковый угар",
                score: true,
            },
        ],
    },
    {
        title: "СПОТ",
        score: "5",
        coords: [39.720349, 47.223078],
        descr: "ОПИСАНИЕ DESCRIPTION лол лол лол ЛОЛ лОл",
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        street: "7th Street",
        user: "MC KOSTAMEN",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [{ pool: true }, { ramp: true }, { rail: false }],
        comments: [
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "покушать негде, берите с собой",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "TRASH!!!",
                score: false,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "луковый угар",
                score: true,
            },
        ],
    },
    {
        title: "XSA Ramps",
        score: "3 .48",
        coords: [39.722149, 47.222078],
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        street: "7th Street",
        user: "PIDORAS",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [{ pool: true }, { ramp: false }, { rail: true }],
        comments: [
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "GtaV",
                message: "TRASH!!!",
                score: false,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "РектальныйТраглодит",
                message: "луковый угар",
                score: true,
            },
        ],
    },

    {
        title: "СПОТ",
        score: "3 .48",
        coords: [39.733149, 47.222078],
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        street: "7th Street",
        user: "PIDORAS",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [{ pool: true }, { ramp: false }, { rail: true }],
        comments: [
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "GtaV",
                message: "TRASH!!!",
                score: false,
            },
        ],
    },
];

export default function index() {
    const [YMaps, setYMaps] = useState(<div />);
    const map = useRef(null);
    useEffect(() => {
        (async () => {
            try {
                const ymaps3 = window.ymaps3;
                const [ymaps3React] = await Promise.all([
                    ymaps3.import("@yandex/ymaps3-reactify"),
                    ymaps3.ready,
                ]);
                const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
                const {
                    YMap,
                    YMapLayer,
                    YMapDefaultSchemeLayer,
                    YMapDefaultFeaturesLayer,
                    YMapFeatureDataSource,
                    YMapMarker,
                    YMapControls,
                    geolocation,
                    YMapListener,
                } = reactify.module(ymaps3);
                const { YMapGeolocationControl } = reactify.module(
                    await ymaps3.import("@yandex/ymaps3-controls@0.0.1")
                );
                const { YMapClusterer, clusterByGrid } = reactify.module(
                    await ymaps3.import("@yandex/ymaps3-clusterer@0.0.1")
                );
                const myCoords = await geolocation.getPosition();

                const points = mockData.map((lnglat, i) => ({
                    type: 'Feature',
                    id: i,
                    geometry: {coordinates: lnglat.coords},
                    properties: {name: 'Point of issue of orders'},
                    ...lnglat
                }));

                const cluster = (coordinates, items) => (
                    <YMapMarker coordinates={coordinates}>
                        <MarkPopup
                            title={items.length}
                        />
                    </YMapMarker>
                )

                const marker = (item) => (
                    <YMapMarker coordinates={item.coords}>
                        <MarkPopup
                            title={item?.title}
                            score={item?.score}
                            coords={item?.coords}
                            descr={item?.descr}
                            image={item?.image}
                            street={item?.street}
                            user={item?.user}
                            figures={item?.figures}
                            comments={item?.comments}
                            user_image={item?.user_image}
                        />
                    </YMapMarker>
                )

                setYMaps(() => (
                    <YMap
                        location={{
                            center: !myCoords.coords
                                ? [39.720349, 47.222078]
                                : myCoords.coords,
                            zoom: 17,
                        }}
                        camera={{ tilt: 6, azimuth: 0, duration: 0 }}
                        ref={map}
                    >
                        <YMapListener
                            onClick={(e) => {
                                if (e) console.log(e.entity.geometry.coordinates);
                            }}
                        />
                        <YMapDefaultSchemeLayer />
                        <YMapDefaultFeaturesLayer />
                        <YMapMarker coordinates={myCoords.coords}>
                            <p className={styles.spot__mark}>Я</p>
                        </YMapMarker>
                        
                        <YMapClusterer method={clusterByGrid({ gridSize: 64 })} features={points} marker={marker} cluster={cluster} />

                        <YMapControls position="bottom right">
                            <YMapGeolocationControl />
                        </YMapControls>
                    </YMap>
                ));
            } catch (e) {
                setYMaps(<div />);
            }
        })();
        return () => {
            map.current = null;
        };
    }, []);

    return (
        <>
            <Head>
                <title>MY SPOT | SPOTS</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta property="og:title" content="MY SPOT" key="title" />
            </Head>
            <div
                style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
            >
                {YMaps}
            </div>
        </>
    );
}
