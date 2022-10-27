import {useLayoutEffect, useState} from "react";
import {devices, matchingDevices} from "interfaces/IuseMatchMedia";

const queries = [
    "(max-width: 566px)",
    "(min-width: 567px) and (max-width: 1026px)",
    "(min-width: 1027px) and (max-width: 1549px)",
    "(min-width: 1550px)"
];

const allDevices = Object.values(devices)

const useMatchMedia = (): matchingDevices => {
    const mediaQueryLists = queries.map((query) => matchMedia(query));
    const getValues = () => mediaQueryLists.map((list) => list.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

        return () => mediaQueryLists.forEach(
            list => list.removeEventListener("change", handler)
        );
    }, []);

    return allDevices
        .reduce((acc, screen, index) => ({...acc, [screen]: values[index]}), {} as matchingDevices);
};

export default useMatchMedia