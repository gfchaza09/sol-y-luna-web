import Image from "next/image"
import { Container, ImageList, ImageListItem, Typography } from "@mui/material"
import { useWindowWidth } from "@/hooks/useWindowWidth";

const srcset = (image, size, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  };

const GalleryContainer = ({itemData}) => {

    const [width, setWidth] = useWindowWidth();

  return (
    <Container
            component="section"
            sx={{ maxWidth: "1440px", margin: "80px auto 96px", padding: "20px"}}
          >
            <Typography
              component="h2"
              variant={width < 420 ? "h4" : width <= 820 ? "h2" : "h1"}
              sx={{
                textAlign: {mobile: "center", tablet: "left"},
                marginBottom: "40px",
              }}
            >
              GALERÍA
            </Typography>
            <Container sx={{ padding: "0px" }}>
              <ImageList
                sx={{ width: "100%", height: "auto" }}
                variant="quilted"
                cols={width >= 820 ? 3 : 2}
                rowHeight={width >= 640 ? 300 : 163}
                gap={width >= 640 ? 20 : 16}
              >
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                    sx={{ borderRadius: "12px", overflow: "hidden" }}
                  >
                    <Image
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                      fill
                      sizes="100vh"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Container>
          </Container>
  )
}

export default GalleryContainer