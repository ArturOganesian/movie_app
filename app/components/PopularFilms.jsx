'use client'
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllFilmsThunk } from "../globalRedux/slices/allFilmsSlice";

const PopularFilms = () => {
    const dispatch = useDispatch();
    const allFilms = useSelector((store) => store.allFilmsStore.allFilms.data);

    useEffect(() => {
        dispatch(getAllFilmsThunk())
    },[])
  return (
    <div>
      <h1 className="text-xl text-white font-bold">PopularFilms</h1>
    </div>
  );
};

export default PopularFilms;
