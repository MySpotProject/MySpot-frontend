import React from "react";

export default function main() {
    const [array, setArray] = React.useState(undefined);
    React.useEffect(() => {
        setArray([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready]);
    }, []);

    setTimeout(() => {
        console.log(array);
    }, 3000);

    // React.useEffect(() => {
    // const reactify = array.reactify.bindTo(React);
    // const { YMap, YMapDefaultSchemeLayer } = reactify.module(ymaps3);
    // }, [array]);

    // const [customization, setCustomization] = React.useState(CUSTOMIZATION);

    return (
        <>
            <div id="map-container">
                {/* <YMap location={LOCATION}>
                    <YMapDefaultSchemeLayer customization={customization} />
                </YMap> */}
            </div>
        </>
    );
}
