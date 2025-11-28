import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import type {RootDispatch, RootState} from "./store.ts";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = (): RootDispatch => useDispatch<RootDispatch>();
