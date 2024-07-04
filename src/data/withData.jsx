import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent) => {
    const WithData = (props) => {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch('https://api.myjson.online/v1/records/2213d909-5c8e-4191-a7f3-1ce9db2b537a')
                .then((response) => response.json())
                .then((data) => setData(data));
        }, []);

        return <WrappedComponent data={data.data} {...props} />;
    };

    return WithData;
};
export default withData;