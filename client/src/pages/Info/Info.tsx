import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import React, { useEffect } from "react";
import { fetchInfo } from "src/store/features/info/infoSlice";
import cn from "classnames/bind";
import styles from "./styles.styl";
import { Card, Spin, Tag, Typography } from "antd";

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

  // if (error) return <h1>ERROR!</h1>;
  return (
    <div className={cx("Info__container")}>
      {isLoading && <Spin />}
      {info && (
        <Card title="Информация о проекте">
          <Typography>Версия API: {info.apiVersion}</Typography>
          <Typography>Название: {info.projectName}</Typography>
        </Card>
      )}
    </div>
  );
};

export default Info;
