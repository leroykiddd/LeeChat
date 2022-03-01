import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import React, { useEffect } from "react";
import { fetchInfo } from "src/store/features/info/infoSlice";
import cn from "classnames/bind";
import styles from "./styles.styl";

const cx = cn.bind(styles);

const Info: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: info,
    isLoading,
    error,
  } = useAppSelector((state) => state.infoReducer);

  useEffect(() => {
    dispatch(fetchInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <h1>ERROR!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className={cx("Info__container")}>
      {info && (
        <>
          <h2>api version: {info.apiVersion}</h2>
          <h2>api version: {info.projectName}</h2>
        </>
      )}
    </div>
  );
};

export default Info;
