import { Card } from "antd";
import React from "react";
import Image from "next/image";

import styles from "./storeCard.module.scss";

interface StoreCardProps {
  title: string;
  content: React.ReactNode;
  imgUrl: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ title, content, imgUrl }) => {
  return (
    <Card
      className={styles.card}
      headStyle={{ border: 0 }}
      title={<p className={styles.title}>{title}</p>}
      hoverable
      bordered={false}
    >
      {content}
    </Card>
  );
};

export default StoreCard;
