import * as React from 'react';
import {useEffect} from 'react';
import * as FingerprintJS from '@fingerprintjs/fingerprintjs-pro';

export default function FPComponent() {
    useEffect(() => {
        async function fetchFP() {
            const fpLib = await FingerprintJS.load({
                apiKey: "mRqCZQen4dS2bsC65Ncv",
                endpoint: [
                    'https://www.vcltesting.xyz/fingerprint/vendor/identify/',
                ],
                scriptUrlPattern: [
                    'https://vcltesting.xyz/fingerprint/vendor/sdk/v<version>/<apiKey>/loader_v<loaderVersion>.js'
                ]
            });
        
            const fpRes = await fpLib.get();
            console.log(fpRes);
        }
        fetchFP();
    }, []);

    return <></>;
}