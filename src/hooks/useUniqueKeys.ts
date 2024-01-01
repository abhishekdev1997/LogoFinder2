import { useEffect, useState } from 'react';
import data from '../data/data.json';

const useUniqueKeys = () => {
    const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);

    useEffect(() => {
        data.forEach((item) => {
            setUniqueKeys((uniqueKeys) => uniqueKeys.concat(item.name.split('')));
        });
    }, [data]);

    return { uniqueKeys: [...new Set(uniqueKeys)] };
}

export default useUniqueKeys;