import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "widgets/PageLoader";

const AppRouter = () => {
    return (
        <div className="pageWrapper">
            <Suspense fallback={<PageLoader/>}>
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