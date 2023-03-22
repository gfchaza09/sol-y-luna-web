import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Card, Grid, Typography } from "@mui/material";

import styles from "./LocalCard.module.css";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const {
  card__container,
  showcard,
  img__container,
  link__container,
  link,
  link__animation,
} = styles;

const LocalCard = ({ data, selectedTheme, localActive }) => {
  const [showButton, setShowButton] = useState(false);

  const [width, setWidth] = useWindowWidth();

  useEffect(() => {
    if (width < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [width]);

  const handleMouseEnter = () => {
    if (width >= 768) setShowButton(true);
  };

  const handleMouseLeave = () => {
    if (width >= 768) setShowButton(false);
  };

  return (
    <Grid item mobile={12} tablet={6} laptop={4}>
      <Link href={data.href}>
        <Card
          variant="cardBackground"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${card__container} ${showButton ? `${showcard}` : ""} ${localActive===data.value ? `${showcard}` : ""}`}
          sx={{
            borderRadius: "12px",
            transition: "all .6s ease-in-out",
            margin: "0px auto",
            position: "relative",
          }}
        >
          <div className={img__container}>
            <Image src={data.image} fill sizes="(max-width: 640px) 90vw, 33vw" alt="local" loading="lazy"/>
          </div>
          <Typography
            variant="h5"
            component="h3"
            sx={{ marginTop: "24px", textAlign: "center" }}
          >
            {data?.name}
          </Typography>
          <Typography
            sx={{
              marginTop: "8px",
              fontFamily: '"Lato", sans-serif',
              fontSize: { mobile: 16, mobile2: 17 },
              fontWeight: { mobile: 400, mobile2: 500 },
              lineHeight: { mobile: "19px", mobile2: "25px" },
            }}
          >
            {data.description}
          </Typography>
          <div
            className={`${link__container} ${
              showButton ? link__animation : ""
            } ${localActive === data.value ? link__animation : ""}`}
          >
            {(showButton || localActive === data.value) && (
              <div className={link}>
                <Typography variant="linkCard">Cómo llegar</Typography>{" "}
                <ChevronRightIcon
                  color={selectedTheme === "light" ? "#6B7280" : "#F1DA9E"}
                  width={20}
                  height={20}
                />
              </div>
            )}
          </div>
        </Card>
      </Link>
    </Grid>
  );
};

export default LocalCard;
