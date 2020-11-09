import * as React from 'react';
import { chirps } from "../types";

const Home: React.FC<IHomeProps> = () => {
    const [chrips, setChrips] = React.useState<chrip[]>([]);

    React.useEffect(() => {
       fetchChirps();

        
    }, []);

    const fetchChirps = async () => {
        try {
            let res = await fetch("api/chirps/")
            let chrips = await res.json();
            setChrips(chrips);
        }catch <err></err>
        console.log(err)
    }
    return chirps.map((chirp: chrip) =>)
}

