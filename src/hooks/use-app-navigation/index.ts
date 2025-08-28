import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { RouteUrl } from "../../types/Router";

export const useAppNavigation = () => {
    const navigate = useNavigate();
    

    const redirect = useCallback((path: RouteUrl) => {
        navigate(path);
    }, [navigate]);

    const replace = useCallback((path: RouteUrl) => {
        navigate(path, { replace: true });
    }, [navigate]);

    const openWindow = useCallback((path: RouteUrl) => {
        window.open(path, "_blank");
    }, []);

    const back = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return {
        redirect,
        replace,
        openWindow,
        back,
    };
};
