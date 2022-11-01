import {Navigate, Route, Routes} from 'react-router-dom';
import style from './Authentication.module.scss';
import DataForAppTest from './DataForAppTest/DataForAppTest';
import authenticationPaths from "interfaces/enums/authenticationPaths";
import {lazy, Suspense} from "react";

const SignUp = lazy(() => import('./SignUp/SignUp'))
const LogIn = lazy(() => import('./LogIn/LogIn'))

const Authentication = () =>
    <>
        <Suspense fallback={<p> Loading...</p>}>
            <div className={style.authForm}>
                <Routes>
                    <Route path={authenticationPaths.SignUp} element={<SignUp/>}/>
                    <Route path={authenticationPaths.LogIn} element={<LogIn/>}/>
                    <Route path={'/*'} element={<Navigate to={authenticationPaths.LogIn}/>}/>
                </Routes>
            </div>
        </Suspense>
        <DataForAppTest/>
    </>

export default Authentication;
