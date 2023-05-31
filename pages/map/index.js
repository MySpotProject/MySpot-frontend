import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./map.module.scss";
import MarkPopup from "@/components/MarkPopup/markPopup";
import AddNewSpot from "../../components/AddNewSpot/addNewSpot";
import axios from "axios";

const mockData = [
    {
        title: "спот",
        score: "1 .48",
        coords: [39.719349, 47.221078],
        descr: "Ну есть где покушаьт",
        image: "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        street: "7th Street",
        user: "User",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [
            { pool: false },
            { ramp: true },
            { rail: false },
            { ladder: true },
            { slide_elements: true },
        ],
        comments: [
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "User",
                message: "покушать негде, берите с собой",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "EoneGuy",
                message: "Отвратительно!",
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
                message: "Плохо",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "User",
                message: "Плохо",
                score: false,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "User",
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
        figures: [
            { pool: false },
            { ramp: false },
            { rail: false },
            { ladder: true },
            { slide_elements: true },
        ],

        comments: [
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "User",
                message: "покушать негде, берите с собой",
                score: true,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "User",
                message: "TRASH!!!",
                score: false,
            },
            {
                user_image:
                    "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
                user: "User",
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
        user: "Коклюш",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [
            { pool: false },
            { ramp: true },
            { rail: false },
            { ladder: true },
            { slide_elements: false },
        ],

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
                user: "User",
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
        user: "Коклюш",
        user_image:
            "https://sk-briz.ru/wp-content/uploads/8/d/f/8df9d95af3d7f598d8daacf1a1c6fd1f.jpeg",
        figures: [
            { pool: false },
            { ramp: true },
            { rail: false },
            { ladder: false },
            { slide_elements: false },
        ],

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

export default function index({ data }) {
    const [spots, setSpots] = useState(data);
    console.log(spots);

    // const [newSpots, setNewSpots] = useState({ ...mockData, spots });
    // console.log(newSpots);

    const [YMaps, setYMaps] = useState(<div />);
    const [getZoom, setGetZoom] = useState(17);
    const [getCoords, setGetCoords] = useState([0, 0]);
    const [getCenterCoords, setGetCenterCoords] = useState([0, 0]);
    const map = useRef(null);

    const handleGetCoords = (coords) => {
        setGetCoords(coords?.entity?.geometry?.coordinates);
    };
    const GetCenterCoords = (coords) => {
        setGetCenterCoords(coords?.location?.center);
    };
    const handleZoomChange = (zoom) => {
        setGetZoom(zoom?.location?.zoom);
    };
    console.log("getCenterCoords", getCenterCoords);

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

                // const points = spots.map((lnglat, i) => ({
                //     type: "Feature",
                //     id: i,
                //     geometry: { coordinates: lnglat.coords },
                //     properties: { name: "Point of issue of orders" },
                //     ...[lnglat],
                // }));

                // const cluster = (coordinates, items) => (
                //     <YMapMarker coordinates={coordinates}>
                //         <p className={styles.spot__mark}>{items.length}</p>
                //     </YMapMarker>
                // );

                // const marker = (item) => (
                //     <YMapMarker coordinates={item.coords}>
                //         <MarkPopup
                //             title={item?.title}
                //             score={item?.score}
                //             coords={item?.coords}
                //             descr={item?.descr}
                //             image={item?.image}
                //             street={item?.street}
                //             user={item?.user}
                //             figures={item?.figures}
                //             comments={item?.comments}
                //             user_image={item?.user_image}
                //         />
                //     </YMapMarker>
                // );

                setYMaps(() => (
                    <YMap
                        location={{
                            center: !myCoords.coords
                                ? [39.720349, 47.222078]
                                : myCoords.coords,
                            zoom: getZoom,
                        }}
                        camera={{ tilt: 6, azimuth: 0, duration: 0 }}
                        ref={map}
                    >
                        <YMapDefaultSchemeLayer />
                        <YMapFeatureDataSource id={"my-source"} />
                        <YMapDefaultFeaturesLayer />
                        <YMapLayer />

                        <YMapMarker coordinates={myCoords.coords}>
                            <p className={styles.spot__mark}>Я</p>
                        </YMapMarker>
                        <YMapListener
                            layer={"any"}
                            onClick={handleGetCoords}
                            onActionStart={handleZoomChange}
                            onActionEnd={GetCenterCoords}
                        />

                        {spots.map((item) => (
                            <YMapMarker coordinates={[item.lat, item.lng]}>
                                <MarkPopup
                                    title={item?.address}
                                    // score={item?.score}
                                    // coords={item?.coords}
                                    // descr={item?.descr}
                                    image={item?.images}
                                    // street={item?.street}
                                    // user={item?.user}
                                    figures={[
                                        item?.pools,
                                        item?.rail,
                                        item?.ramps,
                                        item?.slide,
                                    ]}
                                    // comments={item?.comments}
                                    // user_image={item?.user_image}
                                />
                            </YMapMarker>
                        ))}
                        {/* <YMapClusterer
                            method={clusterByGrid({ gridSize: 164 })}
                            features={points}
                            marker={marker}
                            cluster={cluster}
                        /> */}
                        <YMapControls position="bottom right">
                            <YMapGeolocationControl />
                        </YMapControls>

                        {/* <div className={styles.addNewSpot}> */}
                        {/* </div> */}
                        {/* <YMapMarker
                            coordinates={!coords ? myCoords.coords : coords}
                        >
                            <p className={styles.spot__mark}>добавить спот?</p>
                        </YMapMarker> */}
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
                <AddNewSpot latlnd={getCenterCoords} />
                {YMaps}
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {
    // const {  };
    const spots = await axios
        .get(process.env.NEXT_PUBLIC_API + "/api/spots.json")
        .then((response) => response.data);

    return {
        props: {
            data: spots,
        },
    };
}
