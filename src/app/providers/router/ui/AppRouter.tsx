import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <div className="pageWrapper">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {
                        routeConfig.map(({path, element}) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
};

export {AppRouter};